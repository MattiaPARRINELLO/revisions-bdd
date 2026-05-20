# Exercice 21 — Suppression de documents

## Partie A : Compréhension

```python
db["players"].delete_one({"username": "mattia"})
```

1. Combien de documents sont supprimés maximum ?
2. Que se passe-t-il si plusieurs documents correspondent ?

## Partie B : delete_many

```python
db["players"].delete_many({"score": {"$lt": 10}})
```

1. Que signifie `$lt` ?
2. Que va-t-il se passer ?

## Partie C : Attention !

```python
db["players"].delete_many({})
```

Que fait ce code ? Pourquoi est-il dangereux ?

## Partie D : Écris

Écris une fonction `remove_player(db, username)` qui supprime un joueur et affiche un message de confirmation. Utilise `delete_one()`.

---

👉 Correction dans `corrections/21-bdd-delete.md`
