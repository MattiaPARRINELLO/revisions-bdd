# Exercice 8 — Trouve et corrige les erreurs

Ce code a **6 erreurs** de style (nommage, espacement, sections, etc.). Trouve-les toutes.

```python
import time
from pymongo import MongoClient
from models import *

"""Création de l'équipe"""
def createTeam(db, username):
    team = []
    availableCharacters = get_characters(db)
    while team_is_not_full(team):
        displayAvailableCharacters(availableCharacters)
        character = askCharacterChoice(availableCharacters)
        addCharacter(character, team)
        availableCharacters.remove(character)
    return team


"""Combat"""
def launchFight(db, team):
    monster = selectMonster(db)
    displayMonster(monster)
    combatPhase(monster, team, db, username)
```

---

👉 Correction dans `corrections/08-style-correction-code.md`
