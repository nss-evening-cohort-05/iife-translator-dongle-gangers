
// This reference is for the language selector radios
var languageChooser = document.getElementById("radioButtons");

// Up to us to make these connections; no boilerplate
var translateButton = document.getElementById("translateButton");
var translator = ["Wookie", "French", "Korean", "Spanish"];
var translationArray = [];
var outputString = document.getElementById("translatedText");
var voicePlay = document.getElementById("audioPlay");

function showPicOnPlay() {
	voicePlay.innerHTML = `<img src="readingrainbow.gif" alt="Random Images">`
};

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

	outputString.innerHTML = str;
	voicePlay.innerHTML = `<input onclick='responsiveVoice.speak("${str}");' type='button' value=' 🔊 Play' class='audioplay' id='picOnPlayButton' />`

	var picOnPlay = document.getElementById("picOnPlayButton")
	picOnPlay.addEventListener("click", showPicOnPlay);
	
};


//***************************************
// Event Listener on <Make It So!> button
//***************************************
translateButton.addEventListener("click", function(event) {

	var translated = false;
	for (var i = 0; i < languageChooser.children.length; i++) {
		
		if (languageChooser.children[i].checked) {

			if (languageChooser.children[i].className === "French") {
				translationArray = DongleTranslator.translateToFrench();
				translated = true;
			}
			if (languageChooser.children[i].className === "Korean") {
				translationArray = DongleTranslator.translateToKorean();
				translated = true;
			}
			if (languageChooser.children[i].className === "Spanish") {
				translationArray = DongleTranslator.translateToSpanish();
				translated = true;
			}
			if (languageChooser.children[i].className === "Wookie") {
				translationArray = DongleTranslator.translateToWookie();
				translated = true;
			}

				outputToDOM(concatenateArray(translationArray));
		}
	}

	if (!translated) {
		alert("You have to choose a language for translation!");
	}
});