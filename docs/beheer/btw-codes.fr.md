# Codes TVA

Les taux de TVA que vous choisissez sur un devis, un ordre de travail ou une ligne de facture. Chaque code
porte un pourcentage ; ce pourcentage détermine le calcul de la TVA.

<!-- AFBEELDING: l'aperçu des codes TVA avec les quatre colonnes -->

## Ouvrir l'écran

Cliquez sur **Administration** en bas du menu, puis sur la tuile **Codes TVA**.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Code | la clé courte, par exemple `21P` |
| Description (NL) | ce que vous voyez dans les listes de choix |
| Description (FR) | idem pour qui utilise l'application en français |
| Pourcentage | le taux servant au calcul |

!!! note "Sur vos documents figure le code, pas la description"
    Une facture et un devis affichent le **code** avec le **pourcentage**. La description est destinée à vous,
    pour choisir le bon code — elle n'apparaît pas chez le client.

## Ajouter ou modifier un code TVA

<!-- AFBEELDING: la fenêtre de modification d'un code TVA -->

Cliquez sur **Nouveau code TVA**, ou ouvrez une ligne existante.

!!! warning "Un pourcentage modifié ne touche pas les factures existantes"
    Chaque facture conserve le pourcentage avec lequel elle a été établie. Si vous augmentez un taux ici,
    rien ne change à ce qui a déjà été facturé — c'est voulu, car une facture délivrée ne peut pas changer de
    montant avec effet rétroactif.

    Les nouvelles factures utilisent bien le pourcentage modifié.

La **description française** peut rester vide si votre entreprise travaille uniquement en néerlandais.

## Le journal

<!-- AFBEELDING: le journal ouvert, avec les modifications des codes TVA -->

À droite de l'écran se trouve une bande portant **journal**. Cliquez dessus et le panneau s'ouvre.

Le journal indique qui a modifié quel code et quand, et de quelle valeur vers quelle autre. Pour la TVA,
c'est particulièrement utile : un pourcentage modifié explique pourquoi deux factures d'un même client
portent un montant différent.

## Supprimer un code TVA

Ouvrez la ligne et utilisez **Supprimer**. Le code disparaît des listes de choix mais subsiste dans la
corbeille.

!!! warning "Ne supprimez pas un code figurant sur des factures"
    Les factures existantes renvoient à leur code TVA. Si vous le supprimez, cette référence subsiste sans
    description lisible. Le pourcentage sur la facture reste correct — il figure sur la facture elle-même.

## Questions fréquentes

**J'ai besoin d'un nouveau taux, par exemple pour des travaux sur des habitations.**
Créez un nouveau code avec le bon pourcentage. Ne modifiez pas un code existant, sinon vous perdez la
distinction avec ce qui a été facturé auparavant.

**Deux factures d'un même client portent un montant de TVA différent pour le même travail.**
Vérifiez dans le journal si le pourcentage de ce code a été modifié entre-temps. Chaque facture calcule avec
le pourcentage du moment où elle a été établie.

**Chez nous, la colonne française est partout vide.**
Ce n'est pas une erreur : qui travaille uniquement en néerlandais n'a pas besoin de la remplir.
