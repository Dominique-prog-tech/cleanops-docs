# Basculement

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de CleanOps, vous ne le voyez pas dans votre menu.

Tant qu'un client travaille dans son application actuelle, celle-ci est la seule à modifier les données.
CleanOps lit ce que la reprise apporte, et est **en lecture seule** pour ce client. Sur cet écran, vous inversez
l'interrupteur au moment du basculement : dès lors, le client modifie ses données dans CleanOps, et CleanOps crée
lui-même les ordres de travail.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Administration**, puis sur la tuile **Basculement**.

<!-- AFBEELDING: l'écran de basculement avec la carte « Qui écrit pour » et le bouton pour inverser -->

## Choisir d'abord un client

L'interrupteur vaut par client. Si vous lisez *Choisissez d'abord un locataire*, rendez-vous dans le
[Registre des clients](klantenregister.fr.md) et cliquez sur **Utiliser →** chez le bon client.

## Qui écrit

La carte indique, pour le client choisi, qui gère les données :

- **L'application actuelle** — c'est la valeur par défaut. CleanOps est en lecture seule : ce que la reprise
  apporte ne peut pas y être modifié, et la génération de nuit ignore ce client. En haut de chaque écran figure
  l'étiquette **Lecture seule**.
- **CleanOps** — CleanOps est l'auteur. Les données sont modifiées ici, et les ordres de travail issus des
  contrats périodiques sont créés automatiquement chaque nuit.

Sous la carte figurent la date et l'auteur du dernier changement. Si vous lisez *Jamais modifié*, la valeur par
défaut s'applique : l'application actuelle écrit.

## Basculer vers CleanOps

1. Lancez d'abord une dernière fois la [conversion](conversie.fr.md), afin que CleanOps dispose de l'état le plus
   récent des données.
2. Cliquez sur **CleanOps devient l'auteur…**.
3. Lisez la confirmation et cliquez sur **Basculer**.

À partir de ce moment, le client peut enregistrer dans CleanOps, et CleanOps crée les ordres de travail dès la
nuit suivante.

## Revenir à l'application actuelle

Cliquez sur **Revenir : l'application actuelle écrit…** et confirmez avec **Revenir**. CleanOps repasse en
lecture seule pour ce client.

## Ce que le changement touche immédiatement

- **Dans votre propre fenêtre**, le nouvel état s'applique immédiatement.
- **Les autres utilisateurs** qui ont déjà CleanOps ouvert ne voient le nouvel état qu'après un rechargement (F5).
- Chaque basculement figure dans le [journal d'audit](actielogboek.fr.md), avec qui et quand.

## Erreurs fréquentes

!!! warning
    **N'inversez pas l'interrupteur sans avoir d'abord fait la reprise.** Après le basculement, une nouvelle
    reprise écraserait ce que le client a modifié entre-temps dans CleanOps. La dernière reprise se fait donc
    avant le basculement, pas après.

!!! warning
    **Revenir n'annule rien dans l'application actuelle.** Ce qui a été créé ou modifié dans CleanOps pendant que
    CleanOps était l'auteur n'existe pas dans l'application actuelle.

!!! warning
    **Vérifiez quel client est actif.** L'interrupteur ne vaut que pour le client choisi ; chaque client bascule
    séparément.

## Voir aussi

- [Conversion](conversie.fr.md) — transférer le dernier état avant le basculement
- [Génération des ordres de travail](generatie.fr.md) — ne tourne qu'une fois CleanOps devenu l'auteur
- [Registre des clients](klantenregister.fr.md) — choisir le client sur lequel vous travaillez
- [Journal d'audit](actielogboek.fr.md) — qui a inversé l'interrupteur, et quand
