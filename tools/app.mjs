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
};
