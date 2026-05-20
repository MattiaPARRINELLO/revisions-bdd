# Exercice 24 — Projeter les champs

## Partie A : Compréhension

```python
db["players"].find({}, {"_id": 0, "username": 1, "score": 1})
```

1. Pourquoi exclut-on `_id` avec `0` ?
2. Pourquoi inclut-on `username` avec `1` ?
3. Si on omet un champ (ex: "monney"), est-il inclus ?

## Partie B : Écris la projection

Tu veux afficher seulement le `name` et `price` des items (sans `_id`). Écris la requête.

## Partie C : Sans projection vs avec projection

Quelle est la différence entre ces deux requêtes ?

```python
# A
list(db["shop"].find())

# B
list(db["shop"].find({}, {"_id": 0, "name": 1, "price": 1}))
```

---

👉 Correction dans `corrections/24-bdd-projection.md`
