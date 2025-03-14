
spl=document.getElementById('splash');

var splashes=[
    "GoGaurdian is watching...",
    "Still not blocked.",
    "Don't wake the sleeping pills!",
    "Sponsored by NordVPN!",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Minceraft.",
    "Don't click this.Because it does nothing.",
    "Check the changelog sometimes.",
    "geometry dash 🤓",
    "New Tab",
    "I know you have missing assignments.",
    "For when you're bored in class.",
    "English grade done by ChatGPT and DeepSeek.",
    "Lawsuits sold seperately.",
    "c.ai coming soon!",
    "someone should fix page not found.",
    "Will work for vbucks.",
    "Chromebooks are worth $20.",
    "JERRY!!",
    "Better play with fullscreen mode",
    "The teachers dont know... Or do they? *vsauce theme*",
    "bob man",
    "GET *FREE* ROBUX WITH MY LINK IN THE DESCRIPTION 🤑🤑💰",
    "sigma male 🗿🍷",
    "1.4 GPA activities.",
    "definitely not a scam.",
    "∞ games", 
    "😤😤😤🧐😔😳🫣🤔🫡💀💀💀🤜👀🫧🥛",
    "'Tetris is too easy' - 🤓",
    "Are you excited for testing? Me:🙅‍♂️",
    "The most popular page on this website is the 404 error page",
    "skibidi toilet 🚽👨",
    "#1 game site for freezing chromebooks.",
    "i eat styrofoam for fun.",
    "You should eat uranium.",
    "Dan was here. (still not the developer btw)",
    "https://www.reddit.com/r/teenagers/comments/1alkq3x/boys_are_social_experiments/",
    "The king of no updates (right next to karlson)",
    "Might make good updates sometimes.",
    "Me when I forget this message exists.",
    "Can't even tell what was added anymore.",
    "GTA 6 before game unblocker update",
    "Half Life 3 before game unblocker update",
    "'I did all my work i swear!!' - 1.2934 GPA."
]

function getRandomSplash() {
    return splashes[Math.floor((Math.random()*splashes.length))]
}

spl.innerHTML=getRandomSplash()

