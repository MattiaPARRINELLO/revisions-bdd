# Correction Exercice 9 — Fonctions

```python
"""Accès à la base de données"""

def get_collection(db, name):
    return db[name]


"""Gestion des joueurs"""

def add_player(db, username):
    players = get_collection(db, "players")
    players.insert_one({"username": username, "score": 0, "monney": 100})
    print(f"Joueur {username} créé")


def player_exists(db, username):
    players = get_collection(db, "players")
    player = players.find_one({"username": username})

    if player is not None:
        return True

    return False


def delete_low_scores(db, min_score):
    players = get_collection(db, "players")
    result = players.delete_many({"score": {"$lt": min_score}})
    print(f"{result.deleted_count} joueurs supprimés")
```
