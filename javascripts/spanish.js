 var DongleTranslator = (function(oldDongleTranslator) {

     var spanish = {
         "my": "mi",
         "very": "muy",
         "elegant": "elegante",
         "mother": "madre",
         "just": "acaba de",
         "served": "servir",
         "us": "nos",
         "noodles": "fideos"
     }

     oldDongleTranslator.translateToSpanish = function() {
         return spanish;
     };

     return oldDongleTranslator;
 })(DongleTranslator || {});