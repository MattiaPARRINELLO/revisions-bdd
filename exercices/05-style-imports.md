# Exercice 5 — Ordre des imports

## Partie A : Réorganise

Remets ces imports dans le bon ordre (stdlib → tierces → locales) :

```python
from game import *
import time
from pymongo import MongoClient
import random
from utils import *
from models import *
```

## Partie B : Complète les imports

Quels imports manquent dans ce fichier `game.py` ?

```python
# ?


"""Combat"""

def combat_phase(monster, team, db, username):
    while not monster.is_dead() and not team_is_dead(team):
        time.sleep(1)
        team_attack(monster, team, db, username)
        monster_attack(monster, team)
```

---

👉 Correction dans `corrections/05-style-imports.md`
