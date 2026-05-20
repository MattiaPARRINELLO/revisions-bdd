# Correction Exercice 19 — find()

## Partie A

1. Une liste de tous les documents de la collection
2. `find()` retourne un curseur (pas directement une liste). `list()` le convertit en liste pour pouvoir l'utiliser facilement.

## Partie B

1. `{}` est un filtre vide → sélectionne tous les documents
2. `{"_id": 0, "username": 1, "score": 1}` est la **projection** : on exclut `_id` (0), on inclut `username` et `score` (1)
3. `1` = inclure, `0` = exclure. On ne peut pas mélanger 1 et 0 sauf pour `_id`

## Partie C

```python
def get_high_scorers(db, min_score):
    players = get_collection(db, "players")
    return list(players.find({"score": {"$gte": min_score}}))
```
