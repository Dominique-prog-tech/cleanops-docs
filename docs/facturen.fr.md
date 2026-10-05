# Factures

Factures affiche tous vos documents de vente : les factures et notes de crédit de votre application précédente et celles que
vous avez comptabilisées dans CleanOps. Ici, vous établissez une facture avec des lignes libres, vous imprimez une facture, vous
modifiez une facture qui n'a pas encore été envoyée et vous la créditez. Les ordres de travail se facturent dans
[Facturation](facturatie.fr.md).

![La liste Factures de la démo avec des factures et une note de crédit, les filtres Type et Exercice, le bouton Nouvelle facture et la colonne Créditée par](images/facturen-lijst-fr.png "Factures")

## Ouvrir l'écran

Dans le menu de gauche, sous **Ventes**, cliquez sur **Factures**. Vous le voyez avec le rôle **Financieel** ou en tant
qu'administrateur. Comptabiliser, modifier et créditer des factures demande en plus le droit *Établir des factures* ; par défaut,
seul l'administrateur l'a.

## La liste

| Colonne | Contenu |
|---|---|
| N°, Type | Le numéro du document et s'il s'agit d'une facture ou d'une note de crédit. |
| Date, Client, Total | La date du document, pour qui, et le montant TVA comprise. |
| Échéance | Quand la facture doit être payée. |
| Envoyée | Comment le document a été envoyé : *courrier*, *courriel* ou *Peppol*. Vide : pas encore envoyé. |
| Communication | La communication structurée. |
| Créditée par | Le numéro de la note de crédit qui crédite cette facture. |

En haut, choisissez un **Type**, un **Exercice** ou une **Période**, ou cherchez par numéro, client ou communication.
Sélectionnez un document et ouvrez à droite le volet **Journal** pour ses pièces jointes et son historique. Double-cliquez pour
l'ouvrir.

## Une nouvelle facture

Avec **Nouvelle facture**, vous établissez une facture pour quelque chose qui n'a pas d'ordre de travail, par exemple un
déplacement ou une livraison de matériel.

