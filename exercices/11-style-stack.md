# Exercice 11 — Stack maison

## Partie A : Explique le code

```python
class Stack:
    def __init__(self):
        self.stack = []

    def empiler(self, valeur):
        self.stack.append(valeur)

    def depiler(self):
        return self.stack.pop()

    def is_empty(self):
        return len(self.stack) == 0
```

1. Que fait `empiler()` ?
2. Que fait `depiler()` ?
3. Pourquoi utiliser `== 0` plutôt que `<= 0` dans `is_empty()` ?

## Partie B : Utilisation

Écris un bout de code qui :
1. Crée une Stack
2. Empile 3 nombres
3. Dépile et affiche chaque élément jusqu'à ce que la pile soit vide

---

👉 Correction dans `corrections/11-style-stack.md`
