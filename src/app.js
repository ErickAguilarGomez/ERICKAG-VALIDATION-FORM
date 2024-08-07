/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import countryData from "./peruData.js";
import validation from "./validation.js";
import validateCard from "./validateCard.js";

window.onload = async function() {
  const states = document.querySelector(".main-states");
  const form = document.querySelector("form");
  const inputCard = document.querySelector("#inputCard");
  const cvc = document.querySelector("#inputPassword4");

  function validateCvc(e) {
    if (e.target.value.length === 3) {
      alert("cvv ingresado correctamente");
    } else {
      alert("cvv Incorrecto");
    }
  }

  cvc.addEventListener("blur", validateCvc);

  const peru = await countryData();

  let template = "<option>Pick A state</option>";

  inputCard.addEventListener("blur", validateCard);
  form.addEventListener("submit", validation);
  peru.forEach((state) => {
    template += `<option>${state.state_name}</option>`;
  });
  states.innerHTML = template;
};
