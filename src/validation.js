export default function validation(e) {
  e.preventDefault();
  const states = document.querySelector(".main-states");
  const inputs = document.querySelectorAll("input");
  const message = document.querySelector("#message");
  const validateInputs = Array.from(inputs).every(
    (fila) => fila.value.trim() !== ""
  );

  if (validateInputs && states.value !== "Pick A state") {
    inputs.forEach((input) => {
      input.classList.remove("bg-danger-subtle");
    });
    states.classList.remove("bg-danger-subtle");
    message.textContent = "Formulario completado exitosamente";
    message.className = "alert alert-success text-start";
  } else {
    inputs.forEach((input) => {
      input.classList.add("bg-danger-subtle");
    });
    states.classList.add("bg-danger-subtle");
    message.textContent = "Campos faltantes";
    message.className = "alert alert-danger text-start";
  }
}
