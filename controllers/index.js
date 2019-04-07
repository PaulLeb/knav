// exemple requete route : https://router.project-osrm.org/route/v1/driving/-0.3976426,49.2035794;-0.4032293,49.2014755?overview=false&alternatives=true&steps=true&hints=;

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

let pin = L.icon({
    iconUrl:"pin.png",
    iconSize:[30, 30],
})

function error(err){
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

function success(pos){
    // let lat = pos.coords.latitude
    // let long = pos.coords.longitude
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    let map = L.map('map', {
        center:[lat, long],
        zoom:15,
        attributionControl:false,
        zoomControl:false
    })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([lat, long]).addTo(map)
}

let pos = {"coords":{"latitude":49.1858, "longitude":-0.3591}}
success(pos)
// navigator.geolocation.getCurrentPosition(success, error, options)

let skCenter = document.querySelector('#skCenter')
let skLeft = document.querySelector('#skLeft')
let skRight = document.querySelector('#skRight')
let sk = new softKeys(skLeft, skCenter, skRight)
sk.nav()

// L.Routing.control({
//     waypoints: [
//         L.latLng(49.2035794, -0.3976426),
//         L.latLng(49.2014755, -0.4032293)
//     ]
// }).addTo(map)