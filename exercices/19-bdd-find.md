# Exercice 19 — Lecture avec find()

## Partie A : Compréhension

```python
all_players = list(db["players"].find())
```

1. Que contient `all_players` ?
2. Pourquoi utilise-t-on `list()` autour de `find()` ?

## Partie B : Projection

```python
players = list(db["players"].find(
    {},
    {"_id": 0, "username": 1, "score": 1}
))
```

1. Que fait `{}` ?
2. Que fait `{"_id": 0, "username": 1, "score": 1}` ?
3. Quelle est la différence entre 0 et 1 dans la projection ?

## Partie C : Filtre

Écris une fonction `get_high_scorers(db, min_score)` qui retourne les joueurs avec un score >= min_score.

Indice : utilise `{"score": {"$gte": min_score}}`

---

👉 Correction dans `corrections/19-bdd-find.md`
