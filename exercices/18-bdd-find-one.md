# Exercice 18 — Lecture avec find_one

## Partie A : Complète

```python
def get_player_by_name(db, username):
    players = db["players"]
    # Complète pour chercher par username
    player = ...
    return player
```

## Partie B : Que retourne `find_one` ?

1. Si le document existe ? 
2. S'il n'existe pas ?
3. Si on ne met pas de filtre `find_one()` ?

## Partie C : Sécurité

```python
player = db["players"].find_one({"username": "mattia"})
print(player["score"])
```

Que se passe-t-il si "mattia" n'existe pas ? Corrige ce code avec un early return.

---

👉 Correction dans `corrections/18-bdd-find-one.md`
