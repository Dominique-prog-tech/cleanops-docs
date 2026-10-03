# Klanten

Het klantenbestand van CleanOps: alle klanten van uw bedrijf, met hun gegevens, de adressen waar gewerkt wordt,
en alles wat aan hen hangt — contracten, offertes, facturen en openstaande posten.

![De klantenlijst van de demo, met het label geblokkeerd bij Garage Demo & Zonen en geen nieuwe opdrachten bij Camping Zonnedal](images/klanten-lijst.png "Klanten")

## Het scherm openen

Klik links in het menu, onder **CRM**, op **Klanten**.

## De lijst

Per klant ziet u het nummer, de zoeknaam, de naam, een telefoonnummer (de gsm, en anders het vaste nummer), de
postcode, de gemeente, de betaaltermijn en het e-mailadres. Staat er naast de naam **geblokkeerd** of **geen
nieuwe opdrachten**, dan draagt de klant die aanduiding op zijn fiche.

- **Zoeken** — de cursor staat meteen in het zoekveld. U mag meerdere woorden typen; elk woord moet ergens bij
  de klant voorkomen. *janssens gent* vindt dus de klanten die Janssens heten en in Gent wonen. Er wordt gezocht
  in het nummer, de zoeknaam, de naam (beide regels), de straat, de postcode, de gemeente, het btw-nummer, het
  e-mailadres en de telefoonnummers. Een telefoonnummer vindt u met of zonder spaties.
- **Sorteren** — klik op een kolomtitel; nog eens klikken keert de volgorde om.
- **Exporteren** — via de knop rechtsboven krijgt u de lijst zoals ze nu gefilterd is als bestand.
- **Openen** — dubbelklik op een rij om de fiche van die klant te openen.
- **Journaal** — de strook rechts toont de bijlagen en het logboek van de klant die u in de lijst aanklikt,
  zonder de fiche te openen.

## Een nieuwe klant

Klik op **Nieuwe klant**. U krijgt een lege fiche; de velden met een sterretje zijn verplicht. Na **Opslaan**
opent de fiche van de nieuwe klant, met de tabbladen erbij.

## De klantfiche

Bovenaan staan de naam en het klantnummer, daaronder een rij tabbladen. Links **Fiche** en **Adressen** —
dat is de klant zelf. Rechts daarvan staat wat aan de klant hangt: **Contracten**, **Offertes**, **Facturen**,
**Openstaand** en **Notities**, en achteraan **Bijlagen** en **Logboek**.

Elk tabblad blijft staan, ook als er niets in zit; het aantal staat tussen haakjes in de titel. "Offertes (0)"
betekent dus dat er geen offertes zijn.

![De fiche van Tuincentrum De Linde op het tabblad Fiche, met de tabbladen erboven en onderaan de opmerkingen](images/klant-fiche.png "Klantfiche")

### Het tabblad Fiche

| Veld | Toelichting |
|---|---|
| Zoeknaam | De naam in hoofdletters. CleanOps maakt ze zelf uit de naam; ze bepaalt de volgorde in de lijst. |
| Betaaltermijn * | De termijn waarmee de vervaldag van een factuur berekend wordt. U kiest uit de betalingstermijnen van Platformbeheer. |
| Naam *, Naam (2e regel) | De naam zoals hij op documenten komt, elk hoogstens 30 tekens. |
| Straat *, Nr, Postcode *, Gemeente *, Land | Het adres van de klant. Na de postcode biedt Gemeente de plaatsen van die postcode aan (9800: Deinze, Astene, Vinkt…); u mag ook zelf typen. |
| Taal * | De taal van de documenten voor deze klant. |
| Klanttype | **Bedrijf** of **Particulier**. Een bedrijf heeft een btw-nummer nodig. |
| Btw-nummer | Een Belgisch nummer wordt op zijn controlecijfer getoetst. Met **Ophalen** vult CleanOps de naam en het adres in uit de KBO; wat de KBO niet kent, blijft staan zoals het was. |
| Contact | De contactpersoon bij de klant. |
| Telefoon, Gsm, Fax, E-mail | Een telefoonnummer, gsm-nummer of e-mailadres moet geldig zijn; de fax niet. |
| Geblokkeerd | De klant blijft gewoon bruikbaar, maar staat met een label in de lijst en valt op in de planning. Bij een nieuwe werkorder meldt CleanOps het. |
| Ontvangt rappels | Zet dit af voor een klant die u niet wilt aanmanen. |
| Geen nieuwe opdrachten | Bij een nieuwe werkorder voor deze klant vraagt CleanOps eerst een bevestiging. |
| Opmerkingen | Vrije tekst bij de klant, zoals contactgegevens van personen of afspraken. |

Klik op **Opslaan** om te bewaren. Ontbreekt er een verplicht veld, dan zegt CleanOps welk. Een e-mailadres,
telefoonnummer of btw-nummer dat niet klopt, wordt geweigerd — ook als u het zelf niet gewijzigd hebt; verbeter
het dan eerst. **Annuleren** brengt u terug naar de lijst zonder te bewaren.

