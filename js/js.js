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