# Registre des clients

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de CleanOps, vous ne le voyez pas dans votre menu.

Le registre des clients contient tous les clients qui tournent sur la plateforme CleanOps. Chaque client dispose de sa propre base de données ; sur cet écran, vous créez un nouveau client et gérez les existants.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Gestion**, puis sur **Tenants**.

## Créer un client

Complétez en haut **Nouveau tenant** :

| Champ | Ce que vous saisissez |
|---|---|
| **Code** | La clé courte de ce client. Elle figure dans le lien de connexion et **ne change plus ensuite** — choisissez-la donc avec soin. |
| **Nom** | Le nom complet du client, tel qu'il apparaît à l'écran. |

Cliquez sur **Provision**. CleanOps crée le client *et* prépare sa base de données. Pendant l'opération, la mention **En cours…** s'affiche. En cas d'échec, **Échec du provisioning** apparaît avec le motif.

S'il n'existe encore aucun client, vous lisez **Aucun tenant. Créez-en un ci-dessus.**

## La liste

Pour chaque client, vous voyez le **Code**, le **Nom** et s'il est actif. Deux actions :

- **Utiliser →** bascule votre propre session vers ce client, afin de voir ce que voient ses utilisateurs.
- **Source Firebird (chemin)** indique où se trouve la base de données héritée de ce client. Ce chemin est nécessaire pour la conversion. Cliquez sur **Enregistrer** ; en cas de succès, **Source Firebird enregistrée.** s'affiche.

## Erreurs fréquentes

!!! warning
    **Le code est figé dès que le client existe.** Il figure dans le lien de connexion utilisé par le client et dans des références ailleurs. Vérifiez-le donc avant de cliquer sur **Provision** — le modifier après revient à recréer le client.

!!! warning
    **Mettez un client sur inactif plutôt que de le supprimer.** Inactif ferme l'accès sans jeter de données. Un client supprimé emporte son historique.

!!! tip
    Après **Utiliser →**, n'oubliez pas de revenir en arrière lorsque vous voulez de nouveau travailler au niveau de la plateforme. Sinon, vous consultez les données d'un seul client en croyant voir l'ensemble.

## Voir aussi

- [Utilisateurs](gebruikers.fr.md) — qui peut se connecter chez ce client
- [Rôles](rollen.fr.md) — ce que ces utilisateurs peuvent faire
