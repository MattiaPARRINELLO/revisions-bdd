# Correction Exercice 20 — Update

## Partie A

1. Cette requête ajoute 50 à la valeur actuelle de `monney` du joueur "mattia"
2. 30 + 50 = 80
3. `{"$inc": {"monney": -20}}` enlèverait 20

## Partie B

1. `$set` modifie la valeur d'un champ. Si le champ n'existe pas, il le crée.
2. Si `level` n'existait pas, il est créé avec la valeur 5.

## Partie C

```python
def add_money(db, username, amount):
    players = get_collection(db, "players")
    players.update_one(
        {"username": username},
        {"$inc": {"monney": amount}}
    )
    print(f"{amount} pièces ajoutées à {username}")
```
