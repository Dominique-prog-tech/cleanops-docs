# Overstap

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van CleanOps ziet u het niet in uw menu.

Zolang een klant in zijn huidige toepassing werkt, is die toepassing de bron van zijn gegevens. CleanOps is dan
een **testomgeving**: alles mag er gewijzigd worden, maar elke conversie zet de klant terug op de gegevens van zijn
huidige toepassing en wist wat in CleanOps aangemaakt werd. Op dit scherm zet u bij de overstap de schakelaar om:
vanaf dan werkt de klant echt in CleanOps, en maakt CleanOps zelf de werkorders.

## Het scherm openen

Klik in de zijbalk op **Platformbeheer** en daarna op de tegel **Overstap**.

<!-- AFBEELDING: het overstapscherm met de kaart "Wie schrijft er voor" en de knop om te wisselen -->

## Eerst een klant kiezen

De schakelaar geldt per klant. Staat er *Kies eerst een tenant*, ga dan naar [Klantenregister](klantenregister.md)
en klik bij de juiste klant op **Gebruiken →**.

## Wie schrijft er

De kaart toont voor de gekozen klant wie de gegevens beheert:

- **De huidige toepassing** — dit is de standaard: de **testfase**. In CleanOps mag alles gewijzigd worden, maar
  elke [conversie](conversie.md) wist eerst wat hier aangemaakt werd en zet daarna de rest terug op de gegevens van
  de huidige toepassing. De nachtelijke generatie slaat deze klant over. Bovenaan elk scherm staat het label
  **Testfase**.
- **CleanOps** — CleanOps is de schrijver. De gegevens worden hier gewijzigd, en de werkorders uit de
  periodieke contracten ontstaan elke nacht vanzelf.

Onder de kaart staat wanneer en door wie de schakelaar voor het laatst omgezet werd. Staat er *Nooit omgezet*,
dan geldt de standaard: de testfase.

## Overstappen naar CleanOps

1. Laat ADM-Concept op de server nakijken dat de toepassing **niet inslaapt**: de app pool van CleanOps moet
   altijd draaien (*Start Mode* AlwaysRunning, *Idle Time-out* 0). Anders maakt CleanOps de werkorders niet
   elke nacht — gemeten in september 2026, toen de generatie op sommige nachten niet draaide.
2. Draai nog één keer de [conversie](conversie.md), zodat CleanOps de laatste stand van de gegevens heeft.
3. Klik op **CleanOps wordt de schrijver…**.
4. Lees de bevestiging en klik op **Overstappen**.

Vanaf dat moment kan de klant in CleanOps bewaren, en maakt CleanOps vanaf de volgende nacht de werkorders.

## Terugkeren naar de huidige toepassing

Klik op **Terug: de huidige toepassing schrijft…** en bevestig met **Terugkeren**. De klant staat dan weer in de
testfase.

## Wat de wijziging meteen raakt

- **In uw eigen venster** geldt de nieuwe stand meteen.
- **Andere gebruikers** die CleanOps al open hebben, zien de nieuwe stand pas na herladen (F5).
- Elke omschakeling komt in het [actielogboek](actielogboek.md), met wie en wanneer.

## Veelgemaakte fouten

!!! warning
    **Zet de schakelaar niet om zonder eerst te converteren.** Na de overstap overschrijft een nieuwe conversie
    wat de klant intussen in CleanOps gewijzigd heeft. De laatste conversie hoort dus vóór het omzetten, niet erna.

!!! danger "Terugkeren wist bij de volgende conversie alles wat in CleanOps aangemaakt werd"
    In de testfase begint elke conversie met het wissen van wat in CleanOps aangemaakt werd: klanten, werkorders,
    facturen, bijlagen, … Voor een klant die echt overgestapt was, zijn dat zijn gegevens. Keer dus enkel terug als
    u zeker weet dat die weg mogen — en draai daarna geen conversie tot dat vaststaat.

!!! warning
    **Controleer welke klant er actief staat.** De schakelaar geldt enkel voor de gekozen klant; elke klant stapt
    apart over.

## Zie ook

- [Conversie](conversie.md) — de laatste stand overzetten vóór de overstap
- [Werkordergeneratie](generatie.md) — draait pas zodra CleanOps de schrijver is
- [Klantenregister](klantenregister.md) — de klant kiezen waarop u werkt
- [Actielogboek](actielogboek.md) — wie de schakelaar wanneer omzette
