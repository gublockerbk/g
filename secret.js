inputs = ""

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
	}
});
