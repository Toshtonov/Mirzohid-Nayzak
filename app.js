let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
document.getElementById("searchInput").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase();
    let articles = document.querySelectorAll(".blog-grid");

    articles.forEach(article => {
        let title = article.querySelector("h3").innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            article.style.display = "block"; 
        } else {
            article.style.display = "none"; 
        }
    });
});
