---
description: "Paiements par mode dans CleanOps : les ordres de travail payés par Payconiq, en espèces … par période, pour pointer, avec export vers Excel."
---

# Paiements par mode

Les ordres de travail avec un [mode de paiement](beheer/betaalwijzen.fr.md), au jour où ils ont été exécutés. Vous pointez ainsi
le relevé Payconiq ou la caisse : chaque ligne est une intervention, avec le montant payé par le client et l'état de la facture.

<!-- AFBEELDING: l'aperçu Paiements par mode avec la période Ce mois-ci, les totaux par mode et une ligne Espèces -->

## Ouvrir l'écran

Dans le menu, sous **Ventes**, cliquez sur **Encaissements**. L'écran s'intitule Paiements par mode.

## Période et mode de paiement

En haut, vous choisissez dans la première liste la **période** : cette semaine, la semaine passée, ce mois-ci, le mois passé ou
cette année. Une semaine va du lundi au dimanche. La deuxième liste (*Tous les modes*) n'affiche qu'un mode, par exemple uniquement
Payconiq. Sous les listes figurent les dates de la période, suivies des totaux.

Sous la barre d'outils figurent les **totaux par mode de paiement** : combien d'ordres et ce qui a été encaissé — le *montant du
terrain* s'il existe, sinon le montant TVAC. Comparez-les au
relevé Payconiq ou à la caisse.

## La liste

| Colonne | Ce que c'est |
|---|---|
| Exécuté | le jour de l'intervention — le jour du paiement sur place |
| Ordre | le numéro ; un clic ouvre l'ordre de travail |
| Client | le client de l'ordre |
| Mode de paiement | Payconiq, espèces, ultérieurement … |
| HTVA / TVA / TVAC | le montant de l'ordre, et avec la TVA. Si CleanOps ne connaît pas le code TVA, *TVAC* reste vide. |
| Terrain | ce que le client a payé sur place, tel que noté sur l'ordre de travail |
| Facture | le numéro de facture ; un clic ouvre la facture |
| État | **Non facturé**, **Ouvert** ou **Payé** |

!!! note "Un cent de différence avec la facture"
    *TVAC* calcule la TVA par ordre. Une facture additionne la TVA par code TVA ; si elle regroupe plusieurs ordres, son total
    peut différer d'un cent de la somme des lignes.

## Exporter vers Excel

Cliquez sur **Exporter** en haut à droite. Vous obtenez les lignes affichées, avec la période et le mode choisis.

## Questions fréquentes

**Un ordre payé par Payconiq n'y figure pas.**
Il n'a pas encore de date d'exécution, ou celle-ci tombe en dehors de la période choisie.

**L'état est Ouvert alors que le client a payé sur place.**
Avec un mode payé sur place, la facturation enregistre directement le paiement. Si la facture reste ouverte, le paiement n'a pas
pu être enregistré (la facturation l'a signalé) ; enregistrez-le dans [Paiements](betalingen.fr.md).

## Voir aussi

- [Modes de paiement](beheer/betaalwijzen.fr.md)
- [Facturation](facturatie.fr.md#une-facture-par-mode-de-paiement)
- [Paiements](betalingen.fr.md)
