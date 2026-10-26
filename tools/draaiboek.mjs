// ── HET DRAAIBOEK VAN CLEANOPS (sinds 26/10/2026) ─────────────────────────────────────────────────────────────
//
// De handleidingfilms van CleanOps, voor de gedeelde motor (adm-appkit/tools/filmgenerator). Dominique koos op 26/10/2026
// vijf films, één per keten (schrijfregels §4b): aan de slag · van werkorder tot factuur · de planning · periodieke
// contracten · cameraverslagen. De eerste is de proeffilm, met de macOS-stem als plaatshouder (`--stem=say`).
//
// ⚠️ Elk merkteken bewijst DATA, niet enkel het scherm (schrijfregels §4b): een klant, een werkordernummer of een memo
// uit de demo (DemoDataGenerator in adm-cleanops). Een paginatitel staat ook boven een lege lijst.
//
// ⚠️ NL en FR zijn twee films over twee demoklanten: Tuincentrum De Linde (NL) en Résidence Les Tilleuls (FR), zoals de
// beelden (app.mjs → DEMO). Een scène kiest haar klant met `fr(p)`: de taal van de pagina, niet een argument.
//
// ⚠️ "Aan de slag" BEWAART NIETS. De scène 'bewaren' wijzigt de naam enkel om de vraag "Toch weggaan?" te tonen; de film
// eindigt met die wijziging onbewaard, en de browser sluit.

import { BASIS } from './aansturing.mjs';
import { beweegNaar, klik, tabblad } from '/Users/dominique/projects/adm-appkit/tools/schermmachinerie/browser.mjs';

// De taal van de pagina (CleanOps zet <html lang> op de schermtaal).
// ⚠️ Een tabblad draagt zijn tekst TWEE keer in textContent ("Journal\n      Journal"): een patroon met ^…$ matcht nooit
// (repetitie 26/10/2026). Zoek op het BEGIN: /^\s*Naam\b/.
const fr = async (p) => (await p.evaluate(() => document.documentElement.lang)).startsWith('fr');

// Een rij in een lijst, op een tekst die erin staat.
const rij = (p, tekst) => p.locator('.dxbl-grid-table tbody tr:visible', { hasText: tekst }).first();

