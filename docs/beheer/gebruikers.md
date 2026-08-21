# Gebruikers

Op dit scherm bepaalt u wie zich mag aanmelden bij CleanOps en wat die persoon mag doen. U maakt hier nieuwe gebruikers aan, wijst rollen toe en helpt iemand weer op weg wanneer het aanmelden mislukt.

## Het scherm openen

Klik in de zijbalk op **Beheer** en daarna op **Gebruikers**.

## Een gebruiker aanmaken

Klik op **Nieuwe gebruiker** en vul in:

| Veld | Wat u invult |
|---|---|
| **Gebruikersnaam** | Het e-mailadres waarmee de persoon zich aanmeldt, bijvoorbeeld `jan@klant.be`. |
| **Weergavenaam** | De naam die in het scherm verschijnt, bijvoorbeeld `Jan Tester`. |
| **Wachtwoord** | U zet zelf een wachtwoord, of u laat het leeg en stuurt achteraf een reset-link. |
| **Tenant** | De klant waartoe deze gebruiker behoort. Kiest u **— Operator (geen) —**, dan hoort de gebruiker bij geen enkele klant en werkt hij over het platform heen. |
| **Rol** | Bepaalt de rechten. Een gebruiker heeft er precies één. |

Klik op **Gebruiker aanmaken** om te bewaren.

## De lijst

Per gebruiker ziet u de **Gebruiker**, de **Naam**, de **Rol** en de **Status**:

- **Actief** — de gebruiker kan zich aanmelden.
- **Gedeactiveerd** — het account bestaat nog, maar aanmelden lukt niet.
- **Vergrendeld** — er waren te veel mislukte aanmeldpogingen na elkaar.

Uw eigen rij is gemarkeerd met **— jijzelf —**.

## De acties

Achteraan elke rij staan de acties die op die gebruiker van toepassing zijn:

- **Wachtwoord** — u stelt zelf een nieuw wachtwoord in.
- **Tijdelijk** — CleanOps genereert een tijdelijk wachtwoord dat u met **Kopiëren** naar het klembord haalt en doorgeeft.
- **Reset-link** — u krijgt een herstel-link die de gebruiker zelf een wachtwoord laat kiezen.
- **Ontgrendelen** — heft een vergrendeling na mislukte aanmeldpogingen op.
- **Deactiveren** / **Activeren** — sluit iemand uit of laat hem weer binnen.

Met **Koppelingen controleren** gaat u na of de gebruikers van deze klant correct verbonden zijn met het centrale register. Per rij ziet u dan **Gekoppeld** of **Niet gekoppeld**, met de knop **Koppelen** waar dat nog moet gebeuren.

## Veelgemaakte fouten

!!! warning
    **Verwijder geen gebruiker die vertrekt — deactiveer hem.** Een verwijderde gebruiker neemt zijn spoor mee: u ziet achteraf niet meer wie wat gewijzigd heeft. **Deactiveren** houdt die geschiedenis intact en sluit de toegang even goed af.

!!! warning
    **Uzelf deactiveren kan niet.** CleanOps laat dat bewust niet toe — u zou zich daarna niet meer kunnen aanmelden om het terug te draaien.

!!! tip
    Een tijdelijk wachtwoord of een reset-link is maar één keer zichtbaar. Kopieer hem meteen en geef hem door via een kanaal waar u de persoon herkent — niet in een openbare groepschat.

## Zie ook

- [Rollen](rollen.md) — wat een rol precies toestaat
- [Actielogboek](actielogboek.md) — wie heeft wat gedaan
