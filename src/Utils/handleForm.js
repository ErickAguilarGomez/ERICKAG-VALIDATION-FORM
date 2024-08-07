import validateTextInputs from "./validateTextInputs";
import validateRadioButtons from "./validateRadioButtons";
import validateSelect from "./validateSelect";
import { inputs, form } from "../app.js";
import validations from "./validations.js";

export default function handleForm(e) {
  e.preventDefault();

  const cardNumberValidation = validations("cardNumber", /^[3456]\d{12,15}$/);
  const cvcValidation = validations("cvc", /^\d{3,4}$/);

  const isTextValid = validateTextInputs(inputs);
  const isRadioValid = validateRadioButtons();
  const isSelectValid = validateSelect();
  const isCardNumberValid = cardNumberValidation();
  const isCvcValid = cvcValidation();

  if (isTextValid && isRadioValid && isSelectValid && isCardNumberValid && isCvcValid) {
    form.submit();
  } else {
    alert("Formulario inválido");
  }
}
