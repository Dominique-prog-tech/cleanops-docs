# Context voor Claude — CleanOps Documentatie

Deze file leid je telkens wanneer je in deze repo werkt. Lees hem voor je begint.

## Doel van deze repo

De officiële handleiding van **CleanOps**, een Delphi-platform voor
schoonmaak- en afvalverwerkingsbedrijven in België. Het beheert het volledige
werkproces: planning, opdrachten, CRM, attesten (voor afvalverwerking),
facturatie, boekhouding en aankoopdocumenten.

## Doelpubliek

**Externe klanten die het CleanOps-platform afnemen** — uitbaters en personeel
van schoonmaak- en afvalverwerkingsbedrijven. Professionals in hun vakgebied,
geen IT-developers.

### Implicaties voor schrijfstijl
- **U-vorm**, professioneel maar toegankelijk.
- **Korte zinnen**, één gedachte per zin.
- **Vakjargon mag** (verwerking, attest, rappel), maar uitleg waar nodig
  via de begrippenlijst.
- **Geen IT-jargon** zonder context.
- **Concreet en actiegericht**: "Klik op X", "Vul Y in".

## Bronnen op deze machine — LET OP: migratie in uitvoering

CleanOps migreert momenteel van het Delphi/UniGUI-platform naar een nieuwe
.NET 10/Blazor-app (repo `adm-cleanops`). **Welke bron autoritair is, hangt af
van of het onderdeel al gemigreerd is:**

### Voor een AL GEMIGREERD onderdeel (staat effectief in `adm-cleanops`)
- **Autoritieve bron = de nieuwe .NET/Blazor-app zelf.** Start hem lokaal
  (`dotnet run --project src/Host/CleanOps.Host.Web` in `~/projects/adm-cleanops`,
  of vraag de gebruiker) en documenteer wat je **effectief in de UI ziet** —
  velden, knoppen, flow. De migratie is **geen 1-op-1-kopie**: sommige
  schermen zijn bewust herbouwd met een andere opzet dan Delphi (bv. Offertes,
  Planning). Ga NOOIT uit van het Delphi-scherm zodra het onderdeel gemigreerd is.
- Check eerst `~/projects/adm-cleanops/CLAUDE.md` en het projectgeheugen
  (indien toegankelijk) om te weten wat al gemigreerd is.

### Voor een NOG NIET gemigreerd onderdeel
- **Delphi-source blijft de bron**, als voorlopige/verwachte functionaliteit:
  - **Pad**: `D:\@newProjects\platform-cleanops-delphi\`
  - **Repo**: ADM-Concept/platform-cleanops-delphi (private)
- Markeer zulke pagina's expliciet als **voorlopig** (bv. een `!!! info`-blok
  "Beschrijft de huidige Delphi-versie; kan wijzigen bij de migratie naar het
  nieuwe platform.") zodat een lezer weet dat dit nog kan veranderen.

**Bij elk docs-onderwerp: lees eerst de juiste bron (nieuwe app of Delphi,
zie boven) voor je schrijft.** Verzin nooit functionaliteit — markeer
onzekerheden met `[TODO: bevestigen met source of gebruiker]`.

### Belangrijke regel rond Delphi-source
**NOOIT** Write of Edit gebruiken op `.pas` of `.dfm` bestanden — Windows-1252/
ANSI encoding zou beschadigd raken. Alleen Read.

## Sleutel-source-bestanden

| Vraag over... | Lees... |
|---|---|
| Menu-structuur, sidebar | `uSidebarStyling.pas` — functie `GetCleanOpsSidebar` |
| Hoofdvenster, hoofdform | `Main.pas` / `Main.dfm` |
| Login-flow | `Login.pas` / `Login.dfm` |
| Data-laag algemeen | `MainModule.pas` / `MainModule.dfm` |
| Financiële data-laag | `DM_Financial.pas` / `DM_Financial.dfm` |
| Algemene datamodule | `DM_Common.pas` / `DM_Common.dfm` |
| Ruimdienst-specifieke data | `DM_Ruimdienst.pas` / `DM_Ruimdienst.dfm` |
| Database-schema | `database-schema.sql` |
| Globale constants/enums | `ProjectConstants.pas` |

## Modulestructuur (matchend met sidebar)

De docs-navigatie volgt **één-op-één de sidebar** van het platform:

1. **Aan de slag** — installatie, eerste aanmelding, interface, dashboard
2. **Werkzaamheden** — contracten, opdrachten, planning, personeel
3. **CRM** — klanten, leveranciers, medewerkers, verlofbeheer
4. **Attesten** — afvalverwerking-attesten, producten, verwerkingsbedrijven
5. **Facturatie** — offertes, facturen, rappels, openstaande posten
6. **Boekhouding** — boekjaren, dagboeken, betalingen, rekeningsplan
7. **Aankoopdocumenten** — ingave, betalingsvoorstellen
8. **Beheer** — bedrijfsprofiel, instellingen, stamgegevens, gebruikers
9. **Mijn gebruiker** — platform-overzicht, support, sessie afsluiten
10. **Concepten** — begrippenlijst, workflow-overzicht

## Docs ↔ app-koppeling

Elke handleiding-pagina hoort bij een route in `adm-cleanops` via
`CleanOpsHelpProvider.cs` (`src/Host/CleanOps.Host.Web/Help/`). Vandaag enkel de
permanent Operator-only schermen (geen bèta-module in validatie):

| App-route | Docs-slug | HelpProvider-prefix |
|---|---|---|
| `/beheer/conversie` | *(geen — enkel korte uitleg, geen link)* | `beheer/conversie` |
| `/tenants` | *(geen — enkel korte uitleg, geen link)* | `tenants` |
| `/beheer/gebruikers` | *(geen — enkel korte uitleg, geen link)* | `beheer/gebruikers` |

URL-patroon zodra een pagina een slug krijgt: `https://docs.cleanops.eu[/fr]/{slug}/`.

