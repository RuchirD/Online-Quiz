function setAns(el) {
    data[count].selectedAns = el.dataset.ansid;
}
function next() {
    if (count < data.length - 1) {
        sTE.render(el, tmpl, data[++count]);
    }
}
function prev() {
    if (count > 0) {
        sTE.render(el, tmpl, data[--count]);
    }
}
function submit() {
    util.ajax({
        method: "POST",
        url: "server/api.php?submit=true",
        payLoad: JSON.stringify(data),
        contentType: "application/x-www-form-urlencoded",
        callback: function (req) {
            var score = JSON.parse(req.responseText).Score;
            el.innerHTML = "<h2> You Scored "+ score * 10 +" out of "+ data.length * 10+"</h2>"
        }
    });
}

var el = document.querySelector("#tmpTest");
var tmpl, data, count = 0,total;
util.ajax({
    method: "GET",
    url: "tmpl/ques.tmpl",
    callback: function (req) {
        tmpl = req.responseText;
    }
});

util.ajax({
    method: "GET",
    url: "server/api.php?all=true",
    callback: function (req) {
        data = JSON.parse(req.responseText);
        total = data[0];
        data = data[1];
        sTE.render(el, tmpl, data[0]);
    }
});