# Conversie

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van CleanOps ziet u het niet in uw menu.

Op dit scherm zet u de gegevens van een klant over uit zijn vorige databank naar CleanOps. U kiest eerst de
klant, laat daarna de overzetting lopen, en leest in het rapport wat er per onderdeel binnengekomen is.
Onderaan staat een aparte actie om de aanmeldingen van die klant aan te maken.

## Het scherm openen

Klik in de zijbalk op **Beheer** en daarna op **Conversie**.

<!-- AFBEELDING: het conversiescherm met de actieve tenant en de knop Converteer tenant -->

## Eerst een klant kiezen

Bovenaan staat **Actieve tenant** met de code van de klant waarop u werkt. Staat er **geen**, dan leest u
*Kies eerst een tenant (Tenants → Gebruiken) om te converteren* en blijft de knop uitgeschakeld. Ga in dat
geval naar [Klantenregister](klantenregister.md) en klik bij de juiste klant op **Gebruiken →**.

!!! warning
    **Controleer welke klant er actief staat vóór u begint.** De overzetting schrijft in de databank van die
    klant. Staat er een andere dan u denkt, dan komen de gegevens in de verkeerde omgeving terecht.

## De overzetting laten lopen

Klik op **Converteer tenant**. Zolang het loopt, leest de knop **Bezig…**. Daarna verschijnt een tabel met
per onderdeel drie kolommen:

| Kolom | Wat er staat |
|---|---|
| **Onderdeel** | Het stuk gegevens dat overgezet is, bijvoorbeeld de klanten of de contracten. |
| **Aantal** | Hoeveel rijen er verwerkt zijn. |
| **Status** | **OK**, of **Mislukt**. Bij **Mislukt** leest u de reden door met de muis op het woord te blijven staan. |

Onder de tabel staat het totaal: *Klaar — n rijen verwerkt in totaal.*

## De aanmeldingen aanmaken

Onder het rapport staat **Gebruikers importeren uit de legacy**. Die actie haalt de actieve
backoffice-gebruikers van de gekozen klant op en maakt er aanmeldingen mee aan.

Klik op **Gebruikers importeren uit '…'**. Daarna leest u hoeveel er geïmporteerd, overgeslagen en mislukt
zijn. Overgeslagen betekent dat er al een aanmelding met datzelfde e-mailadres bestaat — u kunt de actie dus
veilig herhalen zonder dubbels te maken.

!!! danger "De tijdelijke wachtwoorden ziet u één keer"
    Elke nieuwe gebruiker krijgt een eigen tijdelijk wachtwoord. Die lijst verschijnt enkel op dit moment: ze
    wordt nergens bewaard en is nadien niet meer op te vragen. Noteer ze vóór u het scherm verlaat. Wie zijn
    wachtwoord kwijt is, heeft een nieuwe aanmelding nodig.

Elke gebruiker moet zijn wachtwoord wijzigen bij de eerste aanmelding. Daarna beheert u de gebruikers via
[Gebruikers](gebruikers.md).

## Veelgemaakte fouten

!!! warning
    **De overzetting is geen eenmalige knop.** Ze mag herhaald worden, maar draai ze niet terwijl er bij de
    klant gewerkt wordt: u leest dan een rapport over gegevens die ondertussen bewegen.

!!! tip
    Blijft **Aantal** op nul staan terwijl u gegevens verwacht, controleer dan het pad naar de vorige databank
    van deze klant. Dat legt u vast in [Klantenregister](klantenregister.md), bij **Firebird-bron**.

## Zie ook

- [Klantenregister](klantenregister.md) — de klant kiezen en zijn bronpad vastleggen
- [Gebruikers](gebruikers.md) — de aanmeldingen nadien beheren
