---
layout: default
title: Visualizing Food Access
permalink: /map
---

<head>
  <link rel="stylesheet" href="style.css">
  
  <link rel="stylesheet" href="leaflet/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>

  <script src="leaflet/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
</head>

<script src="groceryStores.js"></script>

<script src="farmersMarkets.js"></script>


<center> 
  <h2>About the Map</h2>

  This map was created using data from the <a href="https://www.cdfa.ca.gov/is/docs/CurrentMrktsCounty.pdf">California Department of Food and Agriculture's</a> list of certified farmers' markets and <a href ="https://data.lacity.org/Administration-Finance/Grocery-Stores/g986-7yf9">LA City's</a> list of all active grocery store businesses registered with the Office of Finance.

  <p> </p>

  <em> Blue = Farmers' Market </em>

  <p> </p>

  <em> Green = Grocery Store </em>

  <p> </p>

  <div id="geoMap"></div>

</center>

<script>
  var geoMap = L.map('geoMap').setView([34, -118], 9);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(geoMap);

  /* etch("Grocery_Stores.geojson").then(res => res.json()).then(data => {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(geoMap);
  }); */

  var greenIcon = L.icon({
    iconUrl: 'marker-icon.png',

    iconSize:     [14, 23], // size of the icon
    iconAnchor:   [7, 23], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  var blueIcon = L.icon({
    iconUrl: 'marker-icon-blue.png',

    iconSize:     [14, 23], // size of the icon
    iconAnchor:   [7, 23], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  })

  for(let i = 0; i < groceryStores.length; i++){
    let groceryStore = groceryStores[i];

    console.log(i);

    if(groceryStore.geometry.coordinates[0] != null && groceryStore.geometry.coordinates[1] != null) {
      console.log(groceryStore.geometry.coordinates[0]);
      L.marker([groceryStore.geometry.coordinates[1], groceryStore.geometry.coordinates[0]], {icon: greenIcon}).addTo(geoMap);
    }
  }

  for(let i = 0; i < farmersMarkets.length; i++){
    let farmerMarket = farmersMarkets[i];

    console.log(i);

    if(farmerMarket.geometry.coordinates[0] != null && farmerMarket.geometry.coordinates[1] != null) {
      console.log(farmerMarket.geometry.coordinates[0]);
      L.marker([farmerMarket.geometry.coordinates[1], farmerMarket.geometry.coordinates[0]], {icon: blueIcon}).addTo(geoMap);
    }
  }

  /* fetch("Farmers_Markets.geojson").then(res => res.json()).then(data => {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(geoMap);
  }); */
</script>