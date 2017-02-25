 var DongleTranslator = (function(oldDongleTranslator){
    var koreanWords = {
    	"my": "나의", 
    	"very": "대단히", 
    	"elegant": "우아한", 
    	"mother": " 어머니", 
    	"just": "다만", 
    	"served": "봉사 한", 
    	"us": "우리", 
    	"noodles": "국수"
    };

    oldDongleTranslator.translateToKorean = function() {
    	return koreanWords;
    };

    return oldDongleTranslator;
})(DongleTranslator || {});