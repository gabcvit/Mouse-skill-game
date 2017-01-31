
var mainScore = 0;


function score() {
  updateScoreboard();
  changeBackgroundColor();

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

function changeBackgroundColor() {
  var r = 0;
  var g = 0;
  var b = 0;

  r = Math.floor((Math.random() * 200) + 1);
  g = Math.floor((Math.random() * 200) + 1);
  b = Math.floor((Math.random() * 200) + 1);

  var rgbString = "rgb("+r+","+g+","+b+");"

  console.log(rgbString);

  $("body").animate({
    "backgroundColor": rgbString
  }, 300, function() {
    // Animation complete.
  });

}
