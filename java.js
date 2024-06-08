function handleSubmit(url) {
    var url = document.getElementById("urlInput").value;
    console.log("Url ===" + url);
    window.location.href = "https://smurfalizer.brorsanemil.workers.dev/smurfalize?url="+url
}
