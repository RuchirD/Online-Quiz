var util = {};

util.ajax = function (opt) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            opt.callback.apply(xmlhttp, [xmlhttp]);
        }
    }
    xmlhttp.open(opt.method ? opt.method : "GET", opt.url, true);
    xmlhttp.send();
};
