var markdown  = new Remarkable({ html: true });

// Dat AJAX tho
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    var renderedText = markdown.render(xmlhttp.status == 404 ? "# Page Not Found :(" : xmlhttp.responseText);
    document.getElementById("main").innerHTML = markdown.render(renderedText);
    if (typeof(reset) != "undefined")
        reset(getHash(), location.href, getHash());
};

// Fresh
var getHash = function() {
    return (location.hash).replace("#!", "");
};

// Get it, son
var getContent = function() {
    var hash = getHash();
    if (hash !== "" )
    {
        xmlhttp.open("GET", "markdown-pages/" + hash + ".md", true);
        xmlhttp.send();
    }
};

// Dank
window.onload = getContent;
window.onhashchange = getContent;