# Collaborateurs

Les personnes que vous planifiez en équipes et sur les ordres de travail. Pour chaque collaborateur, CleanOps
conserve les données, indique qui est chauffeur ou convoyeur, et quels jours la personne travaille.

<!-- AFBEELDING: l'aperçu des collaborateurs avec la barre de recherche et quelques lignes -->

## Ouvrir l'écran

Cliquez sur **Collaborateurs** dans le menu de gauche.

## La liste

La liste affiche par collaborateur le code, le nom, la commune, le numéro de téléphone, ainsi que s'il est
chauffeur et s'il est actif.

- **Rechercher** — tapez dans la barre de recherche au-dessus de la liste. La recherche porte sur toutes les
  colonnes affichées, donc aussi sur la commune.
- **Afficher** — en haut, vous choisissez entre les collaborateurs actifs et tous les collaborateurs. Le
  compteur à côté indique combien sont affichés sur le total. Passez à tous pour retrouver également ceux qui
  ne travaillent plus.
- **Trier** — cliquez sur un titre de colonne.
- **Exporter** — via le bouton en haut à droite de la liste ; vous recevez l'aperçu actuel sous forme de
  fichier.
- **Ouvrir** — cliquez sur une ligne pour voir la fiche complète.

## Ajouter ou modifier un collaborateur

Cliquez sur **Nouveau collaborateur**, ou ouvrez une ligne existante. Dans les deux cas, vous obtenez la même
fiche.

<!-- AFBEELDING: la fiche collaborateur avec les quatre blocs -->

La fiche se compose de quatre blocs.

### Identification

Le **code** et le **nom** sont obligatoires. Le code est la clé courte par laquelle le collaborateur est
reconnu partout dans l'application — sur un ordre de travail, dans une équipe, sur un bon de travail.

!!! note "Le code est figé après la création"
    Sur un collaborateur existant, le champ du code est grisé. C'est la clé à laquelle sont rattachés tous
    les ordres de travail, plannings et bons de travail de cette personne ; la modifier ensuite détacherait
    ces références. Si un code est erroné, créez un nouveau collaborateur et désactivez l'ancien.

### Adresse

Rue, numéro, code postal, commune et pays. Le code postal et la commune se complètent mutuellement : si vous
choisissez un code postal, la commune apparaît automatiquement.

### Contact

Téléphone, GSM et e-mail. Lors de l'enregistrement, CleanOps vérifie qu'un numéro et une adresse e-mail
saisis sont valides. Les laisser vides est permis ; les remplir à moitié ne l'est pas.

### Affectation et régime de travail

<!-- AFBEELDING: le bloc Affectation et régime de travail avec les cases et le régime -->

Vous indiquez ici comment le collaborateur est affecté.

- **Actif** — si la personne fait partie de l'effectif. Celui qui ne travaille plus est mis sur inactif ; la
  fiche et tout l'historique subsistent.
- **Retraité** — un indicateur distinct d'Actif, afin de distinguer qui est temporairement absent de qui est
  pensionné.
- **Chauffeur** et **Convoyeur** — le rôle lors d'une mission. Une personne peut être les deux.
- **Exclure du comptage d'équipe** — ce collaborateur n'est pas proposé lors de la composition des équipes.
  Si un collaborateur actif n'y apparaît pas, regardez ici.
- **Priorité** — détermine l'ordre dans les listes de choix : plus élevé apparaît en premier. Vos chauffeurs
  habituels se retrouvent ainsi en tête là où vous les choisissez, au lieu d'être classés alphabétiquement
  parmi les autres.
- **Régime de travail** — les jours où la personne travaille, avec à côté le pourcentage d'une semaine à
  temps plein.

## L'historique

En fin de fiche se trouve l'onglet **Historique** : qui a modifié quel champ et quand, et de quelle valeur
vers quelle autre. L'historique est en lecture seule — rien ne peut y être supprimé ni corrigé.

<!-- AFBEELDING: l'onglet Historique avec quelques lignes de modification -->

## Supprimer un collaborateur

En bas de la fiche se trouve **Supprimer**. Le collaborateur disparaît de la liste mais subsiste dans la
corbeille, d'où un administrateur peut le restaurer.

Mieux vaut ne pas supprimer une personne ayant figuré sur un ordre de travail : mettez-la sur inactif. Tout
ce qui s'y rattache reste alors lisible, et elle n'apparaît plus dans les listes de choix.

## Questions fréquentes

**Un collaborateur ne figure pas dans la liste.**
Regardez **Afficher** en haut : ce champ est réglé par défaut sur les collaborateurs actifs. Passez à tous.
Si la personne n'y figure toujours pas, consultez la corbeille.

**Un collaborateur actif n'apparaît pas lors de la composition d'une équipe.**
Vérifiez sur sa fiche la case **Exclure du comptage d'équipe**.

**Mes chauffeurs habituels figurent en bas des listes de choix.**
Attribuez-leur une **priorité** plus élevée sur leur fiche. Les listes de choix trient sur la priorité avant
de trier alphabétiquement.
