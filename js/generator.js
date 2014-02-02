var adjectivesArray;
var nounsArray;
var endNounsArray;

// Load data from json
$.getJSON("data/data.json", function(json) {
	adjectivesArray = json.adjectives;
	nounsArray = json.nouns;
	endNounsArray = json.endNouns;
    console.log(json); // this will show the info in firebug console
});

// var adjectivesArray = ["Flame proof", "Water resistant", "Wifi enabled", "Vibrating", "Wearable", "Sharkproof", "Flammable", "Organic", "Automatic", "Flying", "Bendable", "Encrypted", "Musical", "Interactive", "Bluetooth enabled", "Edible", "Compact portable", "Solar powered", "Indestructible", "Invisible", "Comfortable imported", "Extra-durable", "Alcoholic", "AI-controlled", "Biodegradable", "High-end adult", "Vajazzled", "Globally shipped", "IT-based", "Cross functional", "Adaptive", "Economically sound", "Enterprise-wide", "End-to-end", "Frictionless", "Future-proof", "Inexpensive", "Ethical", "Low-risk high-yield", "Market-driven", "Interdependent", "Intuitive", "Multidisciplinary", "Open source", "Out of the box", "Plug and play", "Real time", "Standardized", "Sticky", "Transparent", "User friendly", "Handmade artisan", "Anti-spam", "Carved wooden", "Personalised", "Cloud-driven", "Crowd sourced", "Time-saving", "Recycled", "Time-share", "Github for your", "Uber for your", "Air BNB for your", "A cross between Facebook and your", "Linkedin for your", "Remote controlled", "Perpetual motion", "3D printed", "Mobile", "Crowd funded", "Education meets your", "Life-saving", "Self-replicating", "Water saving", "Marketplace for", "Guide service for your", "RFID enabled", "Lubricated"];
// var nounsArray = ["data mining", "deliverables", "whiteboard", "fashion", "robot", "gift service", "toy", "pet", "jewelry", "glasses", "engine", "panties", "plants", "furniture", "legal services", "light bulb", "electronics", "translating service", "cosmetics", "agriculture", "mobile app", "domain registration", "wallet", "smart watch", "car", "bicycle", "exercise equipment", "website", "charging station", "camera", "smartphone", "luggage", "hoverboard", "API", "shoes", "boat", "construction equipment", "growth hacking", "publishing", "gambling", "social media", "space travel", "chauffeur service", "surgery", "network", "ad platform", "iFrame plugin", "flat design"];
// var endNounsArray = ["enabler", "driver", "fabricator", "enhancer", "generator", "incubator", "initiator", "maximiser", "negotiator", "optimizer", "procrastinator", "pursuer", "strategizer", "simplifier", "streamliner", "transitioner", "transformer", "synthesizer", "visualiser", "unit", "tool", "delivery", "based on homeopathic remedies", "that donates to starving children", "repair service", "for your home", "based on real-time feedback from your customers", "for farmers", "for children", "which leverages off your buying power", "that's good for the environment", "which self destructs when compromised", "for your cat", "produced through sustainable sources", "for students", "for backpackers"];

// Return a random value from the array
function randomArray(a) {
return a[Math.floor(Math.random() * a.length)];
}

function sentence() {

	// Check that json has loaded before running generator
	if ((adjectivesArray && nounsArray && endNounsArray) == false) {
		$.getJSON("data/data.json", function(json) {
			adjectivesArray = json.adjectives;
			nounsArray = json.nouns;
			endNounsArray = json.endNouns;
		    console.log(json); // this will show the info in firebug console
		});

		runGenerator();

	} else {
		runGenerator();
	}

	function runGenerator() {

		var adjective = randomArray(adjectivesArray);
		var noun = randomArray(nounsArray);

		function getEndNoun() {
			var endNoun = Math.random();
			if (endNoun < 0.2) {
				return randomArray(endNounsArray);
			} else {
				return "";
			}
		}	

		var endNoun = getEndNoun();

		var output = (adjective + " " + noun + " " + endNoun);

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