### Het tabblad Adressen

De uitvoeringsadressen: de plaatsen waar het werk gebeurt. Een klant met meerdere panden heeft één adres op zijn
fiche en meerdere uitvoeringsadressen. Heeft een ander adres van dezelfde klant dezelfde straat, hetzelfde
nummer en dezelfde postcode, dan staat er **dubbel** bij.

Met **Nieuw adres** voegt u er één toe; een rij openen brengt u naar het adres zelf.

![Een uitvoeringsadres van Tuincentrum De Linde, met een werkinstructie, het mee te nemen materiaal en de bereikbaarheid per dag](images/klant-adres.png "Uitvoeringsadres")

Op een uitvoeringsadres zijn straat, postcode en gemeente verplicht. Verder:

- **Opmerkingen**, **Werkinstructie (komt op de opdracht)** en **Mee te nemen materiaal** — wie dit adres kiest
  op een werkorder, krijgt deze teksten daar aangevuld: de opmerkingen als interne opmerking, de werkinstructie
  en het materiaal in hun eigen veld. Wat al op de werkorder stond, blijft staan.
- **Bereikbaarheid** — per dag *Gewoon*, *Moeilijk* of *Niet mogelijk*. Wie dit adres kiest op een nieuwe
  werkorder, ziet op welke dagen het moeilijk of niet bereikbaar is.
- **Aanvaardt geen nieuwe opdrachten meer** — bij een nieuwe werkorder op dit adres vraagt CleanOps eerst een
  bevestiging.

**Verwijderen** legt het adres in de [prullenbak](beheer/prullenbak.md). Met **← Klant** keert u terug naar
het tabblad Adressen.

### Wat aan de klant hangt

**Contracten** — de periodieke contracten van deze klant, met nummer, omschrijving, frequentie en startdatum.
Uit deze contracten ontstaan de werkorders.

**Offertes** — met nummer, datum, omschrijving, totaal en status.

**Facturen** — de facturen en creditnota's, met nummer, type, datum, totaal, vervaldag en mededeling. De
mededeling is de gestructureerde referentie die de klant bij zijn betaling vermeldt.

**Openstaand** — wat er van deze klant nog openstaat. Bovenaan staat het openstaande saldo, in het rood als het
groter is dan nul. Per post ziet u het document, de datum, de vervaldag, het openstaande bedrag en het aantal
rappels. Daaronder staat de **rappelhistoriek**: de verstuurde rappels, met datum, document en niveau.

**Notities** — de gedateerde aantekeningen bij deze klant, met de datum waarop ze genoteerd zijn en de datum
waarop u ze wilde terugzien (**Onthoud op**).

**Bijlagen** — de documenten bij deze klant. Met **Bijlage** voegt u een bestand toe, tot 25 MB; per bijlage
past u de omschrijving aan of haalt u ze weg.

**Logboek** — wie welk veld van deze klant gewijzigd heeft, wanneer, en van welke waarde naar welke. Het nieuwste
staat bovenaan.

Elk tabblad heeft een eigen exportknop, zodat u één onderdeel apart kunt uitvoeren.

### De knoppen onderaan

Naast **Opslaan** en **Annuleren** kan de fiche drie knoppen dragen: **Nieuwe werkorder**, **Nieuwe offerte** en
**Voorschotfactuur**. U ziet er een enkel wanneer u het recht hebt om te maken wat hij maakt, én het onderdeel
waar hij naartoe leidt voor u vrijgegeven is. Wat u zo aanmaakt, verschijnt in het bijbehorende tabblad.

!!! info "Niet elke knop is voor iedereen zichtbaar"
    Welke knoppen u ziet en welke rijen u kunt openen, hangt af van wat u mag. Een onderdeel dat nog niet
    vrijgegeven is, verschijnt niet in uw menu — en de knoppen die ernaartoe leiden, toont CleanOps u dan ook
    niet. Ziet uw collega een knop die u niet heeft, dan is dat het verschil in rechten en geen storing.

## Een klant verwijderen

**Verwijderen** onderaan de fiche legt de klant in de [prullenbak](beheer/prullenbak.md); van daaruit haalt u hem
terug. Heeft de klant lopende contracten, dan zegt de vraag hoeveel: die maken geen werkorders meer zolang de
klant in de prullenbak ligt.

## Veelgestelde vragen

**Ik kan een klant niet opslaan: "Ongeldig e-mailadres" (of telefoonnummer).**
Het veld bevat een waarde die niet klopt, bijvoorbeeld een spatie midden in een e-mailadres. Verbeter het veld
en sla opnieuw op.

**Ik vind een klant niet terug.**
Zoek op een deel van de naam, de straat, de postcode of het telefoonnummer. Staat de klant er echt niet meer,
kijk dan in de [prullenbak](beheer/prullenbak.md).
