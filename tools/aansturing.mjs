// De dunne koppellaag tussen de gedeelde schermmachinerie en dit pakket (zie creditsoft-docs/tools/aansturing.mjs).
import { PAKKET, BASIS, DEMO } from './app.mjs';
import { geheim, aanmeldgegevens, appToestand as _appToestand, meldAan as _meldAan }
  from '/Users/dominique/projects/adm-appkit/tools/schermmachinerie/aansturing.mjs';

export { BASIS, DEMO };

// De ontwikkelbeheerder van appsettings.Development.json (of user-secrets als die hem dragen) — geen nieuw geheim.
const { gebruiker, wachtwoord } = aanmeldgegevens(PAKKET.secrets, PAKKET.cfg);
export { gebruiker, wachtwoord };

export const appToestand = () => _appToestand(PAKKET.repo);

export const meldAan = (page, kiesTenant = true) =>
  _meldAan(page, PAKKET.basis, gebruiker, wachtwoord, kiesTenant, PAKKET.tenant);

// ── Voor de gedeelde filmmotor (adm-appkit/tools/filmgenerator, sinds 26/10/2026) ─────────────────────────────
// ElevenLabs en Bunny uit user-secrets van de Host, nooit in git of in een log:
//   ElevenLabs:ApiKey, ElevenLabs:StemNl, ElevenLabs:StemFr (optioneel ElevenLabs:Model) — dezelfde huisstem als
//   CreditSoft en Nimble (beslist 06/09/2026). Bunny:LibraryId en Bunny:ApiKey — een EIGEN library voor CleanOps.
export const stemGeheim = naam => geheim(PAKKET.secrets, `ElevenLabs:${naam}`);
export const bunnyGeheim = naam => geheim(PAKKET.secrets, `Bunny:${naam}`);

// ⚠️ De motor roept meldAan(page, gebruiker, wachtwoord, kiesTenant) aan — een andere vorm dan meldAan hierboven, die
// beelden.mjs gebruikt. Daarom een aparte naam; films-instellingen.mjs geeft hem door als `meldAan`.
// ⚠️ CLEANOPS ONTHOUDT DE TAAL PER GEBRUIKER (AspNetUsers.pref_lang, gemeten 26/10/2026): na de Franse proeffilm stond de
// ontwikkelbeheerder op fr-BE, en wie zich daarna aanmeldde kreeg Frans. Zoals Nimble: na het aanmelden terug op Nederlands;
// de motor zet daarna zelf de taal van de film.
export const meldAanFilm = async (page, user, ww, kiesTenant) => {
  await _meldAan(page, PAKKET.basis, user, ww, kiesTenant, PAKKET.tenant);
  await page.goto(`${PAKKET.basis}/culture/set?c=nl-BE`);
  await page.waitForLoadState('networkidle');
};
