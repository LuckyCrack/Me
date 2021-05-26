if(
  navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i) != null)
{
  var elem = document.getElementsByClassName("webgl-content");
  if (elem.requestFullscreen) 
  {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) 
  { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) 
  { 
    elem.msRequestFullscreen();
  }
}
