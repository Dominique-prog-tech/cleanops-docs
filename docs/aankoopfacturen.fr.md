# Factures d'achat

Les factures et notes de crédit de vos fournisseurs. Par document, CleanOps garde le fournisseur, son numéro et sa
date, l'échéance, les montants par taux de TVA, et ce qui reste à payer.

![La liste Factures d'achat de la démo avec les filtres Type, Exercice, Période et Afficher, et par document la date, le numéro, le fournisseur et les montants](images/aankoopfacturen-lijst-fr.png "Factures d'achat")

## Ouvrir l'écran

Cliquez à gauche dans le menu, sous **Achats**, sur **Factures d'achat**. Il vous faut le droit *Voir les achats* ;
pour encoder des documents aussi *Modifier les achats*. Le rôle Financieel reçoit les deux.

## La liste

Par document, vous voyez la date de comptabilisation, le numéro, le type, le fournisseur, le véhicule, la date et le
numéro du fournisseur, le total, ce qui reste ouvert et l'échéance. La comptabilisation la plus récente figure en haut.

- **Type** — uniquement les factures ou uniquement les notes de crédit.
- **Exercice** — le numéro recommence à 1 chaque exercice ; choisissez un exercice pour voir une seule série.
- **Période** — sur la date de comptabilisation.
- **Afficher** — *Ouverts* ne montre que ce qui reste à payer (ou, pour une note de crédit, à imputer).
- **Rechercher** — le curseur se trouve directement dans le champ de recherche. La recherche porte sur le numéro, le
  fournisseur, le numéro du fournisseur, la description et le véhicule.
- **Exporter** — le bouton en haut à droite vous donne la liste telle qu'elle est filtrée, sous forme de fichier.
- **Ouvrir** — double-cliquez sur une ligne pour ouvrir le document.
- **Journal** — le volet à droite montre les pièces jointes et l'historique du document sélectionné.

## Une nouvelle facture d'achat

Cliquez sur **Nouvelle facture d'achat**. Le journal, le type *Facture* et la date de comptabilisation du jour sont
déjà remplis. Après **Enregistrer**, le document reçoit son numéro et s'ouvre à nouveau, avec ses onglets.

![La fiche d'une facture d'achat de Pompes Delhaye avec le bloc Document et deux lignes TVA, 21 % et 6 %](images/aankoopfactuur-fiche-fr.png "Une facture d'achat")

**Document**

| Champ | Ce que vous complétez |
|---|---|
| Fournisseur * | dans la liste des [fournisseurs](leveranciers.md) |
| Journal * | le journal d'achat |
| Type * | facture ou note de crédit |
| Date de comptabilisation * | la date à laquelle vous comptabilisez le document ; elle détermine l'exercice et donc le numéro |
| Date fournisseur * | la date sur le document du fournisseur, pas dans le futur |
| N° fournisseur * | le numéro sur le document du fournisseur |
| Échéance | à laisser vide : elle suit alors le délai de paiement du fournisseur (une note de crédit échoit à sa date) |
| Description | ce qui a été acheté, en bref |
| Véhicule | pour un coût de véhicule, dans la liste des [véhicules](beheer/voertuigen.md) |

**TVA** — une ligne par taux de TVA. Choisissez le **code TVA** et indiquez la **base** : CleanOps propose la TVA. Si le
document du fournisseur porte un autre montant de TVA, tapez-le par-dessus. Avec **+ Ajouter un taux**, vous mettez un
deuxième taux sur le même document, par exemple 21 % et 6 %. Si le fournisseur a un code TVA par défaut, il figure déjà
dans la première ligne.

!!! note "Le même document deux fois ?"
    CleanOps refuse un document portant le même numéro et la même date du même fournisseur. Vous ne comptabilisez
    ainsi pas une facture deux fois par erreur.

## Une facture par Peppol

Si votre fournisseur envoie sa facture par Peppol, vous ne devez pas la saisir : elle figure dans
[Documents reçus](binnengekomen-documenten.md), et **Traiter** ouvre cette fiche déjà remplie. En haut figure alors la
carte **Document Peppol** avec le PDF et les lignes du fournisseur ; elle reste aussi après l'enregistrement. La TVA
du document reste : pour une telle facture, CleanOps ne la recalcule pas.

## Le numéro

Le numéro court par exercice et journal d'achat, à partir de 1 ; factures et notes de crédit partagent la série. Le
numéro suivant se règle dans [Numéros de documents](beheer/documentnummers.md).

## Modifier et supprimer

Tant que rien n'est payé, vous adaptez un document et l'enregistrez. Le fournisseur, le journal et l'exercice sont
fixes : le numéro en dépend.

**Supprimer** au bas de la fiche retire définitivement le document, après confirmation. Son numéro passe au document
d'achat suivant, afin qu'il n'y ait pas de trou dans la série.

!!! note "Payé = fixe"
    Si un montant est déjà payé sur un document, cela figure en haut de la fiche et vous ne pouvez plus le modifier
    ni le supprimer. Si ce paiement était une erreur, annulez-le dans [Paiements](betalingen.md) : vous pouvez ensuite
    adapter à nouveau le document.

## L'onglet Paiements

Les paiements sur ce document, avec la date et le numéro de l'extrait et le montant. Au-dessus figure ce qui reste
ouvert, comme sur l'extrait : négatif pour une facture que vous devez encore payer. S'il reste un montant ouvert,
**Saisir un paiement** ouvre la fenêtre de [Paiements](betalingen.md) avec ce document déjà rempli. Ce qui reste ouvert
chez tous vos fournisseurs se voit dans les [Postes ouverts fournisseurs](openstaande-posten-leveranciers.md).

## Les onglets Pièces jointes et Historique

Sous **Pièces jointes**, vous gardez le document du fournisseur, par exemple le PDF reçu par e-mail. L'**Historique**
montre qui a modifié quel champ, quand, et de quelle valeur vers quelle valeur.

## Questions fréquentes

**Où sont les lignes de la facture ?**
Une facture d'achat porte les montants par taux de TVA, comme votre application précédente. Le détail de ce qui a été
acheté figure sur le document du fournisseur, sous Pièces jointes. Si la facture est arrivée par Peppol, les lignes
figurent aussi en haut de la fiche, dans la carte Document Peppol.

**Je ne peux plus modifier un document.**
Regardez en haut de la fiche : s'il y est indiqué qu'un montant est déjà payé, le document est fixe. L'onglet Paiements
montre de quel paiement il s'agit ; un paiement erroné s'annule dans [Paiements](betalingen.md).

**L'échéance est incorrecte.**
Laissez le champ vide pour la recalculer à partir du délai de paiement du fournisseur, ou indiquez la date du document.
