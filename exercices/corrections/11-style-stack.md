# Correction Exercice 11 — Stack

## Partie A

1. `empiler()` ajoute une valeur au sommet de la pile (push)
2. `depiler()` retire et retourne la valeur au sommet de la pile (pop)
3. `is_empty()` avec `== 0` est plus précis : une pile vide a exactement 0 éléments. `<= 0` pourrait masquer une erreur (une pile ne devrait jamais avoir une taille négative)

## Partie B

```python
pile = Stack()
pile.empiler(10)
pile.empiler(20)
pile.empiler(30)

while not pile.is_empty():
    valeur = pile.depiler()
    print(valeur)
```

Affiche :
```
30
20
10
```
