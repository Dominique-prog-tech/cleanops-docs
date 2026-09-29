// De dunne koppellaag tussen de gedeelde schermmachinerie en dit pakket (zie creditsoft-docs/tools/aansturing.mjs).
import { PAKKET, BASIS, DEMO } from './app.mjs';
import { aanmeldgegevens, appToestand as _appToestand, meldAan as _meldAan }
  from '/Users/dominique/projects/adm-appkit/tools/schermmachinerie/aansturing.mjs';

export { BASIS, DEMO };

// De ontwikkelbeheerder van appsettings.Development.json (of user-secrets als die hem dragen) — geen nieuw geheim.
const { gebruiker, wachtwoord } = aanmeldgegevens(PAKKET.secrets, PAKKET.cfg);
export { gebruiker, wachtwoord };

export const appToestand = () => _appToestand(PAKKET.repo);

export const meldAan = (page, kiesTenant = true) =>
  _meldAan(page, PAKKET.basis, gebruiker, wachtwoord, kiesTenant, PAKKET.tenant);
