$(document).ready(onReady);

function onReady() {
  console.log('Hi from jQuery!');
  // When we get to this function, I want to add things to the webpage.
  $('#js-container').append(`
    <div class="box border-red"></div>
    <div class="box border-green"></div>
  `);
}
