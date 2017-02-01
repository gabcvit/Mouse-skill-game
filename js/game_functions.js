
var mainScore = 0;
var squareSize = 100;


function score() {
  updateScoreboard();
  changeBackgroundColor();
  $('.clickable-square').animateCss('rubberBand');

  var newCoordinates = generateRandomCoordinates();
  $(".clickable-square").animate({
    left: newCoordinates[0],
    top: newCoordinates[1],
    width: squareSize,
    height: squareSize
  }, 300, function() {
    // Animation complete.
  });

};

function generateRandomCoordinates() {
  var left = 0;
  var top = 0;

  left = Math.floor((Math.random() * (1200 - squareSize)) + 70);
  top = Math.floor((Math.random() * (700 - squareSize)) + 0);

  return [left, top];
}

function updateScoreboard() {
  mainScore++;
  if(squareSize > 30) {squareSize = squareSize - 1;}

  console.log(squareSize);
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

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
