// De handleidingbeelden van CleanOps, in NL en FR, uit de DEMO-tenant — beslist door Dominique op 29/09/2026.
//
//   node tools/beelden.mjs              alle beelden
//   node tools/beelden.mjs tarie        enkel de beelden waarvan de naam "tarie" bevat
//
// Vereist: de app draait lokaal (preview, https://localhost:7245) en de tenant "demo" bestaat en is gevuld
// (Platformbeheer → Conversie → Demo vullen, enkel zichtbaar in de demo).
//
// Naar het model van creditsoft-docs/tools/beelden.mjs, op de GEDEELDE kern (adm-appkit/tools/beeldgenerator):
//  - schermBesluit: een foutmelding, "geen toegang" of een te leeg scherm is nooit een beeld;
//  - vormBesluit:   wijkt de afmeting af van het bestaande beeld, dan NIET overschrijven maar melden;
//  - ontbrekendeTermen: staat wat de alt-tekst belooft ook op het scherm?
// ⚠️ "Een generator is niet af als hij werkt. Hij is af als hij WEIGERT wanneer hij het niet zeker weet." (kern-README)
//
// Beelden: docs/images/<naam>.png (NL) en <naam>-fr.png (FR). De pagina verwijst ernaar met een relatief pad:
//   ![volle zin](../images/tarieven-lijst.png "Korte titel")
// Een beeld zonder recept, of een recept zonder verwijzing in de pagina, wordt gemeld.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { PAKKET } from './app.mjs';
import { BASIS, DEMO, meldAan, appToestand } from './aansturing.mjs';
import { NIET_SCHERMTEKST_BASIS, altTermen, ontbrekendeTermen, pngMaat, vormBesluit, schermBesluit }
  from '/Users/dominique/projects/adm-appkit/tools/beeldgenerator/kern.mjs';

const { chromium } = await import(PAKKET.playwright);

const HIER = new URL('.', import.meta.url).pathname;
const DOCS = join(HIER, '..', 'docs');
const BEELDEN = join(DOCS, 'images');
const filter = process.argv[2] ?? null;
const BREED = 1440, HOOG = 900;

// Wat NIET op een beeld hoort: het versienummer, de klok, schuifbalken (zie creditsoft-docs: VERBERG_VERSIE).
const VERBERG = '.nav-version, .adm-klok-vast, .dxbl-scroll-viewer-vert-scroll-bar, .dxbl-scroll-viewer-hor-scroll-bar'
  + ' { visibility: hidden !important; }'
  + '::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb { background: transparent !important; }';

