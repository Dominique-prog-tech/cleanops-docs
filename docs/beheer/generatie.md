# Werkordergeneratie

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van CleanOps ziet u het niet in uw menu.

Uit de periodieke contracten van een klant ontstaan de werkorders: een contract met een tweejaarlijkse
ruimbeurt levert vanzelf de beurten op die ingepland moeten worden. Dat gebeurt elke nacht automatisch. Op dit
scherm start u diezelfde generatie handmatig voor één klant, bijvoorbeeld nadat u contracten hebt overgezet of
aangepast en het resultaat meteen wil zien.

## Het scherm openen

Klik in de zijbalk op **Beheer** en daarna op **Generatie**.

<!-- AFBEELDING: het generatiescherm met de actieve tenant en de knop Genereer werkorders -->

## Eerst een klant kiezen

Bovenaan staat **Actieve tenant** met de code van de klant waarop u werkt. Staat er *geen — kies er eerst één
bij Tenants*, ga dan naar [Klantenregister](klantenregister.md) en klik bij de juiste klant op **Gebruiken →**.
Zolang er geen klant gekozen is, blijft de knop uitgeschakeld.

## De generatie starten

Klik op **Genereer werkorders**. Zolang het loopt, leest de knop **Bezig…**. Daarna verschijnt hoeveel nieuwe
werkorders er aangemaakt zijn en uit hoeveel actieve contracten ze komen.

Wat de generatie doet:

- Ze kijkt **90 dagen vooruit** en maakt de beurten aan die in dat venster vallen.
- Ze laat **bestaande werkorders ongemoeid**. Twee keer na elkaar starten levert de tweede keer niets nieuws
  op — er komen geen dubbels.
- Ze **haalt recent gemiste beurten in**. Een contract waarvan een beurt door de mazen glipte, krijgt die
  alsnog.

!!! tip
    Nul nieuwe werkorders is een normaal antwoord, geen storing. Meestal betekent het dat de nachtelijke run
    het werk al gedaan heeft, of dat er in de komende negentig dagen niets te plannen valt.

## Veelgemaakte fouten

!!! warning
    **Controleer welke klant er actief staat vóór u start.** De generatie schrijft in de databank van die
    klant.

!!! warning
    **Verwacht geen werkorders uit een contract dat niet actief is, of dat buiten het venster van negentig
    dagen valt.** Blijft de teller op nul terwijl u wél iets verwacht, kijk dan eerst naar de startdatum en de
    frequentie van het contract op de fiche van de klant.

## Zie ook

- [Klantenregister](klantenregister.md) — de klant kiezen waarop u werkt
- [Conversie](conversie.md) — de contracten overzetten waaruit gegenereerd wordt
- [Klanten](../klanten.md) — de contracten van een klant op zijn fiche
