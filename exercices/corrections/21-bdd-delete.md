# Correction Exercice 21 — Delete

## Partie A

1. Maximum 1 document (delete_one supprime un seul document)
2. Il ne supprime que le premier trouvé

## Partie B

1. `$lt` = "less than" = inférieur à
2. Il supprime tous les joueurs avec un score < 10

## Partie C

`delete_many({})` supprime **TOUS** les documents de la collection ! C'est dangereux car il n'y a pas de confirmation.

## Partie D

```python
def remove_player(db, username):
    players = get_collection(db, "players")
    result = players.delete_one({"username": username})

    if result.deleted_count > 0:
        print(f"Joueur {username} supprimé")
    else:
        print(f"Joueur {username} introuvable")
```
