# Tarieven

Uw facturatiecodes: elk tarief draagt een omschrijving, een eenheid, een eenheidsprijs en een btw-code.
Kiest u een tarief op een offertelijn, dan vult het die velden voor u in. Op dit scherm maakt u tarieven aan,
past u ze aan en voert u ze af.

<!-- AFBEELDING: het overzicht van de tarieven met de knop Nieuw tarief en het zoekveld -->

## Het scherm openen

Klik onderaan in het menu op **Platformbeheer** en daarna op de tegel **Tarieven**. De cursor staat meteen in
het zoekveld: typ een code of een deel van de omschrijving.

## De lijst

| Kolom | Wat het is |
|---|---|
| Code | de korte sleutel waarmee u het tarief kiest, bijvoorbeeld `121` |
| Omschrijving | de tekst die op de offerte- of factuurlijn komt |
| Eenheid | waarin u rekent: uur, stuk, ton, m³ … |
| Eenheidsprijs | de prijs per eenheid |
| Btw-code | de btw-code die standaard meekomt |

Bovenaan staat een teller, bijvoorbeeld **105 van 114**: hoeveel tarieven u nu ziet, en hoeveel er in
totaal zijn. Een tarief dat u zelf aanmaakte, draagt het label **eigen**.

!!! warning "Een streepje bij de prijs is niet hetzelfde als gratis"
    Staat er een **—** in plaats van een bedrag, dan is er geen prijs ingevuld. Dat betekent *nog in te
    vullen*, niet *gratis*. U vult de prijs dan op de offertelijn zelf in.

    Bij ongeveer twee derde van de tarieven is dat zo. Dat is normaal: veel werken worden per dossier
    geprijsd.

## Een tarief bewerken of aanmaken

**Dubbelklik** op een tarief in de lijst, of klik op **Nieuw tarief**. De fiche van het tarief opent.

<!-- AFBEELDING: de fiche van een tarief met alle velden -->

| Veld | Wat u invult |
|---|---|
| **Code** *(verplicht)* | maximaal 5 tekens. Ligt vast zodra het tarief bewaard is. |
| **Taal** *(verplicht)* | Nederlands of Français. Dezelfde code kan in elke taal één keer bestaan. Ligt vast zodra het tarief bewaard is. |
| **Omschrijving** *(verplicht)* | maximaal 35 tekens; komt op de offerte- of factuurlijn. |
| **Eenheid** | een keuze uit de eenheden die al gebruikt worden (UUR, T, M3 …). |
| **Eenheidsprijs** | niet negatief. Laat ze op nul als de prijs per dossier bepaald wordt. |
| **Btw-code** | een keuze uit uw btw-codes; mag leeg blijven. |
| **Tekst op de factuur** | komt bij het kiezen van dit tarief op een werkorder in haar factuuropmerking, en zo op de factuur — die leest de klant. |
| **Tekst op de offerte** | komt bij het kiezen van dit tarief in de tekst van de offertelijn — ook die leest de klant. |

Klik op **Opslaan**. Na het aanmaken van een nieuw tarief opent zijn fiche vanzelf.

## Een tarief afvoeren of terughalen

Op de fiche staat onderaan rechts **Afvoeren**. Een afgevoerd tarief verdwijnt uit de keuzelijsten, maar het
blijft bestaan: oudere werkorders, offertes en facturen dragen de code nog.

Wilt u het terug? Zet bovenaan de lijst **Tonen** op **Ook afgevoerde tarieven**, open het tarief en klik op
**Terughalen**.

<!-- AFBEELDING: de keuze Tonen, opengeklapt -->

## Een tarief op een offerte gebruiken

Op een offertelijn kiest u een tarief. CleanOps vult dan de omschrijving, de eenheid, de prijs, de btw-code en
de tekst op de offerte in. Op een werkorder komt de tekst op de factuur in de factuuropmerking.

Die velden blijven daarna **vrij aanpasbaar**. De prijs uit het tarief is een startwaarde: past u ze op de
lijn aan, dan verandert er niets aan het tarief zelf, en ook niet aan andere offertes.

## Het logboek

Op de fiche van een tarief staat het tabblad **Logboek**. Het toont wat er aan dat tarief gewijzigd is,
wanneer, door wie — en van welke waarde naar welke.

<!-- AFBEELDING: het logboek van een tarief, met een prijswijziging -->

!!! note "In de testfase"
    Zolang uw bedrijf nog in zijn huidige toepassing werkt, is CleanOps een testomgeving. Bij elke overname
    krijgen de tarieven weer de waarde uit uw huidige toepassing, en verdwijnen de tarieven die u hier
    aanmaakte. Bovenaan elk scherm staat dan het label **Testfase**.

## Veelgemaakte fouten

!!! warning
    **Een tarief met dezelfde code aanmaken als een afgevoerd tarief.** Dat kan niet: de code bestaat nog, alleen
    afgevoerd. Haal het oude tarief terug en pas het aan, in plaats van een nieuw te maken.

!!! warning
    **Een prijs op nul zetten om een werk als gratis te markeren.** Nul betekent *nog in te vullen*. Een gratis
    werk geeft u op de offertelijn zelf aan.

## Veelgestelde vragen

**Ik vind een tarief niet terug dat we vroeger gebruikten.**
Zet **Tonen** op *Ook afgevoerde tarieven*. Waarschijnlijk is het afgevoerd; het blijft bestaan voor de
oudere documenten die ernaar verwijzen.

**De prijs op mijn offerte klopt niet met wat hier staat.**
Dat kan kloppen: de prijs uit het tarief is een startwaarde en mag op de lijn aangepast worden. Kijk in
het logboek van het tarief of het zelf tussentijds gewijzigd is.

**Ik mis een eenheid in de keuzelijst.**
De keuze toont de eenheden die al in gebruik zijn. Een nieuwe eenheid toevoegen kan nog niet; meld het via
het ticketsysteem.

## Zie ook

- [Btw-codes](btw-codes.md) — de btw-codes die u op een tarief kiest
- [Platformbeheer](../platformbeheer.md) — alle beheerschermen
