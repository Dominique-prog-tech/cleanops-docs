---
description: "Periodieke contracten in CleanOps: leg vast hoe vaak u bij een klant terugkomt; de werkorders voor de komende beurten ontstaan vanzelf."
---

# Contracten

Een contract legt vast hoe vaak u bij een klant terugkomt: om de zes maanden een put ledigen, om de twee weken een
vetput. Uit een lopend contract ontstaan de [werkorders](werkorders.md) voor de komende beurten; u hoeft ze niet zelf
aan te maken. CleanOps maakt ze elke nacht voor de komende 90 dagen, en meteen wanneer u een nieuw contract bewaart.

![De contractenlijst van de demo, met de kolommen Klant, Opvolgen op, Periodiciteit en Laatste keer, de rode opvolgdatum bij Sporthal De Ring en het label on hold bij Garage Demo & Zonen](images/contracten-lijst.png "Contracten")

## Het scherm openen

Klik links in het menu, onder **Werk**, op **Contracten**.

## De lijst

Per contract ziet u de klant, het contractnummer, **Opvolgen op**, het type contract, de omschrijving, de datum
**Vanaf**, de **Einddatum**, de **Periodiciteit**, de **Laatste keer** en de gemeente. Staat een contract on hold, dan
staat er **on hold** naast de klant. De lijst staat op klantnaam. De **Contractdatum**, de notitie **Opvolging** en
**On hold** zet u erbij met de kolomkiezer.

