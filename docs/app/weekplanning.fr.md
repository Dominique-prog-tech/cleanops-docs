---
description: "Le planning de la semaine dans l'application CleanOps pour le bureau : par collaborateur et par jour, et planifier le travail sans date."
---

# Planning de la semaine

Sous **Planning de la semaine**, vous voyez dans l'application le [tableau de planning](../planning.fr.md) d'une semaine
entière : qui fait quoi, quel travail n'est pas encore attribué et ce qui n'a pas été exécuté. L'écran est destiné aux
personnes du bureau qui ont le droit sur le planning (voir [L'application pour le bureau](kantoor.fr.md)). Déplacer vers un autre jour ou un autre collaborateur se fait sur le
tableau de planning sur l'ordinateur. Ici, vous modifiez l'[ordre d'une journée](#modifier-lordre-dune-journee) et vous pouvez [planifier](#encore-a-planifier) le travail sans date.

## Ouvrir l'écran

Ouvrez le menu avec les trois traits en haut à gauche et touchez **Planning de la semaine**. L'application s'ouvre sur la
semaine en cours, le samedi et le dimanche sur la semaine suivante, comme le [tableau de planning](../planning.fr.md).

![Le planning de la semaine sur une tablette : en haut Semaine 47 avec les flèches et Cette semaine, la liste Collaborateur sur Tout le monde, les compteurs 14 ordres de travail, 1 non attribués en rouge, 0 non exécutés et 0 absents, la bande Encore à planifier, en dessous la grille avec la ligne non attribué et une ligne par collaborateur, chaque ordre de travail avec la partie de journée et la commune, et en bas à droite Nouvel ordre](../images/app-weekplanning-fr.png "Le planning de la semaine"){ width="560" }

## Choisir une semaine

En haut figure la semaine, par exemple *Semaine 45 · 2 nov. – 8 nov.*. Avec les flèches, vous passez à la **semaine
précédente** ou à la **semaine suivante** ; avec **Cette semaine** en haut à droite, vous revenez à la semaine sur laquelle l'écran s'ouvre.

## Voir un seul collaborateur

Sous la semaine figure, à partir de la version 1.3.2, la liste **Collaborateur**. Elle est sur **Tout le monde** à l'ouverture de l'écran. Si vous choisissez un nom, vous ne voyez que le
travail de ce collaborateur, et les compteurs ne comptent que ce travail. Avec *(non attribué)*, vous voyez le travail qui n'est encore chez personne.

La liste contient les collaborateurs qui ont quelque chose cette semaine. Votre choix reste en place si vous passez à une autre semaine.

## Les compteurs

Sous la semaine figurent quatre compteurs pour toute la semaine, ou pour le collaborateur que vous avez choisi :

| Compteur | Signification |
|---|---|
| ordres de travail | Tous les ordres de travail de la semaine. |
| non attribués | Les ordres de travail qui ne sont encore chez aucun collaborateur. En rouge dès qu'il y en a un. |
| non exécutés | Les ordres de travail d'un jour passé qui ne sont pas encore exécutés. En rouge dès qu'il y en a un. |
| absents | Les collaborateurs en congé au moins un jour de cette semaine. |

## La grille

Sur une **tablette**, une grille s'affiche : une ligne par collaborateur, une colonne par jour, comme le tableau de
planning, avec aussi la ligne *non attribués*. Sur un **téléphone**, les jours sont l'un sous l'autre et, par jour, les
collaborateurs avec leur travail.

Vous ne voyez que les collaborateurs qui ont quelque chose cette semaine : du travail, un congé ou un bloc. Le tableau de
planning affiche aussi les lignes vides, pour y glisser du travail ; dans l'application, elles ne feraient que vous faire
défiler.

Chaque ligne a à gauche une barre de couleur, dans les mêmes couleurs que le tableau de planning :

- **vert** : exécuté ;
- **rouge**, avec *Non exécuté* : un ordre de travail d'un jour passé qui n'est pas encore exécuté ;
- la **couleur du collaborateur** : du travail planifié ;
- les congés et les blocs figurent comme sur le tableau.

Un jour férié figure en rouge à côté du jour. Toucher un ordre de travail l'ouvre dans [Ordres de travail](kantoor-werkorders.fr.md),
si votre rôle a le droit sur les ordres de travail.

## Modifier l'ordre d'une journée

À partir de la version 1.3.2, vous modifiez l'ordre d'une journée aussi dans l'application, sur le téléphone et sur la tablette. Vous avez besoin pour cela du droit **Modifier le planning**.

1. Cherchez le jour et le collaborateur. Une carte que vous pouvez déplacer porte à droite une poignée à points.
2. Maintenez la carte enfoncée un instant jusqu'à ce qu'elle se détache.
3. Faites-la glisser vers sa nouvelle place et relâchez.

Le nouvel ordre figure aussitôt aussi sur le [tableau de planning](../planning.fr.md#lordre-dans-une-journee) et dans le [planning](planning.fr.md) du collaborateur.

Cela fonctionne dans la même journée et pour le même collaborateur. Déplacer vers un autre jour ou un autre collaborateur se fait sur le tableau de planning sur l'ordinateur.
Si quelqu'un a modifié le planning entre-temps, l'application le dit et affiche ce qui figure maintenant.

## Encore à planifier

Le travail sans date ne figure dans aucune semaine. C'est pourquoi, à partir de la version 1.3.0, la ligne **Encore à planifier** figure au-dessus de la grille, avec le nombre.
C'est la même liste que la colonne du [tableau de planning](../planning.fr.md) : le travail ouvert sans date planifiée.

Touchez la ligne pour ouvrir la liste. Si vous avez le droit **Modifier le planning**, **Planifier** figure à chaque ordre de travail. Vous choisissez le jour, la partie de la
journée et éventuellement le collaborateur. Sans collaborateur, l'ordre figure ce jour-là sur la ligne *(non attribué)*. Si le jour est passé ou si le collaborateur est en
congé ce jour-là, l'application le demande d'abord.

À partir de la version 1.3.3, les ordres urgents figurent en haut, avec l'étiquette rouge **urgent**, et l'heure convenue est indiquée s'il y en a une.

Si quelqu'un d'autre a entre-temps planifié l'ordre, l'application le dit et le planning de cette personne reste en place.

![Encore à planifier sur un téléphone : un ordre de travail avec le client, la description et le bouton Planifier](../images/app-kantoor-in-te-plannen-fr.png "Encore à planifier")

## Questions fréquentes

**Un collaborateur ne figure pas dans la liste.**
Il n'a ni travail, ni congé, ni bloc cette semaine. Sur le tableau de planning sur l'ordinateur, sa ligne vide figure bien.

**Il est écrit : *Les jours fériés n'ont pas pu être récupérés*.**
CleanOps n'a pas pu lire les jours fériés pour le moment. Le planning est correct, mais un jour férié peut manquer.
Actualisez l'écran plus tard en le tirant vers le bas.

**Une carte n'a pas de poignée.**
Vous n'avez pas le droit **Modifier le planning**, ce collaborateur n'a qu'un seul ordre ce jour-là, ou la carte est du travail exécuté, un congé ou un bloc : ceux-ci restent en place.
La ligne *(non attribué)* n'a pas de poignée non plus, parce qu'une place vaut par collaborateur.

## Voir aussi

- [Planning](../planning.fr.md), le tableau de planning sur l'ordinateur
- [Ordres de travail dans l'application](kantoor-werkorders.fr.md)
- [L'application pour le bureau](kantoor.fr.md)
