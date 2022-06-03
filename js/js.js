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
  location.href='#cart';
  $('#productModal').modal('hide');
  document.getElementById('filledcart').style.display = 'block';
  document.getElementById('emptycart').style.display = 'none';

  document.getElementById('filledcart-modal').style.display = 'block';
  document.getElementById('emptycart-modal').style.display = 'none';
  document.getElementById('checkoutbn-modal').style.display = 'block';
  document.getElementById('calloutitemadded').style.display = 'block';

 





  if ($(window).width() < 664) {
    document.getElementById('mobile-viewcart-bar').style.visibility = 'visible'; }
    else {
      document.getElementById('mobile-viewcart-bar').style.visibility = 'hidden';}
    


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



