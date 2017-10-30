(document).ready(function() {
  ("form#game-time").submit(function(event) {
   event.preventDefault();
   var number = parseInt($("input#number").val());
   var result = leapYear(year);
    ("#result").text(result);
  });
});
