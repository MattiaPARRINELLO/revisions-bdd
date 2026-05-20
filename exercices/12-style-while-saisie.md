# Exercice 12 — Validation de saisie avec while

## Partie A : Complète

Complète la fonction de validation :

```python
def ask_number(max):
    choice = input(f"Choisis un nombre entre 1 et {max} : ")
    
    # Tant que le choix n'est pas valide...
    while ... :
        print("Choix invalide")
        choice = input(...)
    
    return int(choice)


def check_choice(choice, max):
    # Retourne True si choice est un chiffre ET entre 1 et max
    ...
```

## Partie B : Écris une validation

Écris une fonction `ask_yes_no()` qui demande "Oui ou Non ?" et boucle tant que la réponse n'est pas "o" ou "n".

---

👉 Correction dans `corrections/12-style-while-saisie.md`
