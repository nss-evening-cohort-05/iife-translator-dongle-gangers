 var SandwhichMaker = (function(oldSandWhichMaker){
    var meatz = {"cat": 25.50, "chicken": 0.50, "ham": 1.00}

    oldSandWhichMaker.getMeatz = function(){
        return meatz;
    };

    //input "cat"  ===> 25.50
    oldSandWhichMaker.getMeatPrice = function(meat){
        return meatz[meat]
    }

    return oldSandWhichMaker;
})(SandwhichMaker || {});