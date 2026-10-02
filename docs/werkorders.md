# Werkorders

Een werkorder is één opdracht voor uw ploegen: wat er moet gebeuren, bij welke klant, op welk adres, wanneer en door
wie. Werkorders ontstaan uit een [contract](contracten.md), of u maakt ze zelf aan voor een losse opdracht.

![De werkorderlijst van de demo op Openstaand, met werkorders die ingegeven, gepland en te factureren zijn](images/werkorders-lijst.png "Werkorders")

## Het scherm openen

Klik links in het menu, onder **Werk**, op **Werkorders**.

## De lijst

Per werkorder ziet u het nummer, de klant, de datum waarop ze besteld werd, de status, de datums **Uit te voeren** en
**Gepland**, de werf, de gemeente, de medewerker en het bedrag.

- **Status** — de lijst opent op **Openstaand**: alles wat ingegeven, gepland of te factureren is. Kies één status, of
  **Alle statussen** om ook de gefactureerde werkorders te zien.
- **Periode op** en **Periode** — kies eerst op welke datum u filtert (**Besteld**, **Gepland** of **Uitgevoerd**), en
  dan de periode. Bij **Gepland** kijken de vaste keuzes vooruit, bij **Besteld** en **Uitgevoerd** terug.
- **Zoeken** — de cursor staat meteen in het zoekveld. Er wordt gezocht in het nummer, de klant, de werf, het adres,
  het telefoonnummer, de medewerker, het voertuig, de omschrijving, de instructies, de interne opmerking en het
  factuurnummer. Accenten maken niet uit: *Liege* vindt ook *Liège*.
- **Sorteren** — klik op een kolomtitel; nog eens klikken keert de volgorde om.
- **Exporteren** — via de knop rechtsboven krijgt u de lijst zoals ze nu gefilterd is als bestand. Is de selectie te
  groot voor één bestand, dan zegt CleanOps hoeveel regels erin staan; verfijn dan uw filter.
- **Openen** — dubbelklik op een rij. Keert u terug naar de lijst, dan staan uw filters er nog.
- **Journaal** — de strook rechts toont de bijlagen en het logboek van de werkorder die u in de lijst aanklikt.

## Een nieuwe werkorder

Een nieuwe werkorder maakt u op de fiche van de [klant](klanten.md): klik onderaan op **Nieuwe werkorder**.

![Het scherm Nieuwe werkorder voor Tuincentrum De Linde, met de blokken Waar en wanneer, Werk en Toewijzing en facturatie](images/werkorder-nieuw.png "Nieuwe werkorder")

