# Conversion

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de CleanOps, vous ne le voyez pas dans votre menu.

Sur cet écran, vous transférez les données d'un client depuis son ancienne base vers CleanOps. Vous
choisissez d'abord le client, vous lancez ensuite le transfert, et le rapport vous indique ce qui est arrivé
pour chaque élément. En bas se trouve une action distincte pour créer les connexions de ce client.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Gestion**, puis sur **Conversion**.

<!-- AFBEELDING: l'écran de conversion avec le tenant actif et le bouton Convertir le tenant -->

## Choisir d'abord un client

En haut figure **Tenant actif** avec le code du client sur lequel vous travaillez. Si vous lisez **aucun**,
le message *Choisissez d'abord un tenant (Tenants → Utiliser) pour lancer la conversion* s'affiche et le
bouton reste désactivé. Rendez-vous alors dans le [Registre des clients](klantenregister.fr.md) et cliquez sur
**Utiliser →** chez le bon client.

!!! warning
    **Vérifiez quel client est actif avant de commencer.** Le transfert écrit dans la base de ce client. S'il
    s'agit d'un autre que celui que vous pensez, les données atterrissent dans le mauvais environnement.

## Lancer le transfert

Cliquez sur **Convertir le tenant**. Pendant l'opération, le bouton affiche **En cours…**. Ensuite apparaît un
tableau de trois colonnes par élément :

| Colonne | Ce qui s'y trouve |
|---|---|
| **Élément** | La partie des données transférée, par exemple les clients ou les contrats. |
| **Nombre** | Le nombre de lignes traitées. |
| **Statut** | **OK**, ou **Échec**. En cas d'échec, le motif s'affiche en laissant la souris sur le mot. |

Sous le tableau figure le total : *Terminé — n lignes traitées au total.*

## Créer les connexions

Sous le rapport se trouve **Importer les utilisateurs depuis l'hérité**. Cette action récupère les utilisateurs
backoffice actifs du client choisi et en crée des connexions.

Cliquez sur **Importer les utilisateurs de « … »**. Vous lisez ensuite combien ont été importés, ignorés et mis en
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
    Si **Nombre** reste à zéro alors que vous attendez des données, vérifiez le chemin vers l'ancienne base de
    ce client. Vous le définissez dans le [Registre des clients](klantenregister.fr.md), sous **Source
    Firebird**.

## Voir aussi

- [Registre des clients](klantenregister.fr.md) — choisir le client et définir son chemin source
- [Utilisateurs](gebruikers.fr.md) — gérer les connexions ensuite
