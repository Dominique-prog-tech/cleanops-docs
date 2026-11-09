---
description: "Les ordres de travail dans l'application CleanOps pour le bureau : rechercher, lire la fiche et noter un nouvel ordre pendant que le client est au téléphone."
---

# Ordres de travail

Sous **Ordres de travail**, vous recherchez un ordre de travail dans l'application et vous lisez où il en est : planifié
ou exécuté, par qui, avec quelles notes, photos et attestations. L'écran est destiné aux personnes du bureau qui ont le
droit sur les ordres de travail (voir [L'application pour le bureau](kantoor.fr.md)). Modifier un ordre existant se fait dans
[Ordres de travail](../werkorders.fr.md) sur l'ordinateur.

## Rechercher un ordre de travail

Ouvrez le menu et touchez **Ordres de travail**. Tapez un **numéro**, une partie du **nom du client** ou de l'**adresse**,
ou un numéro de contrat. C'est la même recherche que dans la liste Ordres de travail sur l'ordinateur.

Sans terme de recherche, la liste affiche tous les ordres de travail. Au-dessus de la liste figure le nombre d'ordres de travail trouvés. L'application en affiche 30 à la fois ; avec
**Charger plus** en bas, les suivants arrivent.

À partir de la version 1.3.3, sous un ordre de travail figure en petit comment il a été **payé**, par exemple *Cash (sur place) · € 90,75*.
Le montant n'y figure que pour un paiement sur place : c'est ce que le collaborateur a noté dans l'application, pas le montant facturé.

Sur une **tablette**, la fiche figure à droite de la liste ; sur un **téléphone**, elle s'ouvre comme un écran à part.

![Les ordres de travail sur une tablette : à gauche les 56 ordres de travail trouvés avec leur statut et en bas Nouvel ordre, à droite la fiche de l'ordre de travail 900155 avec Itinéraire et Appeler, le planning, le travail et la signature du client avec Voir le bon signé](../images/app-kantoor-werkorders-fr.png "Un ordre de travail pour le bureau"){ width="560" }

## La fiche

La fiche affiche ce que l'équipe voit sur place, et en plus comment le travail a été exécuté. Un bloc sans contenu n'est
pas affiché.

| Bloc | Contenu |
|---|---|
| En haut | Le client, le chantier et le statut. Le **mode de paiement**, s'il a été choisi (le montant sur place figure sous Planning). L'adresse avec **Itinéraire**, qui ouvre le trajet dans l'application de cartes ; le numéro de téléphone avec **Appeler**. |
| Planning | **Planifié** : le jour et la partie de journée. **Exécuté** : le jour où le travail a été exécuté. Le **collaborateur** et le convoyeur, le **véhicule** et le **montant sur place**. |
| Travail | L'**instruction**, la **mission**, la **remarque**, le **matériel** et le **tarif**. |
| Temps | Chaque enregistrement du chrono : **travail** ou **déplacement**, qui, de quand à quand et combien de temps. |
| Notes, Photos | Ce que l'équipe a noté et photographié. |
| Attestations, Rapport caméra, Travaux supplémentaires | Ce que l'équipe a complété sur place. |
| Signature du client | Qui a signé et quand, avec la remarque du client. **Voir le bon signé** ouvre le bon de livraison signé en PDF. |

Le chrono, la clôture et la signature n'ont pas de bouton : ils restent chez le collaborateur qui fait le travail. Qui peut
planifier voit toutefois [Déplacer](#deplacer-un-ordre-de-travail) sous Planning.

## Déplacer un ordre de travail

À partir de la version 1.3.4, vous déplacez un ordre de travail planifié vers un autre jour, aussi dans une autre semaine, ou vers un
autre collaborateur. Il vous faut le droit **Modifier le planning**.

1. Ouvrez l'ordre de travail, depuis **Ordres de travail** ou le [Planning de la semaine](weekplanning.fr.md).
2. Sous **Planning**, touchez **Déplacer**. En haut figure le planning actuel ; le jour, la partie de journée et le collaborateur sont déjà remplis.
3. Choisissez le nouveau jour, la partie de journée ou le collaborateur et touchez **Déplacer**.

Si l'ordre a une **date fixe**, si le jour est passé ou si le collaborateur est en congé ce jour-là, l'application demande d'abord.
Si quelqu'un d'autre a déplacé l'ordre entre-temps, l'application le dit et son planning reste en place. Le travail exécuté ne se
déplace pas. Si l'ordre change de jour ou d'heure, [Client averti](../planning.fr.md#client-averti) repasse sur **NOK** sur le
tableau de planning.

## Supprimer un ordre de travail

À partir de la version 1.3.3, glissez un ordre de travail vers la gauche dans la liste **Ordres de travail** ou **Encore à planifier**
pour le supprimer. L'application demande d'abord *Mettre l'ordre de travail … à la corbeille ?*. Après **Vers la corbeille**, un message
avec **Annuler** apparaît en bas : l'ordre revient aussitôt. Plus tard, vous le récupérez via la [corbeille](../beheer/prullenbak.fr.md)
sur l'ordinateur.

Glisser n'est possible qu'avec le droit de modifier les ordres de travail, et pas pour un ordre facturé ou signé par le client.
Tant que l'application précédente tient les ordres de travail, ce n'est pas possible.

## Un nouvel ordre de travail

Si un client est au téléphone, vous notez le travail aussitôt, même en déplacement. C'est possible à partir de la version 1.3.0, avec le droit **Modifier les ordres de
travail**, et avec le droit **Modifier les clients** aussi pour un nouveau client. Il vous faut une connexion : sans réseau, l'application n'enregistre rien.

Touchez **Nouvel ordre** en bas à droite : sur l'**Aperçu** ou le [Planning de la semaine](weekplanning.fr.md) et, à partir de la version 1.3.1, aussi sur cet écran et, si vous êtes également collaborateur, sur votre [planning](planning.fr.md). Le formulaire comporte quatre parties :

1. **Client.** Cherchez par nom, téléphone, commune ou numéro de client. Si le client n'y figure pas, touchez **Nouveau client :** suivi de ce que vous avez tapé. Un nom
   va dans le champ Nom, un numéro dans le champ **Téléphone ou GSM**. À partir de la version 1.3.3, vous indiquez aussi l'**adresse e-mail** (peut rester vide). Choisissez **Particulier** ou **Entreprise** et remplissez l'adresse. Pour une entreprise,
   **Récupérer** reprend le nom et l'adresse de la BCE. Le numéro de TVA peut rester vide, mais sans numéro, CleanOps ne crée pas encore de facture.
2. **Adresse.** Pour un client existant, vous choisissez l'une de ses adresses. Si le chantier est ailleurs, activez **Le chantier est à une autre adresse**.
3. **Travail.** La **description** figure sur la facture et compte au plus 35 caractères. Ce dont il s'agit exactement va dans les **instructions**, que l'équipe lit.
4. **Quand.** À partir de la version 1.3.3, activez **Urgent** si le travail doit se faire au plus vite, et choisissez dans **Heure convenue** *Avant*, *Entre*, *Après* ou *À* (une heure fixe) avec l'heure convenue avec le client. Par défaut, l'ordre va dans [Encore à planifier](weekplanning.fr.md#encore-a-planifier). Avec **Planifier maintenant**, vous choisissez le jour, la partie de la journée et éventuellement le collaborateur.

Si le client existe peut-être déjà, l'application montre ces clients avant tout enregistrement : touchez le bon, ou choisissez **Quand même un nouveau client**. Le bureau
complète le tarif, la TVA et le montant plus tard sur l'ordinateur.

![Nouvel ordre de travail sur un téléphone : un nouveau client avec Particulier ou Entreprise, Nom, Téléphone ou GSM et l'adresse](../images/app-kantoor-nieuw-fr.png "Nouvel ordre de travail")

## Questions fréquentes

**Je ne vois pas le bouton Nouvel ordre.**
Votre rôle n'a pas le droit Modifier les ordres de travail, ou votre version de l'application est plus ancienne. Demandez à votre gestionnaire.

**Je ne vois pas Nouveau client.**
Votre rôle n'a pas le droit Modifier les clients. Vous pouvez créer un ordre de travail pour un client existant.

**L'application dit que les ordres de travail sont tenus dans l'application précédente.**
Tant que votre entreprise tient les ordres de travail dans l'application précédente, vous ne pouvez pas les créer dans l'application. Faites-le là.

## Voir aussi

- [Un client au téléphone](../planning.fr.md#un-client-au-telephone-nouvel-ordre-de-travail) sur l'ordinateur
- [Ordres de travail](../werkorders.fr.md) sur l'ordinateur
- [Planning de la semaine dans l'application](weekplanning.fr.md)
- [L'ordre de travail](werkorder.fr.md), tel que l'équipe le voit
