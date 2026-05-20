# Correction Exercice 8 — Erreurs de style

**Erreur 1 :** `createTeam` → doit être `create_team` (snake_case)

**Erreur 2 :** `availableCharacters` → doit être `available_characters` (snake_case)

**Erreur 3 :** `displayAvailableCharacters` → doit être `display_available_characters`

**Erreur 4 :** `askCharacterChoice` → doit être `ask_character_choice`

**Erreur 5 :** `addCharacter` → doit être `add_character`

**Erreur 6 :** `launchFight` → doit être `launch_fight`

**Erreur 7 :** `selectMonster` → doit être `select_monster`

**Erreur 8 :** `displayMonster` → doit être `display_monster`

**Erreur 9 :** `combatPhase` → doit être `combat_phase`

**Erreur 10 :** Il manque 2 lignes vides entre les sections (une seule ligne après `"""..."""`)

**Version corrigée :**

```python
import time
from pymongo import MongoClient
from models import *


"""Création de l'équipe"""

def create_team(db, username):
    team = []
    available_characters = get_characters(db)

    while team_is_not_full(team):
        display_available_characters(available_characters)
        character = ask_character_choice(available_characters)
        add_character(character, team)
        available_characters.remove(character)

    return team


"""Combat"""

def launch_fight(db, team):
    monster = select_monster(db)
    display_monster(monster)
    combat_phase(monster, team, db, username)
```
