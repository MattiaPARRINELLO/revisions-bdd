# Correction Exercice 4 — Classes

## Partie A

```python
class Hero:
    def __init__(self, name, hp, atk):
        self.name = name
        self.hp = hp
        self.atk = atk

    def attack(self, enemy):
        damage = self.atk - enemy.defense
        enemy.take_damage(damage if damage > 0 else 1)

    def is_alive(self):
        return self.hp > 0

    def take_damage(self, amount):
        self.hp -= amount
```

## Partie B

```python
class Enemy:
    def __init__(self, name, hp, atk, defense, reward):
        self.name = name
        self.hp = hp
        self.atk = atk
        self.defense = defense
        self.reward = reward

    def attack(self, hero):
        damage = self.atk - hero.defense
        hero.take_damage(damage if damage > 0 else 1)

    def is_alive(self):
        return self.hp > 0

    def drop_reward(self):
        return self.reward
```
