const button = document.querySelector(".container .joke .prog");
const button1 = document.querySelector(".container .joke .misc");
const button2 = document.querySelector(".container .joke .dark");
const button3 = document.querySelector(".container .joke .pun");
const jokeDiv = document.querySelector(".container .joke p");



button.addEventListener("click", getJock);
button1.addEventListener("click", getJockmisc);
button2.addEventListener("click", getJockd);
button3.addEventListener("click", getJockp);

async function getJock() {
  const jokeData = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}

async function getJockmisc() {
  const jokeData = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous?type=single", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}
async function getJockd() {
  const jokeData = await fetch("https://v2.jokeapi.dev/joke/Dark?type=single", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}
async function getJockp() {
  const jokeData = await fetch("https://v2.jokeapi.dev/joke/Pun?type=single", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
  console.log(jokeData);
}
