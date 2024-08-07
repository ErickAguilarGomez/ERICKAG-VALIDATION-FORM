export default function validateRadioButtons() {
    const radioButtons = document.querySelectorAll('input[name="tarjetas"]');
    const isRadioChecked = Array.from(radioButtons).some(
      (radio) => radio.checked
    );

    if (!isRadioChecked) {
      radioButtons.forEach((radio) => {
        radio.classList.add("bg-danger-subtle");
      });
    } else {
      radioButtons.forEach((radio) => {
        radio.classList.remove("bg-danger-subtle");
      });
    }

    return isRadioChecked;
  }