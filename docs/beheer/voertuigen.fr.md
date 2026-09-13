# Véhicules

Vous trouvez ici **votre parc** : pour chaque véhicule la plaque, la marque, le type, la contenance,
l'entretien, les documents et un rappel pour le contrôle technique.

<!-- AFBEELDING: het overzicht van de voertuigen met de kolom Volgende keuring -->

## Ouvrir l'écran

Cliquez en bas du menu sur **Administration**, puis sur la tuile **Véhicules**.

## Pourquoi la plupart des champs sont encore vides

Votre application actuelle ne connaît que **deux** choses d'un véhicule : la plaque et une description. La
marque, le type, le numéro de châssis, la première immatriculation, le contrôle et la contenance sont
**nouveaux**.

Ils ne sont donc encore complétés nulle part. Vous les complétez ici, véhicule par véhicule, et **ils
subsistent** — même lorsque les données sont reprises à nouveau depuis votre application actuelle.

!!! note "La description ne fait pas partie de ces nouveaux champs"
    La colonne **Description** provient bien de votre application actuelle et y est gérée. Elle est
    récupérée à chaque reprise. Si vous voulez modifier ce texte, faites-le dans votre application
    actuelle — une modification faite ici disparaîtrait.

    C'est pourquoi ce texte figure à côté de la marque et du type, et non à leur place : aujourd'hui c'est
    la seule chose complétée, et c'est du texte libre — *« MAN TREKKER »*, *« oplegger »*.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Plaque | la plaque d'immatriculation ; c'est la clé à laquelle renvoient les ordres et les bons |
| Marque | la marque, par exemple MAN ou Vervaet |
| Type | tracteur, remorque, hydrocureuse… — vous gérez cette liste vous-même, voir ci-dessous |
| Description | le texte issu de votre application actuelle |
| Prochain contrôle | la date, colorée dès qu'elle approche ou qu'elle est passée |

Avec **Afficher**, vous choisissez si les véhicules supprimés sont inclus. Le compteur à côté indique combien
sont affichés sur combien au total.

## Gérer les types vous-même

La liste des types est **à vous**. Allez dans **Administration → Tables de base** et choisissez en haut la
liste **Types de véhicule**. Vous y ajoutez ce dont vous avez besoin, en néerlandais et en français.

!!! warning "Si elle est vide, la liste de choix sur la fiche reste vide"
    Ce n'est pas une panne. Complétez d'abord quelques types dans les Tables de base ; ensuite vous pourrez
    les choisir sur chaque fiche véhicule.

## La contenance eau et boues est séparée

Une hydrocureuse a **deux** compartiments, et cette différence détermine ce qu'elle peut emporter. D'où deux
champs et pas un total :

- **Contenance eau (m³)** — l'eau propre servant au rinçage.
- **Contenance boues (m³)** — ce qui peut être emporté. C'est le chiffre dont un planificateur a besoin.

!!! tip "Laissez-les vides pour un véhicule sans réservoir"
    Pour un tracteur ou une remorque, ne complétez rien. **Vide** signifie *sans objet* ; **0** signifierait
    que le véhicule a un réservoir ne pouvant rien contenir. Avec des zéros partout, une liste triée sur la
    contenance devient illisible.

## Le contrôle technique et son rappel

<!-- AFBEELDING: de melding op de startpagina dat er voertuigen op keuring wachten -->

Si vous complétez **Prochain contrôle** pour un véhicule, CleanOps vous le rappelle. Dès **30 jours** avant
cette date, vous le voyez à quatre endroits :

| Où | Ce que vous voyez |
|---|---|
| votre page d'accueil | un message *« 3 véhicules attendent leur contrôle technique »* |
| la liste | la date en orange, ou **en rouge et en gras** dès qu'elle est passée |
| au-dessus de la liste | un compteur *« 3 à contrôler »* |
| la fiche elle-même | un message au-dessus des champs de ce véhicule |

!!! note "Sans date, il n'y a rien à rappeler"
    Un véhicule dont **Prochain contrôle** est vide n'apparaît dans aucun de ces quatre compteurs. C'est
    voulu : CleanOps ne peut pas rappeler une date que personne ne connaît. Si un tel véhicule comptait, il
    y aurait aujourd'hui un message sur tout votre parc — et un compteur qui désigne tout ne désigne rien.

    La conséquence est que le rappel **reste silencieux** jusqu'à ce que vous complétiez les dates.
    Commencez par les véhicules bientôt concernés.

