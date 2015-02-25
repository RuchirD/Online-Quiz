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
            opt.callback.apply(xmlhttp, [xmlhttp]);
        }
    }
    xmlhttp.open(opt.method ? opt.method : "GET", opt.url, true);
    if (opt.contentType) {
       xmlhttp.setRequestHeader("Content-type", opt.contentType);               //"application/json; charset=utf-8"
    }
    xmlhttp.send("content=" + opt.payLoad);
};
