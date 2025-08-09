//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputName = document.getElementById("amigo");
const namesList = [];
const list = document.getElementById("listFriends");

inputName.addEventListener("keypress", enterEvent);

function enterEvent(evt) {
  if (evt.key === "Enter") addFriend();
}

function addFriend() {
  if (inputName.value === "") {
    alert("Por favor, insira um nome");
  } else {
    namesList.push(inputName.value);
    inputName.value = "";
    showListUpdated();
    inputName.focus();
  }
}

function showListUpdated() {
  list.innerHTML = "";
  for (let i = 0; i < namesList.length; i++) {
    const li = document.createElement("li");
    li.innerText = namesList[i];
    list.appendChild(li);
  }
}

function drawName() {
  const randomNumber = Math.floor(Math.random() * namesList.length);
  if (namesList.length === 0) {
    alert("Por favor, insira um nome");
  } else {
    const result = document.getElementById("result");
    result.innerHTML = namesList[randomNumber];
    updateNamesList(namesList[randomNumber]);
  }
}

function updateNamesList(name) {
  const index = namesList.indexOf(name);
  if (index > -1) {
    namesList.splice(index, 1);
    showListUpdated();
  }
}
