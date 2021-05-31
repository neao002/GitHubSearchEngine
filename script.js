const APIRUL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  const resp = await fetch(APIRUL + username);
  const resptData = await resp.json();

  console.log(resp);
  createUserCard(resptData);

  getRespos(username);
}

async function getRespos(username) {
  const resp = await fetch(APIRUL + username + "/respos");
  const resptData = await resp.json();

  addRepostToCard(resptData);
}

function createUserCard(user) {
  const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.forEach((repo) => {
    const repoEl = document.createElement("a");
    repoE1.classList.add("repo");

    repoE1.href = repo.html_url;
    repoE1.target = "_blank";
    repoE1.innerText = repo.name;

    reposE1.appenchild(repoEl);
  });
}
