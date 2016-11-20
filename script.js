'use strict';

console.log("loaded");

var map;

function initMap() {
    console.log("initMap");
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {lat: 37.775, lng: -122.434},
        mapTypeId: 'satellite'
    })
}
