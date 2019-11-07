console.log("Hi, welcome to my design universe!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += 'responsive';
  } else {
    x.className = 'navtoggle';
  }
}
