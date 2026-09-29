# Basculement

!!! info "Pour les opérateurs ADM"
    Cet écran est réservé aux collaborateurs d'ADM-Concept. En tant que client de CleanOps, vous ne le voyez pas dans votre menu.

Tant qu'un client travaille dans son application actuelle, celle-ci est la source de ses données. CleanOps est
alors un **environnement de test** : on peut tout y modifier, mais chaque reprise remet le client aux données de
son application actuelle et efface ce qui a été créé dans CleanOps. Sur cet écran, vous inversez l'interrupteur au
moment du basculement : dès lors, le client travaille vraiment dans CleanOps, et CleanOps crée lui-même les ordres
de travail.

## Ouvrir l'écran

Dans la barre latérale, cliquez sur **Administration**, puis sur la tuile **Basculement**.

<!-- AFBEELDING: l'écran de basculement avec la carte « Qui écrit pour » et le bouton pour inverser -->

## Choisir d'abord un client

L'interrupteur vaut par client. Si vous lisez *Choisissez d'abord un locataire*, rendez-vous dans le
[Registre des clients](klantenregister.fr.md) et cliquez sur **Utiliser →** chez le bon client.

## Qui écrit

La carte indique, pour le client choisi, qui gère les données :

- **L'application actuelle** — c'est la valeur par défaut : la **phase de test**. Tout peut être modifié dans
  CleanOps, mais chaque [reprise](conversie.fr.md) efface d'abord ce qui a été créé ici, puis remet le reste aux
  données de l'application actuelle. La génération de nuit ignore ce client. En haut de chaque écran figure
  l'étiquette **Phase de test**.
- **CleanOps** — CleanOps est l'auteur. Les données sont modifiées ici, et les ordres de travail issus des
  contrats périodiques sont créés automatiquement chaque nuit.

Sous la carte figurent la date et l'auteur du dernier changement. Si vous lisez *Jamais modifié*, la valeur par
défaut s'applique : la phase de test.

## Basculer vers CleanOps

1. Faites vérifier par ADM-Concept sur le serveur que l'application **ne s'endort pas** : le pool d'applications
   de CleanOps doit toujours tourner (*Start Mode* AlwaysRunning, *Idle Time-out* 0). Sinon CleanOps ne crée pas
   les ordres de travail chaque nuit — constaté en septembre 2026, quand la génération ne tournait pas certaines
   nuits.
2. Lancez une dernière fois la [conversion](conversie.fr.md), afin que CleanOps dispose de l'état le plus récent
   des données.
3. Cliquez sur **CleanOps devient l'auteur…**.
4. Lisez la confirmation et cliquez sur **Basculer**.

À partir de ce moment, le client peut enregistrer dans CleanOps, et CleanOps crée les ordres de travail dès la
nuit suivante.

## Revenir à l'application actuelle

Cliquez sur **Revenir : l'application actuelle écrit…** et confirmez avec **Revenir**. Le client repasse alors
en phase de test.

## Ce que le changement touche immédiatement

- **Dans votre propre fenêtre**, le nouvel état s'applique immédiatement.
- **Les autres utilisateurs** qui ont déjà CleanOps ouvert ne voient le nouvel état qu'après un rechargement (F5).
- Chaque basculement figure dans le [journal d'audit](actielogboek.fr.md), avec qui et quand.

## Erreurs fréquentes

!!! warning
    **N'inversez pas l'interrupteur sans avoir d'abord fait la reprise.** Après le basculement, une nouvelle
    reprise écraserait ce que le client a modifié entre-temps dans CleanOps. La dernière reprise se fait donc
    avant le basculement, pas après.

!!! danger "Revenir efface, à la prochaine reprise, tout ce qui a été créé dans CleanOps"
    En phase de test, chaque reprise commence par effacer ce qui a été créé dans CleanOps : clients, ordres de
    travail, factures, pièces jointes, … Pour un client qui avait vraiment basculé, ce sont ses données. Ne revenez
    donc que si vous êtes sûr qu'elles peuvent disparaître — et ne lancez pas de reprise tant que ce n'est pas établi.

!!! warning
    **Vérifiez quel client est actif.** L'interrupteur ne vaut que pour le client choisi ; chaque client bascule
    séparément.

## Voir aussi

- [Conversion](conversie.fr.md) — transférer le dernier état avant le basculement
- [Génération des ordres de travail](generatie.fr.md) — ne tourne qu'une fois CleanOps devenu l'auteur
- [Registre des clients](klantenregister.fr.md) — choisir le client sur lequel vous travaillez
- [Journal des actions](actielogboek.fr.md) — qui a inversé l'interrupteur, et quand
