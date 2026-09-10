# Medewerkers

De mensen die u in ploegen en op werkorders inplant. Per medewerker houdt CleanOps de gegevens bij, wie
chauffeur of bijrijder is, en op welke dagen iemand werkt.

<!-- AFBEELDING: het medewerkersoverzicht met de zoekbalk en enkele rijen -->

## Het scherm openen

Klik links in het menu op **Medewerkers**.

## De lijst

De lijst toont per medewerker de code, de naam, de gemeente, het telefoonnummer, en of de persoon chauffeur
is en actief.

- **Zoeken** — typ in de zoekbalk boven de lijst. Er wordt gezocht in alle getoonde kolommen, dus ook op
  gemeente.
- **Tonen** — bovenaan staat een keuze tussen de actieve medewerkers en alle medewerkers. De teller ernaast
  zegt hoeveel er getoond worden van het totaal. Zet hem op alle om ook wie niet meer werkt terug te vinden.
- **Sorteren** — klik op een kolomtitel.
- **Exporteren** — via de knop rechtsboven de lijst; u krijgt het huidige overzicht als bestand.
- **Openen** — klik op een rij om de volledige fiche te zien.

## Een medewerker toevoegen of wijzigen

Klik op **Nieuwe medewerker**, of open een bestaande rij. In beide gevallen krijgt u dezelfde fiche.

<!-- AFBEELDING: de medewerkersfiche met de vier blokken -->

De fiche bestaat uit vier blokken.

### Identificatie

De **code** en de **naam** zijn verplicht. De code is de korte sleutel waarmee de medewerker overal in de
toepassing herkend wordt — op een werkorder, in een ploeg, op een werkbon.

!!! note "De code ligt vast na het aanmaken"
    Bij een bestaande medewerker staat het codeveld grijs. Het is de sleutel waaraan alle werkorders,
    planningen en werkbonnen van die persoon hangen; ze achteraf wijzigen zou die verwijzingen losmaken.
    Klopt een code niet, maak dan een nieuwe medewerker aan en zet de oude op niet-actief.

### Adres

Straat, nummer, postcode, gemeente en land. Postcode en gemeente vullen elkaar aan: kiest u een postcode,
dan verschijnt de gemeente vanzelf.

### Contact

Telefoon, gsm en e-mail. CleanOps controleert bij het opslaan of een ingevuld nummer en e-mailadres geldig
zijn. Leeg laten mag; half ingevuld niet.

### Inzet en werkregime

<!-- AFBEELDING: het blok Inzet en werkregime met de vinkjes en het werkregime -->

Hier staat hoe de medewerker ingezet wordt.

- **Actief** — of de persoon meedraait. Wie niet meer werkt, zet u op niet-actief; de fiche en alle
  historiek blijven bestaan.
- **Op pensioen** — een aparte vlag naast Actief, zodat u het onderscheid kan maken tussen wie tijdelijk
  niet meedraait en wie gepensioneerd is.
- **Chauffeur** en **Bijrijder** — de rol bij een opdracht. Iemand kan beide zijn.
- **Uitsluiten van ploegtelling** — deze medewerker wordt niet voorgesteld bij het samenstellen van
  ploegen. Ontbreekt een actieve medewerker daar, kijk dan hier.
- **Prioriteit** — bepaalt de volgorde in keuzelijsten: hoger komt bovenaan. Zo staan uw vaste chauffeurs
  vooraan waar u ze kiest, in plaats van alfabetisch tussen de rest.
- **Werkregime** — de dagen waarop de persoon werkt, met daarnaast het percentage van een voltijdse week.

## Het logboek

Achteraan de fiche staat het tabblad **Logboek**: wie welk veld wanneer gewijzigd heeft, en van welke waarde
naar welke. Het logboek is alleen-lezen — er valt niets in te schrappen of aan te passen.

<!-- AFBEELDING: het tabblad Logboek met enkele wijzigingsregels -->

## Een medewerker verwijderen

Op de fiche staat onderaan **Verwijderen**. De medewerker verdwijnt uit de lijst maar blijft bestaan in de
prullenbak, waar een beheerder hem kan terugzetten.

Wie ooit op een werkorder gestaan heeft, verwijdert u beter niet: zet hem op niet-actief. Dan blijft alles
wat aan die persoon hangt leesbaar, en verschijnt hij niet meer in keuzelijsten.

## Veelgestelde vragen

**Een medewerker staat niet in de lijst.**
Kijk bovenaan bij **Tonen**: die staat standaard op de actieve medewerkers. Zet hem op alle. Staat de
persoon er dan nog niet bij, kijk dan in de prullenbak.

**Een actieve medewerker verschijnt niet bij het samenstellen van een ploeg.**
Controleer op zijn fiche het vinkje **Uitsluiten van ploegtelling**.

**Mijn vaste chauffeurs staan onderaan in de keuzelijsten.**
Geef ze een hogere **prioriteit** op hun fiche. De keuzelijsten sorteren op prioriteit vóór ze alfabetisch
sorteren.
