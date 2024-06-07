// java.js

function handleSubmit() {
    var url = document.getElementById("urlInput");
    var HTMLcode =  fetchWebpage(url);
    console.log(HTMLcode);
}

function fetchWebpage(url) {
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // or response.text() for plain text
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}