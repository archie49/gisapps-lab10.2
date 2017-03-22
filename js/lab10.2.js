document.addEventListener('DOMContentLoaded', function() {
    /*
    your code will go here
    this is the event callback function that is called when the document content has been loaded
    we need our map container to be ready before dropping our map in, for example
    *this is new as js bin takes care of this for you
    */
    var map = L.map('map').setView([40.38, -105.5], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/archie21/ciycbsjp800292sqspcy3qpgg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJjaGllMjEiLCJhIjoiY2l5MmNpeXRjMDAxbTJxcWphOWc0cjNjYSJ9.J3pcJEVhPcdyS1-Apr2kgg',
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
function showLatLng(e) {
  document.getElementById("whereIsThis").innerText = e.latlng.lat + " | " + e.latlng.lng;
}
map.on('mousemove', showLatLng);
document.getElementById("goToFRCCBoulder").onclick = function(){
  map.setView([40.1386, -105.12793], 16);
};

document.getElementById("goToRMNP").onclick = function(){
  map.setView([40.275, -105.68], 12);
};
function onMapClick(e) {
   var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("<h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4><center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center>")
    .openOn(map);

}

map.on('click', onMapClick);

document.getElementById("foco").onclick = function()
{
  map.setView([40.556, -105.0801],12);
};

var geojsonFeature= {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "",
        "marker-symbol": "",
        "Name": "Horsetooth",
        "Type": "Reservoir"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.15804290771484,
          40.55972134684838
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Warren Lake",
        "Type": "Lake"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.06088256835938,
          40.53141508028686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Lake Sherwood",
        "Type": "Lake"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.04812598228455,
          40.54724099703853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Fossil Creek Reservoir",
        "Type": "Reservoir"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.00886917114256,
          40.49069570615754
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "College Lake",
        "Type": "Lake"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.14928817749022,
          40.57908533015882
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Rigden Reservoir",
        "Type": "Reservoir"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.00620841979979,
          40.53969948859302
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#76a3e7",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Beaver Pond",
        "Type": "Pond"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.99972820281982,
          40.525510998934806
        ]
      }
    }
  ]
};
L.geoJSON(geojsonFeature).addTo(map);
});

