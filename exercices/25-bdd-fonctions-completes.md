# Exercice 25 — Fonctions BDD complètes

Écris les fonctions suivantes en respectant le style du prof :

1. **`add_item_to_inventory(db, username, item)`** — insère un document dans la collection "inventory" avec `{"username": username, "item": item}`

2. **`get_inventory(db, username)`** — récupère la liste des items d'un joueur, retourne une liste vide si aucun item

3. **`update_score(db, username, points)`** — ajoute des points au score avec `$inc`

4. **`display_inventory(db, username)`** — récupère et affiche l'inventaire (appelle `get_inventory`). Si vide, affiche "Inventaire vide"

Chaque fonction doit avoir le bon espacement, snake_case, early return, etc.

---

👉 Correction dans `corrections/25-bdd-fonctions-completes.md`
