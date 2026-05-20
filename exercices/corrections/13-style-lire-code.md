# Correction Exercice 13 — Lire du code

Le programme affiche :

```
Alice: 120 pts = Gold
Bob: 45 pts = Silver
Charlie: 30 pts = Bronze
```

**Explication :**
- Alice : score = 120 → ≥ 100 → "Gold"
- Bob : score = 45 → ≥ 50 ? Non (45 < 50) → ≥ 50 est faux → "Silver" ? Non, regardons le code :
  - `if score >= 100:` → 45 >= 100 ? Non
  - `elif score >= 50:` → 45 >= 50 ? Non
  - `return "Bronze"` → Oui
  
  Donc Bob → "Bronze" ? Attends, re-vérifions :

```python
def get_rank(self):
    if self.score >= 100:
        return "Gold"
    elif self.score >= 50:
        return "Silver"
    return "Bronze"
```

Bob a score=45, donc :
- 45 >= 100 ? Non
- 45 >= 50 ? Non
- → "Bronze"

Oups, je me suis trompé plus haut. Bob = 45 n'est pas ≥ 50.

- Charlie : score = 30 → "Bronze"

Correction :
```
Alice: 120 pts = Gold
Bob: 45 pts = Bronze
Charlie: 30 pts = Bronze
```
