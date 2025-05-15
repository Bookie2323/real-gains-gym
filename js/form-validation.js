function validateForm() {
  let form = document.forms["membershipForm"];
  let name = form["name"].value.trim();
  let email = form["email"].value.trim();
  let phone = form["phone"].value.trim();
  let age = parseInt(form["age"].value);

  if (!name || !email || !phone || isNaN(age)) {
    alert("All fields are required.");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email.");
    return false;
  }

  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Enter a 10-digit phone number.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}




const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
