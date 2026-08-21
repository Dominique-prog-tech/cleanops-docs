# Klantenregister

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van CleanOps ziet u het niet in uw menu.

Het klantenregister bevat alle klanten die op het CleanOps-platform draaien. Elke klant heeft een eigen databank; op dit scherm maakt u een nieuwe klant aan en beheert u de bestaande.

## Het scherm openen

Klik in de zijbalk op **Beheer** en daarna op **Tenants**.

## Een klant aanmaken

Vul bovenaan **Nieuwe tenant** in:

| Veld | Wat u invult |
|---|---|
| **Code** | De korte sleutel van deze klant. Ze staat in de aanmeldlink en **wijzigt nadien niet meer** — kies ze dus met zorg. |
| **Naam** | De volledige naam van de klant, zoals ze in het scherm verschijnt. |

Klik op **Provision**. CleanOps maakt de klant aan én zet zijn databank klaar. Zolang dat loopt, staat er **Bezig…**. Mislukt het, dan verschijnt **Provisioning mislukt** met de reden erbij.

Is er nog geen enkele klant, dan leest u **Nog geen tenants. Maak er hierboven één aan.**

## De lijst

Per klant ziet u de **Code**, de **Naam** en of hij actief is. Twee acties:

- **Gebruiken →** schakelt uw eigen sessie over naar deze klant, zodat u ziet wat zijn gebruikers zien.
- **Firebird-bron (pad)** legt vast waar de legacy-databank van deze klant staat. Dat pad is nodig voor de conversie. Klik op **Bewaren**; bij succes verschijnt **Firebird-bron bewaard.**

## Veelgemaakte fouten

!!! warning
    **De code ligt vast zodra de klant bestaat.** Ze zit in de aanmeldlink die de klant gebruikt en in verwijzingen elders. Controleer ze dus vóór u op **Provision** klikt — achteraf wijzigen betekent de klant opnieuw aanmaken.

!!! warning
    **Zet een klant op inactief in plaats van hem te verwijderen.** Inactief sluit de toegang af zonder gegevens weg te gooien. Een verwijderde klant neemt zijn geschiedenis mee.

!!! tip
    Vergeet na **Gebruiken →** niet terug te schakelen wanneer u weer platformbreed wil werken. U kijkt anders naar de gegevens van één klant terwijl u denkt het geheel te zien.

## Zie ook

- [Gebruikers](gebruikers.md) — wie mag aanmelden bij deze klant
- [Rollen](rollen.md) — wat die gebruikers mogen
