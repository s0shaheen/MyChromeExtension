$(document).ready(function() {
  generateMessage();
});

function generateMessage() {
var message = [
  "Life has many ways of testing a person’s will, either by having nothing happen at all or by having everything happen all at once.",
  "If opportunity doesn’t knock, build a door.",
  "Success consists of going from failure to failure without loss of enthusiasm.",
  "If you can dream it, then you can achieve it. You will get all you want in life if you help enough other people get what they want.",
  "We don’t see things as they are, we see them as we are.",
  "Learning is a gift. Even when pain is your teacher.",
  "If you want light to come into your life, you need to stand where it is shining."
];

  var randomNumber = Math.floor(Math.random() * 6);
  document.getElementById("msg").innerHTML = message[randomNumber];
}
