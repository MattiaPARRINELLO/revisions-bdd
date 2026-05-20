# Correction Exercice 1 — Nommage

## Partie A

| N° | Nom | Correct ? |
|----|-----|-----------|
| 1 | `def calculate_total():` | ✅ |
| 2 | `class player_character:` | ❌ → `PlayerCharacter` |
| 3 | `max_score = 100` | ✅ |
| 4 | `class Monster:` | ✅ |
| 5 | `def getPlayer():` | ❌ → `get_player()` |
| 6 | `file_name = "data.txt"` | ✅ |
| 7 | `class HighScoreManager:` | ✅ |
| 8 | `def display_menu():` | ✅ |
| 9 | `playerName = "Mattia"` | ❌ → `player_name` |
| 10 | `class Character:` | ✅ |

## Partie B

```python
def get_player_data():
    player_max_hp = 100
    player_list = []


def calculate_total_score(player_list):
    total_score = 0
    for player_score in player_list:
        total_score += player_score
    return total_score
```
