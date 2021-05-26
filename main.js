function check_keys(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        unityInstance.SetFullscreen(1);
    }
    else if (e.keyCode == '40') {
        unityInstance.SetFullscreen(1);
    }
    else if (e.keyCode == '37') {
       unityInstance.SetFullscreen(1);
    }
    else if (e.keyCode == '39') {
       unityInstance.SetFullscreen(1);
    }
    else
    {
      unityInstance.SetFullscreen(1);
    }

}
