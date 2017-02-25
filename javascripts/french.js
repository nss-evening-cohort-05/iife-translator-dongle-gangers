 var DongleTranslator = (function(oldDongleTranslator){
    var frenchWords = {"my": "ma", "very": "très", "elegant": "élégant", "mother": "mère", "just": "à", "served": "sert", "us": "nous", "noodles": "des nouilles"};
    // word order :: ma mère très élégant à seulement nous sert des nouilles

    oldDongleTranslator.translateToFrench = function(){

     return frenchWords;
    }

    return oldDongleTranslator;
})(DongleTranslator || {});