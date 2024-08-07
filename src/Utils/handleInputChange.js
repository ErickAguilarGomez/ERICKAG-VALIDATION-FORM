let validateForm = {};

export default   function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    validateForm[name] = value;

    if (value !== "") {
      event.target.classList.remove("bg-danger-subtle");
      event.target.classList.add("bg-success-subtle");
    } else {
      event.target.classList.remove("bg-success-subtle");
      event.target.classList.add("bg-danger-subtle");
    }
  }
