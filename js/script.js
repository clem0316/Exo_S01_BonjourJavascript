let date1 = new Date();
let monthDate = date1.getMonth() + 1;
let yearDate = date1.getFullYear();

const askName = () => {
  let myName = window.prompt("Quel est votre nom?");
  let bonjour = "\ud83e\udd1d" + " Bonjour " + myName;
  let nameDisplay = document.querySelector("h2");
  nameDisplay.innerHTML = bonjour;
};

const askBirthday = () => {
  let birthday = window.prompt("Quelle est votre année de naissance");
  let month = window.prompt("Quel est le numéro de votre mois de naissance?");
  if (month < 1 || month > 12) {
    alert("Le mois doit être compris entre 1 et 12");
    askBirthday();
  }
  if (month < monthDate) {
    let age1 = "Vous avez " + (yearDate - birthday - 1) + " ans.";
    let ageDisplay = document.querySelector("h3");
    ageDisplay.innerHTML = age1;
  }
  if (month >= monthDate) {
    let age2 = "Vous avez " + (yearDate - birthday) + " ans.";
    let ageDisplay = document.querySelector("h3");
    ageDisplay.innerHTML = age2;
  }
};

askName();
askBirthday();
