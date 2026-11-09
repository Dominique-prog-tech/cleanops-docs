---
description: "Tarieven in CleanOps: uw facturatiecodes met omschrijving, eenheid, eenheidsprijs en btw-code — aanmaken, aanpassen en archiveren."
---

# Tarieven

Uw facturatiecodes: elk tarief draagt een omschrijving, een eenheid, een eenheidsprijs en een btw-code.
Kiest u een tarief op een offertelijn, dan vult het die velden voor u in. Op dit scherm maakt u tarieven aan,
past u ze aan en archiveert u ze. Een nieuw tarief kan ook vanop een lijn van een [factuur](../facturen.md#een-nieuwe-factuur) of een
[offerte](../offertes.md), met **Bewaren als tarief…** in het menu **⋯** van de lijn. Het komt dan in de taal van de klant.

![De lijst met de kolommen Code, Omschrijving, Eenheid, Eenheidsprijs en Btw-code, de knop Nieuw tarief en het zoekveld](../images/tarieven-lijst.png "Tarieven")

## Het scherm openen

Klik onderaan in het menu op **Platformbeheer** en daarna op de tegel **Tarieven**. De cursor staat meteen in
het zoekveld: typ een code of een deel van de omschrijving.

## De lijst

| Kolom | Wat het is |
|---|---|
| Code | de korte sleutel waarmee u het tarief kiest, bijvoorbeeld `121` |
| Taal | **NL** of **FR**: een tarief bestaat per taal, en een werkorder kiest het in de taal van de klant |
| Omschrijving | de tekst die op de offerte- of factuurlijn komt |
| Eenheid | waarin u rekent: uur, stuk, ton, m³ … |
| Eenheidsprijs | de prijs per eenheid |
| Btw-code | de btw-code die standaard meekomt |
| Verkooprekening | de algemene rekening voor het boekhoudkantoor — standaard verborgen: zet ze aan via **Kolommen kiezen** |

Bovenaan staat een teller, bijvoorbeeld **105 van 114**: hoeveel tarieven u nu ziet, en hoeveel er in
totaal zijn. Een tarief dat u zelf aanmaakte, draagt het label **eigen**.

!!! warning "Een streepje bij de prijs is niet hetzelfde als gratis"
    Staat er een **—** in plaats van een bedrag, dan is er geen prijs ingevuld. Dat betekent *nog in te
    vullen*, niet *gratis*. U vult de prijs dan op de offertelijn zelf in.

    Bij ongeveer twee derde van de tarieven is dat zo. Dat is normaal: veel werken worden per dossier
    geprijsd.

## Een tarief bewerken of aanmaken

**Dubbelklik** op een tarief in de lijst, of klik op **Nieuw tarief**. De fiche van het tarief opent.

![De fiche van een tarief met Code, Taal, Omschrijving, Eenheid, Eenheidsprijs, Btw-code, Verkooprekening, Tekst op de factuur en Tekst op de offerte](../images/tarief-fiche.png "Een tarief")

| Veld | Wat u invult |
|---|---|
| **Code** *(verplicht)* | maximaal 5 tekens, in hoofdletters bewaard. Ligt vast zodra het tarief bewaard is. Een code die enkel in hoofdletters verschilt van een bestaande in dezelfde taal (`rv1` naast `RV1`), wordt geweigerd. |
| **Taal** *(verplicht)* | Nederlands of Français. Dezelfde code kan in elke taal één keer bestaan. Ligt vast zodra het tarief bewaard is. |
| **Omschrijving** *(verplicht)* | maximaal 150 tekens; komt op de offerte- of factuurlijn. Een langere uitleg zet u in **Tekst op de factuur**. |
| **Eenheid** | een keuze uit de [eenheden](eenheden.md) van Platformbeheer (UUR, T, M3 …). |
| **Eenheidsprijs** | niet negatief. Laat ze op nul als de prijs per dossier bepaald wordt. |
| **Btw-code** | een keuze uit uw btw-codes; mag leeg blijven. |
| **Verkooprekening** | de algemene rekening voor uw boekhoudkantoor, gekozen uit het [rekeningplan](rekeningplan.md); mag leeg blijven. |
| **Tekst op de factuur** | komt bij het kiezen van dit tarief op een werkorder in haar factuuropmerking, en zo op de factuur — die leest de klant. Op een lijn van een [nieuwe factuur](../facturen.md) komt ze in het vak Tekst onder de lijn. |
| **Tekst op de offerte** | komt bij het kiezen van dit tarief in de tekst van de offertelijn — ook die leest de klant. |

Klik op **Bewaren**. Na het aanmaken van een nieuw tarief opent zijn fiche vanzelf.

## Een tarief maken of kiezen zonder uw formulier te verlaten {#potlood}

Naast elke keuzelijst **Tarief** staat een potlood ✎: op een contract en zijn lijnen, op een werkorder en haar lijnen, op een
nieuwe werkorder, op een offerte en op een nieuwe factuur. U ziet het als u tarieven mag beheren. Een klik opent de tarieven in
een venster boven uw formulier. Wat u daar al invulde, blijft staan.

![Het venster Tarieven boven een contract: de knoppen Bewerken en Nieuw tarief, en de lijst met de tarieven in de taal van de klant](../images/tarief-potlood.png "Het potlood bij Tarief")

- **Nieuw tarief** opent de fiche in het venster. Na **Bewaren** sluit het venster en staat het nieuwe tarief gekozen, net
  alsof u het uit de keuzelijst koos.
- **Dubbelklik** op een tarief om het te kiezen.
- **Bewerken** opent de fiche van het aangeklikte tarief. Na **Bewaren** is het gekozen.
- **Annuleren** op de fiche brengt u terug naar de lijst. Het kruisje sluit het venster zonder iets te kiezen.

Het venster toont enkel de actieve tarieven in de taal van de klant: dezelfde als de keuzelijst. Een nieuw tarief krijgt die
taal, en die ligt vast. Archiveren, terughalen en het logboek doet u op dit scherm, in Platformbeheer.

## Een tarief archiveren of terughalen

Op de fiche staat onderaan rechts **Archiveren**. Een gearchiveerd tarief verdwijnt uit de keuzelijsten, maar het
blijft bestaan: oudere werkorders, offertes en facturen dragen de code nog.

Wilt u het terug? Zet bovenaan de lijst **Tonen** op **Ook gearchiveerd**, open het tarief en klik op
**Terughalen**.

![De keuze Tonen, opengeklapt: Actief of Ook gearchiveerd](../images/tarieven-tonen.png "Tonen")

## Een tarief op een offerte gebruiken

Op een offertelijn kiest u een tarief. CleanOps vult dan de omschrijving, de eenheid, de prijs, de btw-code en
de tekst op de offerte in. Op een werkorder komt de tekst op de factuur in de factuuropmerking.

Die velden blijven daarna **vrij aanpasbaar**. De prijs uit het tarief is een startwaarde: past u ze op de
lijn aan, dan verandert er niets aan het tarief zelf, en ook niet aan andere offertes.

## Het logboek

Op de fiche van een tarief staat het tabblad **Logboek**. Het toont wat er aan dat tarief gewijzigd is,
wanneer, door wie — en van welke waarde naar welke.

Hetzelfde ziet u zonder de fiche te openen: klik een tarief in de lijst aan en open rechts de strook
**Journaal**. Kiest u een ander tarief, dan volgt het journaal mee.

![Het Logboek van een tarief: Gewijzigd, met de Eenheidsprijs van de oude naar de nieuwe waarde](../images/tarief-logboek.png "Logboek")

## Veelgemaakte fouten

!!! warning
    **Een tarief met dezelfde code aanmaken als een gearchiveerd tarief.** Dat kan niet: de code bestaat nog, alleen
    gearchiveerd. Haal het oude tarief terug en pas het aan, in plaats van een nieuw te maken.

!!! warning
    **Een prijs op nul zetten om een werk als gratis te markeren.** Nul betekent *nog in te vullen*. Een gratis
    werk geeft u op de offertelijn zelf aan.

## Veelgestelde vragen

**Ik vind een tarief niet terug dat we vroeger gebruikten.**
Zet **Tonen** op **Ook gearchiveerd**. Waarschijnlijk is het gearchiveerd; het blijft bestaan voor de
oudere documenten die ernaar verwijzen.

**De prijs op mijn offerte klopt niet met wat hier staat.**
Dat kan kloppen: de prijs uit het tarief is een startwaarde en mag op de lijn aangepast worden. Kijk in
het logboek van het tarief of het zelf tussentijds gewijzigd is.

**Ik mis een eenheid in de keuzelijst.**
Voeg ze toe in Platformbeheer → [Eenheden](eenheden.md). Een gearchiveerde eenheid staat er niet meer in; haal ze
daar terug.

## Zie ook

- [Btw-codes](btw-codes.md) — de btw-codes die u op een tarief kiest
- [Platformbeheer](../platformbeheer.md) — alle beheerschermen
