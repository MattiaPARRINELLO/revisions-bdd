# Exercice 10 — Menu complet avec dictionnaire

Écris un programme complet `devices.py` qui gère des appareils avec :

### Fichier : `devices.py`

1. Fonction `open_db()` — connexion à MongoDB, base "devices"
2. Fonction `add_device(db, name, brand, year)` — insère dans "devices"
3. Fonction `list_devices(db)` — affiche tous les appareils
4. Fonction `find_device(db, name)` — cherche un appareil par nom
5. Fonction `main()` — menu avec dictionnaire :
   - 1: Ajouter
   - 2: Lister
   - 3: Chercher
   - 4: Quitter

**Style attendu :** sections, snake_case, 2 lignes vides, early return, dictionnaire pour le menu.

---

👉 Correction dans `corrections/10-style-menu-complet.md`
