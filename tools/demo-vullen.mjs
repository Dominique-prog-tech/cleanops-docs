// Vult de tenant "demo" in de lokale preview opnieuw (Platformbeheer → Conversie → Demo vullen) — vóór beelden.mjs.
// Gebruik (vanuit cleanops-docs, met de preview op https://localhost:7245):  node tools/demo-vullen.mjs
// Stopt als de actieve tenant niet "demo" is: Demo vullen wist eerst alles wat in de tenant staat.
import { aanmeldgegevens, meldAan } from '/Users/dominique/projects/adm-appkit/tools/schermmachinerie/aansturing.mjs';
import { PAKKET } from './app.mjs';
const { chromium } = await import(PAKKET.playwright);
const { gebruiker, wachtwoord } = aanmeldgegevens(PAKKET.secrets, PAKKET.cfg);
const browser = await chromium.launch();
const page = await (await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width: 1440, height: 900 } })).newPage();
await page.goto(`${PAKKET.basis}/culture/set?c=nl-BE&returnUrl=%2F`);
await meldAan(page, PAKKET.basis, gebruiker, wachtwoord, true, 'demo');
await page.goto(`${PAKKET.basis}/beheer/conversie`); await page.waitForLoadState('networkidle'); await page.waitForTimeout(800);
const tekst = await page.locator('main').innerText();
if (!/Actieve tenant:\s*demo\b/i.test(tekst)) { console.log('⛔ actieve tenant is niet demo:', tekst.slice(0, 200)); await browser.close(); process.exit(2); }
await page.getByRole('button', { name: 'Demo vullen' }).click();
await page.waitForTimeout(1000);
const vraag = page.locator('.dxbl-popup:not(.dxbl-popup-hidden)').last();
if (await vraag.count() && await vraag.isVisible()) { console.log('vraag:', (await vraag.innerText()).replace(/\s+/g, ' ').slice(0, 200)); }
// ⚠️ Wachten op een RESULTAATREGEL ("Betalingen aan leveranciers: …", hoofdlettergevoelig, met dubbelpunt). Hier stond /Eenheden/i, en
// dat woord staat al in de UITLEG boven de knop ("eenheden"): de lus stopte meteen en sloot de browser, en het vullen lukte enkel
// omdat het binnen de seconde klaar was (gezien 06/10/2026).
let klaar = false;
for (let i = 0; i < 120; i++) { const t = await page.locator('main').innerText(); if (/Betalingen aan leveranciers: |mislukt|Fout/.test(t) && !/bezig/i.test(t)) { klaar = true; break; } await page.waitForTimeout(2000); }
if (!klaar) console.log('⚠️ na 4 minuten geen resultaatregel — kijk zelf in Platformbeheer → Conversie');
console.log((await page.locator('main').innerText()).split('\n').filter(l => /^[A-Z][^:]{2,40}: /.test(l) || /mislukt|fout/i.test(l)).slice(0, 30).join('\n'));
await browser.close();
