jokes = [
  "Why do programmers prefer iOS development over Android development? Because on iOS, you don't have to deal with Java!",
  "Why don't programmers like nature? It has too many bugs.",
  "How many programmers does it take to change a light bulb? None. That's a hardware problem.",
  "Why did the programmer go broke? Because he used up all his cache.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "What's a programmer's favorite hangout place? Foo Bar.",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "What's a programmer's favorite game? 404-pong.",
  "Why do programmers always mix up their 'to-do' lists? Because they use dynamic arrays!",
  "Why do programmers prefer iOS development over Android development? Because they don't want to deal with 'fragmentation.'",
  "Why did the programmer get thrown out of school? Because he used 'int' without 'permission.'",
  "How do you comfort a JavaScript bug? You console it.",
  "Why do programmers hate nature? It has too many branches.",
  "Why did the programmer keep getting electrocuted? Because he didn't know how to conduct himself.",
  "Why did the programmer get kicked out of the bar? Because he used 'while True' and the bartender got stuck in an infinite loop.",
  "What's a programmer's favorite snack? Code chips.",
  "Why do Java developers wear glasses? Because they don't see sharp.",
  "What do you call a programmer from Finland? Nerdic.",
  "Why don't programmers like to go outside? The sun causes too many reflections.",
  "How do you comfort a JavaScript bug? You console it.",
  "What did the developer say when he found a bug in the production code? 'It's not a bug; it's a feature!'",
  "Why did the programmer stay at his job? Because he didn't want to lose his byte.",
  "What's a programmer's favorite place in New York City? The null pointer.",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do Java developers wear glasses? Because they can't C#.",
  "What's a programmer's favorite game? 404-pong.",
  "Why do programmers always mix up their 'to-do' lists? Because they use dynamic arrays!",
  "Why don't programmers like to go outside? The sun causes too many reflections.",
  "What did the computer do at lunchtime? It had a byte!",
  "Why did the programmer keep getting electrocuted? Because he didn't know how to conduct himself.",
];

function newJoke() {
  const randomNumber = Math.floor(Math.random() * jokes.length);
  const jokeDisplay = document.getElementById("jokeDisplay");
  jokeDisplay.style.opacity = 0;

  setTimeout(() => {
    jokeDisplay.innerHTML = jokes[randomNumber];
    jokeDisplay.style.opacity = 1;
  }, 400);
}

const btn = document.getElementById("djokes");
btn.addEventListener("click", newJoke);
