# Correction Exercice 28 — Blog

```python
"""Gestion du blog"""

def create_post(db, title, author, content):
    posts = get_collection(db, "posts")
    posts.insert_one({
        "title": title,
        "author": author,
        "content": content,
        "likes": 0,
        "date": "2026-05-20"
    })
    print(f"Post '{title}' créé")


def get_posts_by_author(db, author):
    posts = get_collection(db, "posts")
    results = list(posts.find({"author": author}))

    if len(results) == 0:
        print(f"Aucun post de {author}")
        return []

    for post in results:
        print(f"{post['title']} - {post['likes']} likes")
    return results


def like_post(db, title):
    posts = get_collection(db, "posts")
    posts.update_one(
        {"title": title},
        {"$inc": {"likes": 1}}
    )
    print(f"Post '{title}' liké")


def get_popular_posts(db, min_likes):
    posts = get_collection(db, "posts")
    return list(posts.find({"likes": {"$gte": min_likes}})
                .sort("likes", -1))


def delete_post(db, title):
    posts = get_collection(db, "posts")
    result = posts.delete_one({"title": title})

    if result.deleted_count > 0:
        print(f"Post '{title}' supprimé")
    else:
        print(f"Post '{title}' introuvable")
```
