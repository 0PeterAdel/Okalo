from playsound import playsound
import eel

# Start Engine Sound fun
@eel.expose
def playAssistantSound():
    music_dir = "www\\assets\\audio\\start-engine.mp3"
    playsound(music_dir)