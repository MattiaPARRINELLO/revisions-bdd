# Correction Exercice 25 — Fonctions BDD

```python
"""Gestion de l'inventaire"""

def add_item_to_inventory(db, username, item):
    inventory = get_collection(db, "inventory")
    inventory.insert_one({"username": username, "item": item})
    print(f"Item ajouté à {username}")


def get_inventory(db, username):
    inventory = get_collection(db, "inventory")
    items = list(inventory.find({"username": username}))
    return items


"""Gestion des scores"""

def update_score(db, username, points):
    players = get_collection(db, "players")
    players.update_one(
        {"username": username},
        {"$inc": {"score": points}}
    )
    print(f"{points} points ajoutés à {username}")


"""Affichage"""

def display_inventory(db, username):
    items = get_inventory(db, username)

    if len(items) == 0:
        print("Inventaire vide")
        return

    for entry in items:
        item = entry["item"]
        print(f"{item['name']} - {item.get('description', '')}")
```
