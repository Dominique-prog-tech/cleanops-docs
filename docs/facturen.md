# Facturen

Facturen toont al uw verkoopdocumenten: de facturen en creditnota's uit uw vorige toepassing en die u in CleanOps boekte. Hier
maakt u een factuur met vrije lijnen, drukt u een factuur af, wijzigt u een factuur die nog niet verstuurd is en crediteert u ze.
Werkorders factureert u in [Facturatie](facturatie.md).

![De lijst Facturen van de demo met facturen en een creditnota, de filters Type en Boekjaar, de knop Nieuwe factuur, de knop Naar de boekhouding en de kolommen In boekhouding en Gecrediteerd door](images/facturen-lijst.png "Facturen")

## Het scherm openen

Klik links in het menu, onder **Verkoop**, op **Facturen**. U ziet het met de rol **Financieel** of als beheerder. Facturen boeken,
wijzigen en crediteren vraagt daarnaast het recht *Facturen opmaken*; dat heeft standaard enkel de beheerder.

## De lijst

| Kolom | Wat erin staat |
|---|---|
| Nr, Type | Het documentnummer en of het een factuur of een creditnota is. |
| Datum, Klant, Totaal | De documentdatum, voor wie, en het bedrag met btw. |
| Vervaldag | Wanneer de factuur betaald moet zijn. |
| Verstuurd | Hoe het document verstuurd is: *post*, *mail* of *Peppol*. Leeg: nog niet verstuurd. |
| In boekhouding | *ja* als het document al naar uw boekhoudkantoor ging. |
| Mededeling | De gestructureerde mededeling. |
| Gecrediteerd door | Het nummer van de creditnota die deze factuur crediteert. |

Kies bovenaan een **Type**, een **Boekjaar** of een **Periode**, of zoek op nummer, klant of mededeling. Klik een document aan en
open rechts de strook **Journaal** voor zijn bijlagen en logboek. Dubbelklik om het te openen.

Onder de filters staat hoeveel documenten de selectie telt, met hun totaal zonder en met btw. Een creditnota telt negatief:
met de **Periode** op **Deze maand** is het bedrag zonder btw de omzet van de maand, het getal van de tegel *gefactureerd
deze maand* op het [dashboard](dashboard.md).

### Naar de boekhouding

