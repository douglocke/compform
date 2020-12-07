injectInterface();

document.getElementById("title").textContent = generateTitle();
document.getElementById("subtitle").textContent = generateSubtitle();

function generateTitle() {
	var name_prefixes = ["Aunt", "Grandma", "Momma", "Sister","Big Sister", "Little Sister"];
	var names = ["Jessica", "Hannah", "Claire", "Elizabeth"];
	var food_adjectives = ["Hot", "Charred", "Burned", "Carmelized", "Cold", "Toasted", "Boiled", "Fried", "Cooked", "Slightly raw", "Singed", "Raw", "Room temperature", "Well-done", "Overcooked"];
	var primary_nouns = ["Oatmeal", "Cereal", "Pancakes", "Eggs", "Grits", "Flapjacks","French Toast", "Juice", "Waffles", "Yoghurt"];
	var adjectives = ["Delicious", "Delightful", "Almond Flavored", "Crusty", "Soft", "Savory", "Delectable", "Most-wanted", "Best loved", "Unique", "Satisfying"];
	var secondary_nouns = ["Meal" , "Treat", "Sandwich", "Breakfast", "Plate", "Experience"];

	var name_prefix = sample(name_prefixes);
	var primary_noun = sample(primary_nouns);
	var adjective = sample(adjectives);
	var food_adjective = sample(food_adjectives);
	var secondary_noun = sample(secondary_nouns);
	var name = sample(names);

	var title = "";
	if (Math.random() < 0.5) {
		title = `${name_prefix} ${name}'s ${adjective} ${primary_noun}`;
	}
	else {
		title = `The ${adjective} ${food_adjective} ${primary_noun} of ${name_prefix} ${name}`;
	}

	return title;
}

function generateSubtitle() {
	var adjectives = ["Delectable", "Best loved", "Morning", "Break of Dawn", "Early Rising", "Incredible", "Curious", "Unique", "Satisfying"];
	var meal_nouns = ["Meal" , "Feast", "Morsel", "Bite", "Treat", "Breakfast", "Plate", "Breakfast Experience"];

	var adjective = sample(adjectives);
	var meal = sample(meal_nouns);
	var subtitle = `A  ${adjective}  ${meal}`;

	return subtitle;
}


function sample(array) {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}




function injectInterface() {

	document.body.insertAdjacentHTML('beforeend', `
<style type="text/css">
		@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:300,700');
		body {
			text-align: center;
			font-family: 'Libre Baskerville', sans-serif;
		}
		.wrap {
			display: table;
			padding: 50px;
			margin: 50px auto;
			text-align: center;
		}
		#title {
			font-size: 30px;
			font-weight: bold;
			line-height: .9em;

		}
		#subtitle {
			margin-top: .75em;
			font-weight: 300;
			font-size: 25px;
			font-weight: normal;
		}
	</style>
	<div class="wrap">
		<div id="title">Title</div>
		<div id="subtitle">Subtitle</div>
	</div>
`);
}
