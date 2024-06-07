// java.js

function handleSubmit(url) {
    var url = topFrame.document.getElementById("urlInput").value;
    fetchWebpage(url);
    console.log("Url ===" + url);

}

function fetchWebpage(url) {
    fetch("https://smurfalizer.brorsanemil.workers.dev/smurfalize?url="+url)
    .then(handleResponse)
    .then(html => {
        console.log("HTMLkod " + html);
        updateMainContent(html);
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

function updateMainContent(html) {
    // Get the main element
    //var mainElement = document.querySelector('body');

    // Set the inner HTML of the main element to the fetched HTML
    //mainElement.innerHTML = html;
    mainFrame.document.body.innerHtml = html;
}