# Clients

Le fichier clients de CleanOps. Vous y trouvez tous les clients de votre entreprise, avec leurs coordonnées,
leurs contrats périodiques et les adresses où les travaux sont exécutés.

<!-- AFBEELDING: l'aperçu des clients avec la barre de recherche et quelques lignes -->

## Ouvrir l'écran

Cliquez sur **Clients** dans le menu de gauche.

## La liste

La liste affiche par client le numéro, le nom de recherche, le nom, le code postal, la commune, le délai de
paiement et l'adresse e-mail.

- **Rechercher** — tapez dans la barre de recherche au-dessus de la liste. La recherche porte sur toutes les
  colonnes affichées, donc aussi bien sur le nom que sur la commune.
- **Trier** — cliquez sur un titre de colonne.
- **Exporter** — via le bouton en haut à droite de la liste ; vous obtenez l'aperçu actuel sous forme de
  fichier.
- **Ouvrir** — cliquez sur une ligne pour voir la fiche complète.

La liste récupère une page à la fois depuis la base de données au lieu de tout charger d'un coup. Même avec
des dizaines de milliers de clients, l'écran reste donc rapide.

## Ajouter ou modifier un client

Cliquez sur **Nouveau client**, ou sur **Modifier** dans la ligne d'un client existant. Dans les deux cas, la
même fenêtre s'ouvre.

<!-- AFBEELDING: la fenêtre de modification d'un client, champs remplis -->

Les champs :

| Champ | Explication |
|---|---|
| Nom de recherche | Le nom que vous utilisez en pratique — souvent une abréviation ou le nom sans forme juridique. |
| Nom / Nom (2e ligne) | Le nom officiel tel qu'il doit figurer sur les documents. |
| Rue, N°, Code postal, Commune, Pays | L'adresse de facturation. Les adresses de travail se saisissent séparément sur la fiche. |
| Langue | Détermine la langue des documents pour ce client, comme le bon de livraison. |
| Numéro de TVA | |
| Contact, Téléphone, GSM, E-mail | |
| Délai de paiement | |
| Bloqué | Le client reste visible mais est traité comme bloqué. |
| Reçoit des rappels | Désactivez ceci pour les clients que vous ne souhaitez pas relancer automatiquement. |
| Pas de nouvelles missions | Marque un client pour lequel plus aucun nouveau travail n'est accepté. |

Cliquez sur **Enregistrer** pour sauvegarder, ou sur **Annuler** pour fermer la fenêtre sans modifications.

## Supprimer un client

**Supprimer** retire le client de la liste, mais ne jette rien définitivement : le client passe dans la
corbeille et peut être restauré de là.

## La fiche client

Ouvrez une ligne et vous obtenez tout ce qui concerne ce client sur un seul écran. Son nom figure en haut,
puis une rangée d'onglets. À gauche **Fiche** et **Adresses** — le client lui-même. À droite, après un
espace, ce qui est rattaché au client : contrats, devis, factures, postes ouverts, notes, pièces jointes et
historique.

Chaque onglet reste visible, même vide ; le nombre figure entre parenthèses dans son titre. « Contrats (0) »
est donc une réponse, pas un onglet manquant.

<!-- AFBEELDING: la fiche client avec les onglets contrats et adresses d'exécution -->

**Contrats** — les contrats périodiques de ce client, avec le numéro, la description, la fréquence et la date
de début. Ce sont ces contrats qui donnent naissance aux ordres de travail. **Nouveau contrat** en ajoute un.
Le nouveau contrat apparaît immédiatement dans cet onglet.

**Adresses d'exécution** — les adresses où le travail est effectué, avec la rue, le numéro, le code postal, la
commune et le téléphone. Elles ne coïncident pas nécessairement avec l'adresse de facturation : un client
possédant plusieurs bâtiments a une seule adresse de facturation et plusieurs adresses de travail. **Nouvelle
adresse** en ajoute une ; ouvrir une ligne vous mène à l'adresse même, où vous la modifiez ou la supprimez.

**Devis** — les devis de ce client, avec le numéro, la date, la description, le total et le statut.

**Factures** — les factures et notes de crédit, avec le numéro, le type, la date, le total, l'échéance et la
communication. La communication est la référence structurée que le client mentionne lors de son paiement.

**Postes ouverts** — ce qui reste dû par ce client. Le total figure à côté du titre ; s'il dépasse zéro, il
s'affiche en rouge. Pour chaque poste, vous voyez le document, la date, l'échéance, le solde ouvert et le
nombre de rappels envoyés.

**Historique des rappels** — les rappels envoyés, avec la date, le document et le niveau.

**Notes** — des annotations libres sur ce client, avec la date à laquelle vous souhaitez les revoir
(**Rappeler le**) et la date à laquelle elles ont été notées.

**Pièces jointes** — les documents de ce client. **Pièce jointe** ajoute un fichier ; pour chacune, vous
adaptez la description ou vous la supprimez. Un fichier peut peser jusqu'à 25 Mo.

**Historique** — qui a modifié quel champ de ce client, quand, et de quelle valeur vers quelle autre. Le plus
récent figure en haut. La ligne la plus ancienne est généralement **Créé**, à la date à laquelle le client
est né dans CleanOps ; tous les champs y figurent tels qu'ils étaient alors.

<!-- AFBEELDING: les onglets postes ouverts et historique sur une fiche client -->

Chaque onglet dispose de son propre bouton d'exportation, ce qui vous permet d'exporter un élément séparément.

### Les boutons en haut

- **Nouvel ordre de travail** — ouvre un écran où vous composez l'ordre de travail. Après **Enregistrer**,
  vous arrivez sur le nouvel ordre ; il figure alors dans la planification.
- **Facture d'acompte** — ouvre une fenêtre où vous saisissez une description, un montant net et un code TVA.
  **Créer** ne devient actif que lorsque le montant dépasse zéro. Vous lisez ensuite en haut le numéro de la
  facture, et celle-ci figure dans l'onglet **Factures**.

Ce que vous créez depuis la fiche apparaît dans l'onglet correspondant. Le message en haut se ferme avec
**Fermer**.

**← Clients**, en haut à gauche, vous ramène à la liste.

!!! info "Tous les boutons ne sont pas visibles par tout le monde"
    Les boutons et les onglets que vous voyez dépendent de vos droits. Un écran qui n'est pas encore disponible
    n'apparaît pas dans votre menu — et les boutons qui y mènent ne vous sont donc pas montrés non plus. Si
    votre collègue voit un bouton que vous n'avez pas, c'est une différence de droits et non un problème.

## Questions fréquentes

**Pourquoi est-ce que je vois « Choisissez d'abord un tenant » ?**
C'est qu'aucun environnement n'a encore été choisi. Il s'agit d'une tâche d'administrateur ; prévenez votre
personne de contact chez ADM-Concept.

**Je ne retrouve pas un client.**
Vérifiez que vous ne recherchez pas une partie du nom officiel alors que le nom de recherche est différent.
Sinon, recherchez par code postal ou par commune. Si le client n'y est vraiment plus, consultez la corbeille.
