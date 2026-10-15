---
description: "Tijdsdelen in CleanOps: wanneer op de dag een opdracht gebeurt (eerste werk, voormiddag …), hun volgorde op het planbord en het tijdsdeel volgens uur."
---

# Tijdsdelen

Wanneer op de dag een opdracht gebeurt: eerste werk, voormiddag, volledige dag, namiddag … U kiest het tijdsdeel op de
[werkorder](../werkorders.md#planning-en-uitvoering) of op een [contract](../contracten.md). Het [planbord](../planning.md) en de
[werkbon](../werkbonnen.md) zetten de werkorders van een dag in de volgorde van deze lijst.

<!-- AFBEELDING: de lijst Tijdsdelen met Eerste werk, Voormiddag, Volledige dag, Namiddag en Anders, en het label "volgens uur" -->

## Het scherm openen

Klik onderaan in het menu op **Platformbeheer** en daarna op de tegel **Tijdsdelen**.

## De lijst

| Kolom | Wat het is |
|---|---|
| Volgorde | de plaats op het planbord, op de werkbon en in de keuzelijst van de werkorder |
| Naam (NL) / Naam (FR) | wat u op het planbord, de werkbon en de werkorder ziet |
| Van / Tot | vanaf en tot wanneer het tijdsdeel loopt |
| Code | het nummer dat een werkorder draagt; het verandert nooit |

Een tijdsdeel **volgens uur** draagt dat label (zie verder). Een gearchiveerd tijdsdeel draagt **gearchiveerd**.

CleanOps start met vijf tijdsdelen: **Eerste werk**, **Voormiddag**, **Volledige dag**, **Namiddag** en **Anders**, dat volgens
uur werkt. U kunt ze hernoemen, anders ordenen of er tijdsdelen bij maken, bijvoorbeeld *8–10* en *10–12*.

## Een tijdsdeel toevoegen of wijzigen

Klik op **Nieuw tijdsdeel**, of dubbelklik op een bestaande rij. Een nieuw tijdsdeel komt achteraan; wilt u het ertussen, pas
dan de volgorde aan.

<!-- AFBEELDING: het venster Tijdsdeel bewerken voor Anders, met Volgens uur aangevinkt -->

| Veld | Wat u invult |
|---|---|
| **Naam (NL)** *(verplicht)* | maximaal 40 tekens. Wilt u de uren op het planbord zien, zet ze dan in de naam: *Ochtend 8–10* |
| **Naam (FR)** | mag leeg blijven; dan toont CleanOps de Nederlandse naam |
| **Volgorde** | de plaats op het planbord, de werkbon en in de keuzelijst |
| **Van** | vanaf wanneer; ter informatie |
| **Tot** | tot wanneer; moet na **Van** liggen. Bepaalt ook waar een opdracht **volgens uur** komt |
| **Volgens uur** | aanvinken voor het tijdsdeel van de afspraken op een vast uur |

!!! note "Wat volgens uur doet"
    Een tijdsdeel volgens uur heeft geen vaste plaats in de dag. Een werkorder met dat tijdsdeel volgt het afgesproken uur
    (*vóór*, *tussen* of *na*) en komt vóór het eerste vaste tijdsdeel waarvan het **Tot**-uur later is. Een afspraak
    *Vóór 11:00* komt zo vóór **Voormiddag** (tot 11:59). Zonder afgesproken uur telt 12:00. Op de werkbon staat bij zo'n
    werkorder de uurafspraak, niet de naam van het tijdsdeel.

## Het journaal

Rechts op het scherm zit een strook **Journaal**. Klik een tijdsdeel aan en open de strook: het paneel toont wie het wanneer
aangemaakt, gewijzigd, gearchiveerd of teruggehaald heeft.

## Een tijdsdeel archiveren of terughalen

Open de rij en gebruik **Archiveren**. Het tijdsdeel verdwijnt uit de keuzelijst, maar werkorders die het al dragen, houden
het en tonen de naam verder. Wilt u het terug? Zet bovenaan **Tonen** op **Ook gearchiveerde tijdsdelen**, open het en klik
op **Terughalen**.

## Veelgestelde vragen

**Waarom staan er bij Tot uren als 11:59 en 12:30?**
Bij de vijf tijdsdelen waarmee CleanOps start, zijn het grenzen en geen werkuren: ze bepalen enkel waar een werkorder volgens
uur tussen de andere komt.

**Ik wijzig een naam of de volgorde. Wat gebeurt er met bestaande werkorders?**
Een werkorder draagt de code van het tijdsdeel. Ze toont dus meteen de nieuwe naam, en het planbord volgt meteen de nieuwe
volgorde. Wat de planner met de hand plaatste (⇅), blijft staan.

**Kan ik een tijdsdeel verwijderen?**
Nee: werkorders dragen het. Archiveren haalt het uit de keuzelijst zonder iets te raken.
