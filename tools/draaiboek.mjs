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

// De demoklant, medewerker en het werk zonder datum per taal (DemoDataGenerator): NL = Tuincentrum De Linde en Tom Verbeke,
// FR = Résidence Les Tilleuls en Julien Lambert.
const demo = async (p) => (await fr(p))
  ? { naam: 'Résidence Les Tilleuls', kort: 'Tilleuls', mw: 'Julien Lambert', zonderDatum: 'Hoeve Ter Beke', blokVoor: 'Lies Maes', blok: 'Formation VCA',
      vaststelling: 'Canalisation dégagée après le débouchage ; ni fissure ni affaissement.' }
  : { naam: 'Tuincentrum De Linde', kort: 'Linde', mw: 'Tom Verbeke', zonderDatum: 'Janssens Koen', blokVoor: 'Kevin De Wilde', blok: 'Opleiding VCA',
      vaststelling: 'Leiding vrij na de ontstopping; geen breuk of verzakking.' };

// Wachten tot het zoekveld van een lijst de focus HEEFT (niet op een timer — zie de scène 'lijst' van "Aan de slag").
const zoekveldKlaar = async (p) => {
  await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 });
  await p.waitForFunction(() => document.activeElement?.tagName === 'INPUT', null, { timeout: 10000 });
  await p.waitForTimeout(400);
};

