# Correction Exercice 29 — Résumé

## Partie A

| MongoDB | SQL |
|---------|-----|
| `db["players"].find()` | `SELECT * FROM players` |
| `db["players"].find_one({"username": "x"})` | `SELECT * FROM players WHERE username = 'x' LIMIT 1` |
| `db["players"].insert_one({...})` | `INSERT INTO players VALUES (...)` |
| `db["players"].update_one({"u": "x"}, {"$inc": {"s": 1}})` | `UPDATE players SET s = s + 1 WHERE u = 'x'` |
| `db["players"].delete_one({"u": "x"})` | `DELETE FROM players WHERE u = 'x' LIMIT 1` |
| `.sort("score", -1).limit(3)` | `ORDER BY score DESC LIMIT 3` |

## Partie B

1. NoSQL
2. JSON (dict en Python)
3. `find()` retourne un curseur (plusieurs docs), `find_one()` retourne un seul dict (ou None)
4. `list()` convertit le curseur en liste Python

## Partie C

Collections du projet jeu :

```
GAME (base MongoDB)
├── players
│   ├── username: string
│   └── monney: int
├── characters
│   ├── name: string
│   ├── def: int
│   ├── atk: int
│   └── max_pv: int
├── monsters
│   ├── name: string
│   ├── def: int
│   ├── atk: int
│   ├── max_pv: int
│   └── drop: {name, rate}
├── scoreboard
│   ├── username: string
│   └── score: int
├── inventory
│   ├── username: string
│   └── item: {name, atk, def, price, multiplier}
└── shop
    ├── name: string
    ├── def: int
    ├── atk: int
    ├── price: int
    └── multiplier: int
```

Relations implicites : `inventory.username` → `players.username`, `scoreboard.username` → `players.username`
