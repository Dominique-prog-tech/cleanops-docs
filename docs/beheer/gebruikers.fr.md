# Utilisateurs

Cet écran détermine qui peut se connecter à CleanOps et ce que cette personne peut faire. Vous y créez de nouveaux utilisateurs, attribuez des rôles et dépannez quelqu'un dont la connexion échoue.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Gestion**, puis sur **Utilisateurs**.

## Créer un utilisateur

Cliquez sur **Nouvel utilisateur** et complétez :

| Champ | Ce que vous saisissez |
|---|---|
| **Nom d'utilisateur** | L'adresse e-mail de connexion, par exemple `jan@klant.be`. |
| **Nom affiché** | Le nom qui apparaît à l'écran, par exemple `Jan Tester`. |
| **Mot de passe** | Vous en définissez un, ou vous laissez vide et envoyez ensuite un lien de réinitialisation. |
| **Tenant** | Le client auquel appartient cet utilisateur. Si vous choisissez **— Opérateur (aucun) —**, l'utilisateur n'appartient à aucun client et travaille au niveau de la plateforme. |
| **Rôle** | Détermine les droits. Un utilisateur en a exactement un. |

Cliquez sur **Créer l'utilisateur** pour enregistrer.

## La liste

Pour chaque utilisateur, vous voyez l'**Utilisateur**, le **Nom**, le **Rôle** et le **Statut** :

- **Actif** — l'utilisateur peut se connecter.
- **Désactivé** — le compte existe encore, mais la connexion échoue.
- **Verrouillé** — il y a eu trop de tentatives de connexion infructueuses d'affilée.

Votre propre ligne porte la mention **— vous-même —**.

## Les actions

En fin de ligne figurent les actions applicables à cet utilisateur :

- **Mot de passe** — vous définissez vous-même un nouveau mot de passe.
- **Temporaire** — CleanOps génère un mot de passe temporaire que vous copiez avec **Copier** et transmettez.
- **Lien de réinitialisation** — vous obtenez un lien qui laisse l'utilisateur choisir lui-même son mot de passe.
- **Déverrouiller** — lève un verrouillage dû à des tentatives infructueuses.
- **Désactiver** / **Activer** — exclut quelqu'un ou lui rend l'accès.

**Vérifier les liaisons** contrôle si les utilisateurs de ce client sont correctement reliés au registre central. Chaque ligne affiche alors **Lié** ou **Non lié**, avec le bouton **Lier** là où c'est encore nécessaire.

## Erreurs fréquentes

!!! warning
    **Ne supprimez pas un utilisateur qui s'en va — désactivez-le.** Un utilisateur supprimé emporte sa trace : vous ne voyez plus après coup qui a modifié quoi. **Désactiver** conserve cet historique et ferme l'accès tout aussi bien.

!!! warning
    **Vous ne pouvez pas vous désactiver vous-même.** CleanOps l'interdit délibérément : vous ne pourriez plus vous connecter pour revenir en arrière.

!!! tip
    Un mot de passe temporaire ou un lien de réinitialisation n'est visible qu'une seule fois. Copiez-le immédiatement et transmettez-le par un canal où vous reconnaissez la personne — pas dans une discussion de groupe publique.

## Voir aussi

- [Rôles](rollen.fr.md) — ce qu'un rôle autorise exactement
- [Journal d'audit](actielogboek.fr.md) — qui a fait quoi
