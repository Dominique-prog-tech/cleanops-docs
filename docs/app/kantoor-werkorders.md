---
description: "Werkorders in de app van CleanOps voor kantoor: zoeken, de fiche lezen en een nieuwe werkorder noteren terwijl de klant aan de lijn is."
---

# Werkorders

Onder **Werkorders** zoekt u in de app een werkorder op en leest u hoe ze ervoor staat: gepland of uitgevoerd, door wie,
met welke notities, foto's en attesten. Het scherm is er voor wie op kantoor werkt en het recht op de werkorders heeft
(zie [De app voor kantoor](kantoor.md)). Een bestaande werkorder wijzigen doet u in [Werkorders](../werkorders.md) op de computer.

## Een werkorder zoeken

Open het menu en tik op **Werkorders**. Typ een **nummer**, een deel van de **klantnaam** of van het **adres**, of een
contractnummer. Dat is dezelfde zoeker als in de lijst Werkorders op de computer.

Zonder zoekterm toont de lijst alle werkorders. Boven de lijst staat hoeveel werkorders er gevonden zijn. De app toont er 30 tegelijk; met **Meer laden** onderaan komen
de volgende.

Vanaf versie 1.3.3 staat onder een werkorder in het klein hoe er **betaald** werd, bijvoorbeeld *Cash (ter plaatse) · € 90,75*. Het
bedrag staat er enkel bij een betaling ter plaatse: het is wat de medewerker in de app noteerde, niet het gefactureerde bedrag.

Op een **tablet** staat de fiche rechts naast de lijst; op een **telefoon** opent ze als een eigen scherm.

![Werkorders op een tablet: links de 56 gevonden werkorders met hun status en onderaan Nieuwe werkorder, rechts de fiche van werkorder 900155 met Route en Bellen, de planning, het werk en de handtekening van de klant met Bekijk de getekende bon](../images/app-kantoor-werkorders.png "Een werkorder voor kantoor"){ width="560" }

## De fiche

De fiche toont wat de ploeg ter plaatse ziet, en daarbij hoe het werk uitgevoerd werd. Een blok zonder inhoud staat er niet.

| Blok | Wat erin staat |
|---|---|
| Bovenaan | De klant, de werf en de status. De **betaalwijze**, als er een gekozen is (het bedrag ter plaatse staat onder Planning). Het adres met **Route**, die de weg opent in de kaartapp; het telefoonnummer met **Bellen**. |
| Planning | **Gepland**: de dag en het dagdeel. **Uitgevoerd**: de dag waarop het werk uitgevoerd werd. De **medewerker** en de bijrijder, het **voertuig** en het **bedrag ter plaatse**. |
| Werk | De **instructie**, de **opdracht**, de **opmerking**, het **materiaal** en het **tarief**. |
| Tijd | Elke registratie van de teller: **werken** of **verplaatsing**, wie, van wanneer tot wanneer en hoelang. |
| Notities, Foto's | Wat de ploeg noteerde en fotografeerde. |
| Attesten, Cameraverslag, Meerwerk | Wat de ploeg ter plaatse invulde. |
| Handtekening van de klant | Wie tekende en wanneer, met de opmerking van de klant. **Bekijk de getekende bon** opent de getekende leveringsbon als pdf. |

