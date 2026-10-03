# Postes ouverts

Postes ouverts est votre gestion des rappels : les factures et notes de crédit qui ne sont pas encore (entièrement) payées. Ici,
vous voyez ce qui est échu, vous créez un rappel et vous suivez qui vous avez déjà relancé.

![La liste Postes ouverts de la démo dans la sélection Échus, avec les colonnes Téléphone, Document, Échéance, Solde ouvert, Rappels et Suivant](images/openstaande-posten-lijst-fr.png "Postes ouverts")

## Ouvrir l'écran

Dans le menu de gauche, sous **Ventes**, cliquez sur **Postes ouverts**. Vous le voyez avec le rôle **Financieel** ou en tant
qu'administrateur. Enregistrer des rappels et modifier les données de rappel demande en plus le droit *Gérer les rappels* ;
par défaut, seul l'administrateur l'a.

Le nombre à côté de **Postes ouverts** dans le menu compte les postes qui attendent un rappel suivant.

## La liste

En haut, choisissez une **Sélection** :

| Sélection | Ce que vous voyez |
|---|---|
| Échus | Les postes dont l'échéance est passée. C'est ici que vous commencez : ce qui demande un premier rappel. L'écran s'ouvre ainsi. |
| Prochain rappel | Les postes qui ont déjà reçu un rappel, datant d'au moins le délai entre deux rappels. |
| Exclus | Les postes que vous avez exclus des rappels. |
| Client sans rappels | Les postes des clients dont la case **Reçoit des rappels** est décochée sur la [fiche client](klanten.fr.md). |
| Tous les postes ouverts | Tout ce qui est ouvert, y compris les notes de crédit. |

Le délai se règle sur la [fiche entreprise](beheer/bedrijfsfiche.fr.md), sous **Délai entre deux rappels**. Vide signifie
15 jours.

| Colonne | Contenu |
|---|---|
| N° client, Client | Pour qui, avec la rue et la commune en dessous, et la remarque s'il y en a une. |
| Téléphone | Le GSM du client, sinon son numéro fixe. |
| Document | Le journal et le numéro. Cliquez dessus pour ouvrir la facture. |
| Échéance | Quand le poste devait être payé. |
| Solde ouvert | Ce qui reste ouvert ; **en rouge** si le poste est échu. |
| Rappels | Combien de rappels sont partis, avec la date du dernier. |
| Suivant | Le degré que recevra un nouveau rappel (1, 2 ou 3) ; un tiret si le poste ne reçoit pas de rappel. |

À droite figurent les marques **recouvrement**, **avertissement**, **exclu**, **plan de paiement** et **client sans rappels**.
Le sélecteur de colonnes affiche aussi **Date**, **Total**, **Payé**, **Dernier rappel** et **Remarque** comme colonnes séparées.

Cherchez par client, commune, rue, téléphone, document ou remarque. Double-cliquez sur un poste pour ouvrir la fiche client.
Sélectionnez un poste et ouvrez à droite le volet **Journal** pour son historique : qui a modifié quoi, et chaque rappel
enregistré.

## Créer un rappel

Cochez le poste et cliquez sur **Créer un rappel…**. L'aperçu avant impression affiche la lettre de rappel, avec la facture
derrière sur une nouvelle page.

![L'Aperçu avant impression d'une lettre de rappel : l'en-tête, le client, le degré, la facture, le solde ouvert et la communication, avec le bouton Télécharger](images/openstaande-posten-rappel-fr.png "Lettre de rappel")

- Le **degré** suit le nombre de rappels envoyés : **Rappel**, **Deuxième rappel**, et à partir du troisième **Dernier
  rappel**.
- La lettre demande de payer le solde ouvert dans les 8 jours, sur votre compte et avec la communication structurée de la
  facture.
- La lettre est dans la langue de la facture.

Cliquez sur **Télécharger** pour enregistrer le PDF et le joindre à votre e-mail. Fermez ensuite l'aperçu : CleanOps demande
**Enregistrer le rappel ?**. Cliquez sur **Enregistrer le rappel** : le nombre de rappels augmente d'un, avec la date du jour,
et le rappel entre dans l'historique des rappels du client. Cliquez sur **Annuler** si vous vouliez seulement regarder.

Pas de rappel pour une note de crédit, un poste exclu, ou un client dont la case **Reçoit des rappels** est décochée. Le bouton
est alors désactivé et indique pourquoi.

## Données de rappel

Cochez un seul poste et cliquez sur **Données de rappel…**.

![La fenêtre Données de rappel avec Rappels envoyés, Recouvrement, Avertissement et Remarque](images/openstaande-posten-gegevens-fr.png "Données de rappel")

| Champ | Ce que vous indiquez |
|---|---|
| Rappels envoyés | Le nombre de rappels, à corriger à la main de 0 à 3. Cela ne crée pas de ligne dans l'historique des rappels. |
| Recouvrement | Le poste a été transmis à un bureau de recouvrement. |
| Avertissement | Le poste demande un suivi à part. |
| Remarque | Une note courte, 100 caractères au maximum. Elle figure sous le nom du client dans la liste. |

## Exclure et réintégrer

Cochez un ou plusieurs postes et cliquez sur **Exclure des rappels** : ils disparaissent de Échus et Prochain rappel, et
figurent désormais sous **Exclus**. Avec **Réintégrer**, ils reçoivent de nouveau des rappels.

## Questions fréquentes

**Puis-je envoyer un rappel par e-mail depuis CleanOps ?**
Pas encore. Téléchargez le PDF dans l'aperçu avant impression et joignez-le à votre e-mail.

**Puis-je saisir un paiement ?**
Pas encore dans CleanOps.

**Où vois-je les rappels qu'un client a déjà reçus ?**
Sur la [fiche client](klanten.fr.md), onglet **Postes ouverts** : l'historique des rappels s'y trouve.

**Je ne vois pas le bouton Créer un rappel.**
Il faut pour cela le droit *Gérer les rappels*. Demandez-le à votre administrateur.

## Voir aussi

- [Factures](facturen.fr.md)
- [Clients](klanten.fr.md)
- [Fiche entreprise](beheer/bedrijfsfiche.fr.md)
