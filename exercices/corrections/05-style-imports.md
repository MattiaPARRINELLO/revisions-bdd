# Correction Exercice 5 — Imports

## Partie A

```python
import random        # stdlib
import time          # stdlib
from pymongo import MongoClient  # tierce
from models import *    # locale
from utils import *     # locale
from game import *      # locale
```

## Partie B

Ce fichier utilise `time.sleep()` donc il manque `import time`.

Il utilise aussi `team_is_dead()`, `team_attack()`, `monster_attack()` qui viennent probablement de `utils` ou `models`, donc il faut aussi `from utils import *` et éventuellement `from models import *`.

```python
import time
from models import *
from utils import *
```
