const singleGameContainer = document.querySelector(".singleGameResults");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.freetogame.com/api/games/" + id;

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

async function getGame() {
  try {
    const response = await fetch(corsFix);

    const singleGameResult = await response.json();

    console.log(singleGameResult);

    createHTML(singleGameResult);

    resultsContainer.innerHTML = "";
  } catch (error) {
    console.log(error);
  }
}

getGame();

function createHTML(singleGameResult) {
  singleGameContainer.innerHTML = `<h1>${singleGameResult.title}</h1>`;
}

createHTML();
