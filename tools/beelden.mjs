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
  { naam: 'klant-fiche', route: '/klanten', verwacht: tekstTaal('Opmerkingen', 'Remarques'), hoogte: 1180,
    na: async (p, taal) => { await openRij(p, taal === 'fr-BE' ? DEMO.klantFr : DEMO.klant); } },
  { naam: 'klant-adres', route: '/klanten', verwacht: tekstTaal('Bereikbaarheid', 'Accessibilité'), hoogte: 1180,
    na: async (p, taal) => {
      const fr = taal === 'fr-BE';
      await openRij(p, fr ? DEMO.klantFr : DEMO.klant);
      await p.getByText(/^(Adressen|Adresses) \(/).first().click();
      await p.getByRole('row').filter({ hasText: fr ? DEMO.klantAdresTelefoonFr : DEMO.klantAdresTelefoon }).first().dblclick();
      await p.waitForURL(/\/adres\/[0-9a-f-]{36}$/, { timeout: 15000 });
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
  { naam: 'medewerker-fiche', route: '/medewerkers', verwacht: tekstTaal('Inzet en werkregime', 'Affectation et régime de travail'),
    hoogte: 1180,
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
  // Werkorders (vrijgave 02/10/2026): lijst, fiche (bovenaan en het blok Facturatie), een nieuwe werkorder en de leveringsbon —
  // uit de demo (DemoDataGenerator.VerzinContractenEnWerkordersAsync). ⚠️ PER TAAL EEN ANDERE WERKORDER, zoals bij Klanten: de
  // Franse ronde neemt die van Résidence Les Tilleuls, anders staan er Nederlandse instructies op een Frans beeld — en de
  // leveringsbon volgt de taal van de werkorder, niet die van het scherm.
  { naam: 'werkorders-lijst', route: '/werkorders', verwacht: new RegExp(DEMO.werf),
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
  // ⚠️ Een ELEMENT en niet de pagina: de startpagina draagt ook de testfase-meldingen, en die horen niet in de handleiding.
  { naam: 'voertuigen-keuringsherinnering', route: '/', verwacht: tekstTaal('wachten op hun keuring', 'attendent leur contrôle'),
    element: '.alert[role=alert]:has-text("keuring"), .alert[role=alert]:has-text("contrôle technique")' },
  // Bedrijfsfiche: één fiche, één beeld. ⚠️ HOGER dan de standaard (hoogte): op 900 px vielen Logo en Rappels half weg
  // (29/09/2026). Het merkteken is daarom "Rappels"-tekst onderaan, niet de kop bovenaan.
  { naam: 'bedrijfsfiche', route: '/beheer/bedrijfsfiche', hoogte: 1180,
    verwacht: tekstTaal('Wachttijd tussen twee rappels', 'Délai entre deux rappels') },
  // Basistabellen: zelfde vorm; het scherm opent op de lijst Contracttypes.
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
  { naam: 'btw-codes-lijst', route: '/beheer/btw-codes', verwacht: tekstTaal('Nieuwe btw-code', 'Nouveau code TVA') },
  { naam: 'btw-code-venster', route: '/beheer/btw-codes', verwacht: tekstTaal('Btw-code bewerken', 'Modifier le code TVA'),
    na: async p => { await p.getByRole('gridcell', { name: DEMO.btwCode, exact: true }).first().dblclick(); } },
  { naam: 'btw-codes-journaal', route: '/beheer/btw-codes', verwacht: tekstTaal('Gewijzigd', 'Modifié'),
    na: async p => {
      await p.getByRole('gridcell', { name: DEMO.btwCode, exact: true }).first().click();
      const strook = p.locator('.adm-detail-drawer__rail').first();
      if (await strook.isVisible()) await strook.click();
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
async function openWerkorder(p, tekst) {
  await p.getByRole('row').filter({ hasText: tekst }).first().dblclick();
  await p.waitForURL(/\/werkorders\/[0-9a-f-]{36}(\?|$)/, { timeout: 15000 });
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
