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

Ouvrez une ligne et vous obtenez tout ce qui concerne ce client sur un seul écran : ses coordonnées en haut,
puis une série de blocs. Un bloc sans données ne s'affiche pas — chez un nouveau client, vous en voyez donc
moins que chez un client avec des années d'historique.

<!-- AFBEELDING: la fiche client avec les blocs contrats et adresses d'exécution -->

**Contrats** — les contrats périodiques de ce client, avec le numéro, la description, la fréquence et la date
de début. Ce sont ces contrats qui donnent naissance aux ordres de travail. **Nouveau contrat** en ajoute un ;
ouvrez une ligne pour consulter un contrat existant.

**Adresses d'exécution** — les adresses où le travail est effectué, avec la rue, le numéro, le code postal, la
commune et le téléphone. Elles ne coïncident pas nécessairement avec l'adresse de facturation : un client
possédant plusieurs bâtiments a une seule adresse de facturation et plusieurs adresses de travail. **Nouvelle
adresse** en ajoute une ; chaque ligne porte **Modifier** et **Supprimer**.

**Devis** — les devis de ce client, avec le numéro, la date, la description, le total et le statut.

**Factures** — les factures et notes de crédit, avec le numéro, le type, la date, le total, l'échéance et la
communication. La communication est la référence structurée que le client mentionne lors de son paiement.

**Postes ouverts** — ce qui reste dû par ce client. Le total figure à côté du titre ; s'il dépasse zéro, il
s'affiche en rouge. Pour chaque poste, vous voyez le document, la date, l'échéance, le solde ouvert et le
nombre de rappels envoyés.

**Historique des rappels** — les rappels envoyés, avec la date, le document et le niveau.

**Notes** — des annotations libres sur ce client, avec la date à laquelle vous souhaitez les revoir
(**Rappeler le**) et la date à laquelle elles ont été notées.

<!-- AFBEELDING: les blocs postes ouverts et historique des rappels sur une fiche client -->

Chaque bloc dispose de son propre bouton d'exportation, ce qui vous permet d'exporter un élément séparément.

### Les boutons en haut

- **Nouvel ordre de travail** — lance un ordre de travail pour ce client.
- **Nouveau devis** — ouvre un devis vierge pour ce client.
- **Facture d'acompte** — ouvre une fenêtre où vous saisissez une description, un montant net et un code TVA.
  **Créer** ne devient actif que lorsque le montant dépasse zéro.

**← Clients**, en haut à gauche, vous ramène à la liste.

## Questions fréquentes

**Pourquoi est-ce que je vois « Choisissez d'abord un tenant » ?**
C'est qu'aucun environnement n'a encore été choisi. Il s'agit d'une tâche d'administrateur ; prévenez votre
personne de contact chez ADM-Concept.

**Je ne retrouve pas un client.**
Vérifiez que vous ne recherchez pas une partie du nom officiel alors que le nom de recherche est différent.
Sinon, recherchez par code postal ou par commune. Si le client n'y est vraiment plus, consultez la corbeille.
