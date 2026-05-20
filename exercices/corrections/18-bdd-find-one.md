# Correction Exercice 18 — find_one

## Partie A

```python
def get_player_by_name(db, username):
    players = db["players"]
    player = players.find_one({"username": username})
    return player
```

## Partie B

1. Retourne le document (dict)
2. Retourne `None`
3. Retourne le premier document trouvé

## Partie C

```python
player = db["players"].find_one({"username": "mattia"})

if player is None:
    print("Joueur non trouvé")
    return

print(player["score"])
```

Sans cette vérification, `player["score"]` lèverait `TypeError: 'NoneType' object is not subscriptable`.
