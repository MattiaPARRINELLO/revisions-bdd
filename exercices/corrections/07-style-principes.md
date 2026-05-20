# Correction Exercice 7 — Principes

## Partie A : Early return

```python
def is_team_valid(team):
    if len(team) == 0:
        return False

    for character in team:
        if character.is_dead():
            return False

    return True
```

## Partie B : Dictionnaire

```python
def menu():
    db = open_db()

    choices = {
        "1": lambda d: play_game(d),
        "2": lambda d: display_scores(d),
        "3": lambda _: exit(),
    }

    choice = input("1. Jouer  2. Scores  3. Quitter : ")

    if choice in choices:
        choices[choice](db)
    else:
        print("Choix invalide")
```

## Partie C : Paramètres explicites

```python
def get_player(db, username):
    return db["players"].find_one({"username": username})
```
