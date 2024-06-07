// java.js

function handleSubmit() {
    var url = document.getElementById("urlInput").value;
    var HTMLcode =  fetchWebpage(url);
    console.log("Url ===" + url);

}

function fetchWebpage(url) {
    fetch(url)
    .then(handleResponse)
    .then(html => {
        console.log("HTMLkod " + html);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text(); // Returnerar HTML som text
}

