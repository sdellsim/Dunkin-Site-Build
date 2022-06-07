$(document).ready(function () {



  // quantity input from https://codepen.io/rkoms/pen/OJbrGKX

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });





  // show modals when accessing through url

  if (window.location.href.indexOf('#cartModal') != -1) {
    $('#cartModal').modal('show');
  }

  else if (window.location.href.indexOf('#signuploginModal') != -1) {
    $('#signuploginModal').modal('show');
  }


  // vertival align modal https://www.tutorialrepublic.com/codelab.php?topic=faq&file=vertically-centering-bootstrap-modal-window

  function alignModal() {
    var modalDialog = $(this).find(".modal-dialog");

    // Applying the top margin on modal to align it vertically center
    modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
  }
  // Align modal when it is displayed
  $(".modal").on("shown.bs.modal", alignModal);

  // Align modal when user resize the window
  $(window).on("resize", function () {
    $(".modal:visible").each(alignModal);
  });


  // show mobile nav callout div only once per session https://itecnote.com/tecnote/jquery-stop-div-from-showing-more-than-once-per-session-or-visit/

    if (!sessionStorage.getItem(window.location) && ($(window).width() < 963)) {
      document.getElementById('calloutmobilenav').style.display = 'block';
    }
    else {
      document.getElementById('calloutmobilenav').style.display = 'none';
    }

    

// end of ducument.ready function
});





