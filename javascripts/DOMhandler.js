// This reference is for the language selector radios
var languageChooser = document.getElementById("radioButtons");

// Up to us to make these connections; no boilerplate
var translateButton = document.getElementById("translateButton");
var translator = ["Wookie", "French", "Korean", "Spanish"];
var translationArray = [];
var outputString = document.getElementById("translatedText");

//***************************************
// function creates output string
// Input Parameter :: Translation Array returned from augmentor function
// RETURNS output string
//***************************************
function concatenateArray(arrayToJoin) {

    var tempStr = "";

    for (var i in arrayToJoin) {
        tempStr += arrayToJoin[i] + " ";
    }
    return tempStr;
};

//***************************************
// function outputs translated string to the DOM
// Input Parameter :: concatenate string from translation array
// OUTPUTS TO DOME
//***************************************
function outputToDOM (str) {
	// console.log("str returned from augmentor, to be parsed :: ", str);
	outputString.innerHTML = str;
}

//***************************************
// Event Listener on <Make It So!> button
//***************************************
translateButton.addEventListener("click", function(event) {
	for (var i = 0; i < languageChooser.children.length; i++) {
		if (languageChooser.children[i].checked) {
// console.log("the chosen one: ", languageChooser.children[i].className)
			if (languageChooser.children[i].className === "French") {
				translationArray = DongleTranslator.translateToFrench();
			}
			if (languageChooser.children[i].className === "Korean") {
				translationArray = DongleTranslator.translateToKorean();
			}
			if (languageChooser.children[i].className === "Spanish") {
				translationArray = DongleTranslator.translateToSpanish();
			}
			if (languageChooser.children[i].className === "Wookie") {
				translationArray = DongleTranslator.translateToWookie();
			}
// console.log("translationArray: ", translationArray);
				outputToDOM(concatenateArray(translationArray));
		}
		}
});





