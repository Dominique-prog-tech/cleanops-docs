// Wat het pakket IS, voor de gedeelde schermmachinerie (adm-appkit/tools/schermmachinerie): poort, demo-tenant, paden.
// Zelfde vorm als creditsoft-docs/tools/app.mjs. De machinerie zelf kent geen pakketnaam — die staat enkel hier.
//
// ⚠️ De tenant is ALTIJD de demo. Beelden komen nooit uit een echte klant (vlootregel, handleiding-schrijfregels §4:
// "Een demo-tenant met verzonnen namen, altijd"). beelden.mjs controleert na het aanmelden dat de demo écht actief is.

export const PAKKET = {
  naam:    'CleanOps',
  // De preview van de ontwikkelomgeving draait op https (zie launchSettings.json, profiel "https"); op http werkt de
  // aanmelding niet (Secure-cookie).
  basis:   'https://localhost:7245',
  // De repo waaruit de DRAAIENDE app komt — een worktree als de preview daar loopt (CLEANOPS_REPO), anders de hoofdkloon.
  // Het verslag noemt diens commit; een verkeerde repo gaf op 29/09/2026 een oude SHA bij een nieuwe app.
  repo:    process.env.CLEANOPS_REPO ?? '/Users/dominique/projects/adm-cleanops',
  secrets: `${process.env.HOME}/.microsoft/usersecrets/998aaca3-c4a0-49f5-986e-e91b7fa3ff37/secrets.json`,
  cfg:     '/Users/dominique/projects/adm-cleanops/src/Host/CleanOps.Host.Web/appsettings.Development.json',
  tenant:  'demo',
  playwright: '/Users/dominique/projects/adm-cleanops/src/Host/CleanOps.Host.Web/bin/Debug/net10.0/.playwright/package/index.mjs',
};

export const BASIS = PAKKET.basis;

// Vaste gegevens van de demo (DemoDataGenerator in adm-cleanops): op de omschrijving en niet op een id, want de demo
// krijgt bij elk opnieuw vullen nieuwe sleutels.
export const DEMO = {
  tarief: 'Afvalwater',
  // De rij met de 6 %-attestzin: het venster toont dan het vinkje dat dit scherm bijzonder maakt.
  factuurtekst: 'BTW6%',
  // De tekst die DemoDataGenerator wijzigt, zodat haar journaal een echte "Gewijzigd"-regel toont.
  gewijzigdeFactuurtekst: 'VOORW',
  // De termijn die DemoDataGenerator rechtzet ("einde der maand" → "einde maand"): venster én journaal.
  termijn: '30DEM',
  // De btw-code waarvan DemoDataGenerator de omschrijving rechtzet ("12%btw" → "12 % btw").
  btwCode: '12P',
  // Eenheden (04/10/2026): een eenheid met een omschrijving in beide talen, voor het venster en het journaal.
  eenheid: 'ST.',
  // Het contracttype dat DemoDataGenerator een hoofdletter geeft ("regenput" → "Regenput").
  basistabel: 'Regenput',
  // Het voertuig waarvan DemoDataGenerator de omschrijving aanvult ("Scania kolkenzuiger"): journaal en onderhoud.
  voertuig: '1-DEM-001',
  // De uitgewerkte demoklant (DemoDataGenerator.VoorbeeldKlant): opmerkingen, fax, drie adressen waarvan twee dubbel.
  klant: 'Tuincentrum De Linde',
  // Het adres van die klant MET werkinstructie en bereikbaarheid — herkenbaar aan zijn telefoonnummer (het dubbele heeft er geen).
  klantAdresTelefoon: '09 386 12 45',
  // Hetzelfde in het Frans, voor de Franse beelden (DemoDataGenerator.VoorbeeldKlantFr).
  klantFr: 'Résidence Les Tilleuls',
  klantAdresTelefoonFr: '069 22 33 44',
  // De uitgewerkte demomedewerker (DemoDataGenerator.VoorbeeldMedewerker): werkt ma–do, vier verlofperiodes; en zijn Franstalige
  // tegenhanger voor de Franse beelden (VoorbeeldMedewerkerFr), met Franse verlofomschrijvingen.
  medewerker: 'Tom Verbeke',
  medewerkerFr: 'Julien Lambert',
  // De uitgewerkte demoleverancier (DemoDataGenerator.VoorbeeldLeverancier): IBAN, BIC, standaard btw-code, opmerking en een
  // gewijzigde e-mail in het logboek; en zijn Franstalige tegenhanger (VoorbeeldLeverancierFr).
  leverancier: 'Filterhandel Vandamme',
  leverancierFr: 'Pompes Delhaye',
  // De sluitingsperiode van de demo (DemoDataGenerator.VoorbeeldSluitingsdag, 28–31/12 van het huidige jaar), NL en FR.
  sluitingsdag: 'Collectieve sluiting',
  sluitingsdagFr: 'Fermeture collective',
  // Het voertuig met de VERLOPEN keuring: de fiche toont dan haar melding in het keuringsblok.
  voertuigKeuring: '1-DEM-003',
  // De verwijderde demo-klant (DemoDataGenerator.VerzinPrullenbakAsync): het merkteken van het prullenbakbeeld.
  prullenbakKlant: 'Bakkerij Voorbeeld',
  // De uitgewerkte demowerkorder (DemoDataGenerator.VoorbeeldWerf), te factureren, met alles ingevuld; en haar Franstalige
  // tegenhanger (VoorbeeldWerfFr). Beide herkenbaar aan hun werfnaam, die in de lijst staat.
  werf: 'Serre De Linde',
  werfFr: 'Cuisine Les Tilleuls',
  // Een contractklant die NIET bovenaan de contractlijst staat: de bovenste rij is gefocust en draagt ook de titel van de
  // verborgen journaalstrook (zie medewerkers-lijst in beelden.mjs).
  contractLijst: 'Sporthal De Ring',
};
