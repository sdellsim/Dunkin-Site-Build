

// close nav callout

function closeCalloutmobilenav() {
    document.getElementById('calloutmobilenav').style.display = 'none';
    sessionStorage.setItem(window.location, true);
  }
  
  
  // hamburger menu from https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
  
  function openNav() {
    document.getElementById("mobileMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mobileMenu").style.width = "0";
  }
  
  
  // addedtocart.html add to cart button 
  
  function addtocart() {
    document.getElementById('filledcart').style.display = 'block';
    document.getElementById('emptycart').style.display = 'none';
    document.getElementById('filledcart-modal').style.display = 'block';
    document.getElementById('emptycart-modal').style.display = 'none';
    document.getElementById('checkoutbn-modal').style.display = 'block';
    document.getElementById('calloutitemadded').style.display = 'block';
  
    if ($(window).width() < 664) {
      document.getElementById('mobile-viewcart-bar').style.visibility = 'visible';
    }
    else {
      document.getElementById('mobile-viewcart-bar').style.visibility = 'hidden';
    }
  
    location.href = '#cart';
    $('#productModal').modal('hide');
  
  }
  
  // delete cart item
  
  function deletecartitem() {
    document.getElementById('filledcart').style.display = 'none';
    document.getElementById('emptycart').style.display = 'block';
    document.getElementById('filledcart-modal').style.display = 'none';
    document.getElementById('emptycart-modal').style.display = 'block';
    document.getElementById('checkoutbn-modal').style.display = 'none';
    document.getElementById('mobile-viewcart-bar').style.visibility = 'hidden';
  
  }
  
  // guest checkout
  function guestCheckout() {
      document.getElementById('loginsignup').style.display = 'none';
      document.getElementById('guestcheckout').style.display = 'block';
    }
  
    function mguestCheckout() {
      document.getElementById('m-loginsignup').style.display = 'none';
      document.getElementById('m-guestcheckout').style.display = 'block';   
    }
  
  // login sign up checkout
   function loginsignuptCheckout() {
    document.getElementById('loginsignup').style.display = 'block';
    document.getElementById('loginfields').style.display = 'none';  
    document.getElementById('signupfields').style.display = 'none';  
    document.getElementById('loginsignup').reset();
    document.getElementById('guestcheckout').style.display = 'none';
  }
  
  function mloginsignuptCheckout() {
    document.getElementById('m-loginsignup').style.display = 'block';
    document.getElementById('m-loginfields').style.display = 'none';  
    document.getElementById('m-signupfields').style.display = 'none';  
    document.getElementById('m-loginsignup').reset();
    document.getElementById('m-guestcheckout').style.display = 'none';
  }