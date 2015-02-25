(function (exContext) {
    var tFn = function(html, options) {
        var re = /<%(.+?)%>/g,
            reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
            code = 'with(obj) { var r=[];\n',
            cursor = 0,
            result;
        var add = function(line, js) {
            js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        while(match = re.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor));
        code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, '');
        //console.log(html);
        try { result = new Function('obj', code).apply(options, [options]); }
        catch(err) { console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n"); }
        return result;
    };

    var loadTmpl = function(req) {

        var script = document.create("script");
        script.id = "id1";
        script.type = "text/tmpl";
        script.textContent = req.responseText;
        return script;
    }
    exContext.sTE = {
        render: function(dom, tmpl, opts) {
            dom.innerHTML = tFn(tmpl, opts);
        },
        getCompiledTmpl : tFn,
        loadTmpl :loadTmpl
    }
})(this);