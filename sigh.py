import numpy as np
from datascience import * 
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')

sighing = Table.read_table('sigh.csv', encoding = 'utf-8').column(0)

pick = np.random.choice(sighing)

print(f'😮‍💨 唉，{pick}！')