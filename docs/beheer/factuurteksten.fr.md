# Textes de facture

Les textes de facture sont les **textes standard qui peuvent figurer au bas d'une facture** : mentions TVA,
conditions générales, l'attestation pour une rénovation à 6 %.

<!-- AFBEELDING: l'aperçu des textes de facture avec la marque TVA 6 % -->

!!! warning "L'un de ces textes est ajouté automatiquement"
    Le texte portant la marque **TVA 6 %** est placé **automatiquement** au bas de chaque facture comportant
    de la TVA à 6 %. Vous n'avez rien à choisir et vous ne pouvez pas l'oublier.

    Cela distingue cet écran des autres listes de l'Administration : ce que vous modifiez ici figurera
    littéralement sur une facture adressée à votre client.

## Ouvrir l'écran

Cliquez sur **Administration** en bas du menu, puis sur la tuile **Textes de facture**.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Code | la clé courte issue de votre application actuelle, par exemple `BTW6%` ou `VOORW` |
| Langue | la langue dans laquelle le texte est rédigé |
| Texte | le **début** du texte — ouvrez la ligne pour le voir en entier |
| Marques | **TVA 6 %**, **propre** ou **supprimé** |

La colonne Texte est tronquée à dessein : l'attestation de rénovation compte plus de quatre cents caractères
et rendrait la liste illisible. Double-cliquez sur une ligne pour voir et modifier le texte complet.

## La marque TVA 6 %

Un **seul texte par langue** peut porter cette marque. Ce texte est la mention légale qui doit figurer sur
une facture dès qu'elle comporte des travaux à 6 % de TVA.

Si vous tentez de cocher un deuxième texte, CleanOps refuse et nomme celui qui la porte aujourd'hui. Ainsi
la mention ne se déplace jamais sans que vous le voyiez.

!!! note "Pourquoi ne pas décocher l'autre automatiquement ?"
    Parce que vous auriez demain une autre phrase sur vos factures qu'hier, sans que rien ne l'ait montré.
    CleanOps vous laisse le choix : retirez d'abord la coche là où elle se trouve.

## La langue

Une facture utilise la **langue du client**. Si le texte à 6 % n'existe qu'en néerlandais et que votre client
est francophone, **aucune** mention ne figurera sur cette facture.

!!! tip "C'est volontaire, et c'est un point à vérifier"
    Une mention légale néerlandaise sur une facture francophone est pire que pas de mention : votre client ne
    peut pas la lire, et elle donne l'impression que l'obligation est remplie.

    Si vous envoyez des factures francophones avec de la TVA à 6 %, créez une deuxième ligne avec le même
    texte en français et cochez-la également. Dans votre application actuelle, **tous** les textes ne sont
    rédigés qu'en néerlandais.

## Modifier ou ajouter un texte

Double-cliquez sur une ligne, ou utilisez **Nouveau texte**. Le code et la langue sont figés dès qu'un texte
existe : ensemble, ils en forment la clé.

Les textes marqués **propre**, vous les avez créés ici ; ils subsistent. Les autres proviennent de votre
application actuelle et sont **écrasés à chaque reprise**. La fenêtre vous en avertit dès que vous ouvrez une
telle ligne. Si vous voulez modifier ce texte durablement, modifiez-le dans votre application actuelle.

## Supprimer un texte

Ouvrez la ligne et utilisez **Supprimer**. Le texte disparaît de la liste mais continue d'exister.

Retirer et non effacer : les factures déjà établies portent le texte en **copie**, elles ne changent donc pas.
Le code reste utile comme référence si vous voulez vérifier plus tard quel texte a été utilisé.

## Où vous retrouvez le texte

Sur la fiche d'une facture, le bloc **Texte de pied de page** figure en bas — vous y lisez ce qui est
réellement apparu sur cette facture. S'il n'y a rien, le bloc n'apparaît pas.

## Le journal

<!-- AFBEELDING: le journal ouvert, avec une modification d'un texte de facture -->

À droite de l'écran se trouve une bande **journal**. Cliquez dessus et le panneau s'ouvre.

Le journal indique qui a modifié quel texte et quand, et de quelle valeur vers quelle autre. Pour une mention
légale, c'est plus qu'une question d'ordre : il montre quand la phrase figurant sur vos factures a changé, et
par qui.

## Questions fréquentes

**Lequel des douze textes figure réellement sur ma facture ?**
Uniquement celui portant la marque **TVA 6 %**, et uniquement sur les factures comportant de la TVA à 6 %.
Les autres sont disponibles comme référence ; ils ne sont pas utilisés automatiquement aujourd'hui.

**J'ai modifié un texte et après un certain temps l'ancien était de retour.**
C'est que ce texte provenait de votre application actuelle. Il est repris à chaque reprise. Seuls les textes
marqués **propre** subsistent.

**Pourquoi ma facture francophone à 6 % ne porte-t-elle aucune mention ?**
Parce qu'il n'existe pas encore de texte français portant la marque **TVA 6 %**. Créez-en un et cochez-le.

**Puis-je placer moi-même un texte sur une facture ?**
Pas encore. Aujourd'hui, cela ne se fait automatiquement que pour la mention à 6 %.
