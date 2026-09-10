# Tarifs

Vos codes de facturation : chaque tarif porte une description, une unité, un prix unitaire et un code TVA.
Si vous choisissez un tarif sur une ligne de devis, il complète ces champs pour vous.

<!-- AFBEELDING: l'aperçu des tarifs avec les cinq colonnes -->

!!! note "Cet écran est en lecture seule"
    Vous gérez les tarifs pour l'instant dans votre application actuelle. Ils sont repris de là dans
    CleanOps.

    C'est pourquoi il n'y a ici aucun bouton pour en ajouter ou en modifier un : cette modification
    disparaîtrait lors de la prochaine reprise, sans avertissement. Vous êtes ainsi certain que les prix
    affichés ici sont bien ceux qui servent au calcul.

## Ouvrir l'écran

Cliquez sur **Administration** en bas du menu, puis sur la tuile **Tarifs**.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Code | la clé courte avec laquelle vous choisissez le tarif, par exemple `121` |
| Description | le texte qui figure sur la ligne de devis ou de facture |
| Unité | ce en quoi vous comptez : heure, pièce, tonne, m³ … |
| Prix unitaire | le prix par unité |
| Code TVA | le code TVA repris par défaut |

En haut se trouve un compteur, par exemple **105 sur 114** : combien de tarifs vous voyez, et combien il y
en a au total.

!!! warning "Un tiret à la place du prix ne veut pas dire gratuit"
    Si vous voyez un **—** au lieu d'un montant, aucun prix n'est renseigné. Cela signifie *à compléter*, et
    non *gratuit*. Vous indiquez alors le prix sur la ligne de devis elle-même.

    C'est le cas pour environ deux tiers des tarifs. C'est normal : beaucoup de travaux sont chiffrés par
    dossier.

## Utiliser un tarif sur un devis

Sur une ligne de devis, vous choisissez un tarif. CleanOps complète alors la description, l'unité, le prix
et le code TVA.

Ces champs restent ensuite **librement modifiables**. Le prix du tarif est une valeur de départ : si vous
l'adaptez sur la ligne, rien ne change au tarif lui-même, ni aux autres devis.

## Voir les tarifs supprimés

<!-- AFBEELDING: le choix Afficher, déplié -->

En haut se trouve **Afficher**. Par défaut, vous ne voyez que les tarifs actifs. Si vous choisissez **Aussi
les tarifs supprimés**, ceux-ci s'ajoutent, avec la mention **supprimé**.

Ils subsistent parce que des devis et des factures plus anciens y renvoient. S'ils disparaissaient, un
ancien devis porterait une ligne sans description lisible.

## Le journal

<!-- AFBEELDING: le journal ouvert, avec une modification de prix -->

À droite de l'écran se trouve une bande portant **journal**. Cliquez dessus et le panneau s'ouvre.

Le journal indique, par tarif, ce qui a été modifié, quand et par qui — et de quelle valeur vers quelle
autre. Comme vous ne pouvez rien modifier ici vous-même, c'est précisément l'endroit où regarder lorsqu'un
prix diffère de ce que vous attendez : vous voyez alors si et quand il a changé lors d'une reprise.

## Questions fréquentes

**Je veux adapter un prix, mais il n'y a pas de bouton.**
C'est voulu. Modifiez le tarif dans votre application actuelle ; il figurera ici à la prochaine reprise.

**Un tarif est à 0,00 € — est-ce un travail que nous faisons gratuitement ?**
Non. Dans la liste, vous voyez alors un tiret : aucun prix n'est renseigné. Vous l'indiquez sur la ligne de
devis elle-même.

**Je ne retrouve pas un tarif que nous utilisions autrefois.**
Mettez **Afficher** sur *Aussi les tarifs supprimés*. Il est probablement supprimé ; il subsiste pour les
documents plus anciens qui y renvoient.

**Le prix sur mon devis ne correspond pas à ce qui figure ici.**
C'est possible : le prix du tarif est une valeur de départ et peut être adapté sur la ligne. Vérifiez dans
le journal si le tarif lui-même a été modifié entre-temps.
