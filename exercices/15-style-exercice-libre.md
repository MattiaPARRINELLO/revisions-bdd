# Exercice 15 — Exercice libre : Système de recettes

Créé un petit programme de **gestion de recettes de cuisine** en respectant le style du prof.

## Structure attendue

### Fichier : `models.py`
- Classe `Recipe` avec : `name`, `ingredients` (liste), `prep_time` (int)
- Méthode `add_ingredient(self, ingredient)`
- Méthode `is_fast(self)` — retourne True si prep_time <= 15

### Fichier : `recipes.py`
- Fonction `add_recipe(db, recipe)`
- Fonction `find_recipe(db, name)`
- Fonction `list_recipes(db)`

### Fichier : `main.py`
- Menu avec dictionnaire
- 1: Ajouter  2: Chercher  3: Lister  4: Quitter

### Contraintes
- snake_case, PascalCase, 2 lignes vides
- Sections avec """..."""
- Français pour les commentaires et affichages
- Early return
- Paramètres explicites

---

👉 Pas de correction unique — compare avec les corrections des exercices précédents pour vérifier le style.
