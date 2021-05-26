
/*if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) != null)
{
  unityInstance.SetFullscreen(1)
}*/
window.onload = maxWindow;

   function maxWindow() {
       window.moveTo(0, 0);

       if (document.all) {
           top.window.resizeTo(screen.availWidth, screen.availHeight);
       }

       else if (document.layers || document.getElementById) {
           if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
               top.window.outerHeight = screen.availHeight;
               top.window.outerWidth = screen.availWidth;
           }
       }
   }
