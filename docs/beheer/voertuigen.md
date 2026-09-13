# Voertuigen

Hier staat **uw vloot**: per voertuig het kenteken, het merk, de soort, de tankinhoud, het onderhoud, de
documenten en een herinnering voor de keuring.

<!-- AFBEELDING: het overzicht van de voertuigen met de kolom Volgende keuring -->

## Het scherm openen

Klik onderaan in het menu op **Platformbeheer** en daarna op de tegel **Voertuigen**.

## Waarom de meeste velden nog leeg zijn

Uw huidige toepassing kent van een voertuig maar **twee** dingen: het kenteken en één omschrijving. Merk,
soort, chassisnummer, eerste inschrijving, keuring en tankinhoud zijn **nieuw**.

Ze zijn dus nog nergens ingevuld. U vult ze hier aan, per voertuig, en **ze blijven staan** — ook wanneer de
gegevens opnieuw uit uw huidige toepassing overgenomen worden.

!!! note "De omschrijving hoort niet bij die nieuwe velden"
    De kolom **Omschrijving** komt wél uit uw huidige toepassing en wordt daar beheerd. Bij elke overname
    wordt ze opnieuw opgehaald. Wilt u die tekst aanpassen, doe dat dan in uw huidige toepassing — een
    wijziging hier zou verdwijnen.

    Daarom staat die tekst naast merk en soort en niet in de plaats ervan: vandaag is het het enige wat
    gevuld is, en het is vrije tekst — *"MAN TREKKER"*, *"oplegger"*, *"man + oplegger"*.

## De lijst

| Kolom | Wat het is |
|---|---|
| Kenteken | de nummerplaat; dit is de sleutel waarnaar werkorders en werkbonnen verwijzen |
| Merk | het merk, bijvoorbeeld MAN of Vervaet |
| Soort | trekker, oplegger, kolkenzuiger… — u beheert die lijst zelf, zie hieronder |
| Omschrijving | de tekst uit uw huidige toepassing |
| Volgende keuring | de datum, gekleurd zodra ze nadert of voorbij is |

Met **Tonen** kiest u of afgevoerde voertuigen meedoen. De teller ernaast zegt hoeveel er getoond worden van
hoeveel in totaal.

## De soorten zelf beheren

De lijst met soorten is **van u**. Ga naar **Platformbeheer → Basistabellen** en kies bovenaan de lijst
**Soorten voertuig**. Daar voegt u toe wat u nodig hebt, in het Nederlands en het Frans.

!!! warning "Staat er niets in, dan is de keuzelijst op de fiche leeg"
    Dat is geen storing. Vul eerst een paar soorten aan bij Basistabellen; daarna kunt u ze op elke
    voertuigfiche kiezen.

## Water- en slibinhoud staan apart

Een kolkenzuiger heeft **twee** compartimenten, en dat verschil bepaalt wat hij kan ophalen. Daarom zijn het
twee velden en geen totaal:

- **Waterinhoud (m³)** — het schone water waarmee gespoeld wordt.
- **Slibinhoud (m³)** — wat er opgehaald kan worden. Dit is het getal dat een planner nodig heeft.

!!! tip "Laat ze leeg bij een voertuig zonder tank"
    Bij een trekker of een oplegger vult u niets in. **Leeg** betekent *niet van toepassing*; **0** zou
    betekenen dat het voertuig een tank heeft die niets kan bevatten. Met nullen overal wordt een lijst op
    inhoud onleesbaar.

## De keuring en haar herinnering

<!-- AFBEELDING: de melding op de startpagina dat er voertuigen op keuring wachten -->

Vult u bij een voertuig **Volgende keuring** in, dan herinnert CleanOps u eraan. Vanaf **30 dagen** vóór die
datum ziet u het op vier plaatsen:

| Waar | Wat u ziet |
|---|---|
| uw startpagina | een melding *"3 voertuigen wachten op hun keuring"* |
| de lijst | de datum oranje, of **rood en vet** zodra ze voorbij is |
| boven de lijst | een teller *"3 te keuren"* |
| de fiche zelf | een melding boven de velden van dát voertuig |

!!! note "Zonder datum is er niets om aan te herinneren"
    Een voertuig waarbij **Volgende keuring** leeg is, komt in geen enkele van die vier tellers voor. Dat is
    met opzet: aan een datum die niemand kent, kan CleanOps niet herinneren. Zou zo'n voertuig meetellen,
    dan stond er vandaag een melding over uw hele vloot — en een teller die alles aanwijst, wijst niets aan.

    Het gevolg is wel dat de herinnering **stil blijft** tot u de datums invult. Begin daarmee bij de
    voertuigen die binnenkort aan de beurt zijn.

