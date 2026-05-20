# Correction Exercice 22 — Sort / Limit

## Partie A

1. Trie par `score` en ordre **décroissant** (du plus grand au plus petit)
2. Tri croissant (du plus petit au plus grand)
3. Ne garde que les 3 premiers résultats

## Partie B

| Code | Effet |
|------|-------|
| `.sort("score", -1)` | C. Du plus grand au plus petit |
| `.sort("score", 1)` | A. Du plus petit au plus grand |
| `.limit(5)` | B. Ne garde que 5 résultats |

## Partie C

```python
def get_worst_players(db, n):
    players = get_collection(db, "players")
    return list(players.find()
                .sort("score", 1)
                .limit(n))
```
