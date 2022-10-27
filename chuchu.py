import numpy as np
from datascience import * 
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')

num = np.random.choice(range(0, 20))

print(f'🤫 唉酱听说你cp今天亲亲了{num}次，哇哦！！')