var elem = document.getElementsByClassName("webgl-content");
if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
 {
       window.onload = function()
      {
        if (elem.requestFullscreen)
        {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen)
        { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen)
        { /* IE11 */
          elem.msRequestFullscreen();
        }
      }
    }
