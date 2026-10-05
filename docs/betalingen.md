# Betalingen

De bedragen die uw klanten betaalden — en die u terugbetaalde —, per uittreksel van uw bank of kas. Hier geeft u een betaling in,
en ziet u ook de betalingen uit uw vorige toepassing.

## Het scherm openen

Klik in het menu links onder **Verkoop** op **Betalingen**. U ziet het met het recht om openstaande posten te bekijken.
Betalingen ingeven en terugdraaien vraagt het recht *Betalingen ingeven*.

## De lijst

| Kolom | Wat het is |
|---|---|
| Datum uittreksel | de datum op het uittreksel van de bank of kas |
| Dagboek | het financiële dagboek: uw bankrekening, de kas, of een dagboek waarmee vereffend wordt (zie [Dagboeken](beheer/dagboeken.md)) |
| Uittreksel | het nummer van het uittreksel |
| Klant | wie betaalde |
| Bedrag | positief voor een betaalde factuur, negatief voor een terugbetaalde creditnota |

Een betaling die u in CleanOps ingaf, draagt het label **hier ingegeven**; een teruggedraaide het label **teruggedraaid**.

Kies bovenaan de **Periode**: de laatste 3 maanden, dit jaar, of de volledige historiek.

## Een betaling ingeven

Klik op **Betaling ingeven**.

1. Kies het **dagboek**, de **datum** en het **nummer van het uittreksel**. Ze blijven staan voor de volgende betaling: wie een
   uittreksel afwerkt, geeft er meerdere na elkaar in.
2. Zoek de **klant**. Zijn openstaande posten verschijnen, de oudste eerst.
3. Vul per post het **betaalde bedrag** in. **Saldo** neemt het openstaande bedrag over. Onderaan staat het totaal.
4. Klik op **Boeken**.

!!! note "Eén overschrijving voor meerdere facturen"
    Betaalt een klant drie facturen in één keer, vul dan bij elk van de drie het bedrag in: het wordt één betaling.

Het bedrag staat **zoals op het uittreksel**:

- positief wanneer de klant een factuur betaalt;
- negatief wanneer u een creditnota terugbetaalt, of wanneer u een creditnota tegen een factuur afpunt — dan vult u in hetzelfde
  venster het bedrag op de factuur (positief) én op de creditnota (negatief) in, op een dagboek zoals *Afpunten*.

Een deelbetaling mag: de post blijft openstaan voor de rest. Meer dan wat openstaat, of een bedrag met het verkeerde teken, wordt
geweigerd. De datum van het uittreksel kan niet in de toekomst liggen.

Een volledig betaalde post verdwijnt uit [Openstaande posten](openstaande-posten.md), en dus uit de rappels. Was de factuur
doorgegeven aan een incassobureau, dan zegt CleanOps het na het boeken: verwittig het bureau zo nodig.

U kunt een betaling ook rechtstreeks vanuit [Openstaande posten](openstaande-posten.md) ingeven: selecteer de post en klik op
**Betaling ingeven…**. Het openstaande bedrag staat dan al ingevuld.

## Wat een betaling vereffende

Dubbelklik een betaling: u ziet de klant, het uittreksel, wie ze ingaf en welke facturen en creditnota's ze vereffende. Op de fiche
van een [factuur](facturen.md) staan omgekeerd de betalingen die erop kwamen, naast de btw-opbouw.

## Een betaling terugdraaien

Een verkeerd ingegeven betaling — een verkeerde klant, een verkeerd bedrag — draait u terug: open de betaling, vul eventueel een
reden in en klik op **Terugdraaien**. De openstaande bedragen worden weer wat ze vóór de betaling waren. De betaling blijft in de
lijst staan als **teruggedraaid**, met wie het deed en wanneer.

Een betaling uit uw vorige toepassing kunt u niet terugdraaien: de facturen die ze vereffende, staan niet meer open.

## Het journaal

Rechts op het scherm zit een strook **Journaal**. Klik een betaling aan en open de strook: u ziet wanneer ze geboekt en eventueel
teruggedraaid werd, en door wie.

## Veelgestelde vragen

**Ik zie de knop Betaling ingeven niet.**
Daarvoor is het recht *Betalingen ingeven* nodig. Vraag het aan uw beheerder.

**Ik vind mijn bankrekening niet in de lijst van de dagboeken.**
Enkel de **financiële** dagboeken staan erin. Maak er een aan in [Dagboeken](beheer/dagboeken.md).

**Bij een oude betaling staat "geen factuur in de vorige toepassing".**
Uw vorige toepassing bewaarde die betaling, maar niet de factuur die ze vereffende — vooral bij de eerste jaren. Het document
staat erbij met zijn nummer en datum.

## Zie ook

- [Openstaande posten](openstaande-posten.md)
- [Facturen](facturen.md)
- [Dagboeken](beheer/dagboeken.md)
