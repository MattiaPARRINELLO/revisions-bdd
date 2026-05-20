# Correction Exercice 14 — Refactoring

```python
"""Affichage du shop"""

def display_shop_items(items):
    for item in items:
        print(f"{item['name']} - {item['price']}€")


def get_player_or_exit(db, username):
    players = get_collection(db, "players")
    player = players.find_one({"username": username})

    if player is None:
        print("Joueur inconnu")
        return None

    return player


def buy_item(player, item, db):
    if player["monney"] < item["price"]:
        print("Pas assez d'argent")
        return

    players = get_collection(db, "players")
    players.update_one(
        {"username": player["username"]},
        {"$inc": {"monney": -item["price"]}}
    )

    inventory = get_collection(db, "inventory")
    inventory.insert_one({"username": player["username"], "item": item})
    print(f"Acheté : {item['name']}")


def get_items(db):
    shop = get_collection(db, "shop")
    return list(shop.find())


"""Flux du shop"""

def shop_flow(db):
    items = get_items(db)
    display_shop_items(items)

    username = input("Username: ")
    player = get_player_or_exit(db, username)

    if player is None:
        return

    choice = int(input("Choix: ")) - 1
    item = items[choice]
    buy_item(player, item, db)
```