**Alleen klare pagina's staan in `mkdocs.yml` → `nav`** (en dus live op
docs.cleanops.eu). Het volledige skelet uit de Delphi-scan blijft op schijf staan
onder `docs/` tot het vervangen is, maar komt niet in de nav.

**Definition of done per vrijgegeven scherm** (afgesproken met Dominique
09/08/2026, playbook §7a — de handleiding groeit mee met de vrijgave, niet
vooraf): een module is pas "klaar" als **alle vier** kloppen:

1. Entry in `CleanOpsHelpProvider.cs` (NL + FR).
2. Docs-pagina (`.md` + `.fr.md`) volledig ingevuld — geen `TODO`-markers meer,
   op screenshots na.
3. De pagina staat in `mkdocs.yml` → `nav`.
4. Openstaande screenshots genoteerd in `SCREENSHOTS.md` (repo-root).

## Vaktermen die uitleg verdienen

- **Attest** — wettelijk verplicht document bij afvalverwerking, bevestigt
  ontvangst, verwerking en wettelijke conformiteit.
- **Werkorder / opdracht** — uitvoerbare taak voor een team op een locatie.
- **Verwerking / verwerkingsbedrijf** — proces en partij die afval verwerkt.
- **Rappel** — herinnering aan klant voor openstaande factuur.
- **Peppol** — Europees netwerk voor elektronische facturatie.
- **Schuldbemiddeling** — wettelijke procedure rond invordering.
- **Boekjaar** — administratief jaar van bedrijfsadministratie.

## Terminologie — consistent gebruiken

- "klant" / "klanten" (niet: debiteur, afnemer)
- "leverancier" (niet: crediteur)
- "medewerker" / "personeel" (niet: werknemer in handleiding-tekst)
- "opdracht" / "werkorder" (afhankelijk van context — opdracht is gebruiker-vriendelijker)
- "factuur" (niet: rekening)
- "rappel" / "herinnering" (rappel is courant in Belgische context)

## Conventies voor docs

### Bestandsstructuur
- `docs/` — alle markdown-pagina's
- `docs/images/` — alle screenshots
- Map- en bestandsnamen: **kleine letters, koppeltekens, geen accenten**

### Screenshots
- Formaat: PNG voor UI met tekst, JPG voor foto's
- Resolutie: max 1920px breed
- Alt-text altijd beschrijvend
- **Ik maak zelf geen screenshots van de effectieve app.** Ontbreekt er één op de plek
  waar de tekst ernaar verwijst, dan noteer ik dat in `SCREENSHOTS.md` (repo-root,
  buiten `docs/` — nooit gepubliceerd) i.p.v. de pagina erop te laten wachten.
  Dominique levert de screenshots als laatste stap vóór oplevering van een module.

### Markdown
- Eén `# H1` per pagina (de paginatitel).
- `## H2` voor hoofdsecties, `### H3` voor subsecties.
- Admonitions (`!!! tip`, `!!! warning`, `!!! info`, `!!! danger`) volgens
  Material-syntax.

### Links
- Tussen pagina's: relatieve paden met `.md` extensie.
- Naar afbeeldingen: absoluut vanaf docs-root: `/images/bestand.png`.

### Vormgeving — vloot-afspraak (14/08/2026)

De drie docs-sites (CreditSoft, Nimble, CleanOps) delen één opzet, afgestemd tussen de sessies. Wijzig je hier
iets aan de vorm, stem het dan af; dit staat niet los van de andere twee.

- Merkkleur uit `docs/images/logo.svg` in links, actieve navigatie en de titel op het onthaal. **Header wit in
  licht, zwart in donker** — geen volgekleurde balk.
