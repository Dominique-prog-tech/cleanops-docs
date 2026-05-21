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

## Bronnen op deze machine

### Delphi-source (read-only)
- **Pad**: `D:\@newProjects\platform-cleanops-delphi\`
- **Repo**: ADM-Concept/platform-cleanops-delphi (private)
- **Autoritieve bron** voor: schermen, velden, validaties, foutmeldingen,
  bedrijfsregels, menu-structuur.

**Bij elk docs-onderwerp: lees relevante .pas/.dfm bestanden eerst.**
Verzin nooit functionaliteit — markeer onzekerheden met
`[TODO: bevestigen met source of gebruiker]`.

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

### Markdown
- Eén `# H1` per pagina (de paginatitel).
- `## H2` voor hoofdsecties, `### H3` voor subsecties.
- Admonitions (`!!! tip`, `!!! warning`, `!!! info`, `!!! danger`) volgens
  Material-syntax.

### Links
- Tussen pagina's: relatieve paden met `.md` extensie.
- Naar afbeeldingen: absoluut vanaf docs-root: `/images/bestand.png`.

## TODO-markers — conventie

```markdown
!!! info "TODO"
    Beschrijving van wat hier nog ingevuld moet worden.
    Bron in source: `bestand.pas`
```

## Schrijfflow per pagina

1. Lees de source (`.pas` en `.dfm`) van het bijhorende scherm.
2. Begrijp velden, knoppen, validaties.
3. Schrijf de pagina volgens de template hieronder.
4. Maak screenshot, plaats in `docs/images/`.
5. Verwijs vanuit de tekst.
6. Lokaal previewen via `mkdocs serve`.
7. Commit + push.

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

Op moment van setup: **GitHub Pages is nog NIET geactiveerd** voor deze repo.
Reden: repo is private en GitHub Pages vereist GitHub Pro voor private repos.

Wanneer publicatie gewenst is:
- Optie 1: repo public maken (gratis Pages).
- Optie 2: GitHub Pro nemen (~$4/mnd), repo blijft private.
- Daarna: Settings → Pages → Source: GitHub Actions.
- Voor custom domein: CNAME-record + docs/CNAME bestand.
