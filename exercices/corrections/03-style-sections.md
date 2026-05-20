# Correction Exercice 3 — Sections

```python
from pymongo import MongoClient


"""Base de données"""

def open_db():
    client = MongoClient("mongodb://localhost:27017/")
    return client["Game"]


"""Recherche de joueur"""

def get_player(db, username):
    players = db["players"]
    return players.find_one({"username": username})


"""Gestion des scores"""

def add_score(db, username, points):
    players = db["players"]
    players.update_one(
        {"username": username},
        {"$inc": {"score": points}}
    )


def get_top_scores(db):
    scores = list(db["players"].find()
                  .sort("score", -1).limit(5))
    return scores


"""Menu principal"""

def display_menu():
    print("1. Jouer")
    print("2. Scoreboard")
    print("3. Quitter")


def main():
    db = open_db()
    choices = {
        "1": lambda d: print("Jeu lancé"),
        "2": lambda d: get_top_scores(d),
        "3": lambda _: exit(),
    }
    choice = input("Choix: ")
    choices[choice](db)
```

Sections ajoutées :
- `"""Base de données"""`
- `"""Recherche de joueur"""`
- `"""Gestion des scores"""`
- `"""Menu principal"""`