## Een voertuig toevoegen of openen

Klik op **Nieuw voertuig**, of dubbelklik op een rij om de fiche te openen.

Het **kenteken** ligt vast zodra het voertuig bestaat: werkorders en werkbonnen verwijzen ernaar, en zou het
veranderen, dan wijzen ze naar iets dat er niet meer is.

De fiche heeft vier tabbladen:

| Tabblad | Wat er staat |
|---|---|
| Fiche | de velden hierboven |
| Onderhoud | de onderhoudsbeurten van dit voertuig |
| Documenten | het keuringsbewijs, de inschrijving, de verzekering… |
| Logboek | wie wat wanneer gewijzigd heeft aan het voertuig |

## Onderhoud bijhouden

<!-- AFBEELDING: het venster voor een onderhoudsbeurt met de controlepunten -->

Op het tabblad **Onderhoud** staat elke beurt met zijn datum, de kilometerstand, een nota en de
controlepunten die afgevinkt zijn. De jongste staat bovenaan.

Klik op **Nieuwe beurt**, of dubbelklik op een bestaande beurt om ze te wijzigen. Alleen de **datum** is
verplicht.

De **controlepunten** zijn vaste onderdelen van een beurt: hydraulische olie, olie smeren, olie vervangen,
controle onderdelen, luchtfilter, brandstoffilter en inspecties. U vinkt aan wat er gedaan is.

!!! tip "Kilometerstand leeg laten is toegestaan"
    Niet elk voertuig heeft een teller — een oplegger niet. Laat het veld dan leeg.

## Documenten aan een voertuig hangen

Op het tabblad **Documenten** sleept u bestanden naar het voertuig: het keuringsbewijs, de inschrijving, de
verzekering, een factuur van een herstelling.

!!! note "Dit bestond nog niet"
    In uw huidige toepassing kan er geen enkel document aan een voertuig hangen. Alles wat u hier oplaadt,
    is dus nieuw en blijft bewaard.

## Een voertuig afvoeren

Open de fiche en gebruik **Afvoeren**. Het voertuig verdwijnt uit de keuzelijsten maar blijft bestaan; met
**Terughalen** komt het weer terug, en het staat ook in de **Prullenbak**.

Afvoeren en niet verwijderen: bestaande werkorders en werkbonnen verwijzen naar het kenteken. Een afgevoerd
voertuig komt ook niet meer in de keuringsherinnering — het rijdt niet meer.

## Het logboek

Het tabblad **Logboek** toont wie welk veld wanneer gewijzigd heeft aan dit voertuig, en van welke waarde
naar welke. Ook wat een overname veranderd heeft, staat erin.

!!! note "Het logboek gaat over het voertuig, niet over zijn onderhoud"
    Voegt u een onderhoudsbeurt toe, dan verschijnt dat **niet** in het logboek. Het tabblad **Onderhoud**
    is zelf de geschiedenis van de beurten — daar staat elke beurt met haar datum.

## Veelgestelde vragen

**Waarom is de keuzelijst bij Soort leeg?**
Omdat de lijst met soorten nog leeg is. Vul ze aan bij **Platformbeheer → Basistabellen → Soorten voertuig**.

**Ik heb een omschrijving gewijzigd en na een tijdje stond de oude tekst er weer.**
De omschrijving wordt beheerd in uw huidige toepassing en bij elke overname opnieuw overgenomen. Wijzig ze
daar. De andere velden — merk, soort, chassisnummer, data, tankinhoud — blijven wél staan.

**Ik zie geen melding over keuringen, terwijl er voertuigen zijn.**
Dan is bij geen enkel voertuig **Volgende keuring** ingevuld, of valt geen enkele datum binnen 30 dagen. Vul
de datums in op de fiches.

**Waarom staat er bij Waterinhoud niets in plaats van 0?**
Omdat het voertuig geen tank heeft, of omdat de inhoud nog niet ingevuld is. **Leeg** en **0** betekenen hier
iets anders — zie hierboven.

**Kan ik een voertuig aan een werkorder koppelen?**
Dat veld bestaat op de werkorder en wordt vandaag nauwelijks gebruikt. Dit scherm gaat over het beheer van de
vloot zelf.
