//Accessibility - toggle mobile menu with keyboard
var menutoggle = document.querySelector("#menutoggle")
var menulabel = document.querySelector("#menulabel")
var mobilemenu = document.querySelector("#mobile-menu")

var enterKeyCode = 13
var spaceKeyCode = 32

menulabel.addEventListener("keyup", function (event) {
    if (event.keyCode == enterKeyCode || event.keyCode == spaceKeyCode) {
        var menuOpen = menutoggle.checked

        if (menuOpen) {
            menutoggle.checked = false
        } else {
            menutoggle.checked = true
        }
    }
})
