# Factures

Factures affiche tous vos documents de vente : les factures et notes de crédit de votre application précédente et celles que
vous avez comptabilisées dans CleanOps. Ici, vous imprimez une facture et vous la créditez.

![La liste Factures de la démo avec des factures et une note de crédit, les filtres Type et Exercice, et la colonne Créditée par](images/facturen-lijst-fr.png "Factures")

## Ouvrir l'écran

Dans le menu de gauche, sous **Ventes**, cliquez sur **Factures**. Vous le voyez avec le rôle **Financieel** ou en tant
qu'administrateur. Comptabiliser et créditer des factures demande en plus le droit *Établir des factures* ; par défaut, seul
l'administrateur l'a.

## La liste

| Colonne | Contenu |
|---|---|
| N°, Type | Le numéro du document et s'il s'agit d'une facture ou d'une note de crédit. |
| Date, Client, Total | La date du document, pour qui, et le montant TVA comprise. |
| Échéance, Communication | Quand la facture doit être payée, et la communication structurée. |
| Créditée par | Le numéro de la note de crédit qui crédite cette facture. |

En haut, choisissez un **Type**, un **Exercice** ou une **Période**, ou cherchez par numéro, client ou communication.
Sélectionnez un document et ouvrez à droite le volet **Journal** pour ses pièces jointes et son historique. Double-cliquez pour
l'ouvrir.

## La facture

![Une facture de la démo : les données en haut, les Lignes dans une grille qui défile séparément et la Ventilation de la TVA en dessous](images/factuur-fiche-fr.png "Une facture")

En haut figurent le client, les dates, le délai de paiement, la communication et les montants. En dessous, les **Lignes** et la
**Ventilation de la TVA** : chaque grille défile séparément. En bas figure le **Texte de pied de page** s'il y en a un, par
exemple la phrase d'attestation à 6 %. En haut à droite se trouvent les **Pièces jointes** et l'**Historique**.

Une note de crédit indique quelle facture elle contre-passe, et une facture créditée par quelle note de crédit ; les deux sont
un lien.

### Imprimer

**Aperçu avant impression** affiche la facture en PDF, dans la langue de la facture. **Télécharger** l'enregistre ; l'icône
d'imprimante de la visionneuse l'imprime.

![L'Aperçu avant impression d'une facture avec l'en-tête, les lignes, la TVA, les totaux et la communication structurée](images/factuur-afdruk-fr.png "Impression")

Sur la facture figurent :

- l'**en-tête** de la [fiche entreprise](beheer/bedrijfsfiche.fr.md) : logo, nom, adresse, numéro de TVA, IBAN et BIC ;
- le type : facture, facture d'acompte, facture de solde ou note de crédit ;
- le numéro, la date, l'échéance, le numéro de client et la référence du client ;
- le client avec son adresse et son numéro de TVA ;
- les lignes, la TVA par pourcentage et les totaux ;
- sur une facture, la demande de paiement avec la communication structurée — pas sur une note de crédit ;
- les mentions légales : à 6 %, la phrase d'attestation ; à 0 %, l'autoliquidation par le cocontractant.

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
Pas encore. Téléchargez le PDF dans l'**Aperçu avant impression** et joignez-le à votre e-mail.

**Une facture d'acompte ne peut pas être créditée.**
L'acompte a déjà été déduit sur une facture de solde. Créditez d'abord cette facture de solde ; l'acompte est alors à nouveau
ouvert.

**Pourquoi une note de crédit a-t-elle un numéro comme 20269001 ?**
Les factures et les notes de crédit ont chacune leur série par exercice : une facture reçoit l'année suivie de 0001 (20260001),
une note de crédit l'année suivie de 9001 (20269001).

## Voir aussi

- [Facturation](facturatie.fr.md)
- [Clients](klanten.fr.md)
- [Fiche entreprise](beheer/bedrijfsfiche.fr.md)