- Zetting: `.md-typeset` 0.8rem / 1.72, `.md-nav` 0.72rem, `html` 130%, `.md-grid` 70rem.
- Onthaalpagina: `hide: [navigation, toc]` + hero + kaartraster van zes. **Alleen vrijgegeven schermen zijn
  klikbaar**; de rest krijgt `.co-binnenkort`.
- `.co-binnenkort` staat op **0.8**, niet 0.55. Bij CreditSoft is die klasse ongebruikt omdat al hun kaarten
  een link zijn; bij ons zijn er vijf van de zes in aanbouw en op 0.55 kleurt dat de halve pagina grijs.
  Dominique las dat als "de tekst is lichter dan bij Nimble en CreditSoft", terwijl de typografie
  byte-voor-byte gelijk was over de drie sites.

⚠️ **Drie valkuilen die er alle drie uitzien alsof alles klopt.** Alle drie gemeten, geen ervan zichtbaar
zonder gericht na te kijken:

1. **Een `:root`-regel voor de merkkleur werkt niet.** Material zet `data-md-color-primary` op de **body** en
   declareert daar `--md-typeset-a-color: #4051b5`. Je variabele klopt op `<html>` en elke link blijft indigo.
   Nodig: `:root, [data-md-color-primary] { … }`. In donker heeft Material
   `[data-md-color-scheme=slate][data-md-color-primary=white]` — specificiteit (0,2,0) — dus ook daar twee
   attributen gebruiken. Stond live bij CreditSoft én Nimble tot 14/08/2026.
2. **Het palet staat op TWEE plaatsen**: `theme.palette` én nogmaals in het i18n-taalblok voor het Frans, en
   dat taalblok wint voor `/fr/`. Pas je enkel het eerste aan en test je in het Nederlands, dan zie je het
   niet. Controlestap: na een paletwijziging `grep data-md-color-primary site/index.html site/fr/index.html`
   en vergelijken.
3. **Meet nooit binnen de seconde na een themawissel.** Material heeft een kleurtransitie op links; je leest
   dan de startkleur. Een werkende fix lijkt zo kapot (en omgekeerd). Bij twijfel: herladen en één keer meten.

## TODO-markers — conventie

```markdown
!!! info "TODO"
    Beschrijving van wat hier nog ingevuld moet worden.
    Bron in source: `bestand.pas`
```

## Schrijfflow per pagina

Enkel opstarten op het moment dat het scherm effectief vrijgegeven wordt aan de
bètatesters (playbook §7a) — niet vooraf voor alles tegelijk.

1. Lees de source (nieuwe app als het scherm al gemigreerd is, anders Delphi — zie
   "Bronnen op deze machine" hierboven) van het bijhorende scherm.
2. Begrijp velden, knoppen, validaties.
3. Schrijf de pagina volgens de template hieronder — NL én FR, geen `TODO`-markers
   meer buiten eventuele screenshot-plekken.
4. Ontbreekt er een screenshot op een plek waar de tekst ernaar verwijst? Noteer
   dat in `SCREENSHOTS.md`, plaats zelf geen afbeelding.
5. Voeg de pagina toe aan `mkdocs.yml` → `nav`.
6. Voeg een `Entry` toe in `CleanOpsHelpProvider.cs` (NL + FR) in `adm-cleanops`.
7. Lokaal previewen via `mkdocs serve`.
8. Commit + push (beide repo's).

## Pagina-template

```markdown
# [Naam van het scherm]

[Eén alinea: wanneer en waarom gebruikt een gebruiker dit scherm.]

## Het scherm openen

[Hoe navigeren in CleanOps.]

## Velden en functies

[Per veld of sectie een korte uitleg.]

## Veelgemaakte fouten

!!! warning
    [Wat gaat vaak fout, en hoe vermijd je dat.]

## Zie ook

- [Gerelateerde pagina](pad.md)
```

## Wat NIET doen

- Geen functionaliteit verzinnen die niet in de source staat.
- Geen Amerikaanse SaaS-toon ("Awesome!", "You're all set!"). Belgisch-professioneel.
- Geen "the system will…". Actief: "U klikt op X, en Y verschijnt."
- Geen lange paragrafen — splits in stappen of lijsten.

## Bij twijfel

- **Twijfel over functionaliteit**: lees source, of markeer met `[TODO]`.
- **Twijfel over stijl**: kijk naar bestaande afgewerkte pagina's.
- **Twijfel over structuur**: blijf bij de hoofdstuk-indeling.

## Publicatie-status

De docs zijn live op **https://docs.cleanops.eu**.

- Repo blijft **private** (mogelijk dankzij GitHub Pro).
- Deploy: automatisch via GitHub Actions bij elke push naar `main`.
- Domein: `docs.cleanops.eu` (CNAME-record bij Combell).
- HTTPS: gratis SSL-certificaat via Let's Encrypt (auto-renewal).
- Workflow: `.github/workflows/deploy.yml`.
