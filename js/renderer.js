// Renderer grabs the article JSON and is called to render both the nav & main page templates
var renderer = function(templateId, targetId) {
    // First get that JSON of all the articles!
    var request = new XMLHttpRequest();
    request.open('GET', 'js/articles.json', true);
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Now process the template with the JSON object
            var data = JSON.parse(this.response);
            var source = document.getElementById(templateId).innerHTML;
            var template = Handlebars.compile(source);
            document.getElementById(targetId).innerHTML = template(data);
        }
    };
    request.send();
};

// Always render the navigation
renderer("header-template", "header");

// Sometimes render the main page
if (document.getElementById("index-template") !== null) {
    renderer("index-template", "main");
}