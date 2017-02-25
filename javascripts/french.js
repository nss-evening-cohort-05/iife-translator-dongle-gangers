 var DongleTranslator = (function(oldDongleTranslator){
    var frenchWords = {"my": "ma", "very": "très", "elegant": "élégant", "mother": "mère", "just": "à", "served": "sert", "us": "nous", "noodles": "des nouilles"};
    // word order :: ma mère très élégant à seulement nous sert des nouilles

    oldSandWhichMaker.translateTo = function(french){
    	var translation = "";
    	for (var i in frenchWords) {
      		translation += frenchWords;
     	 }
        return translation;
    }

    return oldDongleTranslator;
})(DongleTranslator || {});