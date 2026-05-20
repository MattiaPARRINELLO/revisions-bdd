# Exercice 30 — Exercice bilan : Gestionnaire de musique

**Objectif :** Créer un programme complet de gestion de playlist musicale.

## Base de données
- Base : `"music"`
- Collection : `"songs"`

Structure d'une chanson :
```python
{
    "title": "string",
    "artist": "string",
    "album": "string",
    "year": int,
    "plays": int,
    "duration": int  # en secondes
}
```

## Fonctions à écrire

1. **`open_db()`** — connexion à MongoDB, retourne la base "music"

2. **`add_song(db, title, artist, album, year, duration)`** — ajoute une chanson avec `plays=0`

3. **`search_song(db, title)`** — cherche une chanson et affiche ses infos (ou "Chanson inconnue")

4. **`get_by_artist(db, artist)`** — liste toutes les chansons d'un artiste

5. **`play_song(db, title)`** — incrémente le compteur `plays` d'une chanson

6. **`get_top_played(db, n)`** — retourne les n chansons les plus jouées

7. **`delete_song(db, title)`** — supprime une chanson

8. **`main()`** — menu avec dictionnaire :
   - 1: Ajouter  2: Chercher  3: Par artiste  4: Jouer  5: Top  6: Supprimer  7: Quitter

## Contraintes de style
- snake_case, PascalCase, 2 lignes vides
- Sections avec """..."""
- Français pour les commentaires et affichages
- Early return
- Dictionnaire pour le menu

---

👉 C'est l'exercice le plus complet. Compare avec les corrections précédentes pour vérifier ton style.
