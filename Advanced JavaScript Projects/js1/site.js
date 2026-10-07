try {
    document.getElementById("page-title").innerText = document.title;
} catch {

}
document.title = document.title + " | " + window.location.hostname;
