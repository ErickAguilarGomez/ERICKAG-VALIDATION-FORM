export default function validateSelect() {
    const select = document.querySelector('select[name="state"]');
    const selectedValue = select.value;

    if (selectedValue === "") {
      select.classList.add("bg-danger-subtle");
      return false;
    } else {
      select.classList.remove("bg-danger-subtle");
      return true;
    }
  }
