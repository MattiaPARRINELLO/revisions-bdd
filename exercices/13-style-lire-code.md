# Exercice 13 — Lire et comprendre du code

Que va afficher ce programme ? Écris la sortie exacte.

```python
"""Gestion des scores"""

class Player:
    def __init__(self, name, score=0):
        self.name = name
        self.score = score

    def add_score(self, points):
        self.score += points

    def get_rank(self):
        if self.score >= 100:
            return "Gold"
        elif self.score >= 50:
            return "Silver"
        return "Bronze"


"""Tests"""

def test():
    p1 = Player("Alice", 120)
    p2 = Player("Bob", 45)
    p3 = Player("Charlie")

    p3.add_score(30)

    for p in [p1, p2, p3]:
        print(f"{p.name}: {p.score} pts = {p.get_rank()}")


test()
```

---

👉 Correction dans `corrections/13-style-lire-code.md`
