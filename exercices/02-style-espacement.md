# Exercice 2 — Espacement et mise en forme

## Partie A : Correction d'espacement

Corrige l'espacement de ce code (2 lignes vides entre fonctions, 1 ligne dans les fonctions) :

```python
def add_player(db, username):
    players = get_collection(db, "players")
    players.insert_one({"username": username, "score": 0})
    return username
def find_player(db, username):
    players = get_collection(db, "players")
    player = players.find_one({"username": username})
    if player is None:
        print("Joueur non trouvé")
        return None
    return player
def delete_player(db, username):
    players = get_collection(db, "players")
    players.delete_one({"username": username})
```

## Partie B : Opérateurs

Entoure les opérateurs qui ont le bon espacement :

```python
a = 5+3          # OK ❌
b = 10 - 2       # OK ❌
c = 3*4          # OK ❌
d = 20/5         # OK ❌
e = a < 10       # OK ❌
f = b>=c         # OK ❌
```

---

👉 Correction dans `corrections/02-style-espacement.md`