// ── De recepten ──────────────────────────────────────────────────────────────────────────────────────────────
// naam · route · (optioneel) wat er na het openen gebeurt · (optioneel) magKortZijn met reden.
const tekstTaal = (nl, fr) => new RegExp(`${nl}|${fr}`);
// ⚠️ ELK RECEPT DRAAGT EEN MERKTEKEN (verwacht): een tekst die op DAT scherm staat en niet op het vorige. Het script
// WACHT erop en weigert het beeld zonder. Op 29/09/2026 heette een beeld "tarief-fiche" en toonde het de LIJST: de URL
// was al veranderd, het scherm nog niet hertekend — en geen enkele controle zag het, want de alt-controle had niets
// te meten (zie hieronder).
const SCHOTEN = [
  // Het dashboard (06/10/2026). Het merkteken is de uitleg ONDER de omzetgrafiek: die staat er pas als de grafieken geladen zijn —
  // de kaart erboven draagt haar titel ook tijdens het laden ("…"), en dan zou het beeld lege kaarten tonen.
  { naam: 'dashboard', route: '/', hoogte: 1180, verwacht: tekstTaal("Facturen min creditnota's", 'Factures moins notes de crédit') },
  { naam: 'tarieven-lijst', route: '/beheer/tarieven', verwacht: tekstTaal('Nieuw tarief', 'Nouveau tarif') },
  { naam: 'tarieven-tonen', route: '/beheer/tarieven', verwacht: tekstTaal('Ook gearchiveerde tarieven', 'Aussi les tarifs archivés'),
    na: async p => { await p.getByText(tekstTaal('Actieve tarieven', 'Tarifs actifs')).first().click(); } },
  { naam: 'tarief-fiche', route: '/beheer/tarieven', verwacht: tekstTaal('Tekst op de factuur', 'Texte sur la facture'),
    na: async p => { await openRij(p, DEMO.tarief); } },
  { naam: 'tarief-logboek', route: '/beheer/tarieven', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => { await openRij(p, DEMO.tarief); await p.getByText(tekstTaal('^Logboek$', '^Historique$')).first().click(); },
    magKortZijn: 'een logboek met twee regels is kort, en dat is juist' },
  // Factuurteksten: een lijst met een pop-upvenster (vier velden, geen fiche) en het logboek als zijlade.
  { naam: 'factuurteksten-lijst', route: '/beheer/factuurteksten', verwacht: tekstTaal('Nieuwe tekst', 'Nouveau texte') },
  { naam: 'factuurtekst-venster', route: '/beheer/factuurteksten',
    verwacht: tekstTaal('Wettelijke vermelding bij 6 % btw', 'Mention légale TVA 6 %'),
    na: async p => { await p.getByRole('row').filter({ hasText: DEMO.factuurtekst }).first().dblclick(); } },
  // Het journaal van ÉÉN tekst (Journaal-rail zoals Nimble en CreditSoft): eerst de rij aanklikken, dan de strook openen.
  { naam: 'factuurteksten-journaal', route: '/beheer/factuurteksten', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => {
      // ⚠️ De CEL met exact die code, niet hasText op de rij: dat is een hoofdletterongevoelige deeltekst, en "VOORW" zit
      // ook in "aannemingsvoorwaarden" van rij 9999 — die kwam eerst en werd aangeklikt (29/09/2026).
      await p.getByRole('gridcell', { name: DEMO.gewijzigdeFactuurtekst, exact: true }).first().click();
      // ⚠️ Op de KLASSE van de zijlade-strook en niet op de naam: /logboek|journal/ ving in het Frans eerst een ander
      // element. En enkel klikken als ze ZICHTBAAR is: het paneel onthoudt dat het open stond (DrawerId), en dan is
      // de strook weg — de Franse ronde liep daarop vast.
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
    } },
  // Mailteksten en Mailafzenders (mailpakket, vrijgave 07/10/2026). De demo heeft GEEN eigen tekst (standaardteksten, wat een nieuwe klant
  // ziet) maar wel een afzender op Factuur en Creditnota: die naam in de kolom Afzender is het merkteken dat de demo gevuld is.
  { naam: 'mailteksten-lijst', route: '/beheer/mailteksten', verwacht: /Ruimdienst Demo facturatie/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // De fiche van Factuur, op het tabblad van de taal van het scherm (NL: Nederlands staat al open; FR: Français aanklikken).
  // ⚠️ Beide taaltabbladen staan in de DOM, en in de Franse ronde draagt het VERBORGEN tabblad Nederlands dezelfde badge "Texte standard
  // de CleanOps" — eerst in de DOM, dus het merkteken van de hoofdlus (eerste treffer, zichtbaar) faalde (07/10/2026). Daarom wacht het
  // recept zelf op een ZICHTBARE badge, en is het merkteken de terugknop, die maar één keer op het scherm staat.
  { naam: 'mailtekst-fiche', route: '/beheer/mailteksten/invoice', verwacht: tekstTaal('← Mailteksten', "← Textes d'e-mail"),
    na: async (p, taal) => {
      if (taal.startsWith('fr')) await p.getByText(/^Français$/).first().click();
      await wachtOpZichtbaar(p, tekstTaal('Standaardtekst van CleanOps', 'Texte standard de CleanOps'));
      await p.waitForTimeout(800);
    } },
  // ⚠️ De kolom ADM One vult zich NA het tonen (de hub wordt nagevraagd): wachten tot "wordt nagevraagd…" weg is. De demo-afzender draagt
  // een verzonnen domein, dus ADM One zegt "niet aanvaard" — en de melding boven de lijst legt uit wat dat betekent.
  // ⚠️ Merkteken = die status, NIET het adres: de verborgen journaalstrook draagt het adres van de eerste rij in haar titel, en die kwam
  // eerst (07/10/2026, zelfde val als facturen-lijst). De status bewijst bovendien dat ADM One geantwoord heeft.
  { naam: 'mailafzenders-lijst', route: '/beheer/mailafzenders', verwacht: tekstTaal('niet aanvaard', 'non approuvée'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
      await p.waitForFunction(() => !/wordt nagevraagd…|vérification…/.test(document.querySelector('main')?.innerText ?? ''), null, { timeout: 15000 });
    } },
  // Klanten (vrijgave 30/09/2026): lijst, fiche en een uitvoeringsadres — uit de tien demoklanten
  // (DemoDataGenerator.VerzinKlantenAsync). Het merkteken van de lijst is het LABEL "geblokkeerd": dat staat enkel naast
  // Garage Demo & Zonen, dus het bewijst dat de demo gevuld is en de lijst hertekend.
  { naam: 'klanten-lijst', route: '/klanten', verwacht: tekstTaal('geblokkeerd', 'bloqué'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // ⚠️ HOGER dan de standaard: de opmerkingen staan onderaan het tabblad Fiche, en die horen op het beeld.
  // ⚠️ PER TAAL EEN ANDERE KLANT: de Franse ronde neemt de Franstalige voorbeeldklant, anders staan er Nederlandse
  // opmerkingen en instructies op een Frans beeld (handleiding-schrijfregels §4, gezien op 30/09/2026).
  { naam: 'klant-fiche', route: '/klanten', verwacht: tekstTaal('Opmerkingen', 'Remarques'), hoogte: 1260,
    na: async (p, taal) => { await openRij(p, taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant); } },
  { naam: 'klant-adres', route: '/klanten', verwacht: tekstTaal('Bereikbaarheid', 'Accessibilité'), hoogte: 1180,
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Adressen|Adresses) \(/).first().click();
      await p.getByRole('row').filter({ hasText: fr ? DEMO.klantAdresTelefoonFr : DEMO.klantAdresTelefoon }).first().dblclick();
      await p.waitForURL(/\/adres\/[0-9a-f-]{36}$/, { timeout: 15000 });
    } },
  // Adressen samenvoegen en verplaatsen, en het tabblad Werkorders van een adres (vrijgave 08/10/2026). De vensters worden enkel
  // GEOPEND, nooit bevestigd: de beeldronde verandert niets aan de demo. Per taal de eigen voorbeeldklant, zoals klant-adres.
  // ⚠️ Het samenvoegvenster: de twee DUBBELE adressen van de voorbeeldklant (DemoDataGenerator: het tweede heeft een e-mail die het
  // eerste mist en een ander telefoonnummer) — zo staan "Aangevuld" én "Gaat niet mee" op het beeld; dat laatste is het merkteken.
  { naam: 'klant-adressen-samenvoegen', route: '/klanten', verwacht: tekstTaal('Gaat niet mee', 'Ne sera pas repris'), hoogte: 1000,
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Adressen|Adresses) \(/).first().click();
      const dubbel = p.getByRole('row').filter({ hasText: fr ? 'Rue des Tilleuls' : 'Kortrijksesteenweg' });
      await dubbel.first().waitFor();
      for (let i = 0; i < 2; i++) { await dubbel.nth(i).getByRole('checkbox').first().click({ force: true }); await p.waitForTimeout(300); }
      await p.getByRole('button', { name: fr ? 'Fusionner…' : 'Samenvoegen…' }).click();
    } },
  // Het verplaatsvenster: het uitgewerkte adres (contract en werkorders) naar een andere demoklant, gekozen in de klantzoeker. Het
  // merkteken is de zin "Gaat mee naar" — die verschijnt pas NA de keuze van de klant.
  { naam: 'klant-adres-verplaatsen', route: '/klanten', verwacht: tekstTaal('Gaat mee naar', 'Vont à'),
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Adressen|Adresses) \(/).first().click();
      const rij = p.getByRole('row').filter({ hasText: fr ? DEMO.klantAdresTelefoonFr : DEMO.klantAdresTelefoon }).first();
      await rij.waitFor();
      await rij.getByRole('checkbox').first().click({ force: true });
      await p.getByRole('button', { name: fr ? 'Déplacer vers un client…' : 'Verplaatsen naar klant…' }).click();
      const zoeker = p.locator('.dxbl-popup:not(.dxbl-popup-hidden) input').first();
      await zoeker.fill(fr ? 'Dubois' : 'Zonnedal');
      await p.getByText(fr ? 'choisir' : 'kies', { exact: true }).first().click();
    } },
  // Het tabblad Werkorders van het uitgewerkte adres: de werkorders van het contract van de voorbeeldklant hangen eraan.
  { naam: 'klant-adres-werkorders', route: '/klanten', verwacht: tekstTaal('Instructies', 'Instructions'),
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Adressen|Adresses) \(/).first().click();
      await p.getByRole('row').filter({ hasText: fr ? DEMO.klantAdresTelefoonFr : DEMO.klantAdresTelefoon }).first().dblclick();
      await p.waitForURL(/\/adres\/[0-9a-f-]{36}$/, { timeout: 15000 });
      await p.getByText(/^(Werkorders|Ordres de travail) \(/).first().click();
    } },
  // Het memovenster op de klantfiche (07/10/2026): de memo MET herinneringsdatum (DemoDataGenerator.VerzinMemosAsync), zodat het vinkje
  // Afgehandeld op het beeld staat. Per taal de eigen voorbeeldklant, zoals klant-fiche.
  { naam: 'klant-memo', route: '/klanten', verwacht: tekstTaal('Memo — ', 'Mémo — '),
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Memo's|Mémos) \(/).first().click();
      await p.getByRole('row').filter({ hasText: fr ? 'Le syndic demande' : 'Vraagt een offerte' }).first().dblclick();
      await p.waitForTimeout(500);
    } },
  // Medewerkers (vrijgave 30/09/2026): lijst, fiche, het tabblad Verlof en het verlofvenster — uit de tien demomedewerkers
  // (DemoDataGenerator.VerzinMedewerkersAsync). ⚠️ PER TAAL EEN ANDERE MEDEWERKER, zoals bij Klanten: de verlofomschrijvingen
  // van Julien Lambert zijn Frans.
  // ⚠️ Het merkteken van de lijst is de TWEEDE rij (Pieter Claeys), niet de voorbeeldmedewerker: die staat bovenaan, is dus de
  // gefocuste rij, en draagt daarmee óók de titel van de VERBORGEN journaalstrook — getByText(...).first() nam die en wachtte
  // vergeefs tot ze zichtbaar werd (30/09/2026).
  { naam: 'medewerkers-lijst', route: '/medewerkers', verwacht: /Pieter Claeys/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // ⚠️ HOGER dan de standaard: het blok Inzet en werkregime staat onderaan het tabblad Fiche, en dat hoort op het beeld.
  // ⚠️ 1260 sinds 02/10/2026: de rij "Kleur in de planning" kwam erbij, en op 1180 viel ze half onder de knopbalk (gemeten).
  { naam: 'medewerker-fiche', route: '/medewerkers', verwacht: tekstTaal('Inzet en werkregime', 'Affectation et régime de travail'),
    hoogte: 1260,
    na: async (p, taal) => { await openRij(p, taal === 'fr-BE' ? DEMO.medewerkerFr : DEMO.medewerker); } },
  // ⚠️ Het merkteken is een OMSCHRIJVING in het raster, niet de tabtitel: die staat er al vóór de periodes geladen zijn.
  { naam: 'medewerker-verlof', route: '/medewerkers', verwacht: tekstTaal('Herfstverlof', "Congé d'automne"),
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.medewerkerFr : DEMO.medewerker);
      await p.getByText(/^(Verlof|Congés) \(/).first().click();
    } },
  // Het venster van een BESTAANDE periode: dan staan de velden ingevuld en het aantal verlofdagen eronder (4 voor een week van
  // vier werkdagen). ⚠️ Het merkteken is de KOP van het venster, niet een veldnaam: "Omschrijving" staat ook als kolomkop.
  { naam: 'medewerker-verlof-venster', route: '/medewerkers', verwacht: tekstTaal('Verlof wijzigen', 'Modifier le congé'),
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.medewerkerFr : DEMO.medewerker);
      await p.getByText(/^(Verlof|Congés) \(/).first().click();
      await p.getByRole('row').filter({ hasText: fr ? "Congé d'automne" : 'Herfstverlof' }).first().dblclick();
    } },
  // Leveranciers (vrijgave 05/10/2026, module Aankoop laag 1): lijst, fiche en logboek — uit de zes demoleveranciers
  // (VerzinLeveranciersAsync). ⚠️ Het merkteken van de lijst is de TWEEDE rij (Garage Desmet), om dezelfde reden als bij de
  // medewerkers: de eerste rij is gefocust en draagt ook de titel van de verborgen journaalstrook.
  { naam: 'leveranciers-lijst', route: '/leveranciers', verwacht: /Garage Desmet/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // Hoger dan de standaard: de blokken Betaling en Opmerkingen staan onderaan het tabblad Fiche. ⚠️ 1300 en niet 1180: daarop viel het
  // blok Opmerkingen half onder de knopbalk (gezien op het eerste beeld, 05/10/2026).
  { naam: 'leverancier-fiche', route: '/leveranciers', verwacht: tekstTaal('Standaard btw-code', 'Code TVA par défaut'),
    hoogte: 1300,
    na: async (p, taal) => { await openRij(p, taal === 'fr-BE' ? DEMO.leverancierFr : DEMO.leverancier); } },
  // Het tabblad Aankoopdocumenten (module Aankoop laag 3, 06/10/2026): saldo, Betaling ingeven en de documenten. NL Rioolservice Zeeland
  // (een deelbetaling: Totaal en Openstaand verschillen), FR Pompes Delhaye — NIET de voorbeeldleverancier Filterhandel Vandamme: die
  // is in de demo volledig betaald, en dan staat de knop Betaling ingeven er niet.
  { naam: 'leverancier-aankoopdocumenten', route: '/leveranciers', verwacht: tekstTaal('Openstaand saldo', 'Solde ouvert'),
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.leverancierFr : 'Rioolservice Zeeland BV');
      await p.getByText(/^(Aankoopdocumenten|Documents d'achat) \(/).first().click();
    } },
  { naam: 'leverancier-logboek', route: '/leveranciers', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.leverancierFr : DEMO.leverancier);
      await p.getByText(tekstTaal('^Logboek$', '^Historique$')).first().click();
    } },
  // Aankoopfacturen (vrijgave 06/10/2026, module Aankoop laag 2): de lijst en de fiche met twee btw-tarieven — uit de zes demo-
  // aankoopfacturen (VerzinAankoopfacturenAsync). Merkteken van de lijst: een TWEEDE rij (de eerste is gefocust, zie leveranciers).
  { naam: 'aankoopfacturen-lijst', route: '/aankoopfacturen', verwacht: /IJzerwaren De Clercq/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'aankoopfactuur-fiche', route: '/aankoopfacturen', verwacht: tekstTaal('Tarief toevoegen', 'Ajouter un taux'),
    hoogte: 1100,
    na: async (p, taal) => { await openRij(p, taal === 'fr-BE' ? DEMO.aankoopFr : DEMO.aankoop); } },
  // De proefzending (Aankoop laag 6, 06/10/2026), zoals factuur-proef: het venster met een voorbeeldadres, NIET verstuurd — het
  // merkteken is de uitleg in het venster.
  { naam: 'aankoopfactuur-proef', route: '/aankoopfacturen', verwacht: tekstTaal('blijft wijzigbaar', 'reste modifiable'),
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.aankoopFr : DEMO.aankoop);
      await p.getByRole('button', { name: /^(Proef naar de boekhouding…|Essai vers la comptabilité…)$/ }).click();
      const venster = p.locator('.dxbl-popup:not(.dxbl-popup-hidden)').last();
      const veld = venster.locator('input').first();
      await veld.click(); await veld.fill('aankoop@kantoor-demo.be'); await p.keyboard.press('Tab');
      await p.evaluate(() => document.activeElement?.blur());
    } },
  // Binnengekomen documenten (vrijgave 06/10/2026, Aankoop laag 4). De documenten komen uit de ONTWIKKEL-INBOX van de app
  // (PeppolDevelopmentInbox: enkel in Development, met de vlag Peppol:OntwikkelInbox) — vier voor de demo. ⚠️ Herstart de preview vóór
  // deze beelden als er al documenten verwerkt werden: de ontwikkel-inbox onthoudt wat bevestigd is tot de app herstart, en een
  // verwerkt document staat niet meer in de lijst. Merkteken van de lijst: Rioolinspectie Noord bv, de onbekende leverancier.
  { naam: 'binnengekomen-documenten-lijst', route: '/binnengekomen-documenten', verwacht: /Rioolinspectie Noord/ },
  // Verwerken van het document van Pompes Delhaye (twee tarieven): de voorgevulde fiche met de kaart Peppol-document. Verwerken
  // bewaart een kopie van het document, maar maakt nog geen factuur — het beeld laat niets achter dat een volgend beeld verandert.
  { naam: 'peppol-verwerken', route: '/binnengekomen-documenten', hoogte: 1000,
    verwacht: tekstTaal('Pompe de relevage', 'Pompe de relevage'),
    na: async p => { await verwerk(p, /Pompes Delhaye/); } },
  { naam: 'peppol-leverancier-aanmaken', route: '/binnengekomen-documenten',
    verwacht: tekstTaal('Leverancier aanmaken', 'Créer le fournisseur'),
    na: async p => { await verwerk(p, /Rioolinspectie Noord/); } },
  // Openstaande posten leveranciers (vrijgave 06/10/2026, module Aankoop laag 3): gegroepeerd per leverancier met het saldo. Merkteken:
  // Rioolservice Zeeland, de deelbetaling uit de demo (VerzinLeveranciersBetalingenAsync).
  { naam: 'openstaande-posten-leveranciers-lijst', route: '/openstaande-posten-leveranciers', verwacht: /Rioolservice Zeeland/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // Betalingsvoorstel (vrijgave 06/10/2026, Aankoop laag 5): het voorstel van de demo (VerzinBetalingsvoorstelAsync: drie open
  // documenten bij drie leveranciers), het venster Nieuw voorstel, en het SEPA-venster in zijn twee stappen. Pompes Delhaye heeft een
  // IBAN en een gestructureerde mededeling (één overschrijving); IJzerwaren De Clercq en Rioolservice Zeeland hebben geen IBAN en
  // staan als overgeslagen in het venster. Merkteken van de lijst: Rioolservice Zeeland, NIET de eerste rij (die is gefocust).
  { naam: 'betalingsvoorstel-lijst', route: '/betalingsvoorstel', verwacht: /Rioolservice Zeeland/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'betalingsvoorstel-nieuw', route: '/betalingsvoorstel', verwacht: tekstTaal('Tot de vervaldag', "Jusqu'à l'échéance"),
    na: async p => {
      await p.getByRole('button', { name: /^(Nieuw voorstel|Nouvelle proposition)$/ }).first().click();
      // Geen focus op het beeld: anders staat de dag van de datum blauw geselecteerd (gezien 06/10/2026).
      await p.getByText(/Tot de vervaldag|Jusqu'à l'échéance/).first().waitFor();
      // ⚠️ Het venster zet de focus pas NA het tekenen in het datumveld: eerst daarop wachten, dan pas wegnemen (een eerste versie
      // nam de focus te vroeg weg en het beeld toonde de dag nog blauw).
      await p.waitForFunction(() => document.activeElement?.tagName === 'INPUT', null, { timeout: 5000 }).catch(() => {});
      await p.evaluate(() => document.activeElement?.blur());
    } },
  { naam: 'betalingsvoorstel-sepa', route: '/betalingsvoorstel', verwacht: tekstTaal('staan niet in het bestand', 'ne figurent pas dans le fichier'),
    na: async p => {
      await p.getByRole('button', { name: /^(SEPA-bestand|Fichier SEPA)$/ }).first().click();
      await p.getByText(/staan niet in het bestand|ne figurent pas dans le fichier/).first().waitFor();
      // ⚠️ Het venster zet de focus pas NA het tekenen in het datumveld: eerst daarop wachten, dan pas wegnemen (een eerste versie
      // nam de focus te vroeg weg en het beeld toonde de dag nog blauw).
      await p.waitForFunction(() => document.activeElement?.tagName === 'INPUT', null, { timeout: 5000 }).catch(() => {});
      await p.evaluate(() => document.activeElement?.blur());
    } },
  // Stap 2: na een klik op de downloadknop. ⚠️ Het downloaden zelf wordt TEGENGEHOUDEN (preventDefault in de capture-fase): de app
  // ziet de klik en toont de bevestiging, maar er komt geen bestand — en "Markeer als betaald" wordt NIET aangeklikt, anders verdwijnt
  // het voorstel van de demo uit de volgende beelden.
  { naam: 'betalingsvoorstel-betaald', route: '/betalingsvoorstel', verwacht: tekstTaal('Markeer als betaald', 'Marquer comme payés'),
    na: async p => {
      await p.getByRole('button', { name: /^(SEPA-bestand|Fichier SEPA)$/ }).first().click();
      await p.evaluate(() => document.addEventListener('click', e => {
        if (e.target instanceof Element && e.target.closest('a[download]')) e.preventDefault();
      }, true));
      await p.locator('.dxbl-popup:not(.dxbl-popup-hidden)').last()
        .getByRole('link', { name: /^(SEPA-bestand downloaden|Télécharger le fichier SEPA)$/ }).click({ timeout: 15000 });
    } },
  // Verlofsaldi (vrijgave 02/10/2026): de lijst en het venster van één medewerker — uit de demo (VerzinMedewerkersAsync:
  // toekenningen voor dit en vorig jaar, Lies Maes enkel vorig jaar, Nina's brugdag op 0 dagen). ⚠️ Vul de demo opnieuw vóór
  // deze beelden: "2025 overnemen" in een test vult Lies, en dan klopt het beeld niet meer met de tekst.
  // ⚠️ Het merkteken van de lijst is NIET de eerste rij (Bart De Smet): die is gefocust en draagt de titel van de verborgen
  // journaalstrook — dezelfde val als bij Medewerkers.
  { naam: 'verlofsaldi-lijst', route: '/verlofsaldi', verwacht: /Pieter Claeys/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // Het venster: per taal de eigen voorbeeldmedewerker, zodat zijn boekingen in de taal van het beeld staan. Merkteken = de kop
  // van het boekingenblok, die enkel in het venster staat ("Omschrijving" staat ook in de lijst van andere schermen).
  { naam: 'verlofsaldo-venster', route: '/verlofsaldi', verwacht: tekstTaal('Boekingen van', 'Réservations de'),
    na: async (p, taal) => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
      await p.getByRole('row').filter({ hasText: taal === 'fr-BE' ? DEMO.medewerkerFr : DEMO.medewerker }).first().dblclick();
    } },
  // Verlofkalender (03/10/2026). Het rooster op de VORIGE maand: daar staan in de demo alle soorten (ziekte, ander, een halve dag);
  // deze maand enkel verlof. ⚠️ Het merkteken is een gekleurde ZIEKTE-cel en niet de paginatitel — die staat ook boven een lege maand.
  { naam: 'verlofkalender-rooster', route: '/verlofkalender', verwacht: /Tom Verbeke/,
    na: async p => {
      await p.getByRole('button', { name: /^(Vorige maand|Mois précédent)$/ }).click();
      await p.locator('.vk-tabel tbody .vk-ziekte').first().waitFor({ timeout: 15000 });
    } },
  // Slepen over vijf vrije dagen van Tom Verbeke (de 5e tot de 9e van deze maand) opent het venster met die periode. Met de MUIS van
  // Playwright, in stappen, zodat elke cel haar mouseenter krijgt. ⚠️ Het recept klikt NOOIT op Opslaan.
  { naam: 'verlofkalender-boeken', route: '/verlofkalender', verwacht: tekstTaal('Verlof boeken — Tom Verbeke', 'Réserver un congé — Tom Verbeke'),
    na: async p => {
      const rij = p.locator('.vk-tabel tbody tr').filter({ hasText: 'Tom Verbeke' }).first();
      await rij.waitFor({ timeout: 15000 });
      const cel = async n => { const b = await rij.locator('td').nth(n).boundingBox(); return { x: b.x + b.width / 2, y: b.y + b.height / 2 }; };
      const van = await cel(5), tot = await cel(9);
      await p.mouse.move(van.x, van.y); await p.mouse.down();
      await p.mouse.move(tot.x, tot.y, { steps: 12 }); await p.waitForTimeout(300);
      await p.mouse.up();
    } },
  // De lijst: merkteken = de medewerker met het verlof op 0 dagen (de waarschuwing hoort op het beeld).
  { naam: 'verlofkalender-lijst', route: '/verlofkalender/lijst', verwacht: /Nina Van Hecke/ },
  // Werkorders (vrijgave 02/10/2026): lijst, fiche (bovenaan en het blok Facturatie), een nieuwe werkorder en de leveringsbon —
  // uit de demo (DemoDataGenerator.VerzinContractenEnWerkordersAsync). ⚠️ PER TAAL EEN ANDERE WERKORDER, zoals bij Klanten: de
  // Franse ronde neemt die van Résidence Les Tilleuls, anders staan er Nederlandse instructies op een Frans beeld — en de
  // leveringsbon volgt de taal van de werkorder, niet die van het scherm.
  // ⚠️ Sinds werklijst A3 (09/10/2026) staat de kolom Werf standaard verborgen: het merkteken is de klant, niet de werfnaam.
  { naam: 'werkorders-lijst', route: '/werkorders', verwacht: /Tuincentrum De Linde/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'werkorder-fiche', route: '/werkorders', verwacht: tekstTaal('Instructies werknemer', 'Instructions au collaborateur'),
    hoogte: 1180,
    na: async (p, taal) => { await openWerkorder(p, taal === 'fr-BE' ? DEMO.werfFr : DEMO.werf); } },
  // Het blok Facturatie staat onderaan de fiche (werkpunt C12): ernaartoe schuiven, het merkteken is een veld uit dat blok.
  { naam: 'werkorder-facturatie', route: '/werkorders', verwacht: tekstTaal('Klantreferentie', 'Référence client'),
    na: async (p, taal) => {
      await openWerkorder(p, taal === 'fr-BE' ? DEMO.werfFr : DEMO.werf);
      // ⚠️ Wachten tot de fiche staat, en dan in de pagina schuiven: een locator die vóór de laatste hertekening gevonden werd,
      // hangt niet meer in de DOM (02/10/2026, "Element is not attached").
      await p.getByText(tekstTaal('^Klantreferentie$', '^Référence client$')).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.waitForTimeout(500);
      await p.evaluate(() => [...document.querySelectorAll('h2')].find(h => /^(Facturatie|Facturation)$/.test(h.textContent.trim()))
        ?.scrollIntoView({ block: 'start' }));
    } },
  // Attesten (module Attesten, vrijgave 08/10/2026). De demo draagt attesten bij de twee uitgewerkte werkorders
  // (DemoDataGenerator.VerzinAttestenAsync): de Nederlandstalige (Tuincentrum De Linde) twee, slib en vet; de Franstalige
  // (Résidence Les Tilleuls) één. Beide te factureren, dus zichtbaar bij "nog niet gefactureerd". De lijst toont geen werf: de rij
  // kiezen op de KLANT.
  { naam: 'attesten-lijst', route: '/attesten', verwacht: tekstTaal('Attesten van werkorder', "Attestations de l'ordre de travail"),
    na: async (p, taal) => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
      await kiesAttestKlant(p, taal);
    },
    magKortZijn: 'de demo telt twee werkorders met een attest' },
  { naam: 'werkorder-attesten', route: '/werkorders', verwacht: tekstTaal('Nieuw attest', 'Nouvelle attestation'),
    na: async (p, taal) => {
      await openWerkorder(p, taal === 'fr-BE' ? DEMO.werfFr : DEMO.werf);
      await p.getByText(/^(Attesten|Attestations) \(\d+\)$/).first().click();
    },
    magKortZijn: 'een werkorder draagt een of twee attesten' },
  { naam: 'attest-fiche', route: '/attesten', verwacht: tekstTaal('Werfopmerking', 'Remarque chantier'),
    na: async (p, taal) => { await openAttest(p, taal); } },
  // ⚠️ Wachten op het BEELD van de pagina in de kijker (zie factuur-afdruk).
  { naam: 'attest-afdruk', route: '/attesten', verwacht: tekstTaal('Afdrukvoorbeeld', 'Aperçu avant impression'),
    na: async (p, taal) => {
      await openAttest(p, taal);
      await p.getByRole('button', { name: /^(Afdrukvoorbeeld|Aperçu avant impression)$/ }).first().click();
      await p.waitForFunction(() => {
        const img = document.querySelector('img.dxbrv-report-preview-content-img');
        return img && img.complete && img.naturalWidth > 0;
      }, null, { timeout: 30000 });
      await p.waitForTimeout(800);
    } },
  // Mailen: de demo gaf Tuincentrum De Linde een ATTESTadres, dus Aan = het attestadres en Cc = het hoofdadres. De demo-attesten staan
  // op "verzonden", dus eerst de vraag "Al verzonden — toch mailen?". ⚠️ Het recept klikt NOOIT op Versturen.
  { naam: 'attest-mailen', route: '/attesten', verwacht: tekstTaal('Bijlage: attest-', 'Pièce jointe : attestation-'),
    na: async (p, taal) => {
      await openAttest(p, taal);
      await p.getByRole('button', { name: /^(Mailen…|Envoyer par e-mail…)$/ }).first().click();
      await bevestigIndienGevraagd(p, /^(Mailen|Envoyer par e-mail)$/);
      await p.locator('#mailvenster-editor .dxbl-html-editor, #mailvenster-editor [contenteditable]').first().waitFor({ timeout: 15000 });
      await p.waitForTimeout(800);
    } },
  // Een nieuwe werkorder begint op de klantfiche: de knop onderaan.
  { naam: 'werkorder-nieuw', route: '/klanten', verwacht: tekstTaal('Waar en wanneer', 'Où et quand'),
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant);
      await p.getByRole('button', { name: tekstTaal('^Nieuwe werkorder$', '^Nouvel ordre de travail$') }).first().click();
      await p.waitForURL(/\/werkorders\/nieuw\//, { timeout: 15000 });
    } },
  { naam: 'leveringsbon', route: '/werkorders', verwacht: tekstTaal('Handtekening klant', 'Signature client'),
    na: async (p, taal) => {
      await openWerkorder(p, taal === 'fr-BE' ? DEMO.werfFr : DEMO.werf);
      await p.getByRole('button', { name: tekstTaal('^Leveringsbon$', '^Bon de livraison$') }).first().click();
      await p.waitForURL(/\/leveringsbon$/, { timeout: 15000 });
    } },
  // Contracten (vrijgave 02/10/2026): lijst, fiche met de volgende beurten, en het tabblad Werkorders.
  { naam: 'contracten-lijst', route: '/contracten', verwacht: new RegExp(DEMO.contractLijst),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // ⚠️ HOGER dan de standaard: op 900 viel de onderrand van het kader met de volgende beurten net weg (02/10/2026).
  { naam: 'contract-fiche', route: '/contracten', verwacht: tekstTaal('Volgende beurten', 'Prochains passages'), hoogte: 1000,
    na: async (p, taal) => { await openRij(p, taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant); } },
  // ⚠️ Het merkteken is een KOLOMKOP van het raster: de tabtitel "Werkorders (7)" staat er al vóór het raster geladen is.
  { naam: 'contract-werkorders', route: '/contracten', verwacht: tekstTaal('Factuurnr', 'N° facture'),
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Werkorders|Ordres de travail) \(/).first().click();
    } },
  // Planning (vrijgave 02/10/2026): het planbord, de planningslijst, een selectie en de afdruk — uit de planningsweek van de demo
  // (DemoDataGenerator: de week NA die waarop het bord opent, met elk tijdsdeel, de signalen en een handplaatsing). ⚠️ Vul de
  // demo opnieuw vóór deze beelden: een sleep- of selectieproef verzet de werkorders.
  // ⚠️ Het merkteken is een OMSCHRIJVING uit die week ("Mestkelder ledigen"), niet de weekknop: de lopende week staat er al
  // vóór de klik, en zonder merkteken uit de volgende week fotografeert het recept de verkeerde week.
  // ⚠️ De weekknop op NAAM met anker: de knop "Vandaag" draagt als titel "...de volgende week", en een losse /Volgende week/
  // kan die nemen.
  { naam: 'planning-bord', route: '/planning', verwacht: /Mestkelder ledigen/, hoogte: 1140,
    na: async p => { await p.getByRole('button', { name: /^(Volgende week|Semaine suivante) ▶$/ }).first().click(); } },
  { naam: 'planning-lijst', route: '/planning/lijst', verwacht: /Mestkelder ledigen/,
    // ⚠️ Sinds werklijst C14 (09/10/2026) een periodeknop met pijlen "← Vorige | Volgende →" i.p.v. het weeklabel.
    na: async p => { await p.getByRole('button', { name: /^(Volgende|Suivant) →$/ }).first().click(); } },
  // Twee werkorders van TWEE medewerkers (Tom en Julien): dan staat ook Wisselen aan. Het merkteken is de teller van de
  // selectiebalk, die enkel met een selectie verschijnt.
  // ⚠️ De teller van de fundering zegt "2 geselecteerd" — zonder dubbelpunt (gemeten 09/10/2026; sinds welke AppKit-versie is niet
  // nagegaan); het merkteken "2 geselecteerd:" verscheen dus niet meer. In het Frans enkel het begin: de exacte vorm daar is niet nagemeten.
  { naam: 'planning-selectie', route: '/planning/lijst', verwacht: tekstTaal('2 geselecteerd\\b', '2 sélectionné'),
    na: async p => {
      await p.getByRole('button', { name: /^(Volgende|Suivant) →$/ }).first().click();
      await p.getByText('Mestkelder ledigen').first().waitFor({ state: 'visible', timeout: 15000 });
      for (const werk of ['Kolken parking reinigen', 'Débouchage cuisine'])
        await p.getByRole('row').filter({ hasText: werk }).first().locator('td.dxbl-grid-selection-cell .dxbl-checkbox').click();
    } },
  // ⚠️ Wachten op het BEELD van de pagina in de kijker, niet op de titel van het venster: die staat er al terwijl de PDF nog
  // gemaakt wordt, en dan toont het beeld een lege kijker met een laadteken.
  { naam: 'planning-afdruk', route: '/planning/lijst', verwacht: tekstTaal('Afdrukvoorbeeld', 'Aperçu avant impression'),
    na: async p => {
      await p.getByRole('button', { name: /^(Volgende|Suivant) →$/ }).first().click();
      await p.getByText('Mestkelder ledigen').first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByRole('button', { name: /^(Afdrukken|Imprimer)$/ }).first().click();
      await p.locator('img.dxbrv-report-preview-content-img').first().waitFor({ state: 'visible', timeout: 30000 });
      // ⚠️ Enkel het beeld zelf: het laadpaneel (.dxbrv-page-loading-panel) blijft ook NA het laden zichtbaar in de DOM
      // staan (gemeten 02/10/2026: tien seconden lang inline-block, opacity 1, met de pagina al op het scherm).
      await p.waitForFunction(() => {
        const img = document.querySelector('img.dxbrv-report-preview-content-img');
        return img && img.complete && img.naturalWidth > 0;
      }, null, { timeout: 30000 });
      await p.waitForTimeout(800);
    } },
  // Ploegen (vrijgave 02/10/2026): het overzicht, het ploegvenster, een gekozen naam (slepen) en de afdruk — uit de ploegen van de
  // planningsweek in de demo. ⚠️ Vul de demo opnieuw vóór deze beelden, en maak ze op een WEEKDAG: Ploegen opent op de lopende
  // week, de planningsweek rekent vanaf het planbord (in het weekend al de volgende) — op zaterdag of zondag vallen ze uiteen.
  // Het merkteken van het overzicht is een DAGOPMERKING uit die week: de lopende week staat er al vóór de klik.
  { naam: 'ploegen-overzicht', route: '/ploegen', verwacht: /Keuring vrachtwagen 1-DEM-002/,
    na: async p => { await p.getByRole('button', { name: /^(Volgende week|Semaine suivante) →$/ }).first().click(); } },
  // De ploeg van DONDERDAG: dan werkt Nina volgens haar regime niet, en toont het venster het label "volgens regime vrij".
  { naam: 'ploeg-venster', route: '/ploegen', verwacht: tekstTaal('Ploeg wijzigen', "Modifier l'équipe"),
    na: async p => {
      await p.getByRole('button', { name: /^(Volgende week|Semaine suivante) →$/ }).first().click();
      await p.getByText(/Keuring vrachtwagen 1-DEM-002/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.locator('[data-ploeg]').filter({ hasText: 'JLA, KDW' }).first().click();
    } },
  // Het klik-alternatief van het slepen: een naam gekozen, de ploegen en lege cellen van die dag omlijnd. Bart staat dinsdag vrij.
  { naam: 'ploegen-slepen', route: '/ploegen', verwacht: tekstTaal('gekozen —', 'choisi —'),
    na: async p => {
      await p.getByRole('button', { name: /^(Volgende week|Semaine suivante) →$/ }).first().click();
      await p.getByText(/Keuring vrachtwagen 1-DEM-002/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.locator('[data-naam^="BDS|"]').first().click();
    } },
  // ⚠️ Wachten op het BEELD van de pagina in de kijker (zie planning-afdruk).
  { naam: 'ploegen-afdruk', route: '/ploegen', verwacht: tekstTaal('Afdrukvoorbeeld', 'Aperçu avant impression'),
    na: async p => {
      await p.getByRole('button', { name: /^(Volgende week|Semaine suivante) →$/ }).first().click();
      await p.getByText(/Keuring vrachtwagen 1-DEM-002/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByRole('button', { name: /^(Afdrukken|Imprimer)$/ }).first().click();
      await p.waitForFunction(() => {
        const img = document.querySelector('img.dxbrv-report-preview-content-img');
        return img && img.complete && img.naturalWidth > 0;
      }, null, { timeout: 30000 });
      await p.waitForTimeout(800);
    } },
  // Werkbonnen (vrijgave 02/10/2026): de bonnen van de planningsweek van de demo (Volgende week, op een WEEKDAG — zie Ploegen).
  // Het merkteken is de omschrijving van een demowerkorder: op Vandaag staat er geen enkele bon, dus ze bewijst de klik.
  { naam: 'werkbonnen-overzicht', route: '/werkbonnen', verwacht: /Olie-afscheider nakijken/,
    na: async p => {
      await p.getByText(/^(Vandaag|Aujourd'hui)$/).first().click();
      await p.getByRole('button', { name: /^(Volgende week|Semaine prochaine)$/ }).first().click();
    } },
  // Offertes (vrijgave 02/10/2026): de vier demo-offertes (DemoDataGenerator.VerzinOffertesAsync). Het merkteken van de lijst is
  // een demoklant die enkel in de offertes staat (de lijst toont de zoeknaam, in hoofdletters). De fiche is die van Tuincentrum De
  // Linde, twee versies: haar merkteken is de klant MET nummer, zoals enkel de fiche hem toont (KlantZoeker.KlantTekst).
  // Sinds 03/10/2026 tonen de lijsten de NAAM van de klant en niet de zoeknaam (CustomerDisplay) — het merkteken volgt.
  { naam: 'offertes-lijst', route: '/offertes', verwacht: /Sporthal De Ring/ },
  { naam: 'offerte-fiche', route: '/offertes', verwacht: /Tuincentrum De Linde · (nr|n°)/,
    na: async p => { await openRij(p, 'TUINCENTRUM DE LINDE'); } },
  // Mailen (mailpakket laag 4, 07/10/2026): het venster op de CONCEPT-offerte van Camping Zonnedal (hoofdadres als Aan, het
  // facturatieadres als cc-vinkje). Een Nederlandstalige klant, dus ook in de Franse ronde de Nederlandse bijlagenaam. ⚠️ Het recept
  // klikt NOOIT op Versturen.
  { naam: 'offerte-mailen', route: '/offertes', verwacht: tekstTaal('Bijlage: offerte-', 'Pièce jointe : offerte-'),
    na: async p => {
      await openRij(p, 'CAMPING ZONNEDAL');
      await p.getByRole('button', { name: /^(Mailen…|Envoyer par e-mail…)$/ }).first().click({ timeout: 15000 });
      await p.locator('#mailvenster-editor .dxbl-html-editor, #mailvenster-editor [contenteditable]').first().waitFor({ timeout: 15000 });
      await p.waitForTimeout(800);
    } },
  // Het tabblad Mails op de verstuurde offerte van De Linde (versie 2): de mail die de demo in het logboek zette (afgeleverd, met de PDF).
  { naam: 'offerte-mails', route: '/offertes', verwacht: tekstTaal('Afgeleverd', 'Remis'),
    na: async p => {
      await openRij(p, 'TUINCENTRUM DE LINDE');
      await p.getByText(/Tuincentrum De Linde · (nr|n°)/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByText(/^(Mails|E-mails)$/).first().click();
    } },
  { naam: 'offerte-versies', route: '/offertes', verwacht: tekstTaal('actueel', 'actuelle'),
    na: async p => {
      await openRij(p, 'TUINCENTRUM DE LINDE');
      await p.getByText(/Tuincentrum De Linde · (nr|n°)/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByText(/^(Versies|Versions) \(2\)$/).first().click();
    } },
  // Facturatie + Facturen (vrijgave 02/10/2026): de demofacturen komen uit de ECHTE factuurmotor
  // (DemoDataGenerator.VerzinFacturenAsync): 20260001 Camping Zonnedal (nl), 20260002 Dubois Marie (fr), 20260003 voorschot Hoeve
  // Ter Beke, 20260004 Sporthal De Ring + creditnota 20269001 (werkorder terug te factureren). Te factureren blijven: De Linde en
  // Les Tilleuls (de voorbeeldwerven van Werkorders — NIET factureren), Hoeve Ter Beke, Sporthal De Ring.
  // ⚠️ Het venster-recept klikt NOOIT op "Factuur boeken".
  { naam: 'facturatie-lijst', route: '/facturatie', verwacht: /Tuincentrum De Linde/i },
  { naam: 'factureren-venster', route: '/facturatie', verwacht: tekstTaal('Factuur boeken', 'Comptabiliser la facture'),
    na: async p => {
      await p.getByRole('row').filter({ hasText: /Sporthal De Ring/i }).first()
        .getByRole('button', { name: /^(Factureren…|Facturer…)$/ }).click();
    } },
  // Het merkteken van de lijst is de CREDITNOTA: die staat er enkel met de gevulde demo. De journaalstrook eerst dicht.
  // ⚠️ EXACT (^…$): de verborgen journaalstrook draagt de titel "Creditnota 20269001" (de eerste rij is geselecteerd), en
  // getByText(/20269001/).first() nam dat onzichtbare element — zie feestdagen-lijst (02/10/2026).
  { naam: 'facturen-lijst', route: '/facturen', verwacht: /^20269001$/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // De fiche en de afdruk per taal een factuur in DIE taal: de afdruk volgt de taal van de factuur, niet die van het scherm.
  // De proefzending (05/10/2026): het venster met een voorbeeldadres, NIET verstuurd — het merkteken is de uitleg in het venster.
  { naam: 'factuur-proef', route: '/facturen', verwacht: tekstTaal('Het wordt niet gemarkeerd', "Il n'est pas marqué"),
    na: async (p, taal) => {
      await openRij(p, taal.startsWith('fr') ? '20260002' : '20260001');
      await p.getByRole('button', { name: /^(Proef naar de boekhouding…|Essai vers la comptabilité…)$/ }).click();
      const venster = p.locator('.dxbl-popup:not(.dxbl-popup-hidden)').last();
      const veld = venster.locator('input').first();
      await veld.click(); await veld.fill('boekhouder@kantoor-demo.be'); await p.keyboard.press('Tab');
    } },
  { naam: 'factuur-fiche', route: '/facturen', verwacht: tekstTaal('Btw-opbouw', 'Ventilation de la TVA'),
    na: async (p, taal) => { await openRij(p, taal.startsWith('fr') ? '20260002' : '20260001'); } },
  // ⚠️ Wachten op het BEELD van de pagina in de kijker (zie planning-afdruk).
  { naam: 'factuur-afdruk', route: '/facturen', verwacht: tekstTaal('Afdrukvoorbeeld', 'Aperçu avant impression'),
    na: async (p, taal) => {
      await openRij(p, taal.startsWith('fr') ? '20260002' : '20260001');
      await p.getByText(tekstTaal('Btw-opbouw', 'Ventilation de la TVA')).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByRole('button', { name: /^(Afdrukvoorbeeld|Aperçu avant impression)$/ }).first().click();
      // ⚠️ Sinds de mailvrijgave (07/10/2026) is 20260001 in de demo GEMAILD: dan vraagt de fiche eerst "Al verstuurd — toch openen?".
      await bevestigIndienGevraagd(p, /^(Openen|Ouvrir)$/);
      await p.waitForFunction(() => {
        const img = document.querySelector('img.dxbrv-report-preview-content-img');
        return img && img.complete && img.naturalWidth > 0;
      }, null, { timeout: 30000 });
      await p.waitForTimeout(800);
    } },
  // Mailen (mailpakket, vrijgave 07/10/2026). NL: factuur 20260001 van Camping Zonnedal — de demo gaf die klant een FACTURATIEadres,
  // dus het venster toont Aan = facturatie en het hoofdadres als cc-vinkje; ze is al gemaild, dus eerst de vraag "Al verstuurd". FR:
  // 20260002 van Dubois Marie (Franse tekst, nog niet verstuurd). ⚠️ Het recept klikt NOOIT op Versturen.
  { naam: 'factuur-mailen', route: '/facturen', verwacht: tekstTaal('Bijlage: factuur-', 'Pièce jointe : facture-'),
    na: async (p, taal) => {
      await openRij(p, taal.startsWith('fr') ? '20260002' : '20260001');
      await p.getByText(tekstTaal('Btw-opbouw', 'Ventilation de la TVA')).first().waitFor({ state: 'visible', timeout: 15000 });
      // Sinds laag 6 (07/10/2026) heet de knop Versturen… en kiest CleanOps zelf: deze klanten staan niet op Peppol, dus het mailvenster —
      // met bovenaan de reden.
      await p.getByRole('button', { name: /^(Versturen…|Envoyer…)$/ }).first().click();
      await bevestigIndienGevraagd(p, /^(Mailen|Envoyer par e-mail)$/);
      await p.locator('#mailvenster-editor .dxbl-html-editor, #mailvenster-editor [contenteditable]').first().waitFor({ timeout: 15000 });
      await p.waitForTimeout(800);
    } },
  // Peppol versturen (mailpakket laag 6, 07/10/2026). Factuur 20260003 van Hoeve Ter Beke: haar ondernemingsnummer staat in
  // Peppol:OntwikkelDeelnemers (appsettings.Development.json), dus de ontwikkelgrendel zegt "op het netwerk" en simuleert de aflevering.
  // ⚠️ Het lijst-recept VERSTUURT (via de grendel — in Development vertrekt nooit iets): het venster-recept moet ervóór draaien, en na het
  // lijst-recept is 20260003 verstuurd. Vul de demo opnieuw vóór een tweede ronde.
  { naam: 'factuur-peppol', route: '/facturen', verwacht: tekstTaal('Via Peppol naar', 'Par Peppol à'),
    na: async p => {
      await openRij(p, '20260003');
      await p.getByText(tekstTaal('Btw-opbouw', 'Ventilation de la TVA')).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByRole('button', { name: /^(Versturen…|Envoyer…)$/ }).first().click();
      await p.getByText(/^(Via Peppol naar|Par Peppol à)/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.waitForTimeout(500);
    } },
  { naam: 'verzonden-via-peppol-lijst', route: '/facturen', verwacht: tekstTaal('Afgeleverd', 'Remis'),
    na: async p => {
      await openRij(p, '20260003');
      await p.getByText(tekstTaal('Btw-opbouw', 'Ventilation de la TVA')).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByRole('button', { name: /^(Versturen…|Envoyer…)$/ }).first().click();
      await p.getByText(/^(Via Peppol naar|Par Peppol à)/).first().waitFor({ state: 'visible', timeout: 15000 });
      // De tweede taal vindt 20260003 al verstuurd: dan staat Versturen uit, en sluit het venster gewoon.
      const versturen = p.locator('.dxbl-modal-footer button, .dxbl-popup-footer button').filter({ hasText: /^(Versturen|Envoyer)$/ }).first();
      if (await versturen.isEnabled().catch(() => false)) {
        await versturen.click();
        await p.getByText(/(Aangeboden aan het Peppol-netwerk|Proposé au réseau Peppol)/).first().waitFor({ timeout: 15000 });
      } else {
        await p.keyboard.press('Escape');
      }
      await p.goto(new URL('/verzonden-via-peppol', p.url()).toString());
      await p.getByText(/^(Afgeleverd|Remis)$/).first().waitFor({ state: 'visible', timeout: 15000 });
    } },
  // Het tabblad Mails: de mail die de demo voor 20260001 in het logboek zette (afgeleverd, met de PDF). In beide talen dezelfde factuur —
  // de enige gemailde. Merkteken = de status, die staat er pas als het tabblad zijn lijst toont.
  { naam: 'factuur-mails', route: '/facturen', verwacht: tekstTaal('Afgeleverd', 'Remis'),
    na: async p => {
      await openRij(p, '20260001');
      await p.getByText(tekstTaal('Btw-opbouw', 'Ventilation de la TVA')).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.getByText(/^(Mails|E-mails)$/).first().click();
    } },
  // Nieuwe factuur (B2, 03/10/2026): klant kiezen zoals bij een nieuwe offerte, dan het venster met twee vrije lijnen.
  // Per taal een klant in die taal (de tarieven en factuurteksten volgen de klant). ⚠️ Het recept klikt NOOIT op "Factuur boeken".
  { naam: 'factuur-nieuw', route: '/facturen', verwacht: tekstTaal('Factuur boeken', 'Comptabiliser la facture'),
    na: async (p, taal) => {
      const fr = taal.startsWith('fr');
      await p.getByRole('button', { name: /^(Nieuwe factuur|Nouvelle facture)$/ }).click();
      await p.getByPlaceholder(/Naam of klantnummer|Nom ou numéro de client/).fill(fr ? 'Dubois Marie' : 'Camping Zonnedal');
      await p.getByRole('button', { name: /^(kies|choisir)$/ }).first().click({ timeout: 15000 });
      await p.waitForURL(/\/facturen\/nieuw\//, { timeout: 15000 });
      await p.getByText(tekstTaal('Factuur boeken', 'Comptabiliser la facture')).first().waitFor({ timeout: 15000 });
      await p.locator('textarea').first().fill(fr ? 'Nettoyage supplémentaire après la tempête du 28/09' : 'Extra reinigingsbeurt na de storm van 28/09');
      await vulLijn(p, 0, 0, fr ? { oms: 'Nettoyage des vitres extérieures', aantal: 2, eenheid: 'H', prijs: 45, btw: '21P' }
                               : { oms: 'Ramen buiten, alle verdiepingen', aantal: 2, eenheid: 'UUR', prijs: 45, btw: '21P' });
      await p.getByRole('button', { name: /^(\+ Regel toevoegen|\+ Ajouter une ligne)$/ }).click();
      await vulLijn(p, 0, 1, { oms: fr ? 'Déplacement' : 'Verplaatsing', aantal: 1, prijs: 25, btw: '21P' });
    } },
  // Heropenen (03/10/2026): factuur 20260002 (Dubois Marie) is in de demo de enige gewone factuur die nog open ligt — 20260001 is
  // gerappelleerd, 20260003 een voorschot, 20260004 gecrediteerd. Dus voor beide talen dezelfde factuur. Een vrije lijn erbij, zodat
  // beide blokken (werkorders en vrije lijnen) gevuld zijn. ⚠️ Het recept klikt NOOIT op "Wijzigingen boeken".
  { naam: 'factuur-heropenen', route: '/facturen', verwacht: tekstTaal('Wijzigingen boeken', 'Comptabiliser les modifications'),
    na: async (p, taal) => {
      const fr = taal.startsWith('fr');
      await openRij(p, '20260002');
      await p.getByRole('button', { name: /^(Heropenen…|Rouvrir…)$/ }).click({ timeout: 15000 });
      await p.waitForURL(/\/facturen\/wijzigen\//, { timeout: 15000 });
      await p.getByText(tekstTaal('Vrije lijnen', 'Lignes libres')).first().waitFor({ timeout: 15000 });
      await p.getByRole('button', { name: /^(\+ Regel toevoegen|\+ Ajouter une ligne)$/ }).click();
      await vulLijn(p, 1, 0, { oms: fr ? 'Déplacement' : 'Verplaatsing', aantal: 1, prijs: 25, btw: '21P' });
    } },
  // Openstaande posten (vrijgave 03/10/2026): in de demo is de factuur van Camping Zonnedal vervallen en kreeg ze één rappel
  // (DemoDataGenerator.VerzinFacturenAsync), dus de volgende is graad 2. ⚠️ Het merkteken is de klantnaam EXACT (^…$): de verborgen
  // journaalstrook draagt "VERK 20260001 · Camping Zonnedal" in haar titel (zie facturen-lijst). ⚠️ Vul de demo opnieuw vóór deze
  // beelden: wie een rappel inboekte, verandert de graad op de brief. Het rappel-recept boekt NIETS in (het sluit het voorbeeld niet).
// Sinds laag 5 (07/10/2026) is die eerste rappel GEMAILD (DemoDataGenerator.VerzinRappelMailAsync): het tabblad Mails van de post toont
// de factuurmail en de rappel. Het mail-recept klikt NOOIT op Versturen.
  { naam: 'openstaande-posten-lijst', route: '/openstaande-posten', verwacht: /^Camping Zonnedal$/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'openstaande-posten-rappel', route: '/openstaande-posten', verwacht: tekstTaal('Afdrukvoorbeeld', 'Aperçu avant impression'),
    na: async p => {
      const rij = p.getByRole('row').filter({ hasText: 'CAMPING ZONNEDAL' }).first();
      await rij.waitFor({ timeout: 15000 });
      await rij.locator('input[type=checkbox], .dxbl-checkbox').first().click();
      await p.getByRole('button', { name: /^(Rappel afdrukken…|Imprimer un rappel…)$/ }).click();
      await p.waitForFunction(() => {
        const img = document.querySelector('img.dxbrv-report-preview-content-img');
        return img && img.complete && img.naturalWidth > 0;
      }, null, { timeout: 30000 });
      await p.waitForTimeout(800);
    } },
  { naam: 'openstaande-posten-rappel-mailen', route: '/openstaande-posten', verwacht: tekstTaal('Bijlage: herinnering-', 'Pièce jointe : herinnering-'),
    na: async p => {
      const rij = p.getByRole('row').filter({ hasText: 'CAMPING ZONNEDAL' }).first();
      await rij.waitFor({ timeout: 15000 });
      await rij.locator('input[type=checkbox], .dxbl-checkbox').first().click();
      await p.getByRole('button', { name: /^(Rappel mailen…|Rappel par e-mail…)$/ }).click();
      await p.locator('#mailvenster-editor .dxbl-html-editor, #mailvenster-editor [contenteditable]').first().waitFor({ timeout: 15000 });
      await p.waitForTimeout(800);
    } },
  // ⚠️ De journaalstrook OPEN (de lijst-recepten sluiten ze) en op het tabblad Mails — dat staat NA het logboek (PostMailsJournaalTab), dus
  // de strook opent op Logboek en het recept kiest Mails in het keuzemenu bovenaan.
  { naam: 'openstaande-posten-mails', route: '/openstaande-posten', verwacht: tekstTaal('Afgeleverd', 'Remis'),
    na: async p => {
      const rij = p.getByRole('row').filter({ hasText: 'CAMPING ZONNEDAL' }).first();
      await rij.waitFor({ timeout: 15000 });
      await rij.locator('td').nth(3).click();
      const rail = p.locator('.adm-detail-drawer__rail').first();
      if (await rail.isVisible()) await rail.click();
      await p.locator('.adm-journaal-switch .adm-section-switch-btn').first().click();
      // ⚠️ Het keuzemenu is een DevExpress-uitklapper ELDERS in de pagina (popup-portal), niet onder de knop: zoek op de rol.
      await p.getByRole('menuitem', { name: /^\s*(Mails|E-mails)\s*$/ }).click();
    } },
  // Op te volgen memo's (07/10/2026): de demo heeft drie memo's die op te volgen zijn, dus de lijst opent met drie rijen en het menu
  // draagt een 3. Het merkteken is de memo van Camping Zonnedal: die staat er enkel met een gevulde demo. De journaalstrook dicht.
  // Een gemengde lijst, ook op het Franse beeld: de klanten schrijven elk in hun taal, zoals bij een tweetalig ruimbedrijf.
  { naam: 'op-te-volgen-memos-lijst', route: '/op-te-volgen-memos', verwacht: /de uitbater betaalt de openstaande factuur/,
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'openstaande-posten-gegevens', route: '/openstaande-posten', verwacht: tekstTaal('Rappelgegevens —', 'Données de rappel —'),
    na: async p => {
      const rij = p.getByRole('row').filter({ hasText: 'CAMPING ZONNEDAL' }).first();
      await rij.waitFor({ timeout: 15000 });
      await rij.locator('input[type=checkbox], .dxbl-checkbox').first().click();
      await p.getByRole('button', { name: /^(Rappelgegevens…|Données de rappel…)$/ }).click();
    } },
  // Feestdagen (vrijgave 30/09/2026): de lijst van het huidige jaar (wettelijke feestdagen uit ADM One + de demo-sluiting
  // 28–31/12) en het venster van die sluitingsdag. Het merkteken is de SLUITINGSDAG: die staat er enkel met een gevulde demo,
  // de feestdagen staan er altijd. ⚠️ De journaalstrook eerst dicht (zie klanten-lijst).
  // ⚠️ Het merkteken is de BADGE "sluitingsdag" in de kolom Soort, niet de naam: "Collectieve sluiting" staat ook in het
  // logboek van de verborgen journaalstrook, en getByText(...).first() nam dat onzichtbare element (30/09/2026).
  { naam: 'feestdagen-lijst', route: '/beheer/feestdagen', verwacht: tekstTaal('^sluitingsdag$', '^jour de fermeture$'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'feestdag-venster', route: '/beheer/feestdagen', verwacht: tekstTaal('Sluitingsdag wijzigen', 'Modifier le jour de fermeture'),
    na: async (p, taal) => {
      await p.getByRole('gridcell', { name: taal === 'fr-BE' ? DEMO.sluitingsdagFr : DEMO.sluitingsdag, exact: true }).first().dblclick();
    } },
  // Voertuigen: lijst + FICHE (blokken, tabbladen) + onderhoudsvenster + journaal-rail op de lijst + de herinnering.
  // ⚠️ De journaal-lade eerst DICHT: ze onthoudt dat ze open stond (DrawerId), en na het journaalbeeld toonde het Franse
  // lijstbeeld haar open en het Nederlandse niet (29/09/2026).
  { naam: 'voertuigen-lijst', route: '/beheer/voertuigen', verwacht: tekstTaal('Nieuw voertuig', 'Nouveau véhicule'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  // ⚠️ Het merkteken is de TITEL van het keuringsblok: die staat enkel op de fiche, niet op de lijst.
  { naam: 'voertuig-fiche', route: '/beheer/voertuigen', verwacht: tekstTaal('Inschrijving en keuring', 'Immatriculation et contrôle'),
    na: async p => { await openRij(p, DEMO.voertuigKeuring); } },
  // ⚠️ Het merkteken is de KOP van het venster, niet "Controlepunten": die staat ook als kolomkop op het tabblad.
  { naam: 'voertuig-onderhoud', route: '/beheer/voertuigen', verwacht: tekstTaal('Onderhoudsbeurt bewerken', "Modifier l'entretien"),
    na: async p => {
      await openRij(p, DEMO.voertuig);
      await p.getByText(tekstTaal('^Onderhoud$', '^Entretien$')).first().click();
      await p.getByRole('row').filter({ hasText: 'Periodiek onderhoud' }).first().dblclick();
    } },
  { naam: 'voertuigen-journaal', route: '/beheer/voertuigen', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => {
      await p.getByRole('gridcell', { name: DEMO.voertuig, exact: true }).first().click();
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
      // ⚠️ Het journaal van een voertuig opent op BIJLAGEN (leeg in de demo); het logboek is het tweede tabblad. Enkel
      // wisselen als het logboek nog niet getoond wordt — het paneel onthoudt zijn laatste tabblad.
      await p.waitForTimeout(800);
      if (!(await p.getByText(tekstTaal('^Gewijzigd$', '^Modifié$')).first().isVisible())) {
        await p.getByText(/^(Bijlagen|Pièces jointes)$/).last().click();
        await p.getByText(/^(Logboek|Historique)$/).last().click();
      }
    } },
  // (De keuringsmelding op de startpagina is sinds 06/10/2026 de tegel "voertuigen te keuren" op het dashboard — geen eigen beeld meer.)
  // Bedrijfsfiche: één fiche, één beeld. ⚠️ HOGER dan de standaard (hoogte): op 900 px vielen Logo en Rappels half weg
  // (29/09/2026). Het merkteken is daarom "Rappels"-tekst onderaan, niet de kop bovenaan.
  // ⚠️ 1240 sinds het blok Boekhouding (05/10/2026): gemeten op 1440 breed eindigt het blok op 1122 px en begint de knoppenbalk op
  // 1155 — op 1180 viel het half weg. Het vinkje en een voorbeeldadres worden INGEVULD maar niet bewaard: zo toont het beeld de functie.
  // ⚠️ 1400 sinds de aankoopfacturen (06/10/2026, Aankoop laag 6): het blok Boekhouding kreeg een tweede vinkje met adres en uitleg.
  // ⚠️ 1700 sinds het blok Peppol (mailpakket laag 6, 07/10/2026).
  { naam: 'bedrijfsfiche', route: '/beheer/bedrijfsfiche', hoogte: 1700,
    verwacht: tekstTaal('Adres voor de aankoopfacturen', "Adresse pour les factures d'achat"),
    na: async p => {
      await p.getByText(/^(Facturen en creditnota's elke dag naar het boekhoudkantoor sturen|Envoyer chaque jour les factures et notes de crédit au bureau comptable)$/).first().click();
      const veld = p.locator('.dxbl-fl-item', { has: p.locator('label', { hasText: /^(Adres van het boekhoudkantoor|Adresse du bureau comptable)$/ }) }).locator('input').first();
      await veld.click(); await veld.fill('boekhouding@kantoor-demo.be'); await p.keyboard.press('Tab');
      await p.getByText(/^(Aankoopfacturen elke dag naar het boekhoudkantoor sturen|Envoyer chaque jour les factures d'achat au bureau comptable)$/).first().click();
      const aankoop = p.locator('.dxbl-fl-item', { has: p.locator('label', { hasText: /^(Adres voor de aankoopfacturen|Adresse pour les factures d'achat)$/ }) }).locator('input').first();
      await aankoop.click(); await aankoop.fill('aankoop@kantoor-demo.be'); await p.keyboard.press('Tab');
      await p.evaluate(() => document.activeElement?.blur());
    } },
  // Basistabellen: zelfde vorm; het scherm opent op de lijst Contracttypes.
  // Het blok Verwerkingsattesten (vrijgave attesten, 08/10/2026), onderaan de fiche: ernaartoe schuiven. De demo vult het
  // registratienummer en de ondertekenaar in (DemoDataGenerator).
  { naam: 'bedrijfsfiche-attesten', route: '/beheer/bedrijfsfiche', verwacht: tekstTaal('Ondertekenaar attesten', 'Signataire des attestations'),
    na: async p => {
      await p.getByText(/^(Ondertekenaar attesten|Signataire des attestations)$/).first().waitFor({ state: 'visible', timeout: 15000 });
      await p.waitForTimeout(400);
      await p.evaluate(() => [...document.querySelectorAll('h6')].find(h => /^(Verwerkingsattesten|Attestations de traitement)$/.test(h.textContent.trim()))
        ?.scrollIntoView({ block: 'center' }));
      await p.waitForTimeout(400);
    } },
  { naam: 'basistabellen-lijst', route: '/beheer/basistabellen', verwacht: tekstTaal('Nieuw item', 'Nouvel élément') },
  { naam: 'basistabel-venster', route: '/beheer/basistabellen', verwacht: tekstTaal('Item bewerken', "Modifier l'élément"),
    na: async p => { await p.getByRole('gridcell', { name: DEMO.basistabel, exact: true }).first().dblclick(); } },
  { naam: 'basistabellen-journaal', route: '/beheer/basistabellen', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => {
      await p.getByRole('gridcell', { name: DEMO.basistabel, exact: true }).first().click();
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
    } },
  // Btw-codes: zelfde vorm (lijst + venster + journaal van één code).
  // ⚠️ Journaal eerst dicht (05/10/2026): het Franse beeld erfde de open stand van het journaalbeeld en toonde de nieuwe kolommen niet.
  { naam: 'btw-codes-lijst', route: '/beheer/btw-codes', verwacht: tekstTaal('Nieuwe btw-code', 'Nouveau code TVA'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'btw-code-venster', route: '/beheer/btw-codes', verwacht: tekstTaal('Btw-code bewerken', 'Modifier le code TVA'),
    na: async p => { await p.getByRole('gridcell', { name: DEMO.btwCode, exact: true }).first().dblclick(); } },
  { naam: 'btw-codes-journaal', route: '/beheer/btw-codes', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => {
      await p.getByRole('gridcell', { name: DEMO.btwCode, exact: true }).first().click();
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
    } },
  // Eenheden (04/10/2026): zelfde vorm als de btw-codes, plus de keuzelijst op de tariefiche — daar kiest u ze.
  { naam: 'eenheden-lijst', route: '/beheer/eenheden', verwacht: tekstTaal('Nieuwe eenheid', 'Nouvelle unité'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'eenheid-venster', route: '/beheer/eenheden', verwacht: tekstTaal('Eenheid bewerken', "Modifier l'unité"),
    na: async p => { await p.getByRole('gridcell', { name: DEMO.eenheid, exact: true }).first().dblclick(); } },
  { naam: 'eenheden-journaal', route: '/beheer/eenheden', verwacht: tekstTaal('Aangemaakt', 'Créé'),
    na: async p => {
      await p.getByRole('gridcell', { name: DEMO.eenheid, exact: true }).first().click();
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
    },
    magKortZijn: 'het journaal van een eenheid die enkel aangemaakt is, telt één regel' },
  // ⚠️ Het merkteken is een OPTIE van de open lijst ("ST. — Stuks"), niet het label Eenheid: dat staat er ook met de lijst dicht.
  // Openen met de PIJL van de keuzelijst: een klik in het invoerveld opent ze niet (gemeten 04/10/2026).
  { naam: 'eenheid-keuze', route: '/beheer/tarieven', verwacht: tekstTaal('ST. — Stuks', 'ST. — Pièces'),
    na: async p => {
      await openRij(p, DEMO.tarief);
      await p.getByText(tekstTaal('^Tekst op de factuur$', '^Texte sur la facture$')).first().waitFor({ timeout: 15000 });
      const veld = p.locator('.dxbl-fl-item', { has: p.locator('label', { hasText: /^(Eenheid|Unité)$/ }) }).locator('dxbl-combo-box').first();
      await veld.locator('button:not(.dxbl-edit-btn-clear)').last().click();
    } },
  // De drie lijsten van de attesten (vrijgave 08/10/2026): lijst + venster, zoals Eenheden. De demo verzint ze
  // (DemoDataGenerator.VerzinAttestenAsync): vier producten, drie verwerkingen, twee verwerkingsbedrijven.
  { naam: 'attest-producten-lijst', route: '/beheer/attest-producten', verwacht: tekstTaal('Nieuw product', 'Nouveau produit'),
    na: sluitJournaal, magKortZijn: 'de demo telt vier producten' },
  { naam: 'attest-product-venster', route: '/beheer/attest-producten', verwacht: tekstTaal('Product bewerken', 'Modifier le produit'),
    na: async p => { await p.getByRole('gridcell', { name: 'Vet uit vetafscheider', exact: true }).first().dblclick(); } },
  { naam: 'verwerkingen-lijst', route: '/beheer/verwerkingen', verwacht: tekstTaal('Nieuwe verwerking', 'Nouveau traitement'),
    na: sluitJournaal, magKortZijn: 'de demo telt drie verwerkingen' },
  { naam: 'verwerking-venster', route: '/beheer/verwerkingen', verwacht: tekstTaal('Verwerking bewerken', 'Modifier le traitement'),
    na: async p => { await p.getByRole('gridcell', { name: 'SLIB', exact: true }).first().dblclick(); } },
  { naam: 'verwerkingsbedrijven-lijst', route: '/beheer/verwerkingsbedrijven', verwacht: tekstTaal('Nieuw verwerkingsbedrijf', 'Nouvelle entreprise'),
    na: sluitJournaal, magKortZijn: 'de demo telt twee verwerkingsbedrijven' },
  { naam: 'verwerkingsbedrijf-venster', route: '/beheer/verwerkingsbedrijven',
    verwacht: tekstTaal('Verwerkingsbedrijf bewerken', "Modifier l'entreprise de traitement"),
    na: async p => { await p.getByRole('gridcell', { name: 'Demo Waterzuivering nv', exact: true }).first().dblclick(); } },
  // Dagboeken (05/10/2026): lijst + venster, zoals Eenheden.
  { naam: 'dagboeken-lijst', route: '/beheer/dagboeken', verwacht: tekstTaal('Nieuw dagboek', 'Nouveau journal'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'dagboek-venster', route: '/beheer/dagboeken', verwacht: tekstTaal('Dagboek bewerken', 'Modifier le journal'),
    na: async p => { await p.getByRole('gridcell', { name: 'KBC', exact: true }).first().dblclick(); } },
  // Rekeningplan (05/10/2026): lijst + venster zoals Dagboeken, en de keuzelijst Verkooprekening op de klantfiche — daar kiest u
  // de rekening. De demo neemt het plan over van de bron; elk demobedrijf draagt de eerste rekening (DemoDataGenerator).
  { naam: 'rekeningplan-lijst', route: '/beheer/rekeningplan', verwacht: tekstTaal('Nieuwe rekening', 'Nouveau compte'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    },
    magKortZijn: 'het rekeningplan telt twee rekeningen, zoals de bron' },
  { naam: 'rekening-venster', route: '/beheer/rekeningplan', verwacht: tekstTaal('Rekening bewerken', 'Modifier le compte'),
    na: async p => { await p.getByRole('gridcell', { name: '701100', exact: true }).first().dblclick(); } },
  // ⚠️ Het merkteken is een OPTIE van de open lijst (de TWEEDE rekening), niet het label: dat staat er ook met de lijst dicht, en de
  // eerste rekening staat als waarde al in het veld. Openen met de PIJL, zoals bij eenheid-keuze.
  { naam: 'rekening-keuze', route: '/klanten', verwacht: tekstTaal('701200 — Verkopen', '701200 — Ventes'), hoogte: 1180,
    na: async (p, taal) => {
      await openRij(p, taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant);
      await p.getByText(tekstTaal('^Opmerkingen$', '^Remarques$')).first().waitFor({ timeout: 15000 });
      const veld = p.locator('.dxbl-fl-item', { has: p.locator('label', { hasText: /^(Verkooprekening|Compte de vente)$/ }) }).locator('dxbl-combo-box').first();
      await veld.locator('button:not(.dxbl-edit-btn-clear)').last().click();
    } },
  // Documentnummers (05/10/2026): de lijst (de demo zet het volgende offertenummer op 101, dus er staat een "ingesteld") en het
  // venster van de factuurreeks. ⚠️ Het merkteken van het venster is de uitlegregel onder de velden: de knop "Volgend nummer
  // instellen" staat er ook met het venster dicht.
  { naam: 'documentnummers-lijst', route: '/beheer/documentnummers', verwacht: tekstTaal('ingesteld', 'défini'),
    magKortZijn: 'drie reeksen van dit jaar, zoals de demo ze heeft' },
  { naam: 'documentnummer-venster', route: '/beheer/documentnummers', verwacht: tekstTaal('Het nummer blijft tussen', 'Le numéro reste entre'),
    na: async p => { await p.getByRole('row').filter({ hasText: /Factuur|Facture/ }).first().dblclick(); } },
  // Betalingen (05/10/2026): de lijst, het venster Betaling ingeven (klant Camping Zonnedal, één post op saldo) en het detail van
  // de afpunting van Sporthal De Ring (twee documenten). De demobetalingen komen uit DemoDataGenerator.VerzinBetalingenAsync.
  { naam: 'betalingen-lijst', route: '/betalingen', verwacht: tekstTaal('HOEVE TER BEKE', 'HOEVE TER BEKE'),
    na: async p => {
      const dicht = p.locator('.adm-detail-drawer__btn').first();
      if (await dicht.isVisible()) await dicht.click();
    } },
  { naam: 'betaling-venster', route: '/betalingen', verwacht: tekstTaal('Totaal van de betaling', 'Total du paiement'),
    na: async p => {
      await p.getByRole('button', { name: /^(Betaling ingeven|Saisir un paiement)$/ }).first().click();
      const venster = p.locator('.dxbl-popup:not(.dxbl-popup-hidden)').last();
      // ⚠️ De klantzoeker op zijn PLACEHOLDER: sinds 06/10/2026 staan klant en leverancier in één veld "Betaling van", en het opschrift
      // "Klant" waarop dit recept zocht, bestaat niet meer.
      await venster.getByPlaceholder(/Naam of klantnummer|Nom ou numéro de client/).first().fill('Camping');
      await venster.getByText(/^(kies|choisir)$/i).first().click({ timeout: 15000 });
      await venster.getByRole('button', { name: /^(Saldo|Solde)$/ }).first().click({ timeout: 15000 });
      // Een volledig ingevuld voorbeeld: dagboek KBC en een uittrekselnummer. ⚠️ Het nummer TYPEN: een gemaskeerd veld neemt
      // fill() niet aan (gemeten 05/10/2026).
      await venster.locator('dxbl-combo-box').first().locator('button:not(.dxbl-edit-btn-clear)').last().click();
      await p.getByRole('option', { name: /^KBC/ }).click();
      await venster.locator('.dxbl-fl-item', { has: p.locator('label', { hasText: /^(Nummer uittreksel|Numéro de l'extrait)$/ }) }).locator('input').first().click();
      await p.keyboard.press('ControlOrMeta+A'); await p.keyboard.type('146'); await p.keyboard.press('Tab');
      // Geen focus op het beeld: anders staat de tekst van een keuzelijst blauw geselecteerd (gezien 06/10/2026).
      await p.evaluate(() => document.activeElement?.blur());
    } },
  { naam: 'betaling-detail', route: '/betalingen', verwacht: tekstTaal('Vereffend document', 'Document soldé'),
    na: async p => { await p.locator('.dxbl-grid-table tbody tr', { hasText: 'SPORTHAL DE RING' }).first().dblclick(); } },
  // Betalingen aan leveranciers (module Aankoop laag 3, 06/10/2026): het venster met "Betaling van: Leverancier". NL Rioolservice
  // Zeeland (deels betaald in de demo: 800 open), FR Pompes Delhaye (de Franstalige voorbeeldleverancier, onbetaald). Merkteken: de
  // kolom Nr leverancier, die enkel bij een leverancier in het venster staat.
  { naam: 'betaling-leverancier-venster', route: '/betalingen', verwacht: tekstTaal('Nr leverancier', 'N° fournisseur'),
    na: async (p, taal) => {
      await p.getByRole('button', { name: /^(Betaling ingeven|Saisir un paiement)$/ }).first().click();
      const venster = p.locator('.dxbl-popup:not(.dxbl-popup-hidden)').last();
      // Dagboek KBC en een uittrekselnummer, zoals bij het klantvenster. ⚠️ Het nummer TYPEN (gemaskeerd veld, zie hierboven).
      await venster.locator('dxbl-combo-box').first().locator('button:not(.dxbl-edit-btn-clear)').last().click();
      await p.getByRole('option', { name: /^KBC/ }).click();
      await venster.locator('.dxbl-fl-item', { has: p.locator('label', { hasText: /^(Nummer uittreksel|Numéro de l'extrait)$/ }) }).locator('input').first().click();
      await p.keyboard.press('ControlOrMeta+A'); await p.keyboard.type('149'); await p.keyboard.press('Tab');
      // Betaling van: Leverancier — de tweede keuzelijst van het venster.
      await venster.locator('dxbl-combo-box').nth(1).locator('button:not(.dxbl-edit-btn-clear)').last().click();
      await p.getByRole('option', { name: /^(Leverancier|Fournisseur)$/ }).click();
      // De leverancier: typen in de derde keuzelijst en de optie kiezen.
      const lev = taal === 'fr-BE' ? DEMO.leverancierFr : 'Rioolservice Zeeland BV';
      await venster.locator('dxbl-combo-box').nth(2).locator('input').first().click();
      await p.keyboard.type(lev.split(' ')[0]);
      await p.getByRole('option', { name: new RegExp(lev) }).first().click({ timeout: 15000 });
      await venster.getByRole('button', { name: /^(Saldo|Solde)$/ }).first().click({ timeout: 15000 });
      await p.evaluate(() => document.activeElement?.blur());
    } },
  // Betalingstermijnen: zelfde vorm als Factuurteksten (lijst + venster + journaal van één termijn).
  { naam: 'betalingstermijnen-lijst', route: '/beheer/betalingstermijnen', verwacht: tekstTaal('Nieuwe termijn', 'Nouvelle condition') },
  { naam: 'betalingstermijn-venster', route: '/beheer/betalingstermijnen', verwacht: tekstTaal('Voorbeeld:', 'Exemple :'),
    na: async p => { await p.getByRole('gridcell', { name: DEMO.termijn, exact: true }).first().dblclick(); } },
  { naam: 'betalingstermijnen-journaal', route: '/beheer/betalingstermijnen', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => {
      await p.getByRole('gridcell', { name: DEMO.termijn, exact: true }).first().click();
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
    } },
  // Prullenbak: de demo legt er een klant en twee medewerkers in (één met 01/01/2000, de zin uit de handleiding).
  { naam: 'prullenbak', route: '/prullenbak', verwacht: new RegExp(DEMO.prullenbakKlant) },
  // Actielogboek: ⚠️ ZOEKEN op "Demo" is geen versiering maar de grendel. De operator die het beeld maakt, ziet het HELE
  // logboek, ook de regels van Van Parys (echte kentekens, echte offertes). De demovuller schrijft vijf regels onder de
  // gebruiker "Demo"; het recept wacht tot ELKE zichtbare rij "Demo" draagt, en weigert anders het beeld (29/09/2026).
  { naam: 'actielogboek', route: '/beheer/audit', verwacht: new RegExp(DEMO.prullenbakKlant),
    na: async p => {
      const zoek = p.getByPlaceholder(/Zoeken|Rechercher/).first();
      await zoek.fill('Demo'); await zoek.press('Enter');
      await p.waitForFunction(() => {
        const rijen = [...document.querySelectorAll('[role=row]')].filter(r => r.querySelector('[role=gridcell]'));
        return rijen.length > 0 && rijen.every(r => r.innerText.includes('Demo'));
      }, null, { timeout: 15000 });
    } },
  // Platformbeheer (de hub): ⚠️ een ELEMENT, enkel de tegels van Stamgegevens. De operator die het beeld maakt, ziet ook
  // Gebruikers en de groep Overzetting en platform — schermen die een klant NOOIT ziet (29/09/2026).
  { naam: 'platformbeheer-stamgegevens', route: '/beheer', verwacht: tekstTaal('Betalingstermijnen', 'Conditions de paiement'),
    element: 'main .tiles' },
  // Rollen: het fundering-scherm. ⚠️ Een ELEMENT (de drie kolommen) en niet de pagina: bovenaan staat een tenant-keuzelijst
  // die enkel een ADM-operator ziet — een klant nooit. Die lijst staat bij het openen op "— kies een tenant —", ook als
  // de demo de actieve tenant is; eerst de demo kiezen, dan de rol Financieel (29/09/2026). De demo heeft geen
  // gebruikers, dus de rechterkolom zegt "Nog geen gebruikers in deze tenant".
  { naam: 'rollen-financieel', route: '/beheer/rollen', verwacht: tekstTaal('Rechten — Financieel', 'Droits — Financieel'),
    element: 'main .row:has(h3)',
    na: async p => {
      await p.locator('main select').first().selectOption({ label: 'Demo (demo)' });
      await p.getByText('Financieel', { exact: true }).first().click();
    } },
];

// ⚠️ Een werkorder opent met ?terug=… achter haar id (de filters van de lijst reizen mee), dus de URL eindigt NIET op het id
// en openRij wacht vergeefs (02/10/2026, vier keer een time-out).
// ⚠️ Sinds werklijst A3 (09/10/2026) staat de kolom Werf standaard VERBORGEN: de rij is niet meer te herkennen aan haar werfnaam. De
// zoekbalk zoekt er wel op (EfWorkOrderQuery: SiteName), en elke demowerf komt precies één keer voor — dus zoeken, wachten op die ENE
// rij, en ze openen. Meer of minder dan één rij is geen beeld maar een time-out.
async function openWerkorder(p, werf) {
  const zoek = p.getByPlaceholder(/Zoeken|Rechercher/).first();
  await zoek.fill(werf); await zoek.press('Enter');
  await p.waitForFunction(() =>
    [...document.querySelectorAll('[role=row]')].filter(r => r.querySelector('[role=gridcell]')).length === 1, null, { timeout: 15000 });
  await p.locator('[role=row]').filter({ has: p.locator('[role=gridcell]') }).first().dblclick();
  await p.waitForURL(/\/werkorders\/[0-9a-f-]{36}(\?|$)/, { timeout: 15000 });
}

// Een vrije lijn invullen in het venster Nieuwe factuur / Heropenen. ⚠️ De btw-code met het TOETSENBORD (pijl omlaag + Enter): een klik
// op de uitklapoptie faalde in Playwright met "outside of the viewport" (03/10/2026). De prijs met selecteren + typen + Tab: een
// DxSpinEdit neemt de waarde pas bij het verlaten over.
async function vulLijn(p, tabel, rij, { oms, aantal, eenheid, prijs, btw }) {
  const inp = p.locator('table').nth(tabel).locator('tbody tr').nth(rij).locator('input');
  await inp.nth(1).fill(oms); await inp.nth(1).press('Tab');
  for (const [i, w] of [[2, aantal], [4, prijs]]) {
    await inp.nth(i).click(); await inp.nth(i).press('ControlOrMeta+a'); await inp.nth(i).type(String(w)); await inp.nth(i).press('Tab');
    await p.waitForTimeout(200);
  }
  if (eenheid) { await inp.nth(3).fill(eenheid); await inp.nth(3).press('Tab'); }
  await inp.nth(5).click(); await inp.nth(5).fill(btw); await p.waitForTimeout(500);
  await inp.nth(5).press('ArrowDown'); await inp.nth(5).press('Enter'); await p.waitForTimeout(300);
}

// "Verwerken" op de rij van een binnengekomen document: de voorgevulde aankoopfactuur opent (/aankoopfacturen/nieuw?peppol=…).
async function verwerk(p, leverancier) {
  await p.getByRole('row').filter({ hasText: leverancier }).first().getByText(tekstTaal('^Verwerken$', '^Traiter$')).click();
  await p.waitForURL(/\/aankoopfacturen\/nieuw\?peppol=/, { timeout: 15000 });
}

// Wacht tot MINSTENS ÉÉN element met deze tekst zichtbaar is — voor een scherm waar dezelfde tekst ook in een verborgen deel staat (een
// tabblad dat niet open is), zodat ".first()" het onzichtbare kan nemen. Gooit na 15 s: het recept faalt dan, en dat hoort zo.
async function wachtOpZichtbaar(p, tekst) {
  const kandidaten = p.getByText(tekst);
  for (let i = 0; i < 30; i++) {
    for (const el of await kandidaten.all()) if (await el.isVisible()) return;
    await p.waitForTimeout(500);
  }
  throw new Error(`geen zichtbaar element met ${tekst}`);
}

// Een bevestigingsvraag (DevExpress-dialoog) beantwoorden ALS ze er staat — met de knop die de handeling doorzet. Staat er geen vraag,
// dan gebeurt er niets: de vraag komt enkel bij een document dat al verstuurd is.
async function bevestigIndienGevraagd(p, knop) {
  const ja = p.locator('.dxbl-modal:not(.dxbl-popup-hidden), .dx-overlay-content').getByRole('button', { name: knop }).first();
  try { await ja.waitFor({ state: 'visible', timeout: 2500 }); await ja.click(); } catch { /* geen vraag */ }
}

// De strook Journaal dicht, zodat de lijst de volle breedte krijgt (zelfde handeling als bij Eenheden).
async function sluitJournaal(p) {
  const dicht = p.locator('.adm-detail-drawer__btn').first();
  if (await dicht.isVisible()) await dicht.click();
}

// Lijst Attesten: de uitgewerkte demowerkorder van de juiste taal kiezen, op haar klant.
async function kiesAttestKlant(p, taal) {
  await p.getByRole('gridcell', { name: taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant, exact: true }).first().click();
  await p.getByText(/^(Attesten van werkorder|Attestations de l'ordre de travail) /).first().waitFor({ timeout: 15000 });
  await p.waitForTimeout(800);
}

// Het eerste attest van die werkorder openen (het slib van de septische put), op zijn eigen fiche.
async function openAttest(p, taal) {
  await kiesAttestKlant(p, taal);
  await p.getByRole('gridcell', { name: 'Slib septische put', exact: true }).first().dblclick();
  await p.waitForURL(/\/attesten\/[0-9a-f-]{36}/, { timeout: 15000 });
}

async function openRij(p, tekst) {
  await p.getByRole('row').filter({ hasText: tekst }).first().dblclick();
  // De URL alleen is NIET genoeg: Blazor wisselt de URL vóór het scherm hertekend is. Het merkteken van het recept
  // (verwacht) is de echte wachtgrens.
  await p.waitForURL(/\/[0-9a-f-]{36}$/, { timeout: 15000 });
}

// ── De alt-teksten uit de pagina's: per beeld de zin die de pagina belooft ────────────────────────────────────
function altUitPaginas() {
  const alt = {};
  const loop = map => {
    for (const e of readdirSync(map, { withFileTypes: true })) {
      const pad = join(map, e.name);
      if (e.isDirectory()) { if (e.name !== 'images') loop(pad); continue; }
      if (!e.name.endsWith('.md')) continue;
      for (const m of readFileSync(pad, 'utf8').matchAll(/!\[([^\]]*)\]\((?:\.\.\/)*images\/([^)"\s]+)\.png/g))
        alt[m[2]] ??= m[1];
    }
  };
  loop(DOCS);
  return alt;
}

// ── De ronde ────────────────────────────────────────────────────────────────────────────────────────────────
const ALT = altUitPaginas();
const toestand = appToestand();
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: BREED, height: HOOG }, deviceScaleFactor: 2, ignoreHTTPSErrors: true });
const page = await ctx.newPage();

// ⚠️ Aanmelden ZONDER tenantkeuze, dan eerst de taal op Nederlands, dan pas de demo kiezen. De taalvoorkeur hoort bij
// de GEBRUIKER: stond ze op Frans (iemand keek net een Frans scherm na), dan heette de knop "Utiliser" en vond de
// gedeelde meldAan zijn "Gebruiken" niet (29/09/2026). Vandaar ook de knoptekst in beide talen.
await meldAan(page, false);
await page.goto(`${BASIS}/culture/set?c=nl-BE`); await page.waitForLoadState('networkidle');
await page.goto(`${BASIS}/tenants`);
try { await page.waitForSelector('table', { timeout: 20000 }); }
catch { console.error('⛔ Geen tenant-lijst na het aanmelden — vermoedelijk is de aanmelding mislukt.'); process.exit(2); }
await page.locator('tr', { has: page.locator('td', { hasText: /^\s*demo\s*$/ }) }).first()
  .getByText(/Gebruiken|Utiliser/).click();
await page.waitForLoadState('networkidle');

// ⛔ DE GRENDEL: nooit beelden uit een echte tenant. Na de tenantkeuze moet de demo ÉCHT actief zijn — meldAan zelf
// controleert dat niet (hij klikt de rij met "demo" en gaat verder).
await page.goto(`${BASIS}/beheer/conversie`); await page.waitForLoadState('networkidle');
const actief = await page.locator('main').innerText();
if (!/Actieve tenant:\s*demo\b|Tenant actif\s*:\s*demo\b/i.test(actief)) {
  console.error('⛔ De actieve tenant is niet "demo". Nooit beelden uit een echte tenant maken. Gestopt; niets geschreven.');
  await browser.close(); process.exit(2);
}

const geschreven = [], mislukt = [], geweigerd = [], altMissers = [];
for (const taal of ['nl-BE', 'fr-BE']) {
  await page.goto(`${BASIS}/culture/set?c=${taal}`); await page.waitForLoadState('networkidle');
  const achter = taal.startsWith('fr') ? '-fr' : '';
  for (const s of SCHOTEN) {
    if (filter && !s.naam.includes(filter)) continue;
    const bestand = `${s.naam}${achter}`;
    try {
      // Een recept mag een eigen hoogte vragen (hoogte) — anders valt een lange fiche onderaan weg.
      await page.setViewportSize({ width: BREED, height: s.hoogte ?? HOOG });
      await page.goto(`${BASIS}${s.route}`); await page.waitForLoadState('networkidle');
      await page.waitForTimeout(600);
      // De taal gaat mee: een recept mag per taal een ander demorecord kiezen (klanten: Nederlands- en Franstalige klant).
      if (s.na) await s.na(page, taal);
      try { await page.getByText(s.verwacht).first().waitFor({ state: 'visible', timeout: 15000 }); }
      catch { mislukt.push(`${bestand} — het merkteken ${s.verwacht} verscheen niet: dit is niet het beloofde scherm`); continue; }
      await page.waitForTimeout(400);
      await page.addStyleTag({ content: VERBERG }).catch(() => {});
      await page.mouse.move(0, (s.hoogte ?? HOOG) - 1);   // geen zweeftoestand van de muis op het beeld

      // Een recept mag één ELEMENT fotograferen (element) in plaats van de pagina: dan meten de alt-controle en het
      // schermbesluit ook enkel dat element. Voor een melding die tussen andere blokken staat die niet in de handleiding
      // horen — de testfase-meldingen op de startpagina (29/09/2026, Voertuigen).
      const doelElement = s.element ? page.locator(s.element).first() : null;
      const tekst = await (doelElement ?? page.locator('body')).innerText();
      const besluit = schermBesluit({ tekst, isElementSchot: Boolean(doelElement), magKortZijn: Boolean(s.magKortZijn) });
      if (!besluit.ok) { mislukt.push(`${bestand} — ${besluit.reden}`); continue; }

      const alt = ALT[bestand];
      if (alt) {
        // ⚠️ De kern toetst enkel woorden met een HOOFDLETTER. Levert een alt er geen enkele op, dan meet de controle
        // niets — en dat is geen "in orde" (29/09/2026: vier alt-teksten in kleine letters, nul termen, nul meldingen).
        if (altTermen(alt, NIET_SCHERMTEKST_BASIS).length === 0)
          altMissers.push(`${bestand} — de alt-tekst draagt geen enkele schermterm met een hoofdletter; de controle meet niets`);
        // De veldwaarden staan niet in innerText (DevExpress): lees ze mee, zoals de kern vraagt.
        const waarden = await (doelElement ?? page).locator('input, textarea').evaluateAll(els => els.map(e => e.value).join('\n'));
        const mist = ontbrekendeTermen(alt, `${tekst}\n${waarden}`, NIET_SCHERMTEKST_BASIS);
        if (mist.length) altMissers.push(`${bestand} — de alt-tekst belooft ${mist.join(', ')}, niet op het scherm`);
      }

      const png = doelElement ? await doelElement.screenshot() : await page.screenshot();
      const doel = join(BEELDEN, `${bestand}.png`);
      const vorm = vormBesluit({
        bestaandeMaat: existsSync(doel) ? pngMaat(readFileSync(doel)) : null,
        nieuweMaat: pngMaat(png), isElementSchot: Boolean(doelElement),
      });
      if (vorm.besluit === 'weigeren') { geweigerd.push(`${bestand} — ${vorm.reden}`); continue; }
      writeFileSync(doel, png);
      geschreven.push(bestand);
    } catch (e) {
      mislukt.push(`${bestand} — ${String(e).split('\n')[0].slice(0, 160)}`);
    }
  }
}
// De taalvoorkeur hoort bij de gebruiker: laat haar NIET op Frans staan, anders ziet wie daarna in de app werkt een
// Frans scherm (29/09/2026).
await page.goto(`${BASIS}/culture/set?c=nl-BE`).catch(() => {});
await browser.close();

// ── Verantwoording: elk recept in een pagina, elke verwijzing met een beeld ─────────────────────────────────
const zonderVerwijzing = SCHOTEN.flatMap(s => [s.naam, `${s.naam}-fr`]).filter(n => !(n in ALT));
const zonderRecept = Object.keys(ALT).filter(n => !SCHOTEN.some(s => n === s.naam || n === `${s.naam}-fr`));

console.log(`\nApp: ${toestand.sha?.slice(0, 7) ?? '?'}${toestand.vuil ? ' (werkmap VUIL — het beeld toont niet-vastgelegde code)' : ''} · tenant demo`);
console.log(`✅ ${geschreven.length} beeld(en) geschreven`);
for (const [kop, lijst] of [['❌ MISLUKT', mislukt], ['⛔ GEWEIGERD (vorm)', geweigerd], ['⚠️ ALT-TEKST', altMissers],
                             ['⚠️ RECEPT ZONDER VERWIJZING IN EEN PAGINA', zonderVerwijzing],
                             ['⚠️ VERWIJZING ZONDER RECEPT', zonderRecept]]) {
  if (lijst.length) { console.log(`\n${kop} (${lijst.length}):`); for (const r of lijst) console.log(`   ${r}`); }
}
process.exit(mislukt.length || geweigerd.length ? 1 : 0);
