# Journaux

Les journaux dans lesquels vous facturez et saisissez les paiements : le journal de vente des factures, et les journaux
financiers de vos comptes bancaires et de votre caisse.

## Ouvrir l'écran

Cliquez sur **Administration** en bas du menu, puis sur la tuile **Journaux**.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Code | la clé courte qui figure sur les factures et les paiements, par exemple `VERK` ou `KBC` |
| Description | à quoi sert le journal, par exemple *Kredietbank* |
| Type | Vente, Achat, Financier ou Divers |

Le journal de la facturation porte l'étiquette **vente par défaut**. Un journal que vous avez créé vous-même dans
CleanOps porte l'étiquette **propre** ; les autres viennent de votre application précédente.

## Le type

| Type | À quoi il sert |
|---|---|
| **Financier** | vos comptes bancaires et la caisse — ainsi que les journaux de lettrage sans encaissement, comme apurer une note de crédit contre une facture ou amortir une facture impayée. Un paiement se saisit toujours dans un journal financier. |
| **Vente** | vos factures et notes de crédit |
| **Achat** | les factures de vos fournisseurs |
| **Divers** | tout le reste |

## Ajouter ou modifier un journal

Cliquez sur **Nouveau journal**, ou double-cliquez sur une ligne existante.

| Champ | Ce que vous complétez |
|---|---|
| **Code** *(obligatoire)* | 6 caractères au maximum, par exemple `BELF`. Figé dès que le journal existe. Un code qui ne diffère d'un code existant que par les majuscules (`kbc` à côté de `KBC`) est refusé — même si ce code existant est archivé. |
| **Type** *(obligatoire)* | voir ci-dessus. |
| **Description** *(obligatoire)* | 30 caractères au maximum. |
| **Journal de vente par défaut** | uniquement pour un journal de vente : celui dans lequel on facture. |

!!! note "Il n'y a qu'un seul journal de vente par défaut"
    Si vous le cochez pour un autre journal de vente, il se décoche automatiquement pour le précédent.

## Le journal des modifications

À droite de l'écran se trouve une bande **Journal**. Sélectionnez un journal dans la liste et ouvrez la bande : le
panneau montre qui l'a créé, modifié, archivé ou rétabli, et quand.

## Archiver ou rétablir un journal

Ouvrez la ligne et utilisez **Archiver**. Le journal disparaît des listes de choix, mais il continue d'exister : les
factures et les paiements qui le portent déjà le gardent.

Le journal de vente par défaut ne peut pas être archivé. Cochez d'abord un autre journal de vente.

Vous voulez rétablir un journal ? En haut de la liste, réglez **Afficher** sur **Aussi les journaux archivés**, ouvrez-le
et cliquez sur **Rétablir**.

## Questions fréquentes

**J'ai un nouveau compte bancaire.**
Créez un nouveau journal de type **Financier**. Vous pouvez ensuite y saisir des paiements.

**Pourquoi n'y a-t-il pas de devise pour un journal ?**
CleanOps travaille en euros. Votre application précédente demandait une devise par journal financier, mais EUR y figurait
partout.
