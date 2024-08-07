let validateForm = {};

export default   function handleInputChange(event) {
    validateForm[event.target.name] = event.target.value;

    if (event.target.value !== "") {
      event.target.classList.remove("bg-danger-subtle");
      event.target.classList.add("bg-success-subtle");
    } else {
      event.target.classList.remove("bg-success-subtle");
      event.target.classList.add("bg-danger-subtle");
    }
  }
