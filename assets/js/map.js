ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        controls: [],
        center: [55.921561, 37.501878],
        zoom: 13,
    });

    var myPlacemark = new ymaps.Placemark([55.921561, 37.501878], {
        hintContent: "Santop Expo",
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.options.set("styles", [
        {
            featureType: "all",
            elementType: "all",
            stylers: [
                {
                    saturation: -100,
                },
                {
                    gamma: 0.5,
                },
            ],
        },
    ]);
}
