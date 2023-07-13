console.log('Loaded!');


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
  const position = { lat: 40.678566188203696, lng: -73.89748768197039 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    center: position,
    mapId: "DEMO_MAP_ID",
  });



// A marker with a with a URL pointing to a PNG.
const beachFlagImg = document.createElement("img");

beachFlagImg.src =
  "../images/footer/marker.png";

const beachFlagMarkerView = new google.maps.marker.AdvancedMarkerView({
  map,
  position: { lat: 40.678566188203696, lng: -73.89748768197039 },
  content: beachFlagImg,
  title: "A marker using a custom PNG Image",
});

  
}

initMap();



