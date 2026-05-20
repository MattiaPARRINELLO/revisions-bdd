# Exercice 7 — Principes généraux

## Partie A : Early return

Réécris cette fonction avec un **early return** :

```python
def is_team_valid(team):
    if len(team) > 0:
        for character in team:
            if character.is_dead():
                return False
        return True
    else:
        return False
```

## Partie B : Menu avec dictionnaire

Transforme ce `if/elif` en dictionnaire de fonctions :

```python
def menu():
    db = open_db()
    choice = input("1. Jouer  2. Scores  3. Quitter : ")

    if choice == "1":
        play_game(db)
    elif choice == "2":
        display_scores(db)
    elif choice == "3":
        exit()
    else:
        print("Choix invalide")
```

## Partie C : Paramètres explicites

La fonction ci-dessous utilise une variable globale. Corrige-la :

```python
db = None

def get_player(username):
    global db
    return db["players"].find_one({"username": username})
```

---

👉 Correction dans `corrections/07-style-principes.md`
