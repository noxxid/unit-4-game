var randomNumber;
var loss = 0;
var win = 0;
var counter = 0;

var startGame = function () {

    $(".crystals").empty();

    var images = [
        'https://www.thisiscolossal.com/wp-content/uploads/2014/09/8f3e688816b9a185b14d78840310a02e.jpg',
        'https://www.thoughtco.com/thmb/TqQm3tRT4882EvcdDbqaogKDonI=/3609x2727/filters:fill(auto,1)/close-up-of-crystal-stone-glowing-in-darkroom-583919173-56f28e5d3df78ce5f83d7284.jpg',
        'https://bronzeowl.github.io/crystal-collector/assets/images/blue-crystal.jpg',
        'https://estore.eclipse.net.uk/WebRoot/Eclipse/Shops/thecrystalhealer/5470/A117/5364/C383/74EE/0A33/658A/F448/Titanium-quartz-13_m.jpg',
    ]

    randomNumber = Math.floor(Math.random() * 101) + 19;

    $(result).html('<h3>' + "Total to guess: " + randomNumber + '</h3>')

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random,

        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover",
        })

        $(".crystals").append(crystal);
    }
    $("#counter").html('<h3' + "Total: " + counter + '</h3>');
}

startGame();

$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr("data-random"));
    counter += num;

    $("#counter").html('<h3>' + "Total: " + counter + '</h3>');

    if (counter > randomNumber) {
        loss++;
        alert("You lost!");
        $("#loss").html('<h3>' + "Loss: " + loss + '</h3>');
        counter = 0;
        startGame();
    } else if (counter === randomNumber) {
        win++;
        alert("You win!");
        $("#wins").html('<h3>' + "Wins: " + win + '</h3>');
        counter = 0;
        startGame();
    }

})