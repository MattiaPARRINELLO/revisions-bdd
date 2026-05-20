# Correction Exercice 23 — Opérateurs

## Partie A

| Opérateur | Signification |
|-----------|--------------|
| `$gt` | greater than (>) |
| `$gte` | greater than or equal (>=) |
| `$lt` | less than (<) |
| `$lte` | less than or equal (<=) |
| `$ne` | not equal (!=) |
| `$eq` | equal (=) |

## Partie B

1. `{"score": {"$gt": 100}}`
2. `{"score": {"$gte": 50, "$lte": 200}}`
3. `{"username": {"$ne": "admin"}}`
4. `{"monney": {"$lte": 0}}`

## Partie C

"Trouve les joueurs dont le score est supérieur ou égal à 100 ET inférieur ou égal à 500"