## Ajouter ou ouvrir un véhicule

Cliquez sur **Nouveau véhicule**, ou double-cliquez sur une ligne pour ouvrir la fiche.

La **plaque** est fixée dès que le véhicule existe : des ordres et des bons y renvoient, et si elle
changeait, ils renverraient à quelque chose qui n'existe plus.

La fiche comporte quatre onglets :

| Onglet | Ce qu'on y trouve |
|---|---|
| Fiche | les champs ci-dessus |
| Entretien | les entretiens de ce véhicule |
| Documents | le certificat de contrôle, l'immatriculation, l'assurance… |
| Journal | qui a modifié quoi et quand sur le véhicule |

## Suivre l'entretien

<!-- AFBEELDING: het venster voor een onderhoudsbeurt met de controlepunten -->

Sous l'onglet **Entretien**, chaque passage figure avec sa date, le kilométrage, une note et les points de
contrôle cochés. Le plus récent est en haut.

Cliquez sur **Nouvel entretien**, ou double-cliquez sur un entretien existant pour le modifier. Seule la
**date** est obligatoire.

Les **points de contrôle** sont les éléments fixes d'un passage : huile hydraulique, graissage, vidange
d'huile, contrôle des pièces, filtre à air, filtre à carburant et inspections. Vous cochez ce qui a été fait.

!!! tip "Le kilométrage peut rester vide"
    Tous les véhicules n'ont pas de compteur — une remorque n'en a pas. Laissez alors le champ vide.

## Joindre des documents à un véhicule

Sous l'onglet **Documents**, vous glissez des fichiers vers le véhicule : le certificat de contrôle,
l'immatriculation, l'assurance, une facture de réparation.

!!! note "Cela n'existait pas encore"
    Dans votre application actuelle, aucun document ne peut être joint à un véhicule. Tout ce que vous
    chargez ici est donc nouveau et reste conservé.

## Supprimer un véhicule

Ouvrez la fiche et utilisez **Supprimer**. Le véhicule disparaît des listes de choix mais continue
d'exister ; avec **Restaurer** il revient, et il figure aussi dans la **Corbeille**.

Supprimer au sens de retirer, pas d'effacer : des ordres et des bons existants renvoient à la plaque. Un
véhicule retiré ne figure plus dans le rappel de contrôle — il ne roule plus.

## Le journal

L'onglet **Journal** montre qui a modifié quel champ et quand sur ce véhicule, et de quelle valeur vers
laquelle. Ce qu'une reprise a changé y figure également.

!!! note "Le journal porte sur le véhicule, pas sur son entretien"
    Si vous ajoutez un entretien, cela **n'apparaît pas** dans le journal. L'onglet **Entretien** est
    lui-même l'historique des passages — chaque passage y figure avec sa date.

## Questions fréquentes

**Pourquoi la liste de choix du Type est-elle vide ?**
Parce que la liste des types est encore vide. Complétez-la dans **Administration → Tables de base → Types de
véhicule**.

**J'ai modifié une description et après un temps l'ancien texte était de retour.**
La description est gérée dans votre application actuelle et reprise à chaque reprise. Modifiez-la là-bas. Les
autres champs — marque, type, numéro de châssis, dates, contenance — subsistent bien.

**Je ne vois aucun message sur les contrôles, alors qu'il y a des véhicules.**
Alors **Prochain contrôle** n'est complété pour aucun véhicule, ou aucune date ne tombe dans les 30 jours.
Complétez les dates sur les fiches.

**Pourquoi la contenance eau est-elle vide plutôt que 0 ?**
Parce que le véhicule n'a pas de réservoir, ou parce que la contenance n'est pas encore complétée. **Vide**
et **0** signifient ici deux choses différentes — voir ci-dessus.

**Puis-je lier un véhicule à un ordre de travail ?**
Ce champ existe sur l'ordre de travail et est aujourd'hui à peine utilisé. Cet écran porte sur la gestion du
parc lui-même.
