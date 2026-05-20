# Exercice 14 — Refactoring : une fonction = une tâche

Cette fonction fait TROP de choses. Découpe-la en plusieurs petites fonctions.

```python
def shop_flow(db):
    items = list(db["shop"].find())
    for item in items:
        print(f"{item['name']} - {item['price']}€")
    username = input("Username: ")
    player = db["players"].find_one({"username": username})
    if player is None:
        print("Joueur inconnu")
        return
    choice = int(input("Choix: ")) - 1
    item = items[choice]
    if player["monney"] >= item["price"]:
        db["players"].update_one(
            {"username": username},
            {"$inc": {"monney": -item["price"]}}
        )
        db["inventory"].insert_one(
            {"username": username, "item": item}
        )
        print(f"Acheté : {item['name']}")
    else:
        print("Pas assez d'argent")
```

Crée les fonctions :
- `display_shop_items(items)`
- `get_player_or_exit(db, username)`
- `buy_item(player, item, db)`
- `shop_flow(db)` (appelle les autres)

---

👉 Correction dans `corrections/14-style-refactoring.md`
