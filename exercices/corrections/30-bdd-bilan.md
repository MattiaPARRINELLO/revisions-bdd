# Correction Exercice 30 — Bilan

Voici une correction complète du gestionnaire de musique :

```python
from pymongo import MongoClient


"""Base de données"""

def open_db():
    client = MongoClient("mongodb://localhost:27017/")
    return client["music"]


def get_collection(db, name):
    return db[name]


"""Gestion des chansons"""

def add_song(db, title, artist, album, year, duration):
    songs = get_collection(db, "songs")
    songs.insert_one({
        "title": title,
        "artist": artist,
        "album": album,
        "year": year,
        "duration": duration,
        "plays": 0
    })
    print(f"Chanson '{title}' ajoutée")


def search_song(db, title):
    songs = get_collection(db, "songs")
    song = songs.find_one({"title": title})

    if song is None:
        print("Chanson inconnue")
        return None

    print(f"{song['title']} / {song['artist']} / {song['album']} ({song['year']})")
    print(f"Durée: {song['duration']}s / Écoutes: {song['plays']}")
    return song


def get_by_artist(db, artist):
    songs = get_collection(db, "songs")
    results = list(songs.find({"artist": artist}))

    if len(results) == 0:
        print(f"Aucune chanson de {artist}")
        return

    for song in results:
        print(f"{song['title']} / {song['album']} / {song['plays']} écoutes")


def play_song(db, title):
    songs = get_collection(db, "songs")
    songs.update_one(
        {"title": title},
        {"$inc": {"plays": 1}}
    )
    print(f"♪ {title} jouée")


def get_top_played(db, n):
    songs = get_collection(db, "songs")
    top = list(songs.find()
               .sort("plays", -1)
               .limit(n))

    if len(top) == 0:
        print("Aucune chanson")
        return

    for i, song in enumerate(top, 1):
        print(f"{i}. {song['title']} - {song['artist']} ({song['plays']} écoutes)")


def delete_song(db, title):
    songs = get_collection(db, "songs")
    result = songs.delete_one({"title": title})

    if result.deleted_count > 0:
        print(f"Chanson '{title}' supprimée")
    else:
        print(f"Chanson '{title}' introuvable")


"""Menu principal"""

def main():
    db = open_db()

    choices = {
        "1": lambda d: add_song(d,
            input("Titre: "),
            input("Artiste: "),
            input("Album: "),
            int(input("Année: ")),
            int(input("Durée (s): "))
        ),
        "2": lambda d: search_song(d, input("Titre: ")),
        "3": lambda d: get_by_artist(d, input("Artiste: ")),
        "4": lambda d: play_song(d, input("Titre: ")),
        "5": lambda d: get_top_played(d, int(input("Combien: "))),
        "6": lambda d: delete_song(d, input("Titre: ")),
        "7": lambda _: exit(),
    }

    while True:
        print("\n1. Ajouter")
        print("2. Chercher")
        print("3. Par artiste")
        print("4. Jouer")
        print("5. Top écoutes")
        print("6. Supprimer")
        print("7. Quitter")
        choice = input("Votre choix: ")

        if choice in choices:
            choices[choice](db)
        else:
            print("Choix invalide")


main()
```
