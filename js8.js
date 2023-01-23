var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

function autocomplete(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(a);
		for (i = 0; i < arr.length; i++) {
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				b = document.createElement("DIV");
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				b.addEventListener("click", function(e) {
					inp.value = this.getElementsByTagName("input")[0].value;
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) {
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			e.preventDefault();
			if (currentFocus > -1) {
				if (x) x[currentFocus].click();
			}
		}
	});

	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		x[currentFocus].classList.add("autocomplete-active");
	}

	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}

	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	document.addEventListener("click", function(e) {
		closeAllLists(e.target);
	});
}

function changeStyle() {
	var element = document.getElementById("initial");
	element.style.display = "none";
	var element = document.getElementById("search");
	element.style.display = "block";
}

function setterI() {
	document.getElementById("myInput").value = "India";
	search();
}
function setterU() {
	document.getElementById("myInput").value = "Ukraine";
	search();
}
function setterA() {
	document.getElementById("myInput").value = "United States of America";
	search();
}
function setterR() {
	document.getElementById("myInput").value = "Russia";
	search();
}

function search() {
	var key = document.getElementById("myInput").value;
	if (key.toUpperCase() == "INDIA") {
		document.getElementById("title").innerHTML = "<img src=\"a/india.png\" style=\"width:50px; height:50px;\"></img>  India";
		document.getElementById("image").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/India\" target=\"_blank\"><img class=\"img\" src=\"https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg\" style=\"width:100%; height:400px;\"></a>"
		document.getElementById("info").innerHTML = "India, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia. The nation's capital city is New Delhi."
		document.getElementById("link").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/India\" target=\"_blank\"><button class=\"button\"> <img src=\"a/wikipedia.png\" style=\"width:30px; height:30px;\"></img> <b><sup>Get Info</sup></b> </button></a>"
		changeStyle();
	}
	if (key.toUpperCase() == "UNITED STATES OF AMERICA") {
		document.getElementById("title").innerHTML = "<img src=\"a/america.png\" style=\"width:50px; height:50px;\"></img>  United States of America";
		document.getElementById("image").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/United_States\" target=\"_blank\"><img class=\"img\" src=\"https://cdn.eventegg.com//images/travel/3/66/new-york-city-cityscape.jpg\" style=\"width:100%; height:400px;\"></a>"
		document.getElementById("info").innerHTML = "The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a transcontinental country located primarily in North America. It consists of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands, and 326 Indian reservations. It is the third-largest country by both land and total area. The United States shares land borders with Canada to its north and with Mexico to its south. It has maritime borders with the Bahamas, Cuba, Russia, and other nations. With a population of over 331 million, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city and financial center is New York City."
		document.getElementById("link").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/United_States\" target=\"_blank\"><button class=\"button\"> <img src=\"a/wikipedia.png\" style=\"width:30px; height:30px;\"></img> <b><sup>Get Info</sup></b> </button></a>"
		changeStyle();
	}
	if (key.toUpperCase() == "UKRAINE") {
		document.getElementById("title").innerHTML = "<img src=\"a/ukraine.png\" style=\"width:50px; height:50px;\"></img>  UKRAINE";
		document.getElementById("image").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Ukraine\" target=\"_blank\"><img class=\"img\" src=\"https://destinations.com.ua/storage/crop/articles/avatar_494_max.jpg\" style=\"width:100%; height:400px;\"></a>"
		document.getElementById("info").innerHTML = "Ukraine (Ukrainian: Україна, romanized: Ukraïna), is a country in Eastern Europe. It is the second-largest European country after Russia, which it borders to the east and northeast. Ukraine covers approximately 600,000 square kilometres (230,000 sq mi). Prior to the ongoing Russo-Ukrainian War, it was the eighth-most populous country in Europe, with a population of around 41 million people. It is also bordered by Belarus to the north; by Poland, Slovakia, and Hungary to the west; and by Romania and Moldova to the southwest; with a coastline along the Black Sea and the Sea of Azov to the south and southeast. Kyiv is the nation's capital and largest city. The country's national language is Ukrainian, and most people are also fluent in Russian."
		document.getElementById("link").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Ukraine\" target=\"_blank\"><button class=\"button\"> <img src=\"a/wikipedia.png\" style=\"width:30px; height:30px;\"></img> <b><sup>Get Info</sup></b> </button></a>"
		changeStyle();
	}
	if (key.toUpperCase() == "RUSSIA") {
		document.getElementById("title").innerHTML = "<img src=\"a/russia.png\" style=\"width:50px; height:50px;\"></img>  RUSSIA";
		document.getElementById("image").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Russia\" target=\"_blank\"><img class=\"img\" src=\"https://www.planetware.com/wpimages/2019/10/russia-best-places-to-visit-st-petersburg.jpg\" style=\"width:100%; height:400px;\"></a>"
		document.getElementById("info").innerHTML = "Russia (Russian: Россия, tr. Rossiya, pronounced [rɐˈsʲijə]) or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world, covering over 17,098,246 square kilometres (6,601,670 sq mi), and encompassing one-eighth of Earth's inhabitable landmass. Russia extends across eleven time zones sharing land boundaries with fourteen countries, more than any other country but China. It is the ninth-most populous country in the world and the most populous country in Europe, with a population of 146 million. The country's capital and largest city is Moscow, the largest city entirely within Europe. Saint Petersburg is Russia's cultural centre and second-largest city. Other major urban areas include Novosibirsk, Yekaterinburg, Nizhny Novgorod and Kazan."
		document.getElementById("link").innerHTML = "<a href=\"https://en.wikipedia.org/wiki/Russia\" target=\"_blank\"><button class=\"button\"> <img src=\"a/wikipedia.png\" style=\"width:30px; height:30px;\"></img> <b><sup>Get Info</sup></b> </button></a>"
		changeStyle();
	}
}