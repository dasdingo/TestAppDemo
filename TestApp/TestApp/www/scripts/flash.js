
var ison = 0;
function flash() {
    
    window.plugins.flashlight.available(function (isAvailable) {
        if (isAvailable) {
            
            // switch on
            if (ison == 0) {
                ison = 1;
                window.plugins.flashlight.switchOn(); // success/error callbacks may be passed
            }
            else {
                ison = 0;
                window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
            }
           

        } else {
            alert("Flashlight not available on this device");
        }
    })
}

