# Exercice 27 — Cas pratique : Gestion d'étudiants

Tu dois créer un programme de **gestion d'étudiants**. La base MongoDB s'appelle "school", collection "students".

Chaque étudiant a la structure :
```python
{
    "name": "string",
    "age": int,
    "grade": float,    # note moyenne
    "major": "string"   # matière principale
}
```

Écris les fonctions :

1. **`add_student(db, name, age, grade, major)`** — ajoute un étudiant
2. **`find_student(db, name)`** — cherche et affiche un étudiant (ou "Inconnu")
3. **`get_top_students(db, n)`** — retourne les n meilleurs étudiants par grade
4. **`average_grade(db, major)`** — calcule la moyenne des notes dans une matière (cherche d'abord tous les étudiants de cette matière, puis calcule la moyenne)

Indice pour average_grade :
```python
students = list(db["students"].find({"major": major}))
total = sum(s["grade"] for s in students)
count = len(students)
```

---

👉 Correction dans `corrections/27-bdd-etudiants.md`
