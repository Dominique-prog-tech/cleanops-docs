---
description: "De planning van CleanOps: werkorders verdelen over medewerkers en dagen, op het planbord of in de planningslijst, met dagroute en afdruk."
---

# Planning

In de planning verdeelt u het werk over uw medewerkers en over de dagen van de week. U ziet dezelfde werkorders op
twee manieren: op het **planbord** sleept u ze naar een andere dag of medewerker, en in de **planningslijst** kent u
er meerdere tegelijk toe, opent u de dagroute van een chauffeur en drukt u de planning af.

![Het planbord van de demo: een week met per medewerker een rij in zijn kleur, links het werk onder Zonder datum](images/planning-bord.png "Planbord")

## Het scherm openen

Klik links in het menu, onder **Werk**, op **Planning**. Het planbord opent op de lopende week, op zaterdag en zondag
op de volgende week. Met **Lijstweergave** rechtsboven gaat u naar de planningslijst, met **Planbord** weer terug.

Op het planbord ziet u in één oogopslag wat nog moet: uitgevoerd werk blijft op zijn dag staan, in het groen en met
een ✓, en open werk op een dag die al voorbij is, draagt **Niet uitgevoerd**. De planningslijst toont standaard enkel
werk dat nog te doen is; met de filter **Status** ziet u ook het uitgevoerde en het gefactureerde werk.

## Het planbord

- **De week** — kies een week met **◀ Vorige week** en **Volgende week ▶**; **Vandaag** brengt u terug naar de
  lopende week. Zaterdag en zondag ziet u met het vinkje **Weekend**. Staat er op een weekenddag werk gepland, dan
  ziet u die dag altijd.
- **De rijen** — bovenaan **(niet toegewezen)**: werk met een datum maar zonder medewerker. Daaronder één rij per
  medewerker, in de volgorde van de [medewerkerslijst](medewerkers.md). Een medewerker die niet meer actief of met
  pensioen is, krijgt enkel een rij als er die week werk voor hem gepland staat.
