# Correction Exercice 6 — Structure fichiers

## Partie A

| Fonction | models.py | utils.py | game.py | main.py |
|----------|-----------|----------|---------|---------|
| `class Character:` | ✅ | | | |
| `create_team()` | | | | ✅ |
| `display_monster()` | | ✅ | | |
| `combat_phase()` | | | ✅ | |
| `class Stack:` | ✅ | | | |
| `ask_username()` | | ✅ | | |
| `principal_menu()` | | | | ✅ |
| `monster_attack()` | | | ✅ | |
| `open_db()` | | ✅ | | |
| `get_collection()` | | ✅ | | |

## Partie B

`Character` est dans `models.py` car c'est une classe de **données** (elle définit ce qu'est un personnage). `main.py` est réservé à **l'orchestration** (la boucle principale, le menu). Séparer les responsabilités rend le projet plus clair et réutilisable.
