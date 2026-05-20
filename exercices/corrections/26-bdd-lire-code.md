# Correction Exercice 26 — Lire du code BDD

## Partie A

1. `find()` retourne une liste **vide** `[]` si la collection est vide. `get_top_scores()` retourne donc `[]`.
2. `enumerate(top_scores, 1)` ajoute un compteur qui commence à 1 (au lieu de 0 par défaut). Donc `i` va de 1, 2, 3... au lieu de 0, 1, 2...
3. `{}` = pas de filtre = on prend tous les documents

## Partie B

```
1. bob : 120
2. charlie : 80
3. alice : 50
```
