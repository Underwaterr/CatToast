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
    var hash = (location.hash).replace("#!", "");
    hash = (hash == "" ? "default" : hash);
    return hash;
};

// Get it, son
var getContent = function() {
    xmlhttp.open("GET", "markdown-pages/" + getHash() + ".md", true);
    xmlhttp.send();
};

// Dank
window.onload = getContent;
window.onhashchange = getContent;