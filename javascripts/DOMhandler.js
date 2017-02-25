// Up to us to make these connections; no boilerplate
var translator = ["Wookie", "French", "Korean", "Spanish"];
var translationArray = [];
var outputString = document.getElementById("translatedText");


translator.addEventListener("change", function(event) {

  // Get the selected language from the DOM
  selectedLanguage = event.target.value;

  // get the translation
  // 
  translationArray = DongleTranslator.translateTo(selectedLanguage);

  // outputString.innerHTML = translationArray
  // var translation = "";
    	// for (var i in frenchWords) {
     //  		translation += frenchWords + " ";
     // 	 }
     //    return translation;

}

