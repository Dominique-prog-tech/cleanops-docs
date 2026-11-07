---
description: "Clients et fournisseurs dans l'application CleanOps pour le bureau : rechercher, la fiche client avec son solde et ses factures, créer ou modifier un client, le solde d'un fournisseur."
---

# Clients et fournisseurs

Sous **Clients** et **Fournisseurs**, vous recherchez un client ou un fournisseur dans l'application, avec ses données et,
si votre rôle a le droit, ce qui reste ouvert. Qui voit quel écran suit les droits de son rôle (voir
[L'application pour le bureau](kantoor.fr.md)). À partir de la version 1.3.3, vous pouvez aussi créer ou modifier un client dans
l'application (voir [Créer ou modifier un client](#creer-ou-modifier-un-client)) ; un fournisseur se modifie sur l'ordinateur.

Sur une **tablette**, la fiche figure à droite de la liste ; sur un **téléphone**, elle s'ouvre comme un écran à part.

## Clients

Ouvrez le menu et touchez **Clients**. Recherchez par **nom**, **commune** ou **numéro de client** : la même recherche que la
liste des clients sur l'ordinateur.

En haut figurent le numéro de client, le téléphone et l'adresse e-mail ; les toucher appelle ou envoie un e-mail. Si le
client est bloqué ou n'accepte plus de nouvelles affaires, c'est indiqué au-dessus avec un signe d'avertissement rouge.

En dessous figure l'argent du client, chaque bloc uniquement avec le droit de son écran sur l'ordinateur :

| Bloc | Contenu | Droit |
|---|---|---|
| Solde ouvert | Ce que le client doit encore, en grand (en rouge s'il est supérieur à zéro), avec chaque poste ouvert : l'échéance, depuis quand il est échu et le prochain rappel. | Postes ouverts |
| Factures | Les factures les plus récentes, avec ce qui en reste ouvert. Les autres sont dans [Factures](kantoor-verkoop.fr.md#factures). | Factures |
| Devis | Les devis les plus récents. | Devis |

En bas suit, par adresse, la carte que l'équipe voit aussi (voir [Clients dans l'application](klanten.fr.md)) :
l'instruction de travail, le matériel, l'accessibilité et les ordres de travail à cette adresse.

Toucher une facture, un devis ou un ordre de travail ouvre sa fiche, si votre rôle a le droit sur cette liste.

![La fiche client pour le bureau sur une tablette : en haut l'avertissement que le client n'accepte plus de nouvelles affaires, le téléphone et l'e-mail, le solde ouvert en grand et en rouge avec le poste ouvert, les factures et les devis, et en dessous l'adresse principale avec les ordres de travail à cette adresse](../images/app-kantoor-klant-fr.png "Un client pour le bureau"){ width="560" }

!!! info
    Les collaborateurs sur le terrain ne voient **jamais** de montants, de factures ou de postes ouverts sur leur fiche
    client. L'argent figure uniquement dans l'application pour le bureau, pour qui en a le droit.

### Créer ou modifier un client

À partir de la version 1.3.3, avec le droit **Modifier les clients**, comme sur l'ordinateur. Il vous faut une connexion : sans
réseau, l'application n'enregistre rien.

- **Un nouveau client :** touchez **Nouveau client** en bas de la liste. Après **Enregistrer**, sa fiche s'ouvre.
- **Modifier un client :** sur la fiche, touchez le crayon en haut à droite. Après **Enregistrer**, vous revenez sur la fiche.

Le formulaire comporte trois parties :

| Partie | Champs |
|---|---|
| Client | **Particulier** ou **Entreprise**, le nom, l'adresse et la langue. Pour une entreprise, aussi le **numéro de TVA** : il est obligatoire, et **Récupérer** remplit le nom et l'adresse depuis la BCE. |
| Coordonnées | **Téléphone**, **GSM**, **e-mail** et **personne de contact**. |
| Remarques | Le champ libre de la fiche client. |

Un nouveau client reçoit le délai de paiement par défaut de la [fiche d'entreprise](../beheer/bedrijfsfiche.fr.md#nouveaux-clients) ;
s'il n'y en a pas, le formulaire le demande. La **facturation** (délai de paiement, factures par e-mail et les adresses e-mail par
type) et les **adresses de chantier** se modifient sur la [fiche client](../klanten.fr.md) sur l'ordinateur.

Si quelqu'un d'autre a modifié le même champ pendant que vous aviez le formulaire ouvert, l'application n'enregistre rien et le
dit. Rouvrez la fiche pour voir ce qui y figure maintenant. Ce qu'un collègue a modifié dans un autre champ reste en place.

![Modifier le client sur une tablette : Particulier ou Entreprise, Nom, l'adresse et la langue, en dessous Coordonnées avec Téléphone, GSM, E-mail et Personne de contact, et les Remarques](../images/app-kantoor-klant-wijzigen-fr.png "Modifier le client"){ width="560" }

## Fournisseurs

Ouvrez le menu et touchez **Fournisseurs**. Recherchez par **nom**, **adresse**, **numéro de TVA** ou **téléphone**.

La fiche affiche le numéro du fournisseur, l'adresse avec l'itinéraire, le téléphone et l'adresse e-mail (les toucher
appelle ou envoie un e-mail), la **personne de contact**, le **numéro de TVA**, le **compte**, le **délai de paiement** et les
remarques. Avec le droit **Achats**, elle affiche aussi le **solde ouvert**, avec chaque document ouvert comme sur
l'extrait : ce que vous devez encore payer y figure en négatif, avec l'échéance, et *note de crédit* pour une note de crédit.

![La fiche fournisseur sur une tablette : l'adresse avec le téléphone et l'e-mail, la personne de contact, le numéro de TVA, le compte et le délai de paiement, le solde ouvert avec le document ouvert, et les remarques](../images/app-kantoor-leverancier-fr.png "Un fournisseur"){ width="560" }

## Voir aussi

- [Clients](../klanten.fr.md) et [Fournisseurs](../leveranciers.fr.md) sur l'ordinateur
- [Factures, devis et postes ouverts dans l'application](kantoor-verkoop.fr.md)
- [Achats dans l'application](kantoor-aankoop.fr.md)