| Veld | Toelichting |
|---|---|
| Uitvoeringsadres | Het hoofdadres van de klant of een van zijn uitvoeringsadressen. De werkinstructie, het materiaal en de opmerkingen van het adres komen op de werkorder. |
| Uit te voeren | De dag waarop het werk moet gebeuren. |
| Werf (naam) | Een herkenbare naam voor de plaats, hoogstens 30 tekens. |
| Omschrijving * | Wat er moet gebeuren, hoogstens 35 tekens. Deze tekst komt op de factuur. |
| Instructies werknemer | Wat de ploeg ter plaatse moet weten. |
| Interne opmerking | Voor uw eigen mensen; deze tekst komt niet op de leveringsbon. |
| Medewerker, Btw-code, Tarief | Mag u nu al kiezen, of later op de fiche. |
| Groot werk, Attest vereist | Zie [de vinkjes](#de-vinkjes) hieronder. |

Boven de velden meldt CleanOps wat u moet weten vóór u inboekt:

- de klant is **geblokkeerd** — u kunt gewoon verder;
- de klant of het adres aanvaardt **geen nieuwe opdrachten** — bij **Opslaan** vraagt CleanOps eerst *Toch inboeken?*;
- het adres is op sommige dagen **moeilijk of niet bereikbaar** — ter informatie bij het kiezen van een datum.

Na **Opslaan** opent de fiche van de nieuwe werkorder.

## De werkorderfiche

Bovenaan staan het nummer en de status. Daaronder een kaart met de feiten rond de werkorder: de klant, het contract
waaruit ze voortkomt, de offerte waaruit ze ontstond, de datum van ingave, de telefoon en het e-mailadres van het
adres — of van de klant, als het adres er geen heeft —, het bedrag met de btw-code, en de factuur. Klik op de klant of het contract om het te openen.

![De werkorderfiche van Tuincentrum De Linde: de kaart bovenaan, de planning met medewerker, bijrijder en voertuig, het adres, de instructies en de vinkjes](images/werkorder-fiche.png "Werkorderfiche")

### Planning en uitvoering

| Veld | Toelichting |
|---|---|
| Status | Volgt uit de datums, u kiest hem niet zelf. Zie [de status](#de-status). |
| Medewerker, Bijrijder, Voertuig | Wie het werk doet, wie meerijdt en met welk voertuig. Als bijrijder kiest u uit de medewerkers die daarvoor aangeduid zijn. |
| Uit te voeren | Verzet u deze datum, dan schuift **Gepland** mee — zolang de werkorder niet uitgevoerd is. |
| Gepland, Uitgevoerd | De dag waarop het werk gepland staat en de dag waarop het gedaan is. |
| Tijdsdeel | Eerste werk, Voormiddag, Namiddag, Volledige dag of Anders. Bij **Anders** verschijnt een uurafspraak: *vóór*, *tussen* of *na* een uur. Het tijdsdeel bepaalt de [volgorde in de planning](planning.md#de-volgorde-in-een-dag). |
| Start-uur, Eind-uur | Wanneer het werk werkelijk begon en eindigde. Een eind-uur vóór het start-uur wordt geweigerd. |
| Uitvoeringsadres | Kiest u een ander adres, dan komen zijn werkinstructie, materiaal en opmerkingen erbij; wat er al stond, blijft staan. Onder het adres openen **Kaart** en **Route** het adres en de weg ernaartoe in Google Maps. |
| Werf (naam), Omschrijving | Zoals bij een nieuwe werkorder. |
| Typering | Een korte typering van het werk, bijvoorbeeld *septische put + vetput*. |
| Werkzaamheden, Materiaal | Vink aan wat van toepassing is en klik op **Invoegen**: de gekozen regels komen in **Instructies werknemer** of **Materiaal-opmerkingen**, waar u ze nog kunt aanvullen. |
| Instructies werknemer, Materiaal-opmerkingen | Wat de ploeg moet doen en meenemen. Beide komen op de leveringsbon. |
| Interne opmerking | Voor uw eigen mensen. |

Draagt de werkorder de code van een medewerker die niet meer in de lijst staat, dan ziet u die code met *niet meer in
de lijst* erbij. Ze blijft staan tot u iemand anders kiest.

### De vinkjes

| Rij | Vinkje | Betekenis |
|---|---|---|
| Planning | Vaste datum | De werkorder mag niet verplaatst worden. Wint van *Mag vroeger* als beide aangevinkt zijn. |
| | Mag vroeger | Het werk mag vroeger uitgevoerd worden dan gepland. |
| | Groot werk | Een grote opdracht; het staat als label op de leveringsbon. |
| | Terugbellen, Teruggebeld | De klant wil gebeld worden; vink het tweede aan zodra dat gebeurd is. |
| Uitvoering | Attest vereist, Attest gemaakt | Er hoort een attest bij dit werk, en of het al opgemaakt is. Beide staan als label op de leveringsbon. |
| | RWZI | Rioolwaterzuiveringsinstallatie. |
| | Cameraverslag vereist | Er hoort een cameraverslag bij dit werk. |

### De status

| Status | Wanneer |
|---|---|
| Ingegeven | Er is nog geen geplande datum. |
| Gepland | Er is een geplande datum én een medewerker. |
| Te factureren | Er is een uitvoeringsdatum. |
| Gefactureerd | De werkorder staat op een factuur, of de klant betaalde contant. |

Wijzigt u een datum, dan toont de fiche meteen welke status de werkorder bij het opslaan krijgt.

### Facturatie

Onderaan de fiche staat wat er gefactureerd wordt.

![Het blok Facturatie van een werkorder: Tarief, Klantreferentie, Aantal, Eenheid, Eenheidsprijs, Bedrag en Btw-code](images/werkorder-facturatie.png "Facturatie")

| Veld | Toelichting |
|---|---|
| Tarief | Kies een tarief, en CleanOps vult de eenheid, de eenheidsprijs, de btw-code en de factuuropmerking in. Het aantal blijft staan. Maakt u het tarief leeg, dan blijven die velden staan. |
| Klantreferentie | Het bestelnummer of de referentie van de klant, hoogstens 30 tekens. Komt op de factuur. |
| Aantal, Eenheid, Eenheidsprijs | Wat er gefactureerd wordt. Een correctie boekt u met een negatief aantal. |
| Bedrag | Aantal × eenheidsprijs, door CleanOps gerekend. Met de hand invullen kan enkel als aantal en eenheidsprijs allebei nul zijn, bijvoorbeeld voor een forfait. |
| Btw-code | De btw-code van de werkorder. |
| Contant betaald | De klant betaalde ter plaatse. De werkorder gaat dan niet naar de facturatie. |
| Factuuropmerking | Een tekst die op de factuur bij deze werkorder komt. |

Bij het opslaan weigert CleanOps twee dingen: een eenheid zonder aantal, en een negatieve eenheidsprijs.

Ontbreekt er een bedrag of een btw-code, dan staat er **Nog niet te factureren** met wat er ontbreekt. U kunt de
werkorder gewoon bewaren, maar ze komt pas op een factuur als beide ingevuld zijn.

Is de werkorder gefactureerd, dan liggen deze gegevens vast. Moet er iets aan veranderen, crediteer dan de factuur.

### De leveringsbon

Met **Leveringsbon** opent de bon die de ploeg meeneemt en de klant ondertekent, in de taal van de klant. Daarop
staan de klant, het uitvoeringsadres met een telefoonnummer en e-mailadres, de uitvoerder, het uur, de omschrijving,
de instructies, het materiaal en de handtekeningen. Met **Afdrukken** drukt u enkel de bon af.

![De leveringsbon van werkorder 900118 voor Tuincentrum De Linde, met onderaan de vakken voor de handtekeningen](images/leveringsbon.png "Leveringsbon")

De bon toont wat bewaard is. Hebt u iets gewijzigd, dan staat naast de knop *eerst opslaan* en kunt u hem pas
openen na **Opslaan**.

### Bijlagen en Logboek

Rechts bovenaan de fiche staan **Bijlagen** — de documenten bij deze werkorder — en **Logboek**: wie welk veld
wijzigde, wanneer, en van welke waarde naar welke.

!!! info "Niet elke link is voor iedereen een link"
    Het nummer van de offerte of de factuur kunt u enkel aanklikken als u dat onderdeel mag openen. Anders staat
    het er als tekst.

## Een werkorder verwijderen

**Verwijderen** onderaan de fiche legt de werkorder in de [prullenbak](beheer/prullenbak.md). Een gefactureerde
werkorder kunt u niet verwijderen.

## Veelgestelde vragen

**Ik kan de status niet kiezen.**
De status volgt uit de datums. Vul een geplande datum en een medewerker in voor *Gepland*, een uitvoeringsdatum voor
*Te factureren*.

**Ik kan het bedrag niet aanpassen.**
Het bedrag is aantal × eenheidsprijs. Wilt u een eigen bedrag, zet dan aantal en eenheidsprijs op nul. Is de werkorder
gefactureerd, dan ligt het vast.

**De knop Leveringsbon werkt niet.**
U hebt iets gewijzigd dat nog niet bewaard is. Klik eerst op **Opslaan**.

**Ik krijg "Een eenheid zonder aantal kan niet".**
Vul een aantal in, of maak de eenheid leeg.
