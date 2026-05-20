# Correction Exercice 12 — While saisie

## Partie A

```python
def ask_number(max):
    choice = input(f"Choisis un nombre entre 1 et {max} : ")

    while not check_choice(choice, max):
        print("Choix invalide")
        choice = input(f"Choisis un nombre entre 1 et {max} : ")

    return int(choice)


def check_choice(choice, max):
    if str.isdigit(choice):
        return 1 <= int(choice) and int(choice) <= max
    return False
```

## Partie B

```python
def ask_yes_no():
    choice = input("Oui ou Non ? (o/n) : ")

    while choice not in ["o", "n"]:
        print("Veuillez répondre par o ou n")
        choice = input("Oui ou Non ? (o/n) : ")

    return choice
```
