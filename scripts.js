function mostrasub(submenu) {
    for (i = 1; i <= 3; i++) {
        if ((document.getElementById(submenu).style.maxHeight != "150px") && ((submenu) == ('sub' + i))) {
            document.getElementById('sub' + i).style.maxHeight = "150px";
        } else {
            document.getElementById('sub' + i).style.maxHeight = "0px";
        }
    }
}