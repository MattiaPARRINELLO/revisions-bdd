# Exercice 16 — Connexion à MongoDB

## Partie A : Complète la fonction

```python
def open_db():
    # Connexion à MongoDB sur localhost:27017
    client = ...
    # Base de données "game"
    db = ...
    return db
```

## Partie B : Vrai ou Faux ?

| N° | Phrase | V/F |
|----|--------|-----|
| 1 | `MongoClient()` établit la connexion au serveur | |
| 2 | Si le port est 27017, il faut l'écrire obligatoirement | |
| 3 | `client["Game"]` crée la base si elle n'existe pas | |
| 4 | `db["players"]` crée la collection si elle n'existe pas | |
| 5 | MongoDB doit être lancé pour se connecter | |

## Partie C : Écris la fonction `get_collection(db, name)`

---

👉 Correction dans `corrections/16-bdd-connexion.md`
