import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import handleInputChange from "./Utils/handleInputChange";
import handleForm from "./Utils/handleForm";

export const inputs = document.querySelectorAll("input");
export const form = document.querySelector("form");

window.onload = function() {
  inputs.forEach((input) => {
    input.addEventListener("input", handleInputChange);
  });

  form.addEventListener("submit", handleForm);
};
