// quantity input from https://codepen.io/rkoms/pen/OJbrGKX

$(document).ready(function() {
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
});


// hamburger menu from https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp

function openNav() {
    document.getElementById("mobileMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
  }


// make addtocart.html#cartModal display the cart modal

$(document).ready(function() {

    if(window.location.href.indexOf('#cartModal') != -1) {
      $('#cartModal').modal('show');
    }

    else if(window.location.href.indexOf('#signuploginModal') != -1) {
      $('#signuploginModal').modal('show');
    }



    
    });

// addedtocart.html add to cart button 


function addtocart() {
  
  document.getElementById('filledcart').style.display = 'block';
  document.getElementById('emptycart').style.display = 'none';

  document.getElementById('filledcart-modal').style.display = 'block';
  document.getElementById('emptycart-modal').style.display = 'none';
  document.getElementById('checkoutbn-modal').style.display = 'block';
  document.getElementById('calloutitemadded').style.display = 'block';


  if ($(window).width() < 664) {
    document.getElementById('mobile-viewcart-bar').style.visibility = 'visible';}
    else {
      document.getElementById('mobile-viewcart-bar').style.visibility = 'hidden';}
    
      location.href='#cart';
      $('#productModal').modal('hide');

}

// delete cart item

function deletecartitem()  {
document.getElementById('filledcart').style.display = 'none';
document.getElementById('emptycart').style.display = 'block';

document.getElementById('filledcart-modal').style.display = 'none';
document.getElementById('emptycart-modal').style.display = 'block';
document.getElementById('checkoutbn-modal').style.display = 'none';

document.getElementById('mobile-viewcart-bar').style.visibility = 'hidden';

}



// vertival align modal https://www.tutorialrepublic.com/codelab.php?topic=faq&file=vertically-centering-bootstrap-modal-window

$(document).ready(function(){
  function alignModal(){
      var modalDialog = $(this).find(".modal-dialog");
      
      // Applying the top margin on modal to align it vertically center
      modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
  }
  // Align modal when it is displayed
  $(".modal").on("shown.bs.modal", alignModal);
  
  // Align modal when user resize the window
  $(window).on("resize", function(){
      $(".modal:visible").each(alignModal);
  });   
});


// show mobile nav callout div only once per session https://itecnote.com/tecnote/jquery-stop-div-from-showing-more-than-once-per-session-or-visit/

//On user coming to page:
//Check localStorage on each page visit, if it's null, show your div
if ((!localStorage.getItem("visited")) && ($(window).width() < 963))  {
  //show the div
  document.getElementById("calloutmobilenav").style.display = 'block'; 

  //Set the key
  localStorage.setItem("visited", "true");

}

//clear localStorage on tab close
window.onbeforeunload = function() {
  localStorage.removeItem("visited");
};