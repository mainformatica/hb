function initialize() {
    var e = {
            lat: -23.667023,
            lng: -46.620003
        },
        a = [{
            featureType: "landscape",
            stylers: [{
                color: "#eeddee"
            }]
        }, {
            featureType: "natural",
            stylers: [{
                hue: "#ff0000"
            }]
        }, {
            featureType: "road",
            stylers: [{
                hue: "#5500aa"
            }, {
                saturation: -70
            }]
        }, {
            featureType: "building",
            elementType: "labels",
            stylers: [{
                hue: "#000066"
            }]
        }, {
            featureType: "poi",
            stylers: [{
                hue: "#0044ff"
            }]
        }],
        t = {
            zoom: 16,
            scrollwheel: !1,
            center: new google.maps.LatLng(-23.667023, -46.620003),
            styles: a
        },
        l = new google.maps.Map(document.getElementById("map"), t);
    new google.maps.Marker({
        position: e,
        map: l,
        icon: "img/marker.png"
    })
}
var mapId = $("#map");
mapId.length && google.maps.event.addDomListener(window, "load", initialize);
