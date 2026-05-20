# Correction Exercice 16 — Connexion

## Partie A

```python
def open_db():
    client = MongoClient("mongodb://localhost:27017/")
    db = client["game"]
    return db
```

## Partie B

1. ✅ Vrai — `MongoClient()` établit la connexion
2. ❌ Faux — 27017 est le port par défaut, on peut l'omettre : `MongoClient()`
3. ✅ Vrai — MongoDB crée la base au premier insert
4. ✅ Vrai — MongoDB crée la collection au premier insert
5. ✅ Vrai — MongoDB doit être en cours d'exécution

## Partie C

```python
def get_collection(db, name):
    return db[name]
```
