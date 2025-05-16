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
<script>
  function initMap() {
    const gymLocation = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: gymLocation,
    });

    new google.maps.Marker({
      position: gymLocation,
      map: map,
      title: "Real Gains Gym",
    });
  }
</script>


