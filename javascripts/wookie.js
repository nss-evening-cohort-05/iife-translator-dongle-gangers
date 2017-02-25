var translation = (function(oldDongleTranslator){

	var wookie = {"my": "wrrhwrwwhw", 
				  "very": "raaaaaahhgh",
				  "elegant": "aarrragghuuhw",
				  "mother": "raaaaaahhgh",
				  "just": "huurh",
				  "served": "hnnnhrrhhh",
				  "us": "uughghhhgh",
				  "noodles": "huuguughghg"}
}
	oldDongleTranslator.translateToWookie =function(wookie){
		var translation = ""
		for (var i in wookie) {
			Translation += wookie + " ";
		}
		return translation;
	}

	


 return oldDongleTranslator;
 })(dongleTranslator || {});




// "my very elegant mother just served us noodles"
// Wookie Translation: wrrhwrwwhw raaaaaahhgh aarrragghuuhw raaaaaahhgh huurh hnnnhrrhhh uughghhhgh huuguughghg