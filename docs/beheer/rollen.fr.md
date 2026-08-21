# Rôles

Un rôle est un ensemble de droits. Vous attribuez un rôle à un utilisateur plutôt que d'accorder chaque droit séparément — ainsi, pour un nouveau collègue, vous ne faites qu'un seul choix.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Gestion**, puis sur **Rôles**.

## Créer un rôle

1. Choisissez en haut le **Tenant** dont vous gérez les rôles. Tant qu'aucun n'est choisi, la mention **— choisissez un tenant —** est affichée.
2. Saisissez le nom sous **Nouveau rôle** et cliquez sur **Ajouter**.

Le nouveau rôle apparaît dans la liste **Rôles**, à gauche.

## Attribuer des droits

Sélectionnez un rôle dans la liste. À droite apparaît **Droits** : une liste de cases à cocher, groupées par partie de CleanOps. Cochez ce que ce rôle peut faire et cliquez sur **Enregistrer les droits**. En cas de succès, la mention **✓ enregistré** s'affiche.

Sous **Utilisateurs avec ce rôle**, vous voyez qui porte ce rôle aujourd'hui. Si la mention **Il n'y a pas encore d'utilisateurs** apparaît, le rôle existe mais n'est encore attribué à personne.

**Supprimer le rôle** retire un rôle. Ne le faites qu'après avoir donné un autre rôle aux utilisateurs qui le portent.

## Ce que fait un droit

Un droit que vous **décochez** masque l'écran **et** le bloque. L'entrée de menu disparaît, et celui qui saisit l'adresse directement n'entre pas davantage. Vous ne devez donc pas raisonner séparément en « visible » et « accessible » : c'est un seul et même réglage.

## Erreurs fréquentes

!!! warning
    **Ne retirez jamais le dernier droit d'administration.** Si vous décochez ce droit sur le seul rôle habilité à gérer les rôles, plus personne ne pourra le rétablir — vous non plus. Créez d'abord un second rôle disposant de ce droit, ou vérifiez que vous portez vous-même un autre rôle avec des droits d'administration.

!!! info
    **Une modification s'applique à la prochaine connexion.** Une personne en train de travailler ne verra votre changement qu'après s'être déconnectée et reconnectée. Demandez-le-lui si la modification est urgente.

## Voir aussi

- [Utilisateurs](gebruikers.fr.md) — attribuer un rôle à quelqu'un
- [Registre des clients](klantenregister.fr.md) — pour quel client vous gérez les rôles