Op de teller, het afronden en het tekenen staat geen knop: die blijven bij de medewerker die het werk doet. Wie mag plannen, ziet wel
[Verzetten](#een-werkorder-verzetten) onder Planning.

## Een werkorder verzetten

Vanaf versie 1.3.4 zet u een geplande werkorder naar een andere dag, ook in een andere week, of naar een andere medewerker. U hebt
daarvoor het recht **Planning bewerken**.

1. Open de werkorder, vanuit **Werkorders** of de [Weekplanning](weekplanning.md).
2. Tik onder **Planning** op **Verzetten**. Bovenaan staat waar ze nu staat; de dag, het tijdsdeel en de medewerker staan al ingevuld.
3. Kies de nieuwe dag, het tijdsdeel of de medewerker en tik op **Verzetten**.

Heeft de werkorder een **vaste datum**, valt de dag in het verleden of heeft de medewerker die dag verlof, dan vraagt de app het eerst.
Verzette iemand anders de werkorder intussen, dan zegt de app dat en blijft zijn planning staan. Uitgevoerd werk verzet u niet.
Wordt de werkorder naar een andere dag of een ander uur verzet, dan staat [Klant verwittigd](../planning.md#klant-verwittigd) op het
planbord terug op **NOK**.

## Een werkorder verwijderen

Vanaf versie 1.3.3 veegt u een werkorder in de lijst **Werkorders** of **Nog in te plannen** naar links om ze te verwijderen. De
app vraagt eerst *Werkorder … naar de prullenbak?*. Na **Naar de prullenbak** staat onderaan een melding met **Ongedaan maken**:
daarmee staat de werkorder meteen terug. Later haalt u ze terug via de [prullenbak](../beheer/prullenbak.md) op de computer.

Vegen kan enkel met het recht om werkorders te wijzigen, en niet bij een werkorder die gefactureerd of door de klant getekend is.
Zolang de vorige toepassing de werkorders bijhoudt, kan het niet.

## Een nieuwe werkorder

Hebt u een klant aan de lijn, dan noteert u het werk meteen, ook onderweg. Dit kan vanaf versie 1.3.0, met het recht **Werkorders bewerken**, en
met het recht **Klanten bewerken** ook voor een nieuwe klant. U hebt een verbinding nodig: zonder bereik bewaart de app niets.

Tik rechtsonder op **Nieuwe werkorder**: op het **Overzicht** of de [Weekplanning](weekplanning.md), en vanaf versie 1.3.1 ook op dit scherm en, als u ook medewerker bent, op uw [planning](planning.md). Het formulier heeft vier delen:

1. **Klant.** Zoek op naam, telefoon, gemeente of klantnummer. Staat de klant er niet tussen, tik dan op **Nieuwe klant:** gevolgd
   door wat u typte. Een naam komt in het veld Naam, een nummer in het veld **Telefoon of gsm**. Vanaf versie 1.3.3 vult u ook het **e-mailadres** in (mag leeg). Kies **Particulier** of **Bedrijf** en vul het adres in.
   Bij een bedrijf haalt **Ophalen** de naam en het adres uit de KBO. Het btw-nummer mag leeg blijven, maar zonder nummer maakt CleanOps nog geen factuur.
2. **Adres.** Bij een bestaande klant kiest u een van zijn adressen. Ligt de werf ergens anders, zet dan **De werf ligt op een ander adres** aan.
3. **Werk.** De **omschrijving** komt op de factuur en telt hoogstens 35 tekens. Waarover het precies gaat, zet u in de **instructies**, die de ploeg leest.
4. **Wanneer.** Vanaf versie 1.3.3 zet u **Dringend** aan als het werk zo snel mogelijk moet gebeuren, en kiest u bij **Afgesproken uur** *Vóór*, *Tussen* of *Na* met het uur dat u met de klant afsprak. Standaard komt de werkorder bij [Nog in te plannen](weekplanning.md#nog-in-te-plannen). Met **Meteen inplannen** kiest u de dag, het tijdsdeel en eventueel de medewerker.

Bestaat de klant misschien al, dan toont de app die klanten voor er iets bewaard wordt: tik op de juiste, of kies **Toch een nieuwe klant**. Tarief, btw en bedrag
vult kantoor later aan op de computer.

![Nieuwe werkorder op een telefoon: een nieuwe klant met Particulier of Bedrijf, Naam, Telefoon of gsm en het adres](../images/app-kantoor-nieuw.png "Nieuwe werkorder")

## Veelgestelde vragen

**Ik zie de knop Nieuwe werkorder niet.**
Uw rol heeft het recht Werkorders bewerken niet, of u hebt een oudere versie van de app. Vraag het aan uw beheerder.

**Ik zie Nieuwe klant niet.**
Uw rol heeft het recht Klanten bewerken niet. U kunt wel een werkorder maken voor een bestaande klant.

**De app zegt dat de werkorders in de vorige toepassing bijgehouden worden.**
Zolang uw bedrijf de werkorders nog in de vorige toepassing bijhoudt, kunt u ze in de app niet aanmaken. Doe het daar.

## Zie ook

- [Werkorders](../werkorders.md) op de computer
- [Een klant aan de lijn](../planning.md#een-klant-aan-de-lijn-nieuwe-werkorder) op de computer
- [Weekplanning in de app](weekplanning.md)
- [De werkorder](werkorder.md), zoals de ploeg ze ziet
