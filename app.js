let form = document.querySelector("form");
let login = document.querySelector("#login");
let a2 = document.querySelector(".a2");

form.addEventListener("submit", (e) => {
  a2.style.background = "#ccc";
  e.preventDefault();
  let v = login.value;
  fetchData(v);
  login.value = "";
});

let fetchData = async (user) => {
  let d = await window.fetch(`https://api.github.com/users/${user}`);
  let fD = await d.json();
  let { name, login, company, email, location, avatar_url } = fD;
  a2.innerHTML = `
  <img src=${avatar_url} alt="img-1"/>
  <h1>name: ${name}</h1>
  <h2>Login id: ${login}</h2>
  <h3>Company : ${company || "NA"}</h3>
  <h3>Email : ${email}</h3>
  <h3>Location : ${location || "NA"}</h3>
  `;
};
