
/*if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) != null)
{
  unityInstance.SetFullscreen(1)
}*/
for(i=1;i>0;i++)
{
var set_fs = false;
if(set_fs == false)
{
  while((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height) == false)
  {
    unityInstance.SetFullscreen(1);
    set_fs = true;
  }
}
}
