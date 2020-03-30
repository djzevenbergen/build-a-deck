$(document).ready(function () {


  $("#enter").click(function () {


    const numbers = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    const suites = ["Clubs", "Hearts", "Diamonds", "Spades"];

    var finalResult = [];

    suites.forEach(function (suite) {
      finalResult = numbers.map(function (number) {
        return (number + " of " + suite + "<br>");
      });

      $("#list").append(finalResult);

    });

  });
});