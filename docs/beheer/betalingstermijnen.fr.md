# Conditions de paiement

Une condition de paiement détermine **quand une facture échoit**. Vous en choisissez une sur une fiche
client ; elle est ensuite reprise sur les factures de ce client.

<!-- AFBEELDING: l'aperçu des conditions de paiement avec la colonne Échéance -->

## Ouvrir l'écran

Cliquez sur **Administration** en bas du menu, puis sur la tuile **Conditions de paiement**.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Code | la clé courte qui figure sur la fiche client, par exemple `30DFD` |
| Langue | la langue dans laquelle la description est rédigée |
| Description | le texte que l'utilisateur lit |
| Échéance | la règle en langage courant, par exemple *30 jours après date de facture* |

!!! note "Un même code peut figurer deux fois dans la liste"
    Ce n'est pas une erreur. Une condition existe **par langue** : `30DFD` y figure une fois avec une
    description néerlandaise et une fois avec une description française. Le **calcul** est identique dans les
    deux cas — seul le texte diffère.

    La colonne **Langue** indique laquelle est laquelle. Si vous choisissez la condition sur une fiche
    client, CleanOps prend automatiquement la version dans la langue de ce client.

## Comment l'échéance est calculée

Trois étapes, dans cet ordre :

1. **Compter à partir de** — partez de la *date de facture* elle-même, ou de la *fin du mois* dans lequel la
   facture tombe.
2. **Jours de délai** — ajoutez ce nombre de jours.
3. **Jour fixe du mois** — reportez ensuite à ce jour. S'il est déjà passé, on passe au mois suivant. Si la
   valeur est **0**, rien ne se produit.

!!! tip "La fenêtre calcule un exemple pour vous"
    Pendant que vous complétez les champs, vous voyez en bas quand *une facture d'aujourd'hui* échoirait.
    Cela utilise le même calcul que la facturation elle-même : ce qui s'affiche là est donc ce qui figurera
    sur la facture.

## Ajouter ou modifier une condition

<!-- AFBEELDING: la fenêtre de modification d'une condition, avec l'exemple en bas -->

Cliquez sur **Nouvelle condition**, ou double-cliquez sur une ligne existante.

Le **Code** et la **Langue** sont figés dès que la condition existe. Des clients et des factures renvoient à
ce code ; s'il changeait, ils pointeraient vers quelque chose qui n'existe plus.

!!! warning "Attention aux conditions que vous modifiez"
    Les conditions portant la mention **propre**, vous les avez créées ici. Celles-là subsistent.

    Les autres proviennent de votre application actuelle et sont reprises à **chaque reprise**. Une
    modification faite ici disparaît alors. Si vous voulez adapter une telle condition, faites-le dans votre
    application actuelle.

    La fenêtre vous le signale également dès que vous ouvrez une condition de ce type.

## Retirer une condition

Ouvrez la ligne et utilisez **Supprimer**. La condition disparaît des listes de choix mais continue
d'exister.

Retirer et non effacer, pour la même raison que ci-dessus : des clients et des factures renvoient au code.
S'il disparaissait, une ancienne facture porterait une référence sans signification lisible.

## Le journal

<!-- AFBEELDING: le journal ouvert, avec une modification d'une condition -->

À droite de l'écran se trouve une bande portant **journal**. Cliquez dessus et le panneau s'ouvre.

Le journal indique qui a modifié quelle condition et quand, et de quelle valeur vers quelle autre. Il montre
aussi ce qu'une reprise a changé — utile lorsqu'une échéance tombe autrement que prévu.

## Questions fréquentes

**Pourquoi `30DFD` figure-t-il deux fois dans la liste ?**
Une fois par langue. La description diffère, le calcul non. Voyez la colonne **Langue**.

**J'ai modifié une condition et après un certain temps l'ancienne valeur était revenue.**
C'est que cette condition provenait de votre application actuelle. Elle est reprise à chaque reprise. Seules
les conditions portant la mention **propre** subsistent.

**Une facture échoit à une autre date que celle que j'attendais.**
Ouvrez la condition et regardez l'exemple en bas de la fenêtre : il applique la même règle que la
facturation. Vérifiez aussi dans le journal si la condition a été modifiée entre-temps.

**Que signifie un jour fixe à 0 ?**
Qu'aucun jour fixe n'est utilisé. L'échéance est alors simplement le point de départ plus les jours de délai.
