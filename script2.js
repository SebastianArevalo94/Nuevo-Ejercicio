// Obtener personaje del Api
const main = async () => {
  // Limpiar antes de mostrar
  document.getElementById("cardsContainer").innerHTML = "";
  let op = parseInt(document.getElementById("op").value);
  // Verificacion si esta lleno
  if (isNaN(op)) {
    alert(`Error. El campo está vacio`);
  } else {
    let url = `https://rickandmortyapi.com/api/character/${op}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => print(data))
      .catch((err) => console.log(err));
  }
};

// Mostrar personaje en pantalla
const print = (data) => {
  let card = `<div class="card" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4>Personaje #${data.id}</h4>
              <h4>${data.name}</h4>
              <p><b>Especie:</b> ${data.species}</p>
              <p><b>Origen:</b> ${data.origin.name}</p>
            </div>
          </div>`;
  document.getElementById("cardsContainer").innerHTML = card;
};

// Obtener varios personajes del Api
const main2 = async () => {
  // Limpiar antes de mostrar
  document.getElementById("cardsContainer").innerHTML = "";
  let op = parseInt(document.getElementById("op").value);
  // Verificacion si esta lleno
  if(isNaN(op)){
    alert(`Error. El campo está vacio`)
  }
  else{
  for (let i = 1; i <= op; i++) {
    let url = `https://rickandmortyapi.com/api/character/${i}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => print2(data))
      .catch((err) => console.log(err));
  }
}
};

// Mostrar personajes en pantalla
const print2 = (data) => {
  let card = `<div class="card" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top" alt="...">
              <div class="card-body">
              <h4>Personaje #${data.id}</h4>
                <h4>${data.name}</h4>
                <p><b>Especie:</b> ${data.species}</p>
                <p><b>Origen:</b> ${data.origin.name}</p>
              </div>
            </div>`;
  document.getElementById("cardsContainer").innerHTML += card;
};

//Limpiar
const clean = () => {
  document.getElementById("cardsContainer").innerHTML = "";
};
