// De instellingen van CleanOps voor de gedeelde filmmotor (adm-appkit/tools/filmgenerator, LEESMIJ.md) — sinds 26/10/2026.
// Playwright uit de bouwuitvoer van de Host, zoals beelden.mjs (app.mjs → PAKKET.playwright).
export { chromium } from '/Users/dominique/projects/adm-cleanops/src/Host/CleanOps.Host.Web/bin/Debug/net10.0/.playwright/package/index.mjs';
export { BASIS, gebruiker, wachtwoord, meldAanFilm as meldAan, stemGeheim, bunnyGeheim, appToestand } from './aansturing.mjs';
export { FILMS } from './draaiboek.mjs';
export const MAP = new URL('./', import.meta.url).pathname;
// Voor bunny.mjs: de metadata bij elke video. Eén Bunny-library per pakket (Bunny:LibraryId in user-secrets).
export const PRODUCT = 'CleanOps';
export const BRON = 'cleanops-docs/tools/films.mjs';
// Voor `bunny.mjs naar-website`: de websitefilms als JSON IN deze repo, zoals Nimble; content-hub zet ze op cleanops-website
// (route nog af te spreken met content-hub, gevraagd 26/10/2026).
export const WEBSITE_FILMS = new URL('./website-films.json', import.meta.url).pathname;
