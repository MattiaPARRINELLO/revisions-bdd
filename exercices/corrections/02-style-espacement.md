# Correction Exercice 2 — Espacement

## Partie A

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

- 2 lignes vides entre `add_player` et `find_player`
- 2 lignes vides entre `find_player` et `delete_player`
- 1 ligne vide dans `find_player` pour séparer la vérification

## Partie B

```python
a = 5+3          # ❌ → a = 5 + 3
b = 10 - 2       # ✅
c = 3*4          # ❌ → c = 3 * 4
d = 20/5         # ❌ → d = 20 / 5
e = a < 10       # ✅
f = b>=c         # ❌ → f = b >= c
```
