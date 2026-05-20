# Correction Exercice 24 — Projection

## Partie A

1. `_id` est inclus par défaut dans MongoDB. On l'exclut avec `0` car il n'est pas utile à afficher.
2. On met `1` pour dire "seulement ces champs"
3. Si un champ est omis de la projection et qu'on utilise un mélange de 1/0, il sera exclu

## Partie B

```python
db["shop"].find({}, {"_id": 0, "name": 1, "price": 1})
```

## Partie C

- A retourne **tous** les champs des documents (y compris `_id`)
- B retourne **seulement** `name` et `price` (sans `_id`)
