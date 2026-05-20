# Exercice 29 — Résumé MongoDB / SQL

## Partie A : Traduis en français

| MongoDB | Équivalent SQL |
|---------|---------------|
| `db["players"].find()` | `SELECT * FROM players` |
| `db["players"].find_one({"username": "x"})` | ? |
| `db["players"].insert_one({...})` | ? |
| `db["players"].update_one({"u": "x"}, {"$inc": {"s": 1}})` | ? |
| `db["players"].delete_one({"u": "x"})` | ? |
| `.sort("score", -1).limit(3)` | ? |

## Partie B : Questions

1. MongoDB est-il SQL ou NoSQL ?
2. Un document MongoDB est stocké sous quel format ?
3. Quelle est la différence entre `find()` et `find_one()` ?
4. À quoi sert `list()` autour de `find()` ?

## Partie C : Schéma

Dessine (sur papier) le schéma de la base de données du projet jeu :
- Quelles collections ?
- Quels champs dans chaque collection ?
- Quelles sont les relations entre collections ?

---

👉 Correction dans `corrections/29-bdd-resume.md`
