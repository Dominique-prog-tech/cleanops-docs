# Génération des ordres de travail

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de CleanOps, vous ne le voyez pas dans votre menu.

!!! note "Écran en néerlandais"
    Cet écran interne s'affiche en néerlandais. Les libellés des boutons sont repris ci-dessous tels qu'ils
    apparaissent à l'écran.

Les contrats périodiques d'un client donnent naissance aux ordres de travail : un contrat prévoyant un curage
deux fois par an produit de lui-même les passages à planifier. Cela se fait automatiquement chaque nuit. Sur
cet écran, vous lancez cette même génération manuellement pour un seul client, par exemple après avoir
transféré ou modifié des contrats et que vous voulez en voir le résultat immédiatement.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Beheer**, puis sur **Generatie**.

<!-- AFBEELDING: l'écran de génération avec le tenant actif et le bouton Genereer werkorders -->

## Choisir d'abord un client

En haut figure **Actieve tenant** avec le code du client sur lequel vous travaillez. Si vous lisez *geen —
kies er eerst één bij Tenants*, rendez-vous dans le [Registre des clients](klantenregister.fr.md) et cliquez
sur **Utiliser →** chez le bon client. Tant qu'aucun client n'est choisi, le bouton reste désactivé.

## Lancer la génération

Cliquez sur **Genereer werkorders**. Pendant l'opération, le bouton affiche **Bezig…**. Ensuite s'affiche le
nombre de nouveaux ordres de travail créés et le nombre de contrats actifs dont ils proviennent.

Ce que fait la génération :

- Elle regarde **90 jours à l'avance** et crée les passages qui tombent dans cette fenêtre.
- Elle **laisse intacts les ordres existants**. Lancer deux fois de suite ne produit rien de neuf la seconde
  fois — il n'y a pas de doublons.
- Elle **rattrape les passages récemment manqués**. Un contrat dont un passage est passé entre les mailles le
  reçoit malgré tout.

!!! tip
    Zéro nouvel ordre de travail est une réponse normale, pas une panne. Le plus souvent, cela signifie que
    l'exécution nocturne a déjà fait le travail, ou qu'il n'y a rien à planifier dans les quatre-vingt-dix
    jours à venir.

## Erreurs fréquentes

!!! warning
    **Vérifiez quel client est actif avant de lancer.** La génération écrit dans la base de ce client.

!!! warning
    **N'attendez pas d'ordres de travail d'un contrat inactif, ou qui tombe en dehors de la fenêtre de
    quatre-vingt-dix jours.** Si le compteur reste à zéro alors que vous attendiez quelque chose, vérifiez
    d'abord la date de début et la fréquence du contrat sur la fiche du client.

## Voir aussi

- [Registre des clients](klantenregister.fr.md) — choisir le client sur lequel vous travaillez
- [Conversion](conversie.fr.md) — transférer les contrats qui servent de base à la génération
- [Clients](../klanten.fr.md) — les contrats d'un client sur sa fiche
