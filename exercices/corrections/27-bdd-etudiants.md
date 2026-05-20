# Correction Exercice 27 — Étudiants

```python
"""Gestion des étudiants"""

def add_student(db, name, age, grade, major):
    students = get_collection(db, "students")
    students.insert_one({
        "name": name,
        "age": age,
        "grade": grade,
        "major": major
    })
    print(f"Étudiant {name} ajouté")


def find_student(db, name):
    students = get_collection(db, "students")
    student = students.find_one({"name": name})

    if student is None:
        print("Étudiant inconnu")
        return None

    print(f"{student['name']} / {student['age']} ans / {student['major']} / {student['grade']}")
    return student


def get_top_students(db, n):
    students = get_collection(db, "students")
    return list(students.find()
                .sort("grade", -1)
                .limit(n))


def average_grade(db, major):
    students = get_collection(db, "students")
    filtered = list(students.find({"major": major}))

    if len(filtered) == 0:
        print(f"Aucun étudiant en {major}")
        return 0

    total = sum(s["grade"] for s in filtered)
    avg = total / len(filtered)
    print(f"Moyenne en {major}: {avg:.2f}")
    return avg
```