Elke ochtend gaan de facturen en creditnota's tot en met gisteren vanzelf naar uw boekhoudkantoor, als dat op de
[bedrijfsfiche](beheer/bedrijfsfiche.md#boekhouding) aan staat. Met **Naar de boekhouding…** doet u het meteen: het venster zegt
eerst hoeveel documenten wachten en naar welk adres ze gaan, en verstuurt pas als u op **Versturen** klikt. Lukt een document niet,
dan ziet u waarom; het gaat de volgende ochtend opnieuw mee.

Staat de export uit, of maakt uw vorige toepassing de facturen nog, dan zegt het venster dat en verstuurt het niets.

## Een nieuwe factuur

Met **Nieuwe factuur** maakt u een factuur voor iets dat geen werkorder heeft, bijvoorbeeld een verplaatsing of een
materiaallevering.

1. Klik bovenaan de lijst op **Nieuwe factuur**, zoek de klant op naam of nummer en klik op **kies**.
2. Vul de **Factuurdatum** in (standaard vandaag), en eventueel de **Klantreferentie**, de **Koptekst** en de **Slottekst**. Met
   **Factuurtekst invoegen** zet u een tekst uit de [factuurteksten](beheer/factuurteksten.md) achteraan in het veld, in de taal
   van de klant.
3. Vul de **lijnen** in. Een **Tarief** kiezen vult de omschrijving, de eenheid, de prijs en de btw-code in; u kunt ze daarna
   aanpassen. Een omschrijving langer dan 35 tekens komt volledig onder de lijn. Met de knoppen rechts dupliceert of verwijdert u
   een lijn, met **+ Regel toevoegen** komt er een bij.
4. Onderaan ziet u het totaal zonder btw, de btw en het totaal met btw, zoals ze geboekt worden.
5. Klik op **Factuur boeken**. CleanOps vraagt het nog eens, met het bedrag. De factuur krijgt het volgende nummer, een vervaldag
   volgens de betalingstermijn van de klant en een gestructureerde mededeling, en komt in [Openstaande posten](openstaande-posten.md).
   Ze opent meteen.

![Het venster Nieuwe factuur voor Camping Zonnedal met een Koptekst, twee vrije Lijnen en de totalen, met de knop Factuur boeken](images/factuur-nieuw.png "Nieuwe factuur")

Staat er iets niet goed, bijvoorbeeld een lijn zonder btw-code, dan zegt het scherm wat er ontbreekt en wordt er niets geboekt.
Draagt een lijn 6 % btw, dan komt de attestzin vanzelf onder de slottekst.

## De factuur

![Een factuur van de demo: de gegevens bovenaan, de Lijnen in een raster dat apart scrolt en de Btw-opbouw eronder](images/factuur-fiche.png "Een factuur")

Bovenaan staan de klant, de datums, de betalingstermijn, de mededeling, de klantreferentie en de bedragen. Daaronder de
**koptekst** als die er is, de **lijnen**, de **btw-opbouw** en ernaast de **betalingen** die erop kwamen (zie [Betalingen](betalingen.md)): elk raster
scrolt apart. Onderaan staat de **slottekst**,
bijvoorbeeld de 6 %-attestzin. Rechts bovenaan vindt u **Bijlagen** en **Logboek**. Bij een lijn uit een werkorder staat het
werkordernummer; een vrije lijn heeft er geen.

Een creditnota zegt welke factuur ze tegenboekt, en een gecrediteerde factuur door welke creditnota; beide zijn een link.

Staat het document nog open, dan geeft **Betaling ingeven…** er meteen een betaling op in, met het openstaande bedrag al ingevuld
(zie [Betalingen](betalingen.md)).

### Afdrukken

**Afdrukvoorbeeld** toont de factuur als PDF, in de taal van de factuur. **Downloaden** bewaart ze; met het printerteken in de kijker
drukt u ze af. Is de factuur al verstuurd, dan vraagt CleanOps eerst of u ze toch wilt openen.

![Het Afdrukvoorbeeld van een factuur met het briefhoofd, de lijnen, de btw, de totalen en de gestructureerde mededeling](images/factuur-afdruk.png "Afdruk")

Op de factuur staan:

- het **briefhoofd** uit de [bedrijfsfiche](beheer/bedrijfsfiche.md): logo, naam, adres, btw-nummer, IBAN en BIC;
- de soort: factuur, voorschotfactuur, saldofactuur of creditnota;
- het nummer, de datum, de vervaldag, het klantnummer en de referentie van de klant;
- de klant met zijn adres en btw-nummer;
- de koptekst, de lijnen, de btw per percentage en de totalen;
- op een factuur de vraag om te betalen met de gestructureerde mededeling — niet op een creditnota;
- de slottekst en de wettelijke vermeldingen: bij 6 % de attestzin, bij 0 % de verlegging naar de medecontractant.

### Verstuurd per post

Hebt u de factuur afgedrukt en met de post verstuurd, klik dan op **Verstuurd per post**. In de lijst staat ze dan als verstuurd,
de knop verdwijnt, en de factuur kan niet meer heropend worden.

### Proef naar de boekhouding

Met **Proef naar de boekhouding…** gaat dit ene document als PROEF naar een adres naar keuze, met de elektronische factuur (UBL)
en de PDF erin. Zo gaat u met uw boekhouder na of zijn boekhoudpakket de facturen goed inleest, vóór u de dagelijkse export
aanzet. Een proef zet het document niet op *in boekhouding*.

![Het venster Proef naar de boekhouding met de uitleg en het Adres van de boekhouder, met de knop Versturen](images/factuur-proef.png "Proef naar de boekhouding")

### Kop wijzigen

**Kop wijzigen…** past de koptekst, de slottekst en de klantreferentie aan, ook op een factuur die al verstuurd is. De
gestructureerde mededeling wijzigt nooit: de klant betaalt ermee.

### Heropenen

Zolang een factuur niet verstuurd is, kunt u ze nog wijzigen met **Heropenen…**. Hetzelfde venster als bij een nieuwe factuur
opent, met de factuur erin:

- de **werkorders** op de factuur. Met het kruisje haalt u er een af; die werkorder staat daarna weer in
  [Facturatie](facturatie.md). Met **+ Werkorders toevoegen…** kiest u te factureren werkorders van dezelfde klant, uitgevoerd tot
  de factuurdatum;
- de **vrije lijnen**, die u aanpast, toevoegt of verwijdert zoals bij een nieuwe factuur;
- de klantreferentie, de koptekst en de slottekst.

![Factuur 20260002 heropenen voor Dubois Marie: de Werkorders met een kruisje om ze weg te halen, een vrije lijn erbij, en de knop Wijzigingen boeken](images/factuur-heropenen.png "Heropenen")

Klik op **Wijzigingen boeken**. CleanOps vraagt of de klant de factuur nog niet ontvangen heeft. Het nummer, de datum, de vervaldag
en de gestructureerde mededeling blijven; de lijnen, de btw, de attestzin en het bedrag in [Openstaande posten](openstaande-posten.md)
volgen de nieuwe inhoud.

De prijs van een werkorderlijn wijzigt u op de werkorder zelf: haal ze van de factuur, zet de werkorder recht (het nummer is een
link naar de werkorder) en voeg ze opnieuw toe.

**Heropenen…** staat er niet bij een factuur die verstuurd, gecrediteerd, (deels) betaald of gerappelleerd is, bij een voorschot-
of saldofactuur, bij een creditnota en bij een factuur uit uw vorige toepassing. Crediteer ze dan en maak een nieuwe.

### Creditnotastatus

Met **Creditnotastatus…** markeert u de openstaande post van een document met de hand als gecrediteerd, of haalt u die markering
weg. Een gecrediteerde post staat niet in de rappellijsten. De knop staat er enkel als het document een openstaande post heeft.

## Crediteren

Een factuur verwijderen kan niet: een factuurnummer loopt zonder gaten door. Wilt u een factuur ongedaan maken, maak dan een
creditnota.

Klik op **Crediteren**. Het venster zegt wat er gebeurt. Vink **Werkorders opnieuw te factureren** aan als u hetzelfde werk opnieuw
wilt factureren, bijvoorbeeld na een fout op de factuur: de werkorders staan dan weer in [Facturatie](facturatie.md). Klik op
**Crediteren**. De creditnota krijgt het volgende nummer uit de reeks van de creditnota's en opent meteen.

Een factuur die al gecrediteerd is, kan niet nog eens gecrediteerd worden.

## Veelgestelde vragen

**Kan ik een factuur mailen of via Peppol versturen?**
Nog niet. Download de PDF in het **Afdrukvoorbeeld** en voeg ze bij uw mail. Klik daarna op **Verstuurd per post** als u wilt dat
de factuur als verstuurd geldt.

**Ik zie Heropenen… niet bij een factuur.**
De factuur is verstuurd, gecrediteerd, betaald of gerappelleerd, of het is een voorschot-, saldo- of creditnota. Crediteer de
factuur en maak een nieuwe.

**Waarom staan de werkorderlijnen vast bij het heropenen?**
Hun prijs komt van de werkorder. Haal de werkorder van de factuur, zet ze recht en voeg ze opnieuw toe.

**Een voorschotfactuur laat zich niet crediteren.**
Het voorschot is al afgetrokken op een saldofactuur. Crediteer eerst die saldofactuur; daarna is het voorschot weer open.

**Waarom heeft een creditnota een nummer als 20269001?**
Facturen en creditnota's hebben elk hun reeks per boekjaar: een factuur krijgt het jaar met 0001 erachter (20260001), een
creditnota het jaar met 9001 (20269001).

## Zie ook

- [Facturatie](facturatie.md)
- [Openstaande posten](openstaande-posten.md)
- [Klanten](klanten.md)
- [Factuurteksten](beheer/factuurteksten.md)
- [Bedrijfsfiche](beheer/bedrijfsfiche.md)
