
var mainScore = 0;


function score() {
  updateScoreboard();

  var newCoordinates = generateRandomCoordinates();
  $(".clickable-square").animate({
    left: newCoordinates[0],
    top: newCoordinates[1]
  }, 300, function() {
    // Animation complete.
  });
};

function generateRandomCoordinates() {
  var left = 0;
  var top = 0;

  left = Math.floor((Math.random() * 1150) + 70);
  top = Math.floor((Math.random() * 650) + 0);

  return [left, top];
}

function updateScoreboard() {
  mainScore++;
  $(".scoreboard h3").html(mainScore);
}
