# Conversion

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de CleanOps, vous ne le voyez pas dans votre menu.

!!! note "Écran en néerlandais"
    Cet écran interne s'affiche en néerlandais. Les libellés des boutons sont repris ci-dessous tels qu'ils
    apparaissent à l'écran.

Sur cet écran, vous transférez les données d'un client depuis son ancienne base vers CleanOps. Vous
choisissez d'abord le client, vous lancez ensuite le transfert, et le rapport vous indique ce qui est arrivé
pour chaque élément. En bas se trouve une action distincte pour créer les connexions de ce client.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Beheer**, puis sur **Conversie**.

<!-- AFBEELDING: l'écran de conversion avec le tenant actif et le bouton Converteer tenant -->

## Choisir d'abord un client

En haut figure **Actieve tenant** avec le code du client sur lequel vous travaillez. Si vous lisez **geen**,
le message *Kies eerst een tenant (Tenants → Gebruiken) om te converteren* s'affiche et le bouton reste
désactivé. Rendez-vous alors dans le [Registre des clients](klantenregister.fr.md) et cliquez sur
**Utiliser →** chez le bon client.

!!! warning
    **Vérifiez quel client est actif avant de commencer.** Le transfert écrit dans la base de ce client. S'il
    s'agit d'un autre que celui que vous pensez, les données atterrissent dans le mauvais environnement.

## Lancer le transfert

Cliquez sur **Converteer tenant**. Pendant l'opération, le bouton affiche **Bezig…**. Ensuite apparaît un
tableau de trois colonnes par élément :

| Colonne | Ce qui s'y trouve |
|---|---|
| **Onderdeel** | La partie des données transférée, par exemple les clients ou les contrats. |
| **Aantal** | Le nombre de lignes traitées. |
| **Status** | **OK**, ou **Mislukt**. En cas d'échec, le motif s'affiche en laissant la souris sur le mot. |

Sous le tableau figure le total : *Klaar — n rijen verwerkt in totaal.*

## Créer les connexions

Sous le rapport se trouve **Gebruikers importeren uit de legacy**. Cette action récupère les utilisateurs
backoffice actifs du client choisi et en crée des connexions.

Cliquez sur **Gebruikers importeren uit '…'**. Vous lisez ensuite combien ont été importés, ignorés et mis en
échec. « Ignoré » signifie qu'une connexion avec cette même adresse e-mail existe déjà — vous pouvez donc
répéter l'action en toute sécurité, sans créer de doublons.

!!! danger "Les mots de passe temporaires ne s'affichent qu'une fois"
    Chaque nouvel utilisateur reçoit son propre mot de passe temporaire. Cette liste n'apparaît qu'à ce
    moment : elle n'est conservée nulle part et ne peut plus être consultée ensuite. Notez-la avant de
    quitter l'écran. Qui perd son mot de passe a besoin d'une nouvelle connexion.

Chaque utilisateur doit modifier son mot de passe à la première connexion. Vous gérez ensuite les
utilisateurs via [Utilisateurs](gebruikers.fr.md).

## Erreurs fréquentes

!!! warning
    **Le transfert n'est pas un bouton à usage unique.** Il peut être répété, mais ne le lancez pas pendant
    que le client travaille : vous liriez un rapport sur des données qui bougent entre-temps.

!!! tip
    Si **Aantal** reste à zéro alors que vous attendez des données, vérifiez le chemin vers l'ancienne base de
    ce client. Vous le définissez dans le [Registre des clients](klantenregister.fr.md), sous **Source
    Firebird**.

## Voir aussi

- [Registre des clients](klantenregister.fr.md) — choisir le client et définir son chemin source
- [Utilisateurs](gebruikers.fr.md) — gérer les connexions ensuite
