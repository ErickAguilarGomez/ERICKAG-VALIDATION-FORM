export default function validations(selectedInput, regex) {
  const validationInput = document.querySelector(`#` + selectedInput);

  function validateInput(e) {
    const isValid = regex.test(e.target.value);

    if (isValid) {
      e.target.classList.remove("bg-danger-subtle");
      e.target.classList.add("bg-success-subtle");
    } else {
      e.target.classList.add("bg-danger-subtle");
      e.target.classList.remove("bg-success-subtle");
    }

    return isValid;
  }

  validationInput.addEventListener("blur", validateInput);

  return () => validateInput({ target: validationInput });
}
