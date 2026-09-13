# Betalingstermijnen

Een betalingstermijn bepaalt **wanneer een factuur vervalt**. U kiest er één op een klantfiche; hij komt
daarna mee op de facturen van die klant.

<!-- AFBEELDING: het overzicht van de betalingstermijnen met de kolom Vervaldag -->

## Het scherm openen

Klik onderaan in het menu op **Platformbeheer** en daarna op de tegel **Betalingstermijnen**.

## De lijst

| Kolom | Wat het is |
|---|---|
| Code | de korte sleutel die op de klantfiche staat, bijvoorbeeld `30DFD` |
| Taal | in welke taal de omschrijving staat |
| Omschrijving | de tekst die de gebruiker leest |
| Vervaldag | de regel in gewone taal, bijvoorbeeld *30 dagen na factuurdatum* |

!!! note "Dezelfde code kan twee keer in de lijst staan"
    Dat is geen fout. Een termijn bestaat **per taal**: `30DFD` staat er één keer met een Nederlandse
    omschrijving en één keer met een Franse. De **berekening** is in beide gevallen dezelfde — alleen de
    tekst verschilt.

    De kolom **Taal** zegt welke welke is. Kiest u de termijn op een klantfiche, dan neemt CleanOps
    automatisch de versie in de taal van die klant.

## Hoe de vervaldag berekend wordt

Drie stappen, in deze volgorde:

1. **Tellen vanaf** — begin bij de *factuurdatum* zelf, of bij het *einde van de maand* waarin de factuur
   valt.
2. **Dagen uitstel** — tel dat aantal dagen erbij.
3. **Vaste dag van de maand** — schuif daarna door naar die dag. Is die dag al voorbij, dan gaat het naar de
   volgende maand. Staat hier **0**, dan gebeurt er niets.

!!! tip "Het venster rekent een voorbeeld voor u uit"
    Terwijl u de velden invult, ziet u onderaan staan wanneer *een factuur van vandaag* zou vervallen. Dat
    gebruikt dezelfde berekening als de facturatie zelf, dus wat daar staat is wat er straks op de factuur
    komt.

## Een termijn toevoegen of wijzigen

<!-- AFBEELDING: het venster om een betalingstermijn te bewerken, met het voorbeeld onderaan -->

Klik op **Nieuwe termijn**, of dubbelklik op een bestaande rij.

**Code** en **Taal** liggen vast zodra de termijn bestaat. Klanten en facturen verwijzen naar die code; zou
die veranderen, dan wijzen ze naar iets dat er niet meer is.

!!! warning "Let op welke termijnen u wijzigt"
    Termijnen met het merkteken **eigen** hebt u hier zelf aangemaakt. Die blijven staan.

    De andere komen uit uw huidige toepassing en worden bij **elke overname** opnieuw overgenomen. Een
    wijziging die u hier maakt, verdwijnt dan. Wilt u zo'n termijn aanpassen, doe dat in uw huidige
    toepassing.

    Het venster zegt het er ook bij zodra u zo'n termijn opent.

## Een termijn afvoeren

Open de rij en gebruik **Afvoeren**. De termijn verdwijnt uit de keuzelijsten maar blijft bestaan.

Afvoeren en niet verwijderen, om dezelfde reden als hierboven: bestaande klanten en facturen verwijzen naar
de code. Zou ze verdwijnen, dan draagt een oude factuur een verwijzing zonder leesbare betekenis.

## Het logboek

<!-- AFBEELDING: het logboek open, met een wijziging aan een termijn -->

Rechts op het scherm zit een strook met **logboek**. Klik erop en het paneel schuift open.

Het logboek toont wie welke termijn wanneer gewijzigd heeft, en van welke waarde naar welke. Het toont ook
wat een overname veranderd heeft — handig wanneer een vervaldag anders uitvalt dan u verwachtte.

## Veelgestelde vragen

**Waarom staat `30DFD` twee keer in de lijst?**
Eén keer per taal. De omschrijving verschilt, de berekening niet. Zie de kolom **Taal**.

**Ik heb een termijn gewijzigd en na een tijdje stond de oude waarde er weer.**
Dan kwam die termijn uit uw huidige toepassing. Die wordt bij elke overname opnieuw overgenomen. Alleen
termijnen met het merkteken **eigen** blijven staan.

**Een factuur vervalt op een andere datum dan ik verwachtte.**
Open de termijn en kijk naar het voorbeeld onderaan het venster: dat rekent met dezelfde regel als de
facturatie. Kijk ook in het logboek of de termijn tussentijds gewijzigd is.

**Wat betekent een vaste dag van 0?**
Dat er geen vaste dag gebruikt wordt. De vervaldag is dan gewoon het startpunt plus de dagen uitstel.
