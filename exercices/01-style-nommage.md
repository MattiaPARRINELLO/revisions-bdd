# Exercice 1 — Conventions de nommage

## Partie A : Vrai ou Faux ?

| N° | Nom | Correct ? |
|----|-----|-----------|
| 1 | `def calculate_total():` | |
| 2 | `class player_character:` | |
| 3 | `max_score = 100` | |
| 4 | `class Monster:` | |
| 5 | `def getPlayer():` | |
| 6 | `file_name = "data.txt"` | |
| 7 | `class HighScoreManager:` | |
| 8 | `def display_menu():` | |
| 9 | `playerName = "Mattia"` | |
| 10 | `class Character:` | |

## Partie B : Corrige les noms incorrects

```python
def getPlayerData():
    playerMaxHP = 100
    playerList = []

def calculateTotalScore(playerList):
    totalScore = 0
    for playerScore in playerList:
        totalScore += playerScore
    return totalScore
```

---

👉 La correction est dans `corrections/01-style-nommage.md`
