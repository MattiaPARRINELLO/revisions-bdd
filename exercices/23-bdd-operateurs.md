# Exercice 23 — Opérateurs de comparaison

## Partie A : Associe

| Opérateur | Signification |
|-----------|--------------|
| `$gt` | ? |
| `$gte` | ? |
| `$lt` | ? |
| `$lte` | ? |
| `$ne` | ? |
| `$eq` | ? |

## Partie B : Écris les filtres

Écris le filtre MongoDB pour :

1. Score supérieur à 100 → ?
2. Score entre 50 et 200 inclus → ?
3. Username différent de "admin" → ?
4. Monney inférieur ou égal à 0 → ?

## Partie C : Traduis en français

```python
db["players"].find({"score": {"$gte": 100, "$lte": 500}})
```

---

👉 Correction dans `corrections/23-bdd-operateurs.md`
