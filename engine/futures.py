from playsound import playsound
import eel
from engine.command import speak
from engine.config import Assistant_Name
import os

# Start Engine Sound fun
@eel.expose
def playAssistantSound():
    music_dir = "www\\assets\\audio\\start-engine.mp3"
    playsound(music_dir)

def openCommand(query):
    query = query.replace(Assistant_Name, "")
    query = query.replace("open", "")
    query.lower()

    if query!="":
        speak("opening "+query)
        os.system('start '+query)
    else:
        speak("not found, please say again")