- **Opvolgen op** — de datum waarop u op het contract wilt terugkomen. Is die dag bereikt, dan staat de datum rood en
  vet. Houd de muis erboven om de notitie te lezen. Zie [Een contract opvolgen](#een-contract-opvolgen).
- **Opvolging** — de filter bovenaan. Kies *Op te volgen* om enkel de contracten te zien waarvan de opvolgdatum bereikt
  is.
- **Mailen…** — opent een mail aan de klant van het contract dat u aanklikte. U ziet de knop als u contracten mag
  bewerken.
- **Laatste keer** — de geplande datum van de laatste werkorder van het contract.
- **Zoeken** — de cursor staat meteen in het zoekveld. Er wordt gezocht in wat de lijst toont, ook in de
  periodiciteit: *Jaarlijks* vindt alle jaarlijkse contracten. Daarnaast vindt u een contract op de straat, de gemeente,
  de gsm en het vaste nummer van de klant, ook al staan die niet in de lijst.
- **Sorteren** — klik op een kolomtitel; nog eens klikken keert de volgorde om.
- **Exporteren** — via de knop rechtsboven krijgt u de lijst zoals ze nu gefilterd is als bestand.
- **Openen** — dubbelklik op een rij om het contract te openen.
- **Journaal** — de strook rechts toont het logboek en de mails van het contract dat u in de lijst aanklikt.

Een afgelopen contract blijft in de lijst staan, met zijn einddatum.

## Een nieuw contract

Een nieuw contract maakt u op de fiche van de [klant](klanten.md): open het tabblad **Contracten** en klik op
**Nieuw contract**. Het contract begint met vandaag als contractdatum en begindatum, en maandelijks op de eerste
als ritme. Na **Bewaren** opent het nieuwe contract.

## De contractfiche

Bovenaan staan het contractnummer en de klant; staat het contract on hold, dan staat dat erbij. Daaronder vier
tabbladen: **Contract**, **Werkorders**, **Logboek** en **Mails**.

![Het contract van Tuincentrum De Linde: om de zes maanden op de 15de, met eronder de volgende beurten](images/contract-fiche.png "Contractfiche")

### Het tabblad Contract

| Veld | Toelichting |
|---|---|
| Uitvoeringsadres | Het adres van de klant of een van zijn uitvoeringsadressen. Met **Nieuw uitvoeringsadres** maakt u er een aan; daarna keert u terug naar het contract. |
| Omschrijving | Wat er gebeurt, hoogstens 35 tekens. Heeft het contract geen opmerkingen, dan wordt dit de omschrijving en de instructie van zijn werkorders. |
| Contractnr | Een eigen nummer of referentie, hoogstens 30 tekens. |
| Type contract | Een keuze uit de lijst *Contracttypes* van de [basistabellen](beheer/basistabellen.md). |
| Contractdatum * | De datum van het contract. Mag niet in de toekomst liggen. |
| Start * | Vanaf wanneer het ritme loopt. Mag niet vóór de contractdatum liggen. |
| Einde | Vanaf deze datum komen er geen beurten meer bij. Mag niet vóór de start liggen. |
| On hold | Pauzeert het contract: er komen geen werkorders bij tot u het vinkje weghaalt. |
| Opvolgen op | De datum waarop u op dit contract wilt terugkomen. Leeg: geen opvolging. |
| Opvolging | Waarover het gaat, hoogstens 500 tekens. Deze notitie is voor uzelf: ze komt niet op een werkbon en niet in een mail. |
| Opmerkingen (komen op elke werkbon) | Een vaste tekst voor elke werkorder uit dit contract, zoals *sleutel aan het onthaal vragen*. Ze wordt de instructie voor de ploeg, en haar eerste 35 tekens de omschrijving van de werkorder. |
| Btw-code, Tarief | Komen op de werkorders van dit contract. De lijst Tarief toont de tarieven in de taal van de klant. |
| Frequentie | Het ritme — zie hieronder. |

### Het ritme

Kies onder **Frequentie** hoe vaak de beurten terugkomen. Naargelang de keuze verschijnen andere velden:

| Frequentie | Velden |
|---|---|
| Dagelijks | **Om de … dagen**. |
| Wekelijks | **Om de … weken**, en de dagen waarop: **Ma** tot **Zo**. |
| Maandelijks | **Type**: een **Vaste dag** (bijvoorbeeld de 15de) of een **Rang** (bijvoorbeeld de tweede dinsdag), en **Om de … maanden**. |
| Jaarlijks | **Type**: een **Vaste dag** of een **Rang**, en de **Maand**. |

Het kader eronder zegt in woorden wat u instelde, bijvoorbeeld *Om de 6 maanden op dag 15*. Daaronder staan de
**Volgende beurten**: de vijf eerstvolgende datums. Heeft een datum al een werkorder, dan staat er
*(werkorder bestaat)* bij.

Zo rekent CleanOps de beurten:

- Het ritme loopt vanaf de **laatste beurt** van het contract — de onderste regel in het kader zegt welke dat is.
- Een beurt in het **weekend** schuift naar maandag. Bij een wekelijks contract gelden de dagen die u aanvinkt,
  ook een zaterdag.
- Een beurt op een **feestdag** of een **sluitingsdag** schuift naar de volgende werkdag. De feestdagen en
  sluitingsdagen staan bij [Feestdagen](beheer/feestdagen.md).
- Een vaste dag die in een maand niet bestaat — de 31ste in april — wordt de laatste dag van die maand.
- Er komt geen beurt vóór de startdatum.
- Een beurt die voorbij is zonder werkorder, wordt niet ingehaald.

!!! info "Feestdagen niet bekend"
    Kan CleanOps de feestdagen even niet ophalen, dan zegt het kader dat de datums enkel met de sluitingsdagen
    rekening houden. Kijk later opnieuw.

### Als u het ritme wijzigt

Wijzigt u het ritme van een contract dat al werkorders voor de komende tijd heeft, dan vraagt CleanOps na het
bewaren of die opnieuw berekend moeten worden: **Opnieuw berekenen** of **Laten staan**. Enkel de werkorders die
niemand aanraakte, komen daarvoor in aanmerking. Een werkorder die uitgevoerd, ingepland of aangepast is, blijft
altijd staan.

### Het tabblad Werkorders

Alle werkorders van dit contract, met hun datums, status, medewerker, aantal, eenheid, eenheidsprijs, bedrag, de
datum van facturatie en het factuurnummer. Het **tarief** (code en omschrijving), de geplande datum, de bijrijder, de
instructies, het materiaal en de interne opmerking zet u aan via **Kolommen kiezen**; ze staan standaard uit omdat de
tabel anders breder wordt dan de fiche. Dubbelklik op een rij om de werkorder te openen. Ook een losse werkorder die iemand met
de hand aan dit contract koppelde, staat hier; ze telt niet als beurt (zie [Werkorders](werkorders.md)).

Met **Werkorders nu aanmaken** onderaan het tabblad Contract maakt CleanOps meteen de werkorders van dit contract voor de komende 90 dagen,
met dezelfde regels als 's nachts. Daarna toont het tabblad Werkorders de lijst, met erboven hoeveel er bijkwamen. Zolang uw vorige toepassing de werkorders
nog maakt, maakt CleanOps er geen, en dat staat er dan ook.

![Het tabblad Werkorders van het contract van Tuincentrum De Linde, met de gefactureerde en de geplande beurten](images/contract-werkorders.png "Werkorders van een contract")

### Het tabblad Logboek

Wie welk veld van dit contract gewijzigd heeft, wanneer, en van welke waarde naar welke.

### Het tabblad Mails

Wat er over dit contract gemaild werd: wanneer, aan wie, of de mail afgeleverd is (en zo niet, waarom), en de tekst
zoals ze vertrok (**Tekst tonen**).

## Een contract opvolgen

Wilt u later op een contract terugkomen — een prijs herbekijken, een verlenging bespreken —, vul dan op de fiche
**Opvolgen op** in, met onder **Opvolging** waarover het gaat, en klik op **Bewaren**.

Vanaf die dag:

- staat de datum **rood en vet** in de lijst;
- telt het contract mee in het **getal naast Contracten** in het menu;
- toont de filter **Opvolging** op *Op te volgen* het contract.

Ook een contract dat on hold staat of afgelopen is, telt mee zolang de datum er staat.

### De klant mailen

**Mailen…**, in de lijst en onderaan de fiche, opent een mail aan de klant van het contract.

![Het venster Mailen voor het contract van Sporthal De Ring, met Aan, Onderwerp, het Bericht, het vak Bestand meesturen en de Afzender, met de knop Versturen](images/contract-mailen.png "Een klant mailen over een contract")

- **Aan** — het e-mailadres van de klant (zie [Klanten](klanten.md)). Zijn andere adressen staan als vinkje onder **Cc**.
- **Onderwerp** en **Bericht** — de mailtekst *Opvolging contract*, in de taal van de klant, met het contractnummer
  ingevuld. U stelt die tekst in bij [Mailteksten](beheer/mailteksten.md); hier schrijft u wat u de klant wilt zeggen.
- Er gaat **geen bijlage** mee. Met **Bestand meesturen** voegt u zelf een bestand toe: hooguit 10 MB per bestand en
  20 MB samen.
- Rechts bovenaan opent **Klantfiche ↗** de fiche van de klant in een nieuw tabblad.

Klik op **Versturen**. De mail vertrekt echt naar de klant en staat daarna in het tabblad **Mails** van het contract.
Heeft de klant geen e-mailadres, dan zegt het venster dat: vul zelf een adres in.

### Afhandelen

Is het geregeld, maak dan **Opvolgen op** leeg met het kruisje in het veld, of zet een nieuwe datum, en klik op
**Bewaren**. Een mail sturen maakt de datum niet leeg.

## Een contract verwijderen

**Verwijderen** onderaan de fiche legt het contract in de [prullenbak](beheer/prullenbak.md). Heeft het contract nog
werkorders voor de komende tijd die niemand aanraakte, dan vraagt CleanOps of die geschrapt moeten worden:
**Schrappen** of **Laten staan**.

## Veelgestelde vragen

**De volgende beurt valt niet op de dag die ik verwacht.**
Het ritme loopt vanaf de laatste beurt, niet vanaf de startdatum. Valt een beurt in het weekend of op een feestdag,
dan schuift ze naar de volgende werkdag. Het kader op de fiche toont welke beurt als laatste telt.

**Ik wil een contract tijdelijk stopzetten.**
Vink **On hold** aan. Wilt u het voorgoed stoppen, vul dan een **Einde** in.

**Er staat een getal naast Contracten in het menu.**
Zoveel contracten hebben een opvolgdatum die bereikt is. Kies in de lijst onder **Opvolging** voor *Op te volgen* om
ze te zien.

**Ik vind een contract niet terug.**
Zoek op de klantnaam, de omschrijving of het contractnummer. Staat het er echt niet meer, kijk dan in de
[prullenbak](beheer/prullenbak.md).
