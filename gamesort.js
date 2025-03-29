let games = document.getElementById("games");
let names = []
let oldnames=[]
let links = []
function randomShuffle() {
    names=[]
    oldnames=[]
    links=[]

    console.log("Sorting games...")
    for (const game in games.children) {
        names.push(games.children[game].innerHTML);
        oldnames.push(games.children[game].innerHTML);
        links.push(games.children[game].href);
    }

    console.log(links);

    // names.sort();

    for (let i = names.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]]; // Swap elements
    }

    console.log("games:")
    let i = 0;
    games.innerHTML="";

    names = names.filter(function(element) {
        return element !== undefined; 
    });

    while (i < names.length) {
        console.log(links[oldnames.indexOf(names[i])])
        let a = document.createElement("a");
        a.className="game"
        a.href=links[oldnames.indexOf(names[i])];
        a.innerHTML=names[i];
        games.append(a);
        i++
    }
}

randomShuffle();

setInterval(randomShuffle,3000);