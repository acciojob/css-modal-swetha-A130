//your JS code here. If required.
let modal = document.querySelector('.modal');
let btn = document.getElementById('openModal');
let closeBtn = document.querySelector('.close-modal');

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}