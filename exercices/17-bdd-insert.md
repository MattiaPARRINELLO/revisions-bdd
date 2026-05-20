# Exercice 17 — Insertion de documents

## Partie A : Compréhension

```python
db["players"].insert_one({"username": "alice", "score": 0, "monney": 100})
```

1. Quelle collection est modifiée ?
2. Combien de documents sont insérés ?
3. Quelles sont les clés du document ?

## Partie B : Écris

Écris une fonction `create_player(db, username)` qui insère un joueur avec :
- `username` (paramètre)
- `score` = 0
- `monney` = 50
- `level` = 1

## Partie C : Insertion multiple

Écris le code pour insérer 3 joueurs d'un coup avec `insert_many()` :
- Mario (score: 200)
- Luigi (score: 150)
- Peach (score: 300)

---

👉 Correction dans `corrections/17-bdd-insert.md`
