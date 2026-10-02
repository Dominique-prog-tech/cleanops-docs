# Facturen

Facturen toont al uw verkoopdocumenten: de facturen en creditnota's uit uw vorige toepassing en die u in CleanOps boekte. Hier
drukt u een factuur af en crediteert u ze.

![De lijst Facturen van de demo met facturen en een creditnota, de filters Type en Boekjaar, en de kolom Gecrediteerd door](images/facturen-lijst.png "Facturen")

## Het scherm openen

Klik links in het menu, onder **Verkoop**, op **Facturen**. U ziet het met de rol **Financieel** of als beheerder. Facturen boeken en crediteren vraagt daarnaast het recht
*Facturen opmaken*; dat heeft standaard enkel de beheerder.

## De lijst

| Kolom | Wat erin staat |
|---|---|
| Nr, Type | Het documentnummer en of het een factuur of een creditnota is. |
| Datum, Klant, Totaal | De documentdatum, voor wie, en het bedrag met btw. |
| Vervaldag, Mededeling | Wanneer de factuur betaald moet zijn, en de gestructureerde mededeling. |
| Gecrediteerd door | Het nummer van de creditnota die deze factuur crediteert. |

Kies bovenaan een **Type**, een **Boekjaar** of een **Periode**, of zoek op nummer, klant of mededeling. Klik een document aan en
open rechts de strook **Journaal** voor zijn bijlagen en logboek. Dubbelklik om het te openen.

## De factuur

![Een factuur van de demo: de gegevens bovenaan, de Lijnen in een raster dat apart scrolt en de Btw-opbouw eronder](images/factuur-fiche.png "Een factuur")

Bovenaan staan de klant, de datums, de betalingstermijn, de mededeling en de bedragen. Daaronder de **lijnen** en de
**btw-opbouw**: elk raster scrolt apart. Onderaan staat de **slottekst** als die er is, bijvoorbeeld de 6 %-attestzin. Rechts
bovenaan vindt u **Bijlagen** en **Logboek**.

Een creditnota zegt welke factuur ze tegenboekt, en een gecrediteerde factuur door welke creditnota; beide zijn een link.

### Afdrukken

**Afdrukvoorbeeld** toont de factuur als PDF, in de taal van de factuur. **Downloaden** bewaart ze; met het printerteken in de kijker
drukt u ze af.

![Het Afdrukvoorbeeld van een factuur met het briefhoofd, de lijnen, de btw, de totalen en de gestructureerde mededeling](images/factuur-afdruk.png "Afdruk")

Op de factuur staan:

- het **briefhoofd** uit de [bedrijfsfiche](beheer/bedrijfsfiche.md): logo, naam, adres, btw-nummer, IBAN en BIC;
- de soort: factuur, voorschotfactuur, saldofactuur of creditnota;
- het nummer, de datum, de vervaldag, het klantnummer en de referentie van de klant;
- de klant met zijn adres en btw-nummer;
- de lijnen, de btw per percentage en de totalen;
- op een factuur de vraag om te betalen met de gestructureerde mededeling — niet op een creditnota;
- de wettelijke vermeldingen: bij 6 % de attestzin, bij 0 % de verlegging naar de medecontractant.

## Crediteren

Een factuur verwijderen kan niet: een factuurnummer loopt zonder gaten door. Wilt u een factuur ongedaan maken, maak dan een
creditnota.

Klik op **Crediteren**. Het venster zegt wat er gebeurt. Vink **Werkorders opnieuw te factureren** aan als u hetzelfde werk opnieuw
wilt factureren, bijvoorbeeld na een fout op de factuur: de werkorders staan dan weer in [Facturatie](facturatie.md). Klik op
**Crediteren**. De creditnota krijgt het volgende nummer uit de reeks van de creditnota's en opent meteen.

Een factuur die al gecrediteerd is, kan niet nog eens gecrediteerd worden.

## Veelgestelde vragen

**Kan ik een factuur mailen of via Peppol versturen?**
Nog niet. Download de PDF in het **Afdrukvoorbeeld** en voeg ze bij uw mail.

**Een voorschotfactuur laat zich niet crediteren.**
Het voorschot is al afgetrokken op een saldofactuur. Crediteer eerst die saldofactuur; daarna is het voorschot weer open.

**Waarom heeft een creditnota een nummer als 20269001?**
Facturen en creditnota's hebben elk hun reeks per boekjaar: een factuur krijgt het jaar met 0001 erachter (20260001), een
creditnota het jaar met 9001 (20269001).

## Zie ook

- [Facturatie](facturatie.md)
- [Klanten](klanten.md)
- [Bedrijfsfiche](beheer/bedrijfsfiche.md)
