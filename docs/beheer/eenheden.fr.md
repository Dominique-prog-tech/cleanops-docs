# Unités

Les unités que vous choisissez sur un tarif, un ordre de travail, une ligne de devis ou une ligne de facture : heure,
pièces, m³, kilomètre… Le code de l'unité figure sur vos documents à côté de la quantité.

## Ouvrir l'écran

Cliquez sur **Administration** en bas du menu, puis sur la tuile **Unités**.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Code | la clé courte qui figure sur vos documents, par exemple `UUR` ou `ST.` |
| Description (NL) | ce que vous voyez à côté du code dans les listes de choix |
| Description (FR) | idem pour qui utilise l'application en français |

Une unité que vous avez créée vous-même dans CleanOps porte l'étiquette **propre**. Les autres viennent de votre
application précédente.

## Ajouter ou modifier une unité

Cliquez sur **Nouvelle unité**, ou double-cliquez sur une ligne existante.

| Champ | Ce que vous complétez |
|---|---|
| **Code** *(obligatoire)* | 3 caractères au maximum, par exemple `M2`. Figé dès que l'unité existe. Un code qui ne diffère d'un code existant que par les majuscules (`uur` à côté de `UUR`) est refusé — même si ce code existant est archivé. |
| **Description (NL)** / **(FR)** | 30 caractères au maximum. Celle dans la langue principale de votre entreprise est obligatoire. |

!!! note "Pourquoi le code est figé"
    Les tarifs, ordres de travail et documents conservent le **code** de leur unité sous forme de texte. Si vous
    pouviez modifier le code, ils porteraient un code qui ne figure plus dans la liste. Les descriptions, vous
    pouvez toujours les adapter.

La **description française** peut rester vide si votre entreprise travaille uniquement en néerlandais.

## Où vous choisissez l'unité

Sur un tarif, un ordre de travail, une ligne de devis et une facture manuelle, vous choisissez l'unité dans cette
liste. La liste de choix montre le code avec la description, par exemple *ST. — Pièces*.

Si un ancien document porte une unité qui ne figure pas (plus) dans la liste, par exemple *liters* saisi librement
dans votre application précédente, elle reste telle quelle et vous la voyez dans la liste de choix. Si vous en
choisissez une autre et enregistrez, cette ancienne valeur disparaît de la liste de choix.

## Le journal

À droite de l'écran se trouve une bande **Journal**. Sélectionnez une unité dans la liste et ouvrez la bande : le
panneau montre qui l'a créée, modifiée, archivée ou rétablie, et quand.

## Archiver ou rétablir une unité

Ouvrez la ligne et utilisez **Archiver**. L'unité disparaît des listes de choix, mais elle continue d'exister.

!!! note "Ce qui porte déjà l'unité ne remarque rien"
    Les tarifs, ordres de travail, devis et factures qui portent déjà l'unité archivée la gardent. Archiver,
    c'est *ne plus choisir*, pas *retirer*.

Vous la voulez à nouveau ? En haut de la liste, réglez **Afficher** sur **Aussi les unités archivées**, ouvrez
l'unité et cliquez sur **Rétablir**.

## Questions fréquentes

**Pourquoi ne puis-je pas supprimer une unité ?**
Parce que des tarifs et des documents portent son code. Archiver la retire des listes de choix sans toucher à ce
qui existe déjà.

**Je vois deux fois m³ dans la liste.**
Votre application précédente en avait deux, avec les codes `M3` et `2`. Archivez l'unité que vous n'utilisez plus.

**Chez nous, la colonne française est partout vide.**
Ce n'est pas une erreur : qui travaille uniquement en néerlandais n'a pas besoin de la remplir.
