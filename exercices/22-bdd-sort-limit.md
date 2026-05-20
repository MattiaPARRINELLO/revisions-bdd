# Exercice 22 — Trier et limiter les résultats

## Partie A : Compréhension

```python
top = list(db["players"].find()
    .sort("score", -1)
    .limit(3))
```

1. Que fait `.sort("score", -1)` ?
2. Que changerait `.sort("score", 1)` ?
3. Que fait `.limit(3)` ?

## Partie B : Associe

| Code | Effet |
|------|-------|
| `.sort("score", -1)` | A. Du plus petit au plus grand |
| `.sort("score", 1)` | B. Ne garde que 5 résultats |
| `.limit(5)` | C. Du plus grand au plus petit |

## Partie C : Écris

Écris une fonction `get_worst_players(db, n)` qui retourne les `n` joueurs avec les plus petits scores.

---

👉 Correction dans `corrections/22-bdd-sort-limit.md`