1. En haut de la liste, cliquez sur **Nouvelle facture**, cherchez le client par nom ou par numéro et cliquez sur **choisir**.
2. Indiquez la **Date de facture** (aujourd'hui par défaut) et, si besoin, la **Référence du client**, le **Texte d'en-tête** et le
   **Texte de pied de page**. **Insérer un texte de facture** ajoute un texte des [textes de facture](beheer/factuurteksten.fr.md)
   à la fin du champ, dans la langue du client.
3. Remplissez les **lignes**. Choisir un **Tarif** remplit la description, l'unité, le prix et le code TVA ; vous pouvez ensuite
   les adapter. Une description de plus de 35 caractères figure en entier sous la ligne. Les boutons à droite dupliquent ou
   suppriment une ligne ; **+ Ajouter une ligne** en ajoute une.
4. En bas figurent le total hors TVA, la TVA et le total TVA comprise, tels qu'ils seront comptabilisés.
5. Cliquez sur **Comptabiliser la facture**. CleanOps vous le demande encore une fois, avec le montant. La facture reçoit le numéro
   suivant, une échéance selon le délai de paiement du client et une communication structurée, et figure dans les
   [Postes ouverts](openstaande-posten.fr.md). Elle s'ouvre aussitôt.

![La fenêtre Nouvelle facture pour Dubois Marie avec un Texte d'en-tête, deux lignes libres sous Lignes et les totaux, avec le bouton Comptabiliser la facture](images/factuur-nieuw-fr.png "Nouvelle facture")

Si quelque chose ne va pas, par exemple une ligne sans code TVA, l'écran indique ce qui manque et rien n'est comptabilisé. Si une
ligne porte une TVA de 6 %, la phrase d'attestation s'ajoute d'elle-même sous le texte de pied de page.

## La facture

![Une facture de la démo : les données en haut, les Lignes dans une grille qui défile séparément et la Ventilation de la TVA en dessous](images/factuur-fiche-fr.png "Une facture")

En haut figurent le client, les dates, le délai de paiement, la communication, la référence du client et les montants. En
dessous, le **Texte d'en-tête** s'il y en a un, les **Lignes**, la **Ventilation de la TVA** et à côté les **Paiements** reçus (voir [Paiements](betalingen.fr.md)) : chaque
grille défile séparément.
En bas figure le **Texte de pied de page**, par exemple la phrase d'attestation à 6 %. En haut à droite se trouvent les **Pièces
jointes** et l'**Historique**. Une ligne provenant d'un ordre de travail en porte le numéro ; une ligne libre n'en a pas.

Une note de crédit indique quelle facture elle contre-passe, et une facture créditée par quelle note de crédit ; les deux sont
un lien.

Si le document est encore ouvert, **Saisir un paiement…** y saisit directement un paiement, avec le montant ouvert déjà rempli
(voir [Paiements](betalingen.fr.md)).

### Imprimer

**Aperçu avant impression** affiche la facture en PDF, dans la langue de la facture. **Télécharger** l'enregistre ; l'icône
d'imprimante de la visionneuse l'imprime. Si la facture a déjà été envoyée, CleanOps vous demande d'abord si vous voulez quand
même l'ouvrir.

![L'Aperçu avant impression d'une facture avec l'en-tête, les lignes, la TVA, les totaux et la communication structurée](images/factuur-afdruk-fr.png "Impression")

Sur la facture figurent :

- l'**en-tête** de la [fiche entreprise](beheer/bedrijfsfiche.fr.md) : logo, nom, adresse, numéro de TVA, IBAN et BIC ;
- le type : facture, facture d'acompte, facture de solde ou note de crédit ;
- le numéro, la date, l'échéance, le numéro de client et la référence du client ;
- le client avec son adresse et son numéro de TVA ;
- le texte d'en-tête, les lignes, la TVA par pourcentage et les totaux ;
- sur une facture, la demande de paiement avec la communication structurée — pas sur une note de crédit ;
- le texte de pied de page et les mentions légales : à 6 %, la phrase d'attestation ; à 0 %, l'autoliquidation par le
  cocontractant.

### Envoyé par courrier

Si vous avez imprimé la facture et l'avez envoyée par la poste, cliquez sur **Envoyé par courrier**. Dans la liste, elle figure
alors comme envoyée, le bouton disparaît, et la facture ne peut plus être rouverte.

### Modifier l'en-tête

**Modifier l'en-tête…** adapte le texte d'en-tête, le texte de pied de page et la référence du client, même sur une facture déjà
envoyée. La communication structurée ne change jamais : le client paie avec elle.

### Rouvrir

Tant qu'une facture n'a pas été envoyée, vous pouvez encore la modifier avec **Rouvrir…**. La même fenêtre que pour une nouvelle
facture s'ouvre, avec la facture :

- les **Ordres de travail** de la facture. La croix en retire un ; cet ordre figure ensuite à nouveau dans
  [Facturation](facturatie.fr.md). **+ Ajouter des ordres de travail…** choisit des ordres à facturer du même client, exécutés au
  plus tard à la date de la facture ;
- les **Lignes libres**, que vous adaptez, ajoutez ou supprimez comme pour une nouvelle facture ;
- la référence du client, le texte d'en-tête et le texte de pied de page.

![Rouvrir la facture 20260002 de Dubois Marie : les Ordres de travail avec une croix pour les retirer, une ligne libre ajoutée, et le bouton Comptabiliser les modifications](images/factuur-heropenen-fr.png "Rouvrir")

Cliquez sur **Comptabiliser les modifications**. CleanOps vous demande si le client n'a pas encore reçu la facture. Le numéro, la
date, l'échéance et la communication structurée ne changent pas ; les lignes, la TVA, la phrase d'attestation et le montant dans
les [Postes ouverts](openstaande-posten.fr.md) suivent le nouveau contenu.

Le prix d'une ligne d'ordre de travail se modifie sur l'ordre lui-même : retirez-le de la facture, corrigez l'ordre (le numéro est
un lien vers l'ordre) et ajoutez-le à nouveau.

**Rouvrir…** n'apparaît pas pour une facture envoyée, créditée, (partiellement) payée ou ayant fait l'objet d'un rappel, pour une
facture d'acompte ou de solde, pour une note de crédit ni pour une facture de votre application précédente. Créditez-la alors et
établissez-en une nouvelle.

### Statut de crédit

**Statut de crédit…** marque à la main le poste ouvert d'un document comme crédité, ou retire cette marque. Un poste crédité ne
figure pas dans les listes de rappel. Le bouton n'apparaît que si le document a un poste ouvert.

## Créditer

Supprimer une facture n'est pas possible : la numérotation des factures ne comporte pas de trous. Pour annuler une facture,
établissez une note de crédit.

Cliquez sur **Créer une note de crédit**. La fenêtre explique ce qui va se passer. Cochez **Remettre les ordres de travail « à
facturer »** si vous voulez refacturer le même travail, par exemple après une erreur sur la facture : les ordres de travail
figurent alors à nouveau dans [Facturation](facturatie.fr.md). Cliquez sur **Créditer**. La note de crédit reçoit le numéro
suivant de la série des notes de crédit et s'ouvre aussitôt.

Une facture déjà créditée ne peut pas l'être une seconde fois.

## Questions fréquentes

**Puis-je envoyer une facture par e-mail ou via Peppol ?**
Pas encore. Téléchargez le PDF dans l'**Aperçu avant impression** et joignez-le à votre e-mail. Cliquez ensuite sur **Envoyé par
courrier** si vous voulez que la facture compte comme envoyée.

**Je ne vois pas Rouvrir… sur une facture.**
La facture a été envoyée, créditée, payée ou a fait l'objet d'un rappel, ou il s'agit d'une facture d'acompte, de solde ou d'une
note de crédit. Créditez la facture et établissez-en une nouvelle.

**Pourquoi les lignes d'ordre de travail sont-elles figées quand je rouvre une facture ?**
Leur prix vient de l'ordre de travail. Retirez l'ordre de la facture, corrigez-le et ajoutez-le à nouveau.

**Une facture d'acompte ne peut pas être créditée.**
L'acompte a déjà été déduit sur une facture de solde. Créditez d'abord cette facture de solde ; l'acompte est alors à nouveau
ouvert.

**Pourquoi une note de crédit a-t-elle un numéro comme 20269001 ?**
Les factures et les notes de crédit ont chacune leur série par exercice : une facture reçoit l'année suivie de 0001 (20260001),
une note de crédit l'année suivie de 9001 (20269001).

## Voir aussi

- [Facturation](facturatie.fr.md)
- [Postes ouverts](openstaande-posten.fr.md)
- [Clients](klanten.fr.md)
- [Textes de facture](beheer/factuurteksten.fr.md)
- [Fiche entreprise](beheer/bedrijfsfiche.fr.md)