- **De kleur** — de naam van de medewerker staat in zijn kleur in de planning. Die kiest u op de
  [medewerkerfiche](medewerkers.md#het-tabblad-fiche).
- **Het voertuig** — heeft de medewerker een vast voertuig, dan staat het kenteken onder zijn naam. Ook dat kiest u op
  de medewerkerfiche.
- **Zonder datum** — links staat het werk dat nog geen geplande datum heeft, met het aantal erbij.

### Een werkorder op het bord

Elke kaart toont het nummer, het tijdsdeel en de uurafspraak (bijvoorbeeld *Voormiddag* of *Tussen 13:00 en 15:00*),
de klant en de gemeente, de omschrijving en de typering (bijvoorbeeld *vetput +/- 3 T*) — die laatste enkel als ze iets
anders zegt dan de omschrijving. Wijst u een kaart aan, dan ziet u ook de werf, de typering en de signalen.

| Teken | Betekenis |
|---|---|
| 📌 | Vaste datum — niet verplaatsen. |
| ↩ | Mag vroeger uitgevoerd worden. |
| ⇅ | Met de hand geplaatst: de werkorder blijft staan waar de planner ze zette, ook vóór een vroeger tijdsdeel. |
| ✎ | Opent de werkorderfiche. Met **← Planning** komt u terug in dezelfde week. |
| ✓ | Uitgevoerd: de werkorder is te factureren of gefactureerd. |

De rand links op de kaart zegt meer over de werkorder:

- **blauwgroen** — gepland;
- **oranje** — de status is nog *Ingegeven*;
- **rood** — de klant is geblokkeerd;
- **groen** — uitgevoerd. De kaart is ook iets vager en ligt vast: u kunt ze niet verslepen, en laat u een andere
  werkorder erop los, dan komt die op haar tijdsdeel in die dag.

Staat er een rode **Niet uitgevoerd** op een kaart, dan is de werkorder gepland op een dag die al voorbij is en nog niet
uitgevoerd. Verplaats ze naar een nieuwe dag, of vul op de werkorderfiche de datum bij **Uitgevoerd** in als het werk
toch gebeurd is.

Draagt een werkorder de code van een medewerker die niet meer in de lijst staat, dan staat ze bij
**(niet toegewezen)**, met die code schuin eronder.

### De volgorde in een dag

Binnen een dag staan de werkorders van een medewerker in de volgorde waarin ze afgewerkt worden:

- **op tijdsdeel**, in de volgorde van [Tijdsdelen](beheer/tijdsdelen.md) (bijvoorbeeld **Eerste werk**, **Voormiddag**,
  **Volledige dag**, **Namiddag**). Bij een tijdsdeel **volgens uur** (bijvoorbeeld **Anders**) telt het uur van de afspraak,
  en zonder afspraak het middaguur;
- **bij hetzelfde tijdsdeel** op postcode;
- **wat met de hand geplaatst is** (⇅), blijft op de plaats waar de planner het zette. Een nieuwe werkorder komt na
  de laatste handmatig geplaatste met een vroeger of hetzelfde tijdsdeel.

Het tijdsdeel kiest u op de [werkorderfiche](werkorders.md#planning-en-uitvoering).

### Werk verplaatsen

- **Naar een andere dag of medewerker** — sleep de kaart naar die cel. De status volgt zoals op de fiche: met een
  datum en een medewerker wordt de werkorder *Gepland*.
- **Vóór een andere werkorder** — laat de kaart los óp die andere kaart. Ze staat er dan met de hand geplaatst (⇅).
- **Terug op haar tijdsdeel** — laat de kaart los in de lege ruimte van de dag. De handmatige plaats vervalt.
- **Achteraan in de dag** — zolang u sleept (of een kaart gekozen hebt), staat onder het werk van elke dag het vak
  **↓ Achteraan**. Laat de kaart daar los, of klik erop: de werkorder komt na de laatste werkorder van die dag.
- **Zonder muis** — klik een kaart: bovenaan staat *Werkorder … gekozen*. Klik dan een andere kaart of een lege plaats
  in een dag. Met **Annuleren** kiest u niets.
- **Werk zonder datum inplannen** — sleep de kaart van links naar een dag.
- **Naar een andere week** — zolang u sleept, staat links en rechts van het bord een strook *Vorige week* en *Volgende
  week*. Blijf er even op en het bord springt een week, zolang u erop blijft. Laat de kaart dan los op een dag van die
  week. Laat u ze nergens los, dan blijft ze gekozen: klik een dag om ze te plaatsen, of **Annuleren**.

Heeft de werkorder een **vaste datum**, dan vraagt CleanOps *Toch verplaatsen?* zodra u ze naar een andere dag
sleept. Een andere plaats op dezelfde dag vraagt niets.

Sleept u een werkorder naar een medewerker op een dag dat hij afwezig is (verlof, ziekte), dan blijft de werkorder daar
staan en waarschuwt CleanOps erbij.

!!! info "Een datum weghalen"
    Zonder datum terugzetten gaat niet op het bord. Dat doet u in de planningslijst: open **Toewijzen** en maak de
    **Geplande dag** leeg. De werkorder gaat dan terug naar *Ingegeven*.

### Vrije blokken en verlof

Een **vrij blok** houdt een dag of een tijdsdeel van een medewerker vrij zonder werkorder: een opleiding, het voertuig
in de garage, een dag op het depot.

- Met **+ Blok** bovenaan kiest u zelf de medewerker en de dag. Sneller: wijs een vak aan en klik op de **+** die erin
  verschijnt; de medewerker en de dag staan dan al ingevuld.
- Vul de **omschrijving** in en kies eventueel een **tijdsdeel**. Zonder tijdsdeel geldt het blok de hele dag en staat
  het bovenaan het vak; met een tijdsdeel staat het tussen de werkorders, vóór het werk van dat tijdsdeel.
- Een klik op een blok opent het opnieuw, om het te wijzigen of te **verwijderen**.

Een blok staat ook op de afgedrukte planning.

**Verlof** uit de verlofmodule verschijnt vanzelf als rood blok bovenaan het vak, met de soort, "halve dag" op de eerste
dag van een halve dag, en de omschrijving. U wijzigt het niet op het planbord maar op de fiche van de medewerker (zie
[Medewerkers](medewerkers.md)).

## De planningslijst

Dezelfde werkorders als een lijst, gegroepeerd per dag — standaard die van deze week. Het werk zonder datum staat onder
**Nog in te plannen**. Met **Nieuwe werkorder** rechtsboven kiest u een klant en maakt u er meteen een aan (zie [Werkorders](werkorders.md#een-nieuwe-werkorder)).

![De planningslijst van de demo: de week per dag, met de signalen, de medewerker in zijn kleur en de knop Toewijzen](images/planning-lijst.png "Planningslijst")

Per werkorder ziet u de signalen (*Vaste datum — niet verplaatsen*, *Mag vroeger uitgevoerd worden*, *Groot werk*,
*Klant geblokkeerd*), de medewerker in zijn kleur, het nummer (met ⇅ als de werkorder met de hand geplaatst is), de datum
die de klant vroeg (**Gevraagd**), **Wanneer** (het tijdsdeel en het afgesproken uur), de klant, de werf, de omschrijving en
de typering. Met de kolomkiezer (het pictogram naast **Exporteren**) zet u er **Besteld**, **Straat + nr**, **Postcode**,
**Gemeente**, **Status** en **RWZI** bij; op een kolom klikken sorteert erop, bijvoorbeeld op gemeente.

Rechts staat de strook **Journaal**. Klap ze open om de gekozen werkorder te zien zonder de lijst te verlaten: de klant, het
adres en de telefoon, de gevraagde datum en de tijden, wie en met welk voertuig, de omschrijving, de instructies voor de
werknemer, het materiaal en de interne opmerking — en daaronder de bijlagen en het logboek. Ze blijft open terwijl u een
andere rij kiest.

- **Periode** — kies **Vandaag**, **Vorige week**, **Deze week** (de standaard), **Volgende week**, **Deze maand** of
  **Volgende maand**, of vul onder *Eigen periode* een **Van** en **Tot en met** in en klik op **Toepassen**. Een periode
  is hoogstens drie maanden lang. **← Vorige** en **Volgende →** schuiven op met de lengte van de periode: een week per
  week, een maand per maand. Onder de knoppen staat hoeveel werkorders er in die periode gepland zijn en hoeveel er nog
  in te plannen zijn.
- **Status** — **Te doen** (de standaard): werk dat ingegeven of gepland is. **Uitgevoerd, te factureren** en
  **Gefactureerd** tonen het werk van de periode dat al gedaan is. Plannen kan enkel bij **Te doen**: bij de andere twee
  staan **Toewijzen**, het menu voor de volgorde en de knoppen voor een selectie er niet.
- **Contract** — **Alles**, **Zonder contract** of **Met contract**: werk dat uit een [contract](contracten.md)
  voortkomt, of losse opdrachten.
- **Dag** — **Hele week** (of **Hele periode**), of één dag van de periode. Dan staat onder de knoppen hoeveel
  werkorders er die dag gepland zijn, en drukt **Afdrukken** enkel die dag af. Kiest u een andere periode, dan staat
  **Dag** terug op de hele periode. De tegel
  *op de planning vandaag* op het [dashboard](dashboard.md) opent de lijst op de dag van vandaag.
- **Medewerker** — **Alle**, **Alle toegewezen** (met een datum én een medewerker), **Niet toegewezen**, of één
  medewerker: dan ziet u enkel zijn werk.
- **Zoeken** — de cursor staat meteen in het zoekveld. Er wordt gezocht in het nummer, de klant, de straat, het
  huisnummer, de postcode, de gemeente, de telefoon, de medewerker, het voertuig, de werkzaamheden, de omschrijving, het
  contract en de interne opmerking, en ook in de dag (bijvoorbeeld *06/10*), de werf, de typering, de status en de
  andere kolommen — ook als die kolom niet getoond wordt. Hoofdletters, accenten en spaties tellen niet; elk woord moet
  ergens voorkomen. De tellers en **Afdrukken** volgen de zoekterm.
- **Openen** — dubbelklik op een rij om de werkorderfiche te openen. Met **← Planning** komt u terug in dezelfde
  periode, met dezelfde filters.

### Eén werkorder toewijzen

Klik in de rij op **Toewijzen**. Kies de **Medewerker** en de **Geplande dag**, en klik op **Bewaren**. Maakt u de
geplande dag leeg, dan komt de werkorder terug bij het werk zonder datum.

### De volgorde in de lijst

Binnen een dag en een medewerker staat de lijst in dezelfde volgorde als het planbord (zie
[De volgorde in een dag](#de-volgorde-in-een-dag)). De kolom **Wanneer** toont waarop die volgorde steunt: het tijdsdeel en
het afgesproken uur.

Wilt u een werkorder verschuiven, open dan het menu **⋯** naast **Toewijzen** in haar rij:

- **Omhoog** en **Omlaag** — één plaats hoger of lager binnen de dag en de medewerker. De werkorder is dan met de hand
  geplaatst: naast het nummer staat ⇅.
- **Terug op zijn tijdsdeel** — enkel bij een werkorder die met de hand geplaatst is: de handmatige plaats vervalt.

Het menu staat er enkel als er iets te kiezen valt, bijvoorbeeld niet bij een werkorder die alleen op haar dag staat.

### Meerdere werkorders tegelijk

Vink de werkorders aan. Boven de lijst verschijnt wat u met die selectie kunt doen. Het vakje in de kop vinkt alles op de
pagina aan; een pagina telt 200 werkorders, zodat ook een drukke week er in één keer op staat.

![De planningslijst met twee aangevinkte werkorders en de knoppen Toewijzen, Verplaatsen, Wisselen en Status RWZI](images/planning-selectie.png "Selectie")

| Knop | Wat er gebeurt |
|---|---|
| Toewijzen… | Kies een medewerker; alle aangevinkte werkorders gaan naar hem. Laat u het veld leeg, dan gaan ze naar niemand. |
| Verplaatsen… | Kies een geplande dag; alle aangevinkte werkorders gaan naar die dag, bij dezelfde medewerker. |
| Wisselen | Het werk van twee medewerkers wordt omgewisseld. Dit kan enkel als de selectie werk van precies twee medewerkers bevat. CleanOps vraagt eerst een bevestiging. |
| Status RWZI | Zet RWZI aan waar het uit stond en uit waar het aan stond. CleanOps meldt hoeveel er aan- en uitgezet zijn. |

Bij **Toewijzen…** en **Verplaatsen…** vervalt de handmatige plaats in de dag: de werkorder komt op haar tijdsdeel. Bij
**Wisselen** blijft de volgorde in de dag.

Kiest u een andere periode, een ander filter of een andere zoekterm, dan vervalt de selectie. Zo raakt een knop nooit werk dat u niet meer ziet.

### De dagroute

Het routeteken naast **Toewijzen** in de lijst, of het kleine routeteken in een vak van het planbord (vanaf twee
adressen), opent de dagroute van die medewerker op die dag: van het adres op de
[bedrijfsfiche](beheer/bedrijfsfiche.md), langs de adressen, en terug.

- **Planningsvolgorde** toont de adressen in de volgorde van de planning, met per rit de afstand en de rijtijd, en het
  totaal.
- **Optimale route** zet dezelfde adressen in de kortste volgorde. Het totaal van de planning staat ernaast, zodat u
  ziet wat het scheelt.
- **Openen in Google Maps** toont de route op de kaart, in de volgorde die u ziet. Google Maps neemt hoogstens 9
  tussenstops in één route; heeft de dag er meer, dan krijgt u de route in delen die op elkaar aansluiten.
- **Volgorde overnemen** (met de optimale route in beeld) zet de werkorders van die dag in die volgorde in de planning,
  met de hand geplaatst (⇅). Uitgevoerd werk blijft staan. U ziet de knop enkel als u de planning mag wijzigen en als
  de volgorde echt verandert.

Uitgevoerd werk staat met ✓ in de route: het telt mee in de kilometers. Een werkorder zonder adres staat er niet in.

<!-- AFBEELDING: het venster Dagroute met de knoppen Planningsvolgorde en Optimale route, de stops met km en minuten, het Totaal, Openen in Google Maps en Volgorde overnemen -->

!!! info "Wanneer er niet gerekend wordt"
    Zonder adres op de bedrijfsfiche, of met meer dan 25 adressen op één dag, berekent CleanOps geen route: Google
    aanvaardt er niet meer. De lijst en de link naar Google Maps blijven wel staan.

### Afdrukken

**Afdrukken** opent een menu met drie keuzes:

- **Planning per datum en medewerker** — het overzicht van wat de lijst toont (zie hieronder).
- **Werkbonnen per medewerker en datum** — de [werkbonnen](werkbonnen.md) voor dezelfde periode (of de gekozen dag) en,
  als u er een koos, dezelfde medewerker. Ze opent in hetzelfde **Afdrukvoorbeeld** als op het scherm Werkbonnen. Deze
  keuze kan enkel bij de status **Te doen**, en niet bij **Niet toegewezen**: een werkbon is werk dat nog moet gebeuren,
  voor een chauffeur.
- **Excel met alle velden** — een Excel-bestand van wat de lijst toont, met alle velden van elke werkorder, ook die van
  de verborgen kolommen: onder meer de dag, de naam van de medewerker, de tijden, de vinkjes, de telefoon, de instructies,
  het materiaal, de interne opmerkingen, het voertuig, het contract en de factuur.

**Planning per datum en medewerker** maakt het overzicht *Planning per datum en werknemer*: wat de lijst nu toont, dus dezelfde periode, dag,
contract, medewerker en zoekterm. De kop vermeldt de medewerker en de zoekterm als u er een koos. Per dag en per
medewerker staan het tijdsdeel met de datum die de klant vroeg (*Gevraagd op*), het nummer, de klant en de werf, het adres,
de telefoon van het adres (anders die van de klant, en die van de werkorder erbij als ze anders is — met
*Terugbellen* zolang de klant nog teruggebeld moet worden), de omschrijving, de instructies en het materiaal (met
*Materiaal:* ervoor), en het voertuig — die kolom staat er enkel als minstens één werkorder op het blad een voertuig heeft.
Onder elke werkorder staan lege vakken **Starttijd**, **Eindtijd** en **Notities**, die de ploeg met de
hand invult. Het werk zonder datum staat achteraan onder *Nog in te plannen*. Een dag of een medewerker staat nooit alleen
onderaan een blad: de kop gaat mee naar het volgende blad, bij zijn werkorders.

Het overzicht opent in een **Afdrukvoorbeeld**. Met **Downloaden** bewaart u het als PDF; met het printerteken in de
kijker drukt u het af.

![Het venster Afdrukvoorbeeld met de planning per datum en werknemer, liggend, met per dag de werkorders van elke medewerker](images/planning-afdruk.png "Afdruk")

## Kaart en route

Op de [werkorderfiche](werkorders.md#planning-en-uitvoering) staan onder het uitvoeringsadres twee links naar Google
Maps: **Kaart** toont het adres, **Route** de weg ernaartoe van waar u nu bent.

## Veelgestelde vragen

**Ik kan niets verslepen, en ik zie geen knop Toewijzen.**
U mag de planning enkel bekijken. Vraag uw beheerder om het recht om de planning te wijzigen.

**Een werkorder staat niet op de planning.**
Kijk of ze een geplande datum heeft: zonder datum staat ze links onder **Zonder datum**, of onder **Nog in te
plannen** in de lijst. Uitgevoerd werk staat op het planbord in het groen; in de lijst kiest u bij **Status**
**Uitgevoerd, te factureren** of **Gefactureerd**.

**Hoe zet ik een werkorder terug zonder datum?**
In de planningslijst: **Toewijzen**, maak de **Geplande dag** leeg en klik op **Bewaren**.

**De knop Wisselen staat grijs.**
De aangevinkte werkorders horen bij één medewerker, of bij meer dan twee. Vink het werk van precies twee medewerkers
aan.

**Een medewerker heeft geen kleur.**
Kies een kleur op zijn [medewerkerfiche](medewerkers.md#het-tabblad-fiche).

**De route in Google Maps loopt naar de verkeerde plaats.**
De route gebruikt het adres van de werkorder. Pas het uitvoeringsadres aan op de werkorderfiche.

## Zie ook

- [Werkorders](werkorders.md)
- [Medewerkers](medewerkers.md)
- [Contracten](contracten.md)
