# Clients

Le fichier clients de CleanOps. Vous y trouvez tous les clients de votre entreprise, avec leurs coordonnées,
leurs contrats périodiques et les adresses où les travaux sont exécutés.

<!-- AFBEELDING: het klantenoverzicht met de zoekbalk en enkele rijen -->

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

<!-- AFBEELDING: het bewerkvenster van een klant, met de velden ingevuld -->

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

Ouvrez une ligne et vous obtenez tout ce qui concerne ce client sur un seul écran.

<!-- AFBEELDING: de klantfiche met de blokken contracten en uitvoeringsadressen -->

**Contrats** — les contrats périodiques de ce client, avec description, fréquence et date de début. C'est de
ces contrats que naissent les ordres de travail. Vous pouvez ajouter un nouveau contrat ici ou ouvrir un
contrat existant.

**Adresses d'exécution** — les adresses où le travail a lieu. Elles ne sont pas nécessairement identiques à
l'adresse de facturation : un client possédant plusieurs bâtiments a une seule adresse de facturation et
plusieurs adresses de travail.

En haut de la fiche se trouvent trois boutons qui partent directement du client :

- **Nouvel ordre de travail**
- **Nouveau devis**
- **Facture d'acompte**

## Questions fréquentes

**Pourquoi est-ce que je vois « Choisissez d'abord un tenant » ?**
C'est qu'aucun environnement n'a encore été choisi. Il s'agit d'une tâche d'administrateur ; prévenez votre
personne de contact chez ADM-Concept.

**Je ne retrouve pas un client.**
Vérifiez que vous ne recherchez pas une partie du nom officiel alors que le nom de recherche est différent.
Sinon, recherchez par code postal ou par commune. Si le client n'y est vraiment plus, consultez la corbeille.
