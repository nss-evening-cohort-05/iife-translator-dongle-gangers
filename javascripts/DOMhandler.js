// This reference is for the language selector radios
var languageChooser = document.getElementById("radioButtons");

// Up to us to make these connections; no boilerplate
var translateButton = document.getElementById("translateButton");
var translator = ["Wookie", "French", "Korean", "Spanish"];
var translationArray = [];
var outputString = document.getElementById("translatedText");


translateButton.addEventListener("click", function(event) {
		// console.log(languageChooser.children);
	for (var i = 0; i < languageChooser.children.length; i++) {
		// console.log(languageChooser.children[i].checked);
		if (languageChooser.children[i].checked) {
			console.log("the chosen one: ", languageChooser.children[i].className)
			if (languageChooser.children[i].className === "French") {
				translationArray = DongleTranslator.translateToFrench();
				console.log("This should be the French array", translationArray);
			}
		}
	}
});


// if return French then call augmenter that returns French array, 
// concatnate the array, 
// and then write it to DOM