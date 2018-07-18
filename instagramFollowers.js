$(document).ready(function() {
  getUrl();
});

function getUrl() {
  let url = 'https://www.instagram.com/?hl=en'
  $.get(
    url,
      function data {
        search(data)
      )
  );
}

console.log(data)