// Het zichtbare venster (DevExpress laat gesloten vensters in de DOM staan).
const venster = (p) => p.locator('.dxbl-modal:visible, [role=dialog]:visible').filter({ hasText: /\S/ }).last();

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
        // ⚠️ Op een NAAM, niet op een werkordernummer: de nummers verschuiven met de dag waarop de demo gevuld wordt (27/10/2026).
        doe: async (p) => { await beweegNaar(p, p.getByText('Ruimen septische put en vetput').first()); },
        merk: /Ruimen septische put en vetput/,
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

  // ⚠️ DE VOLGORDE IS EEN VOORWAARDE (27/10/2026). Een ronde draait de films na elkaar op DEZELFDE demo, en drie ervan
  // BEWAREN: de planning (een werkorder inplannen, een blok), de cameraverslagen (een verslag) en de factuurfilm (een factuur).
  // Het cameraverslag haalt het signaal "ontbreekt" weg in Facturatie, en de factuur haalt de klant uit Facturatie — dus de
  // cameraverslagen vóór de factuurfilm, en de factuurfilm als LAATSTE. Neem op na een VERS gevulde demo onder de klok van
  // 2 november (preview "cleanops-klok-vullen"), met de preview "cleanops-klok-film" (9 november), NL en FR in één ronde.

  // ── 2. DE PLANNING ─────────────────────────────────────────────────────────────────────────────────────────────────
  ['de-planning', {
    pagina: 'planning',
    titel: {
      nl: 'De planning in CleanOps: het planbord, inplannen, vrije blokken en de lijstweergave',
      fr: 'Le planning dans CleanOps : le tableau, planifier, les blocs libres et la vue liste',
    },
    omschrijving: {
      nl: 'Het planbord per week en medewerker: de werkorders in hun volgorde en tijdsdeel, werk zonder datum inplannen, een vrij '
        + 'blok voor een opleiding of de garage, en de lijstweergave om toe te wijzen, de dagroute te openen en af te drukken.',
      fr: 'Le tableau de planning par semaine et par collaborateur : les ordres dans leur ordre et leur partie de journée, planifier '
        + 'le travail sans date, un bloc libre pour une formation ou le garage, et la vue liste pour attribuer, ouvrir la tournée '
        + 'du jour et imprimer.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'bord', kop: { nl: 'Het planbord', fr: 'Le tableau de planning' },
        doe: async (p) => { await p.goto(`${BASIS}/planning`); await p.waitForSelector('.pb-bord', { timeout: 15000 }); await p.waitForTimeout(800); },
        merk: /Kolken parking reinigen/,
        nl: 'Het planbord toont een week: een rij per medewerker, een kolom per dag, met de werkorders in de volgorde waarin ze afgewerkt worden.',
        fr: 'Le tableau de planning montre une semaine : une ligne par collaborateur, une colonne par jour, avec les ordres de travail dans l’ordre où ils seront exécutés.' },

      { naam: 'kaart', kop: { nl: 'Een werkorder op het bord', fr: 'Un ordre sur le tableau' },
        doe: async (p) => { const d = await demo(p); await beweegNaar(p, p.locator('.pb-bord .pb-kaart', { hasText: d.naam }).first()); },
        merk: /Kolken parking reinigen/,
        nl: 'Elke kaart toont de klant, het werk en het tijdsdeel: eerste werk, voormiddag, of een vast uur. Uitgevoerd werk kleurt groen en ligt vast.',
        fr: 'Chaque carte montre le client, le travail et la partie de journée : premier travail, matinée, ou une heure fixe. Le travail exécuté devient vert et ne bouge plus.' },

      { naam: 'inplannen', kop: { nl: 'Werk inplannen', fr: 'Planifier le travail' },
        doe: async (p) => {
          const d = await demo(p);
          const telling = () => p.locator('.pb-voorraad .pb-telling').textContent().then(s => Number(s.trim()));
          const voor = await telling();
          await klik(p, p.locator('.pb-vkaart', { hasText: d.zonderDatum }).first());
          await p.waitForTimeout(700);
          await klik(p, p.locator(`[data-cel="${d.mw}|11/11"]`));
          // ⚠️ Wachten tot de teller "Zonder datum" ÉÉN lager staat. Niet als merkteken: in de tekst van de pagina staat de teller
          // tegen het volgende element ("Zonder datum 1900152…"), dus een regex met \b vond nooit een woordgrens (repetitie 27/10/2026).
          await p.waitForFunction(n => Number(document.querySelector('.pb-voorraad .pb-telling')?.textContent.trim()) === n, voor - 1, { timeout: 10000 });
          await p.waitForTimeout(1000);
        },
        merk: /Kolken parking reinigen/,
        nl: 'Links staat het werk zonder datum. U klikt een werkorder aan en dan de dag van een medewerker, of u sleept ze erheen, en ze staat ingepland.',
        fr: 'À gauche se trouve le travail sans date. Vous cliquez sur un ordre puis sur le jour d’un collaborateur, ou vous le faites glisser, et il est planifié.' },

      { naam: 'blok', kop: { nl: 'Een vrij blok', fr: 'Un bloc libre' },
        doe: async (p) => {
          const d = await demo(p);
          // ⚠️ De plusknop is ONZICHTBAAR tot de muis boven het vak hangt (.pb-cel:hover .pb-plus): eerst het vak, dan de knop.
          await beweegNaar(p, p.locator(`[data-cel="${d.blokVoor}|12/11"]`));
          await p.waitForTimeout(400);
          await klik(p, p.locator(`[data-plus="${d.blokVoor}|12/11"]`));
          const v = venster(p);
          await v.locator('input').nth(3).waitFor({ state: 'visible', timeout: 10000 });
          await klik(p, v.locator('input').nth(3));
          await p.keyboard.type(d.blok, { delay: 90 });
          await p.waitForTimeout(500);
          await klik(p, v.getByRole('button', { name: /^(Bewaren|Enregistrer)$/ }));
          await p.waitForTimeout(1500);
        },
        merk: /Opleiding VCA|Formation VCA/,
        nl: 'Met een vrij blok houdt u een dag vrij zonder werkorder: een opleiding, of het voertuig in de garage. Het staat op het bord en op de afgedrukte planning.',
        fr: 'Avec un bloc libre, vous réservez une journée sans ordre de travail : une formation, ou le véhicule au garage. Il apparaît sur le tableau et sur le planning imprimé.' },

      { naam: 'lijst', kop: { nl: 'De lijstweergave', fr: 'La vue liste' },
        doe: async (p) => {
          await klik(p, p.getByText(/^(Lijstweergave|Vue liste)$/).first());
          await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 });
          await p.waitForTimeout(1200);
        },
        merk: /Kolken parking reinigen/,
        nl: 'De lijstweergave toont hetzelfde werk als een lijst. Daar wijst u meerdere werkorders tegelijk toe, opent u de dagroute van een chauffeur, en drukt u de planning af.',
        fr: 'La vue liste montre le même travail sous forme de liste. Vous y attribuez plusieurs ordres à la fois, ouvrez la tournée du jour d’un chauffeur, et imprimez le planning.' },
    ],
  }],

  // ── 3. PERIODIEKE CONTRACTEN ───────────────────────────────────────────────────────────────────────────────────────
  // Bewaart niets: "Werkorders nu aanmaken" wordt enkel getoond.
  ['periodieke-contracten', {
    pagina: 'contracten',
    titel: {
      nl: 'Periodieke contracten in CleanOps: het ritme, de volgende beurten en de werkorders die eruit komen',
      fr: 'Les contrats périodiques dans CleanOps : le rythme, les prochains passages et les ordres qui en découlent',
    },
    omschrijving: {
      nl: 'Een contract legt vast wat er hoe vaak gebeurt. CleanOps toont de volgende beurten en maakt de werkorders zelf aan, '
        + 'gepland op het tijdsdeel en bij de uitvoerder van het contract. Met de opvolging zet u een contract on hold of plant u '
        + 'een contact met de klant.',
      fr: 'Un contrat fixe ce qui se fait et à quelle fréquence. CleanOps montre les prochains passages et crée lui-même les ordres '
        + 'de travail, planifiés sur la partie de journée et chez l’exécutant du contrat. Avec le suivi, vous mettez un contrat en '
        + 'attente ou planifiez un contact avec le client.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'lijst', kop: { nl: 'De contracten', fr: 'Les contrats' },
        doe: async (p) => { await p.goto(`${BASIS}/contracten`); await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 }); await p.waitForTimeout(800); },
        merk: /Vidange fosse septique/,
        nl: 'In Contracten staan de periodieke opdrachten van uw klanten: wat er gebeurt, hoe vaak, en wanneer de laatste beurt was.',
        fr: 'Les contrats regroupent les missions périodiques de vos clients : ce qui se fait, à quelle fréquence, et quand a eu lieu le dernier passage.' },

      { naam: 'contract', kop: { nl: 'Een contract', fr: 'Un contrat' },
        doe: async (p) => {
          const r = rij(p, (await demo(p)).naam);
          await beweegNaar(p, r); await r.dblclick();
          await p.waitForSelector('.adm-fiche', { timeout: 15000 });
          await p.waitForTimeout(1200);
        },
        merk: /(Werkorders|Ordres de travail) \([1-9]/,
        nl: 'Een dubbelklik opent het contract: de omschrijving, het type en het tarief, en het adres waar het werk gebeurt.',
        fr: 'Un double-clic ouvre le contrat : la description, le type et le tarif, et l’adresse où le travail a lieu.' },

      { naam: 'ritme', kop: { nl: 'Ritme en planning', fr: 'Rythme et planification' },
        doe: async (p) => { await beweegNaar(p, p.locator('.adm-fiche').getByText(/^(Ritme en planning|Rythme.*)$/).first()); },
        merk: /\d{2}\/\d{2}\/2027/,
        nl: 'Onder Ritme en planning kiest u hoe vaak: elke week, om de zoveel maanden, of jaarlijks, op een vaste dag. Met een tijdsdeel en een uitvoerder komt het werk meteen gepland binnen.',
        fr: 'Sous Rythme et planification, vous choisissez la fréquence : chaque semaine, tous les quelques mois, ou chaque année, à jour fixe. Avec une partie de journée et un exécutant, le travail arrive directement planifié.' },

      { naam: 'beurten', kop: { nl: 'De volgende beurten', fr: 'Les prochains passages' },
        doe: async (p) => { await beweegNaar(p, p.locator('.adm-fiche').getByText(/\d{2}\/\d{2}\/2027/).first()); },
        merk: /\d{2}\/\d{2}\/2027/,
        nl: 'Daaronder ziet u meteen de volgende beurten. Elke nacht maakt CleanOps de werkorders aan voor wat binnenkort moet gebeuren, zonder dat iemand eraan hoeft te denken.',
        fr: 'Juste en dessous, vous voyez les prochains passages. Chaque nuit, CleanOps crée les ordres de travail pour ce qui doit se faire bientôt, sans que personne doive y penser.' },

      { naam: 'werkorders', kop: { nl: 'De werkorders van het contract', fr: 'Les ordres du contrat' },
        doe: async (p) => { await klik(p, tabblad(p, /^\s*(Werkorders|Ordres de travail)\b/)); await p.waitForTimeout(1500); },
        merk: /\d{2}\/\d{2}\/2026/,
        nl: 'Op het tabblad Werkorders staan alle opdrachten die uit dit contract kwamen, uitgevoerd of nog gepland.',
        fr: 'L’onglet Ordres de travail reprend toutes les missions issues de ce contrat, exécutées ou encore planifiées.' },

      { naam: 'opvolging', kop: { nl: 'De opvolging', fr: 'Le suivi' },
        doe: async (p) => {
          await klik(p, tabblad(p, /^\s*(Contract|Contrat)\b/));
          await p.waitForTimeout(900);
          await beweegNaar(p, p.locator('.adm-fiche').getByText(/^(On hold|En pause)$/).first());
        },
        merk: /\d{2}\/\d{2}\/2027/,
        nl: 'Moet een contract even wachten, dan zet u het on hold. Met een opvolgdatum verschijnt het op tijd in de lijst, om de klant te contacteren.',
        fr: 'Si un contrat doit patienter, vous le mettez en pause. Avec une date de suivi, il apparaît à temps dans la liste, pour contacter le client.' },
    ],
  }],

  // ── 4. CAMERAVERSLAGEN ─────────────────────────────────────────────────────────────────────────────────────────────
  // ⚠️ BEWAART een cameraverslag per taal, bij de camera-inspectie zonder verslag van de demoklant. VÓÓR de factuurfilm.
  ['cameraverslagen', {
    pagina: 'cameraverslagen',
    titel: {
      nl: 'Cameraverslagen in CleanOps: van camera-inspectie tot verslag voor de klant',
      fr: 'Les rapports caméra dans CleanOps : de l’inspection caméra au rapport pour le client',
    },
    omschrijving: {
      nl: 'Bij een camera-inspectie hoort een verslag. CleanOps wijst aan waar het ontbreekt, vult een nieuw verslag in met het adres '
        + 'en de werkorder, en maakt er een pdf van om naar de klant te mailen. Daarna kan de werkorder op de factuur.',
      fr: 'Une inspection caméra s’accompagne d’un rapport. CleanOps indique où il manque, prépare un nouveau rapport avec l’adresse et '
        + 'l’ordre de travail, et en fait un pdf à envoyer au client. L’ordre peut ensuite être facturé.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'lijst', kop: { nl: 'De camera-inspecties', fr: 'Les inspections caméra' },
        doe: async (p) => { await p.goto(`${BASIS}/cameraverslagen`); await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 }); await p.waitForTimeout(800); },
        merk: /Camera-inspectie na ontstopping/,
        nl: 'Cameraverslagen toont elke camera-inspectie, met of zonder verslag. Bij een uitgevoerde inspectie zonder verslag staat ontbreekt; ook het dashboard en de facturatie wijzen erop.',
        fr: 'Les rapports caméra montrent chaque inspection, avec ou sans rapport. Une inspection exécutée sans rapport porte la mention manquant ; le tableau de bord et la facturation le signalent aussi.' },

      { naam: 'nieuw', kop: { nl: 'Een nieuw verslag', fr: 'Un nouveau rapport' },
        doe: async (p) => {
          const r = p.locator('.dxbl-grid-table tbody tr:visible', { hasText: (await demo(p)).naam }).filter({ hasText: /ontbreekt|manquant/ }).first();
          await beweegNaar(p, r); await r.dblclick();
          await p.locator('main textarea').first().waitFor({ state: 'visible', timeout: 15000 });
          await p.waitForTimeout(1000);
        },
        merk: /Kortrijksesteenweg 100|Rue des Tilleuls 14/,
        nl: 'Een dubbelklik opent een nieuw verslag, al ingevuld: het adres, de klant, en de werkorder waaraan het gekoppeld wordt.',
        fr: 'Un double-clic ouvre un nouveau rapport, déjà rempli : l’adresse, le client, et l’ordre de travail auquel il sera lié.' },

      { naam: 'vaststellingen', kop: { nl: 'De vaststellingen', fr: 'Les constatations' },
        doe: async (p) => {
          await klik(p, p.locator('main textarea').first());
          await p.keyboard.type((await demo(p)).vaststelling, { delay: 45 });
          await p.waitForTimeout(600);
        },
        merk: /Kortrijksesteenweg 100|Rue des Tilleuls 14/,
        nl: 'U noteert de datum, de medewerker, en wat de camera toonde.',
        fr: 'Vous notez la date, le collaborateur, et ce que la caméra a montré.' },

      { naam: 'bewaren', kop: { nl: 'Bewaren', fr: 'Enregistrer' },
        doe: async (p) => {
          await klik(p, p.locator('main').getByRole('button', { name: /^(Bewaren|Enregistrer)$/ }).first());
          await p.waitForTimeout(2500);
        },
        // De kop wordt "Cameraverslag van 09/11/2026": de datum staat er pas NA het bewaren (vaste klok, 9 november).
        merk: /09\/11\/2026/,
        nl: 'Na het bewaren voegt u in het journaal de foto’s en de beelden toe. Het verslag hangt aan het adres: de volgende keer ziet u wat er vorige keer gevonden werd.',
        fr: 'Après l’enregistrement, vous ajoutez les photos et les images dans le journal. Le rapport est lié à l’adresse : la prochaine fois, vous voyez ce qui a été trouvé la fois précédente.' },

      { naam: 'afdruk', kop: { nl: 'Het verslag voor de klant', fr: 'Le rapport pour le client' },
        doe: async (p) => {
          await klik(p, p.locator('main').getByRole('button', { name: /^(Afdrukvoorbeeld|Aperçu.*)$/ }).first());
          await p.waitForTimeout(4000);
        },
        merk: /09\/11\/2026/,
        nl: 'Het afdrukvoorbeeld toont het verslag als pdf, en met Mailen gaat het naar de klant. Een cameraverslag is een apart document, naast de factuur.',
        fr: 'L’aperçu montre le rapport en pdf, et avec Envoyer il part chez le client. Un rapport caméra est un document à part, à côté de la facture.' },

      { naam: 'facturatie', kop: { nl: 'Klaar om te factureren', fr: 'Prêt à facturer' },
        doe: async (p) => {
          await p.keyboard.press('Escape');
          await p.goto(`${BASIS}/facturatie`);
          const d = await demo(p);
          const r = rij(p, d.naam);
          await r.waitFor({ state: 'visible', timeout: 15000 });
          await klik(p, r.getByRole('button', { name: /^(Factureren…|Facturer…)$/ }));
          await venster(p).waitFor({ state: 'visible', timeout: 10000 });
          await p.waitForTimeout(1200);
        },
        merk: /Camera-inspectie na ontstopping|Inspection caméra après débouchage/,
        nl: 'In Facturatie is het signaal weg: de camera-inspectie heeft haar verslag, en kan op de factuur.',
        fr: 'Dans la facturation, le signal a disparu : l’inspection caméra a son rapport, et peut être facturée.' },
    ],
  }],

  // ── 5. VAN WERKORDER TOT FACTUUR ───────────────────────────────────────────────────────────────────────────────────
  // ⚠️ BEWAART een factuur per taal (de klant verdwijnt daarna uit Facturatie). ALTIJD DE LAATSTE film van een ronde.
  ['van-werkorder-tot-factuur', {
    pagina: 'werkorders',
    titel: {
      nl: 'Van werkorder tot factuur in CleanOps: de werkorder, de attesten en de factuur',
      fr: 'De l’ordre de travail à la facture dans CleanOps : l’ordre, les attestations et la facture',
    },
    omschrijving: {
      nl: 'Een uitgevoerde werkorder met wie, waar en wat, de facturatiegegevens en de verwerkingsattesten met hun EURAL-code. '
        + 'Daarna in Facturatie: per klant wat klaarstaat, de werkorders aanvinken en de factuur boeken, met het afdrukvoorbeeld.',
      fr: 'Un ordre de travail exécuté avec qui, où et quoi, les données de facturation et les attestations de traitement avec leur '
        + 'code EURAL. Ensuite, dans la facturation : par client ce qui est prêt, cocher les ordres et comptabiliser la facture, '
        + 'avec l’aperçu.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'lijst', kop: { nl: 'De werkorders', fr: 'Les ordres de travail' },
        doe: async (p) => { await p.goto(`${BASIS}/werkorders`); await zoekveldKlaar(p); },
        merk: /Tuincentrum De Linde/,
        nl: 'In Werkorders staan al uw opdrachten: de klant, de status, de geplande en de uitgevoerde dag, en het tarief. Bovenaan filtert u op status en periode.',
        fr: 'Les ordres de travail regroupent toutes vos missions : le client, le statut, le jour planifié et le jour d’exécution, et le tarif. En haut, vous filtrez par statut et par période.' },

      { naam: 'werkorder', kop: { nl: 'Een werkorder', fr: 'Un ordre de travail' },
        doe: async (p) => {
          const d = await demo(p);
          await p.keyboard.type(d.kort, { delay: 110 });
          await p.waitForTimeout(1500);
          const r = p.locator('.dxbl-grid-table tbody tr:visible', { hasText: d.naam }).filter({ hasText: '187,50' }).first();
          await beweegNaar(p, r); await r.dblclick();
          await p.waitForSelector('.adm-fiche', { timeout: 15000 });
          await p.waitForTimeout(1200);
        },
        merk: /(Attesten|Attestations) \([1-9]/,
        nl: 'U zoekt de klant en opent een uitgevoerde werkorder. Bovenaan staat wie het werk deed, met welk voertuig, en wanneer.',
        fr: 'Vous cherchez le client et ouvrez un ordre exécuté. En haut figurent qui a fait le travail, avec quel véhicule, et quand.' },

      { naam: 'facturatie', kop: { nl: 'Wat er gefactureerd wordt', fr: 'Ce qui est facturé' },
        doe: async (p) => { await beweegNaar(p, p.locator('.adm-fiche').getByText(/^(Tarief|Tarif)$/).first()); },
        merk: /(Attesten|Attestations) \([1-9]/,
        nl: 'Onderaan staat wat er gefactureerd wordt: het tarief, het aantal en de eenheidsprijs. Wat de medewerker ter plaatse ontving, staat apart.',
        fr: 'En bas figure ce qui est facturé : le tarif, la quantité et le prix unitaire. Ce que le collaborateur a reçu sur place figure à part.' },

      { naam: 'attesten', kop: { nl: 'De attesten', fr: 'Les attestations' },
        doe: async (p) => { await klik(p, tabblad(p, /^\s*(Attesten|Attestations)\b/)); await p.waitForTimeout(1500); },
        merk: /20 03 04/,
        nl: 'Op het tabblad Attesten staan de verwerkingsattesten: wat er opgehaald werd, hoeveel, met de EURAL-code en het verwerkingsbedrijf.',
        fr: 'L’onglet Attestations reprend les attestations de traitement : ce qui a été enlevé, en quelle quantité, avec le code EURAL et l’entreprise de traitement.' },

      { naam: 'te-factureren', kop: { nl: 'Te factureren', fr: 'À facturer' },
        doe: async (p) => { await p.goto(`${BASIS}/facturatie`); await rij(p, 'Résidence Les Tilleuls').waitFor({ state: 'visible', timeout: 15000 }); await p.waitForTimeout(800); },
        merk: /Résidence Les Tilleuls/,
        nl: 'Uitgevoerd werk komt vanzelf in Facturatie terecht, per klant: hoeveel werkorders er klaarstaan, en voor welk bedrag.',
        fr: 'Le travail exécuté arrive de lui-même dans la facturation, par client : combien d’ordres sont prêts, et pour quel montant.' },

      { naam: 'venster', kop: { nl: 'De werkorders aanvinken', fr: 'Cocher les ordres' },
        doe: async (p) => {
          const r = rij(p, (await demo(p)).naam);
          await klik(p, r.getByRole('button', { name: /^(Factureren…|Facturer…)$/ }));
          await venster(p).waitFor({ state: 'visible', timeout: 10000 });
          await p.waitForTimeout(1200);
        },
        merk: /Camera-inspectie na ontstopping|Inspection caméra après débouchage/,
        nl: 'Factureren opent de werkorders van die klant. Bij elke werkorder staat wat erbij hoort, zoals een attest of een cameraverslag. U vinkt aan wat mee moet.',
        fr: 'Facturer ouvre les ordres de ce client. Chaque ordre indique ce qui l’accompagne, comme une attestation ou un rapport caméra. Vous cochez ce qui doit suivre.' },

      { naam: 'boeken', kop: { nl: 'De factuur boeken', fr: 'Comptabiliser la facture' },
        doe: async (p) => {
          await klik(p, venster(p).getByRole('button', { name: /^(Factuur boeken|Comptabiliser la facture)$/ }));
          await p.waitForTimeout(900);
          // ⚠️ De bevestiging is een BERICHTVENSTER met role=alertdialog, geen dialog: venster() vindt ze niet (repetitie 27/10/2026).
          await klik(p, p.getByRole('alertdialog').getByRole('button', { name: /^(Boeken|Comptabiliser)$/ }));
          await p.waitForURL(/\/facturen\//, { timeout: 20000 });
          await p.waitForTimeout(3500);
        },
        merk: /(Factuur|Facture) 2026\d{4}/,
        nl: 'Factuur boeken geeft de factuur haar nummer. CleanOps opent ze meteen, met het afdrukvoorbeeld om ze te mailen of te downloaden.',
        fr: 'Comptabiliser donne son numéro à la facture. CleanOps l’ouvre aussitôt, avec l’aperçu pour l’envoyer par e-mail ou la télécharger.' },
    ],
  }],
];
