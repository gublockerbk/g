let games = document.getElementById("games");
let names = []
let oldnames=[]
let links = []

console.log("Sorting games...")
for (const game in games.children) {
    names.push(games.children[game].innerHTML);
    oldnames.push(games.children[game].innerHTML);
    links.push(games.children[game].href);
}

console.log(links);

names.sort();
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