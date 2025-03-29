
function requery() {
    document.querySelectorAll("#games a").forEach(link => {
        link.addEventListener("mouseover", function() {
            this.dataset.originalText = this.textContent; // Store original text
            this.textContent = "April Fools!";
        });
    
        link.addEventListener("mouseout", function() {
            this.textContent = this.dataset.originalText; // Restore original text
        });
    })
}

requery()
setInterval(requery,3000);