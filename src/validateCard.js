export default function validateCard(e) {
  const regexTarjetaCredito = /^[3456]\d{12,15}$/;
  const isValid = regexTarjetaCredito.test(e.target.value);
  if (isValid) {
    alert("Tarjeta correcta");
  } else {
    alert("Escribe bien tu tarjeta");
  }
}
