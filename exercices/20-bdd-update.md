# Exercice 20 — Mise à jour avec $inc et $set

## Partie A : $inc

```python
db["players"].update_one(
    {"username": "mattia"},
    {"$inc": {"monney": 50}}
)
```

1. Que fait cette requête ?
2. Si "monney" valait 30, combien vaut-il après ?
3. Que ferait `{"$inc": {"monney": -20}}` ?

## Partie B : $set

```python
db["players"].update_one(
    {"username": "bob"},
    {"$set": {"level": 5, "title": "Champion"}}
)
```

1. Que fait `$set` ?
2. Si "level" n'existait pas avant, que se passe-t-il ?

## Partie C : Écris

Écris une fonction `add_money(db, username, amount)` qui ajoute de l'argent à un joueur avec `$inc`.

---

👉 Correction dans `corrections/20-bdd-update.md`
