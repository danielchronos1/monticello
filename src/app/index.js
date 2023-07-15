console.log('Loaded!');

//Smmoth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//MAP 

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.677308009365646, lng: -73.8989694329483 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    center: position,
    mapId: "3869adccf438b2e2",
    
  });



// A marker with a with a URL pointing to a PNG.
const beachFlagImg = document.createElement("img");

beachFlagImg.src =
  "/src/images/footer/marker.png";

const beachFlagMarkerView = new google.maps.marker.AdvancedMarkerView({
  map,
  position: { lat: 40.678566188203696, lng: -73.89748768197039 },
  content: beachFlagImg,
  title: "A marker using a custom PNG Image",
});

  
}

initMap();

//

// Get form element and inputs
const form = document.getElementById('myForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Validate name field
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // Validate email field
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }

  // Add additional email validation if needed
  // Example: Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // If all validations pass, log the form data to the console
  console.log('Form submitted:');
  console.log('Name:', nameInput.value.trim());
  console.log('Email:', emailInput.value.trim());

  // Reset the form after submitting
  form.reset();
});

//Change text to icon to btn form
const button = document.querySelector('.info__btn');
  const icon = button.querySelector('i');
  const buttonText = button.querySelector('span');

  button.addEventListener('mouseover', function () {
    buttonText.style.display = 'none';
    icon.style.display = 'inline';
  });

  button.addEventListener('mouseout', function () {
    buttonText.style.display = 'inline';
    icon.style.display = 'none';
  });

