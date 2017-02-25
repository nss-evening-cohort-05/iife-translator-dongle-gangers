var SandwhichMaker = (function(){
    var totalPrice = 0;

    return {
        getPrice : function(){
            return totalPrice;
        }
    };
})();