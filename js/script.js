const url = "https://www.freetogame.com/api/games";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const result = await fetch(corsFix);

    const json = await result.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      console.log(json[i].title);
      console.log(json[i]);

      resultsContainer.innerHTML += ` <div class="heading">${json[i].title}</div>
                                      <a href="html/details.html?id=${json[i].id}" class="card">                                
                                      <div class="details-image" style="background-image: url('${json[i].thumbnail}')"></div>
                                      </a>
                                      <div class="game-info">${json[i].short_description}</div>
                                      <div class="game-genre">Game genre: ${json[i].genre}</div>`;

      if (i === 7) {
        break;
      }
    }
  } catch {
    console.log("Something went wrong...");
    resultsContainer.innerHTML = sendErrorMessage();
  } finally {
    console.log("Thanks for visiting free-to-play rating.");
  }
}

getGames();
