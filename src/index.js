import randomJoke from 'awesome-dev-jokes';

/* https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser */
const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");

// tests if global scope is binded to window
if(isBrowser()) {
  const joke = document.querySelector('.joke');
  joke.innerHTML = randomJoke.getRandomJoke();
}
else {
  console.log(randomJoke.getRandomJoke());
}





