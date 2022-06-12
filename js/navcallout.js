
  $(document).ready(function () {
  
  // show mobile nav callout div only once per session https://itecnote.com/tecnote/jquery-stop-div-from-showing-more-than-once-per-session-or-visit/

  if (!sessionStorage.getItem(window.location) && ($(window).width() < 963)) {
    document.getElementById('calloutmobilenav').style.display = 'block';
  }
  else {
    document.getElementById('calloutmobilenav').style.display = 'none';
  }

  
});