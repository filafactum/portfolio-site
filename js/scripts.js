// hamburger menu
console.log('Hi, welcome to my design universe!')

// toggle menu
function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// back to top button
var btn = $('#button-top')

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show')
  } else {
    btn.removeClass('show')
  }
})

btn.on('click', function(e) {
  e.preventDefault()
  $('html, body').animate({
    scrollTop: 0
  }, '500')
})

// scroll to contact
$('a[href^="#contact"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});
