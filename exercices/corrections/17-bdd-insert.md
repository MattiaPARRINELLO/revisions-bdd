# Correction Exercice 17 — Insert

## Partie A

1. Collection `"players"`
2. 1 document
3. `"username"`, `"score"`, `"monney"`

## Partie B

```python
def create_player(db, username):
    players = get_collection(db, "players")
    players.insert_one({
        "username": username,
        "score": 0,
        "monney": 50,
        "level": 1
    })
    print(f"Joueur {username} créé")
```

## Partie C

```python
db["players"].insert_many([
    {"username": "Mario", "score": 200},
    {"username": "Luigi", "score": 150},
    {"username": "Peach", "score": 300},
])
```
