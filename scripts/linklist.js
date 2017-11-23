var data = [{
        name: "Twitter Bootstrap",
        url: "https://getbootstrap.com/",
        info: "Eines der meinst genutzten CSS Frameworks.",
        type: "css"
    },
    {
        name: "Foundation",
        url: "https://foundation.zurb.com/",
        info: "Sehr mächtiges und umfangreiches Front-End Framework.",
        type: "css"
    },
    {
        name: "BULMA",
        url: "https://bulma.io/",
        info: "Ein kleines, schönes CSS Framework.",
        type: "css"
    },
    {
        name: "Materialize",
        url: "http://materializecss.com/",
        info: "Ein responsives Front-End-Framework basierend auf Material Design.",
        type: "css"
    },
    {
        name: "Vue.js",
        url: "https://vuejs.org/",
        info: "Sehr schönes JavaScript-Webframework zum Erstellen von Single-Page-Webanwendungen.",
        type: "javascript"
    },
    {
        name: "Material Icons",
        url: "https://material.io/icons/",
        info: "Iconset aus der Google Material Design Linie.",
        type: "icons"
    }

];

var template = "<div class='{{type}}'><h3><a href='{{url}}'>{{title}}</a></h3><p>{{info}}</p></div>";

document.addEventListener("DOMContentLoaded", function(event) {


    // Linklist Simple
    var target = document.querySelector("#linklist");

    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        target.innerHTML += "<div class=\"" + obj.type + "\">";
        target.innerHTML += "<h3><a href=" + obj.url + ">" + obj.name + "</a></h3>";
        target.innerHTML += "<p>" + obj.info + "</p>";
        target.innerHTML += "</div>";
    }

    // Linklist Template
    var target = document.querySelector("#linklistTemplate");

    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var html = template;
        html = html.replace(/{{type}}/, obj.type);
        html = html.replace(/{{title}}/, obj.name);
        html = html.replace(/{{url}}/, obj.url);
        html = html.replace(/{{info}}/, obj.info);

        target.innerHTML += html;
    }

    // Linklist Vue
    var app4 = new Vue({
        el: '#linklistVue',
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    })
});