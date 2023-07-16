
let arr = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: "― Marilyn Monroe",
  },
  {
    quote: `“So many books, so little time.”`,
    author: "― Frank Zappa",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity and I'm not sure about the universe.”`,
    author: "― Albert Einstein",
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: `
    “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    author: "― Bernard M. Baruch",
  },
];
function randomNum() {
  var rand = Math.floor(Math.random() * arr.length);

  document.getElementById("quote").innerHTML = arr[rand].quote;
  document.getElementById("quoteAuthor").innerHTML = arr[rand].author;
}
