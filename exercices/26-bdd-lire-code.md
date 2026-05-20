# Exercice 26 — Lire et comprendre du code BDD

## Partie A

```python
def display_scoreboard(db):
    top_scores = get_top_scores(db)
    if len(top_scores) == 0:
        print("Aucun score")
        return
    for i, score in enumerate(top_scores, 1):
        print(f"{i}. {score['username']} : {score['score']}")

def get_top_scores(db):
    return list(db["scoreboard"].find(
        {}, {"_id": 0, "username": 1, "score": 1}
    ).sort("score", -1).limit(5))
```

1. Que retourne `get_top_scores()` si la collection est vide ?
2. Que fait `enumerate(top_scores, 1)` ?
3. Pourquoi utilise-t-on `{}` comme premier argument de `find()` ?

## Partie B

Si la base contient :

```
scoreboard: [
  {username: "alice", score: 50},
  {username: "bob", score: 120},
  {username: "charlie", score: 80}
]
```

Qu'affiche `display_scoreboard(db)` ?

---

👉 Correction dans `corrections/26-bdd-lire-code.md`
