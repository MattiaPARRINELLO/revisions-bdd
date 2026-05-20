# Correction Exercice 10 — Menu complet

```python
from pymongo import MongoClient


"""Base de données"""

def open_db():
    client = MongoClient("mongodb://localhost:27017/")
    return client["devices"]


def get_collection(db, name):
    return db[name]


"""Gestion des appareils"""

def add_device(db, name, brand, year):
    devices = get_collection(db, "devices")
    devices.insert_one({"name": name, "brand": brand, "year": year})
    print(f"Appareil {name} ajouté")


def list_devices(db):
    devices = get_collection(db, "devices")
    all_devices = list(devices.find())

    if len(all_devices) == 0:
        print("Aucun appareil")
        return

    for device in all_devices:
        print(f"{device['name']} / {device['brand']} / {device['year']}")


def find_device(db, name):
    devices = get_collection(db, "devices")
    device = devices.find_one({"name": name})

    if device is None:
        print("Appareil non trouvé")
        return None

    print(f"{device['name']} / {device['brand']} / {device['year']}")
    return device


"""Menu principal"""

def main():
    db = open_db()

    choices = {
        "1": lambda d: add_device(d,
            input("Nom: "),
            input("Marque: "),
            int(input("Année: "))
        ),
        "2": lambda d: list_devices(d),
        "3": lambda d: find_device(d, input("Nom: ")),
        "4": lambda _: exit(),
    }

    while True:
        print("\n1. Ajouter")
        print("2. Lister")
        print("3. Chercher")
        print("4. Quitter")
        choice = input("Votre choix: ")

        if choice in choices:
            choices[choice](db)
        else:
            print("Choix invalide")


main()
```
