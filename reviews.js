const reviews = [
  {
    name: "jonkler",
    title: "why so serious???",
    review: "gave me a lore reason",
  },
  {
    name: "Dan",
    title: "wow great",
    review: "Wow what a fun site (i am not a developer)",
  },
  {
    name: "kids in a basement",
    title: "help",
    review: "help im stuck in the developers basement :(",
  },
  {
    name: "user2828172733618292",
    title: "ouchy",
    review: "this website gave me testicular torsion",
  },
  {
    name: "c.ai addict",
    title: "ADD C.AI",
    review: "PLEASE I BEG OF YOU ADD CHARACTER AI",
  },
  {
    name: "sigma male",
    title: "super helpful webiste",
    review:
      "after using this website for 2 seconds my aura increased by 20 thousand and i grew big muscles and got W rizz",
  },
  {
    name: "monkey",
    title: "wah wah wah bad",
    review: "Gam Sight is very hahrd 2 see :eyes: mak beder!!1!1!!!",
  },
  {"name": "skibidi44","title":"from beta to sigma","review":"me before website: duhh duhh me after website: *says the entire dictionary and several fun facts from memory* :sigma: :Moyai: :wineglass:"},
  {
    name: "sigma",
    title: "wow peak",
    review: "Diddy oils up here",
  },
  {
    name: "🤓",
    title: "wah wah no science :(",
    review: "this website made me wanna fire my science teacher",
  },
  {
    name: "Dr. Foreman",
    title: "this vexes me",
    review: "This vexes me.",
  },
  {
    name: "Nerd",
    title: "work",
    review: "0/10!!! THIS WEBSITE MADE ME FAIL ALL MY CLASSES!!! MY GPA IS A 0.01!!!",
  },
  {
    name: "Dan",
    title: "still not a dev",
    review: "This website is peak everyone",
  },
];
function createNewReview(name, title, text) {
  console.log(`{"name": "${name}","title":"${title}","review":"${text}"},`);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(reviews);
const selectedReviews = reviews.slice(0, 3);
selectedReviews.forEach((review) => {
  console.log(`${review.name}: ${review.review}`);
});

function setReviews() {
  rn1 = document.getElementById("rn1");
  rt1 = document.getElementById("rt1");
  rtxt1 = document.getElementById("rtxt1");

  rn2 = document.getElementById("rn2");
  rt2 = document.getElementById("rt2");
  rtxt2 = document.getElementById("rtxt2");

  rn3 = document.getElementById("rn3");
  rt3 = document.getElementById("rt3");
  rtxt3 = document.getElementById("rtxt3");

  rn1.innerHTML = selectedReviews[0].name;
  rt1.innerHTML = selectedReviews[0].title;
  rtxt1.innerHTML = selectedReviews[0].review;

  rn2.innerHTML = selectedReviews[1].name;
  rt2.innerHTML = selectedReviews[1].title;
  rtxt2.innerHTML = selectedReviews[1].review;

  rn3.innerHTML = selectedReviews[2].name;
  rt3.innerHTML = selectedReviews[2].title;
  rtxt3.innerHTML = selectedReviews[2].review;
}

setReviews();