export const FILMS = [
  // ── 1. AAN DE SLAG (proeffilm, 26/10/2026) ─────────────────────────────────────────────────────────────────────
  // De eerste rondleiding: wat iedereen ziet die CleanOps voor het eerst opent.
  ['aan-de-slag', {
    pagina: 'dashboard',
    titel: {
      nl: 'Aan de slag met CleanOps: het dashboard, het menu, de lijsten, de fiches en de hulp',
      fr: 'Premiers pas avec CleanOps : le tableau de bord, le menu, les listes, les fiches et l’aide',
    },
    omschrijving: {
      nl: 'De eerste rondleiding: het dashboard met uw bedragen, het werk van de dag en wat aandacht vraagt, het menu, werken '
        + 'in een lijst (zoeken, kolommen, exporteren), een klantfiche met haar journaal, wat er gebeurt met niet-bewaarde '
        + 'wijzigingen, en de hulp bij elk scherm.',
      fr: 'La première visite guidée : le tableau de bord avec vos montants, le travail du jour et ce qui demande attention, le '
        + 'menu, le travail dans une liste (rechercher, colonnes, exporter), une fiche client et son journal, ce qui se passe '
        + 'avec des modifications non enregistrées, et l’aide sur chaque écran.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'dashboard', kop: { nl: 'Het dashboard', fr: 'Le tableau de bord' },
        doe: async (p) => { await p.goto(`${BASIS}/`); await p.waitForLoadState('networkidle'); },
        merk: /Hoeve Ter Beke/,
        nl: 'Na het aanmelden opent CleanOps op het dashboard. Bovenaan staan vier bedragen: wat vervallen is bij klanten, wat u deze maand factureerde en ontving, en wat u nog aan leveranciers betaalt.',
        fr: 'Après la connexion, CleanOps s’ouvre sur le tableau de bord. En haut, quatre montants : ce qui est échu chez les clients, ce que vous avez facturé et encaissé ce mois-ci, et ce qui reste à payer aux fournisseurs.' },

      { naam: 'werk', kop: { nl: 'Het werk van de dag', fr: 'Le travail du jour' },
        doe: async (p) => { await beweegNaar(p, p.getByText('Tuincentrum De Linde').first()); },
        merk: /Tuincentrum De Linde/,
        nl: 'Daaronder staat het werk: wat vandaag op de planning staat, wat nog ingepland moet worden, en welke werkorders klaarstaan om te factureren, per klant.',
        fr: 'En dessous, le travail : ce qui est planifié aujourd’hui, ce qui doit encore être planifié, et les ordres de travail prêts à facturer, par client.' },

      { naam: 'aandacht', kop: { nl: 'Wat aandacht vraagt', fr: 'Ce qui demande attention' },
        doe: async (p) => { await beweegNaar(p, p.getByText(/^900151/).first()); },
        merk: /900151/,
        nl: 'Ernaast staat wat aandacht vraagt: offertes om op te volgen, cameraverslagen die nog gemaakt moeten worden, voertuigen die gekeurd moeten worden, en wie er vandaag afwezig is.',
        fr: 'À côté, ce qui demande attention : les offres à suivre, les rapports caméra à rédiger, les véhicules à faire contrôler, et qui est absent aujourd’hui.' },

      { naam: 'menu', kop: { nl: 'Het menu', fr: 'Le menu' },
        doe: async (p) => {
          await beweegNaar(p, p.locator('.sidebar').getByText(/^(Werk|Travail)$/i).first());
          await p.waitForTimeout(900);
          // Op het dashboard zijn de groepen dicht: CRM openklappen, zodat de volgende scène Klanten kan kiezen.
          await klik(p, p.locator('.sidebar').getByText(/^CRM$/i).first());
          await p.locator('.sidebar').getByRole('link', { name: /^(Klanten|Clients)$/ }).first().waitFor({ state: 'visible', timeout: 10000 });
        },
        merk: /Hoeve Ter Beke/,
        nl: 'Links staat het menu, per domein: CRM met uw klanten en medewerkers, het werk, de verkoop en de aankoop. Een getal naast een groep zegt wat er op u wacht.',
        fr: 'À gauche se trouve le menu, par domaine : le CRM avec vos clients et collaborateurs, le travail, les ventes et les achats. Un chiffre à côté d’un groupe indique ce qui vous attend.' },

      { naam: 'lijst', kop: { nl: 'Zoeken in een lijst', fr: 'Rechercher dans une liste' },
        doe: async (p) => {
          await klik(p, p.locator('.sidebar').getByRole('link', { name: /^(Klanten|Clients)$/ }).first());
          await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 });
          // De cursor staat al in het zoekveld: typen zonder eerst te klikken, precies wat de zin belooft. ⚠️ Wachten tot het
          // veld de focus HEEFT, niet op een timer: na 0,8 s gingen de letters verloren (repetitie 26/10/2026), en dan toont
          // de lijst haar eerste pagina, zonder de demoklant.
          await p.waitForFunction(() => document.activeElement?.tagName === 'INPUT', null, { timeout: 10000 });
          await p.waitForTimeout(400);
          await p.keyboard.type((await fr(p)) ? 'Tilleuls' : 'Linde', { delay: 110 });
          await p.waitForTimeout(1500);
        },
        merk: /Kortrijksesteenweg|Rue des Tilleuls/,   // straat en huisnummer staan in APARTE kolommen (repetitie 26/10)
        nl: 'Elke lijst werkt hetzelfde. De cursor staat meteen in het zoekveld: u typt, en de lijst krimpt terwijl u typt. Zoeken mag op naam, adres, telefoon of btw-nummer.',
        fr: 'Toutes les listes fonctionnent de la même façon. Le curseur est déjà dans le champ de recherche : vous tapez, et la liste se réduit au fur et à mesure. Vous pouvez chercher sur le nom, l’adresse, le téléphone ou le numéro de TVA.' },

      { naam: 'werkbalk', kop: { nl: 'Kolommen en exporteren', fr: 'Colonnes et export' },
        doe: async (p) => {
          await beweegNaar(p, p.getByTitle(/^(Kolommen kiezen|Choisir les colonnes)$/).first());
          await p.waitForTimeout(900);
          await beweegNaar(p, p.getByTitle(/^(Exporteren|Exporter)$/).first());
        },
        merk: /Kortrijksesteenweg|Rue des Tilleuls/,
        nl: 'Bovenaan de lijst kiest u welke kolommen u ziet, en neemt u de lijst mee naar Excel.',
        fr: 'En haut de la liste, vous choisissez les colonnes affichées, et vous emportez la liste dans Excel.' },

      { naam: 'fiche', kop: { nl: 'Een klantfiche', fr: 'Une fiche client' },
        doe: async (p) => {
          const r = rij(p, (await fr(p)) ? 'Résidence Les Tilleuls' : 'Tuincentrum De Linde');
          await beweegNaar(p, r); await r.dblclick();
          await p.waitForSelector('.adm-fiche', { timeout: 15000 });
          await p.waitForTimeout(1200);
        },
        // De tellers op de tabbladen bewijzen data: een lege klant toont (0).
        merk: /(Adressen|Adresses) \([1-9]/,
        nl: 'Een dubbelklik opent de fiche, als een volledige pagina. De tabbladen bovenaan tonen wat bij deze klant hoort: de adressen, de contracten, de offertes en de facturen.',
        fr: 'Un double-clic ouvre la fiche, en pleine page. Les onglets en haut montrent ce qui appartient à ce client : les adresses, les contrats, les offres et les factures.' },

      { naam: 'journaal', kop: { nl: 'Het journaal', fr: 'Le journal' },
        doe: async (p) => { await klik(p, tabblad(p, /^\s*(Journaal|Journal)\b/)); await p.waitForTimeout(1500); },
        merk: /onderhoud van de vetput|passer avant 10 h/,
        nl: 'In het journaal staan de memo’s, de bijlagen en het logboek van wie wat wijzigde. Zo weet iedereen hetzelfde over de klant.',
        fr: 'Le journal regroupe les mémos, les pièces jointes et l’historique de qui a modifié quoi. Ainsi, chacun en sait autant sur le client.' },

      { naam: 'bewaren', kop: { nl: 'Bewaren', fr: 'Enregistrer' },
        doe: async (p) => {
          await klik(p, tabblad(p, /^\s*Fiche\b/));
          await p.waitForTimeout(800);
          // Een wijziging zonder te bewaren, enkel om de vraag te tonen. Er wordt NIETS bewaard.
          const naam = p.locator('.adm-fiche input:visible').first();
          await klik(p, naam); await p.keyboard.press('End'); await p.keyboard.type(' ', { delay: 100 });
          await p.waitForTimeout(600);
          await klik(p, p.getByText(/^← (Klanten|Clients)$/).first());
        },
        merk: /Toch weggaan|quand même/i,
        nl: 'Onderaan bewaart u. Gaat u weg met wijzigingen die nog niet bewaard zijn, dan vraagt CleanOps het eerst. Er gaat niets ongemerkt verloren.',
        fr: 'En bas, vous enregistrez. Si vous quittez avec des modifications non enregistrées, CleanOps vous le demande d’abord. Rien ne se perd sans que vous le sachiez.' },

      { naam: 'hulp', kop: { nl: 'Hulp bij elk scherm', fr: 'De l’aide sur chaque écran' },
        doe: async (p) => {
          await klik(p, p.getByRole('button', { name: /^(Blijven|Rester)$/ }).first());
          await p.waitForTimeout(700);
          await klik(p, p.locator('[title="Hulp bij dit scherm"], [title="Aide pour cet écran"]').first());
          await p.waitForTimeout(1500);
        },
        merk: /janssens gent/,
        nl: 'Het vraagteken bovenaan opent de hulp bij elk scherm: wat u er kunt doen, met een link naar de volledige handleiding.',
        fr: 'Le point d’interrogation en haut ouvre l’aide sur chaque écran : ce que vous pouvez y faire, avec un lien vers le manuel complet.' },
    ],
  }],

  // ── 2–5 volgen na de proeffilm: van werkorder tot factuur (werkorders) · de planning (planning) · periodieke contracten
  // (contracten) · cameraverslagen (cameraverslagen).
];
