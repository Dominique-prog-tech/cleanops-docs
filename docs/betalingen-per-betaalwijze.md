---
description: "Betalingen per betaalwijze in CleanOps: de werkorders met Payconiq, cash … per periode, om af te punten, met export naar Excel."
---

# Betalingen per betaalwijze

De werkorders met een [betaalwijze](beheer/betaalwijzen.md), op de dag dat ze uitgevoerd werden. Zo punt u het overzicht van
Payconiq of de kas af: elke rij is één bezoek, met het bedrag dat de klant betaalde en of de factuur betaald staat.

<!-- AFBEELDING: het overzicht Betalingen per betaalwijze met de periode Deze maand, de totalen per betaalwijze en een rij Cash -->

## Het scherm openen

Klik in het menu onder **Verkoop** op **Per betaalwijze**.

## Periode en betaalwijze

Bovenaan kiest u in de eerste keuzelijst de **periode**: deze week, vorige week, deze maand, vorige maand of dit jaar. Een week
loopt van maandag tot zondag. Met de tweede keuzelijst (*Alle betaalwijzen*) toont u er één, bijvoorbeeld enkel Payconiq. Onder de
keuzes staan de datums van de periode, met de totalen erachter.

Onder de werkbalk staan de **totalen per betaalwijze**: hoeveel werkorders en wat er geïnd is — het *bedrag uit het veld* als het
er is, anders het bedrag inclusief btw. Die leggen u naast het
Payconiq-overzicht of de kas.

## De lijst

| Kolom | Wat het is |
|---|---|
| Uitgevoerd | de dag van het werk — de dag waarop ter plaatse betaald werd |
| Werkorder | het nummer; een klik opent de werkorder |
| Klant | de klant van de werkorder |
| Betaalwijze | Payconiq, cash, achteraf … |
| Excl. btw / Btw / Incl. btw | het bedrag van de werkorder, en met btw. Kent CleanOps de btw-code niet, dan blijft *Incl. btw* leeg. |
| Uit het veld | wat de klant ter plaatse betaalde, zoals op de werkorder genoteerd |
| Factuur | het factuurnummer; een klik opent de factuur |
| Stand | **Niet gefactureerd**, **Open** of **Betaald** |

!!! note "Een cent verschil met de factuur"
    *Incl. btw* rekent de btw per werkorder. Een factuur telt de btw per btw-code op; bundelt ze meerdere werkorders, dan kan
    haar totaal een cent afwijken van de som van de rijen.

## Exporteren naar Excel

Klik op **Exporteren** rechtsboven. U krijgt de rijen zoals ze getoond worden, met de gekozen periode en betaalwijze.

## Veelgestelde vragen

**Een werkorder met Payconiq staat er niet in.**
Ze heeft nog geen uitvoeringsdatum, of die valt buiten de gekozen periode.

**De stand is Open, terwijl de klant ter plaatse betaalde.**
Bij een betaalwijze ter plaatse boekt de facturatie de betaling meteen. Staat de factuur toch open, dan kon de betaling niet
geboekt worden (de facturatie meldde dat); boek ze in [Betalingen](betalingen.md).

## Zie ook

- [Betaalwijzen](beheer/betaalwijzen.md)
- [Facturatie](facturatie.md#per-betaalwijze-een-factuur)
- [Betalingen](betalingen.md)
