// De handleidingfilms van CleanOps — de motor staat in adm-appkit/tools/filmgenerator (zie daar LEESMIJ.md).
//
//   node tools/films.mjs --stem=say                 alle films, NL en FR, met de macOS-stem (plaatshouder)
//   node tools/films.mjs aan-de-slag --stem=say     één film
//   node tools/films.mjs --meet --stem=say          repetitie: elke scène op haar merkteken, niets opgenomen
//   node tools/films.mjs --droog                    enkel de stem maken en de duur tonen
//   node tools/films.mjs --inhoud                   het draaiboek als structuur
//
// ⚠️ De app moet lokaal draaien op https://localhost:7245 (de preview), tenant demo, met een vers gevulde demo
// (node tools/demo-vullen.mjs). Zet CLEANOPS_REPO op de worktree waar de preview draait, anders noemt het verslag de
// commit van de hoofdkloon.
process.argv.push('--instellingen=' + new URL('./films-instellingen.mjs', import.meta.url).pathname);
await import('/Users/dominique/projects/adm-appkit/tools/filmgenerator/films.mjs');

// ⚠️ Na de ronde de taal van de ontwikkelbeheerder terug op Nederlands: CleanOps onthoudt ze per gebruiker, en de laatste
// film (meestal de Franse) liet ze anders op fr-BE staan voor wie zich daarna aanmeldt (26/10/2026). meldAanFilm doet dat.
if (!process.argv.some(a => a === '--droog' || a === '--inhoud')) {
  const { chromium } = await import('./films-instellingen.mjs');
  const { gebruiker, wachtwoord, meldAanFilm } = await import('./aansturing.mjs');
  const b = await chromium.launch();
  try { await meldAanFilm(await (await b.newContext()).newPage(), gebruiker, wachtwoord, true); console.log('↩︎  taal van de ontwikkelbeheerder terug op nl-BE'); }
  catch (e) { console.log('⚠️  taal NIET teruggezet:', String(e).split('\n')[0]); }
  finally { await b.close(); }
}
