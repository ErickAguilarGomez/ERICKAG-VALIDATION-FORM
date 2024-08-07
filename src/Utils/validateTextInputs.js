export default function validateTextInputs(inputs) {
    let isValid = true;

    inputs.forEach((input) => {
      const value = input.value;
      if (value !== "") {
        input.classList.remove("bg-danger-subtle");
        input.classList.add("bg-success-subtle");
      } else {
        input.classList.remove("bg-success-subtle");
        input.classList.add("bg-danger-subtle");
        isValid = false;
      }
    });

    return isValid;
  }
