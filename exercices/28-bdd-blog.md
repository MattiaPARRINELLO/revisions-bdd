# Exercice 28 — Cas pratique : Système de blog

Tu gères un blog avec MongoDB. Base "blog", collection "posts".

Structure d'un post :
```python
{
    "title": "string",
    "author": "string",
    "content": "string",
    "likes": int,
    "date": "string"     # ex: "2026-05-20"
}
```

Écris :

1. **`create_post(db, title, author, content)`** — crée un post avec likes=0 et la date d'aujourd'hui
2. **`get_posts_by_author(db, author)`** — trouve tous les posts d'un auteur
3. **`like_post(db, title)`** — incrémente les likes d'un post (`$inc`)
4. **`get_popular_posts(db, min_likes)`** — retourne les posts avec likes >= min_likes, triés par likes décroissant
5. **`delete_post(db, title)`** — supprime un post par son titre

---

👉 Correction dans `corrections/28-bdd-blog.md`
