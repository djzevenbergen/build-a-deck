$(document).ready(function () {


  $("#enter").click(function () {


    const numbers = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    const suites = ["Clubs", "Hearts", "Diamonds", "Spades"];

    const finalResult = [];

    suites.forEach(function (suite) {
      newNumbers = numbers.map(function (number) {
        return (number + " of " + suite +);
      });
      finalResult.push(newNumbers);
    });


    $("#list").removeClass("hide");

    finalResult.forEach(function (result) {
      $("#list").append("<p>" + result + "</p>" + "<br>");

    });

    //alert(finalResult);
  });
});