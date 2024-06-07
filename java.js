// java.js

function handleSubmit() {
    var urlInput = document.querySelector('.urlInput').value.trim();
    
    if (urlInput) {
        fetchAndModify(urlInput);
    } else {
        alert('Please enter a valid URL');
    }
}

function fetchAndModify(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Replace every fifth word with "smurf"
            var modifiedHtml = data.replace(/\b(\w+)\b/g, function(match, word, index) {
                return index % 5 === 4 ? 'smurf' : word;
            });

            // Store the modified HTML in localStorage
            localStorage.setItem('modifiedContent', modifiedHtml);

            // Redirect to the new HTML page
            window.location.href = 'redirected_page.html';
        })
        .catch(error => console.error('Error:', error));
}
