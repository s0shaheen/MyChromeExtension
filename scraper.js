$(document).ready(function() {
  getUrl();
});

function getUrl() {
  //space for condition url
  let url = 'https://www.google.com/search?q=weather';
  $.get(
      url,
      //{paramOne : 1, paramX : 'abc'},
      function(data) {
         // alert('page content: ' + data);
         search(data)
      }
  );
}

function search(data) {
  // console.log(data)
  // $(data).find(#wob_dc);
  // alert($(data).find("wob_dc").length );
  // alert($(data).find(".wob_dc").length );
  let condition = data.split('wob_dc')[4].split('">')[1].split('</span>')[0];
  document.getElementById("condition").innerHTML = condition

  // alert('elements' + Object.keys(elements) );
}
