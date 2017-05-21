(function(){
    var target = document.querySelectorAll("a.card");
    for (i = 0; i< target.length; i++) {
        target[i].href = target[i].href.replace(/%20/,"-");
    }
})();