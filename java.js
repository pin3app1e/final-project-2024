// java.js

function handleSubmit() {
    var url = document.getElementById("urlInput").value;
    var HTMLcode =  fetchWebpage(url);
    console.log("Url ===" + url);
    console.log("HTMLkod " + HTMLcode);
}

function fetchWebpage(url) {
    fetch(url)
    .then(handleResponse)
    .then(html => {
        return(html);
    })
    .catch(error => {
        return(error);
    });
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text(); // Returnerar HTML som text
}

