var el = document.querySelector("#tmpTest");
document.querySelector("#form-submit").onclick = submit;
function submit(e) {
    var q = document.querySelector("#form-ques").value,
        a = document.querySelector("#form-ans").value.split(";"),
        c = document.querySelector("#form-correct").value;

    var data = {
        "ques": q,
        "ans": a,
        "correctans": c
    };
    util.ajax({
        method: "POST",
        url: "server/api.php?admin=true",
        payLoad: JSON.stringify(data),
        contentType: "application/x-www-form-urlencoded",
        callback: function (req) {
            var result = JSON.parse(req.responseText).result;
            el.innerHTML = "<h2> Result : " + (result ? "Success :)" : "Insert Failed! :(" ) + "</h2>";
        }
    });
}