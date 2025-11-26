javascript
document.getElementById("support-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Your request has been sent! / Cererea ta a fost trimisă!");
  this.reset();
});

document.getElementById("remote-button").addEventListener("click", function() {
  window.open("https://get.teamviewer.com/techfixsupport", "_blank");
});
