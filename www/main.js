$(document).ready(function () {

    $('.head').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },
    });

    // SiriWave
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 850,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: ".30",
        autostart: true,
      });
    
    // siri-message 
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },
    });

    // MIcBtn Click event
    $("#MIcBtn").click(function () { 
        // Run playAssistantSound
        eel.playAssistantSound();
        // hidden Oval
        $("#Oval").attr("hidden", true);
        // SHow SiriWave
        $("#SiriWave").attr("hidden", false);
 
        eel.takecommand()()
    });
});