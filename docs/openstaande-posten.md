# Openstaande posten

Openstaande posten is uw rappelbeheer: de facturen en creditnota's die nog niet (volledig) betaald zijn. Hier ziet u wat
vervallen is, maakt u een rappel aan en houdt u bij wie u al aanmaande.

![De lijst Openstaande posten van de demo in de stand Vervallen, met de kolommen Telefoon, Document, Vervaldag, Openstaand, Rappels en Volgende](images/openstaande-posten-lijst.png "Openstaande posten")

## Het scherm openen

Klik links in het menu, onder **Verkoop**, op **Openstaande posten**. U ziet het met de rol **Financieel** of als beheerder.
Rappels inboeken en de rappelgegevens wijzigen vraagt daarnaast het recht *Rappels beheren*; dat heeft standaard enkel de
beheerder.

Het getal naast **Openstaande posten** in het menu telt de posten die aan een volgende rappel toe zijn.

## De lijst

Kies bovenaan een **Selectie**:

| Selectie | Wat u ziet |
|---|---|
| Vervallen | De posten waarvan de vervaldag voorbij is. Hier begint u: dit is wat een eerste rappel nodig heeft. Het scherm opent zo. |
| Volgende rappel | De posten die al een rappel kregen, waarvan die rappel minstens de wachttijd oud is. |
| Uitgesloten | De posten die u uitsloot van rappels. |
| Klant zonder rappels | De posten van klanten bij wie het vinkje **Ontvangt rappels** uit staat op de [klantfiche](klanten.md). |
| Alle openstaande | Alles wat openstaat, ook de creditnota's. |

De wachttijd stelt u in op de [bedrijfsfiche](beheer/bedrijfsfiche.md), bij **Wachttijd tussen twee rappels**. Leeg betekent
15 dagen.

| Kolom | Wat erin staat |
|---|---|
| Klantnr, Klant | Voor wie, met de straat en de gemeente eronder, en de opmerking als die er is. |
| Telefoon | Het gsm-nummer van de klant, anders zijn vaste nummer. |
| Document | Het dagboek en het nummer. Klik erop om de factuur te openen. |
| Vervaldag | Wanneer de post betaald moest zijn. |
| Openstaand | Wat er nog openstaat; **in het rood** als de post vervallen is. |
| Rappels | Hoeveel rappels er al vertrokken, met de datum van de laatste. |
| Volgende | De graad die een nieuwe rappel krijgt (1, 2 of 3); een streepje als de post geen rappel krijgt. |

Rechts staan de markeringen **incasso**, **waarschuwing**, **uitgesloten** en **klant zonder rappels**.
Met de kolomkiezer haalt u ook **Datum**, **Totaal**, **Betaald**, **Laatste rappel** en **Opmerking** als aparte kolom tevoorschijn.

Zoek op klant, gemeente, straat, telefoon, document of opmerking. Dubbelklik op een post om de klantfiche te openen. Klik een post
aan en open rechts de strook **Journaal** voor zijn logboek: wie wat wijzigde en elke ingeboekte rappel.

## Een rappel aanmaken

Vink de post aan en klik op **Rappel aanmaken…**. Het afdrukvoorbeeld toont de rappelbrief, met de factuur erachter op een nieuw
blad.

![Het Afdrukvoorbeeld van een rappelbrief: het briefhoofd, de klant, de graad, de factuur, het openstaande bedrag en de mededeling, met de knop Downloaden](images/openstaande-posten-rappel.png "Rappelbrief")

- De **graad** volgt het aantal verstuurde rappels: **Herinnering**, **Tweede herinnering**, en vanaf de derde **Laatste
  herinnering**.
- De brief vraagt het openstaande bedrag te betalen binnen 8 dagen, op uw rekening en met de gestructureerde mededeling van de
  factuur.
- De brief staat in de taal van de factuur.

Klik op **Downloaden** om de PDF te bewaren en ze bij uw mail te voegen. Sluit dan het voorbeeld: CleanOps vraagt **Rappel
inboeken?**. Klik op **Rappel inboeken** en het aantal rappels gaat één omhoog, met de datum van vandaag, en de rappel komt in
de rappelhistoriek van de klant. Klik op **Annuleren** als u enkel wilde kijken.

Geen rappel voor een creditnota, een post die uitgesloten is, of een klant bij wie **Ontvangt rappels** uit staat. De knop staat
dan uit, en zegt waarom.

## Rappelgegevens

Vink één post aan en klik op **Rappelgegevens…**.

![Het venster Rappelgegevens met Verstuurde rappels, Incasso, Waarschuwing en Opmerking](images/openstaande-posten-gegevens.png "Rappelgegevens")

| Veld | Wat u aanduidt |
|---|---|
| Verstuurde rappels | Het aantal rappels, met de hand bij te stellen van 0 tot 3. Dit schrijft geen regel in de rappelhistoriek. |
| Incasso | De post is doorgegeven aan een incassobureau. |
| Waarschuwing | De post vraagt een aparte opvolging. |
| Opmerking | Een korte notitie, hoogstens 100 tekens. Ze staat onder de klantnaam in de lijst. |

## Uitsluiten en weer opnemen

Vink een of meer posten aan en klik op **Uitsluiten van rappels**: ze verdwijnen uit Vervallen en Volgende rappel, en staan
voortaan onder **Uitgesloten**. Met **Weer opnemen** krijgen ze opnieuw rappels.

## Veelgestelde vragen

**Kan ik een rappel mailen vanuit CleanOps?**
Nog niet. Download de PDF in het afdrukvoorbeeld en voeg ze bij uw mail.

**Kan ik een betaling ingeven?**
Ja: selecteer de post en klik op **Betaling ingeven…**. Zie [Betalingen](betalingen.md).

**Waar zie ik welke rappels een klant al kreeg?**
Op de [klantfiche](klanten.md), tabblad **Openstaand**: daar staat de rappelhistoriek.

**Ik zie de knop Rappel aanmaken niet.**
Daarvoor is het recht *Rappels beheren* nodig. Vraag het aan uw beheerder.

## Zie ook

- [Betalingen](betalingen.md)
- [Facturen](facturen.md)
- [Klanten](klanten.md)
- [Bedrijfsfiche](beheer/bedrijfsfiche.md)
