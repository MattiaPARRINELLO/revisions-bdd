# Exercice 4 — Classes et méthodes

## Partie A : Complète la classe

Complete cette classe `Hero` avec le style du prof :

```python
class Hero:
    def __init__(self, name, hp, atk):
        # Complète ici
        pass

    def attack(self, enemy):
        # Le héros attaque un ennemi
        # Les dégâts = self.atk - enemy.defense (min 1)
        pass

    def is_alive(self):
        # Retourne True si hp > 0
        pass

    def take_damage(self, amount):
        # Réduit les hp
        pass
```

## Partie B : Écris une classe complète

Écris une classe `Enemy` avec :
- `__init__(self, name, hp, atk, defense, reward)` 
- `attack(self, hero)` — inflige des dégâts au héros
- `is_alive(self)` — vérifie si l'ennemi est vivant
- `drop_reward(self)` — retourne `self.reward`

---

👉 Correction dans `corrections/04-style-classes.md`
