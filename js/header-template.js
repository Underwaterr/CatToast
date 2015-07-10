var headerData = {
    "articles": [
        {
            "title": "Example",
            "ref": "example",
            "date": "January 3rd, 2014",
            "tags": [ "tag", "tag2", "tag3" ]
        },
        {
            "title": "Maestroooo",
            "ref": "blarg",
            "date": "July 4th, 2015",
            "tags": [ "tag", "tag2", "tag3" ]
        },
        {
            "title": "Home :O",
            "ref": "home",
            "date": "July 10th, 2015",
            "tags": [ "tag2", "tag4" ]
        }
    ]
};

var headerSource = document.getElementById("header-template").innerHTML;
var headerTemplate = Handlebars.compile(headerSource);
var headerOutput = headerTemplate(headerData);
document.getElementById("header").innerHTML = headerOutput;