import os
import eel
from engine.futures import *

eel.init("www")

# Start engine sound fun
playAssistantSound()

# open browser
os.system('start msedge.exe --app="http://localhost:8000/index.html" ')

eel.start('index.html', mode=None, host='localhost', block=True)