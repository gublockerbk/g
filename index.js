inputs = ""

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve,ms));
}


document.addEventListener("keydown",(e) => {
	inputs+=e.key;
	if (inputs=="gojo") {
		console.log("hollow purple");
		document.body.innerHTML="";
		let img = document.createElement("img");
		img.src="hollowpurple.jpg";
		img.style.width="100%";
		img.style.height="100%";
		document.body.appendChild(img);
		sleep(1000).then(() => { window.location.replace("library/gojobackshots/index.html") });
	}
});
