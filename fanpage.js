
$("#videoGrow").on("mouseover", function() {
    $("#videoGrow").animate({height:"+=150px", width:"+=150px"}, "slow");
})

$("#videoGrow").on("mouseout", function() {
    $("#videoGrow").animate({height:"-=100px", width:"-=100px"}, "slow");
})

// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * gagaFactArray.length));
	// We display the fact from the catFactArray that is in the random position we just generated.
	$("#factText").text(gagaFactArray[number])
}) 

// This array holds all of our Grumpy Cat facts!
var gagaFactArray = ["As a Child, She Made her Own Costumes.", "Lady Gaga once told in an interview that she carries a purple teacup and a saucer everywhere she goes. She drinks tea with her mother and carrying it makes her feel at home", "one of her favorite color is Lavinder" , "her fragrance 'Fame' was the first in the world to change color from bottle to mist. it was described as 'the most important inovation in the fragrance industry in the last twenty years'"]


  
