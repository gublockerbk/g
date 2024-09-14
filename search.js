const search = document.getElementById("search");

search.addEventListener("input", (event) => {
  for (const game in games.children) {
    let gtext = games.children[game].innerHTML.toLowerCase();
    if (!gtext.includes(search.value.toLowerCase())) {
      games.children[game].style.display = "none";
    } else {
      games.children[game].style.display = "inline";
    }
  }
});
