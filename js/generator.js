var adjectivesArray;
var nounsArray;
var modifiersArray;

// Load data from json
$.getJSON("data/data.json", function(json) {
	adjectivesArray = json.adjectives;
	nounsArray = json.nouns;
	modifiersArray = json.modifiers;
    console.log(json); // this will show the info in firebug console
});

// Return a random value from the array
function randomArray(a) {
return a[Math.floor(Math.random() * a.length)];
}

function sentence() {

	// Check that json has loaded before running generator
	if ((adjectivesArray && nounsArray && modifiersArray) == false) {
		$.getJSON("data/data.json", function(json) {
			adjectivesArray = json.adjectives;
			nounsArray = json.nouns;
			modifiersArray = json.modifiers;
		    console.log(json); // this will show the info in firebug console
		});

		runGenerator();

	} else {
		runGenerator();
	}

	function runGenerator() {

		var adjective = randomArray(adjectivesArray);
		var noun = randomArray(nounsArray);

		function getmodifier() {
			var modifier = Math.random();
			if (modifier < 0.3) {
				return randomArray(modifiersArray);
			} else {
				return "";
			}
		}	

		var modifier = getmodifier();

		var output = (adjective + " " + noun + " " + modifier);

		$(".element").share({
			text: "I just found my new startup idea: " + output,
			app_id: 1448143845416014,
			background: "#B2D1E5",
			color: "#3C8DC5",
			button_text: "Share this startup idea!",

			facebook: {
			  name: "What's my startup idea?",
			  link: "http://krystalfister.github.io/Startup/",
			  image: "http://krystalfister.github.io/Startup/images/logo.png",
			  caption: "I just found my new startup idea: " + output,
			  text: "Randomly generate ideas for your startup."
			},

			twitter: {
			  text: "I just found my new startup idea: " + output,
			  link: "http://krystalfister.github.io/Startup/"
			},

			gplus: {
				link: "http://krystalfister.github.io/Startup/"
			}
		});


		$("#output").html("<p>"+output+"</p>");
		return output;

	}
}