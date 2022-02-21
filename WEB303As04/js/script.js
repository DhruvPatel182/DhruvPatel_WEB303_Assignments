/*
    Assignment #4
    {Dhruv Patel}
*/


$(function () {
    navigator.geolocation.getCurrentPosition(success, () => {
        console.log("Please enable geolocation in order to see your coordinates");
    });

    function success(position) {
        console.log("Position object: ", position);
        console.log(
            "latitude: ",
            position.coords.latitude,
            ", longitude: ",
            position.coords.longitude,);
            let val1 = position.coords.latitude;
            let val2 = position.coords.longitude;
        
        $("div#locationere").html("Latitude:- ", val1, "Longitude:- ", val2);
    

    localStorage.getItem("latitude", JSON.stringify(val1));
    localStorage.getItem("longitude", JSON.stringify(val2));

    if (localStorage.getItem("latitude") && localStorage.getItem("longitude")) {

        let latitudeJSONStringObject = JSON.parse(localStorage.getItem("latitude"));
        let longitudeJSONStringObject = JSON.parse(localStorage.getItem("longitude"));

        localStorage.getItem("latitude", JSON.stringify(latitudeJSONStringObject));
        localStorage.getItem("longitude", JSON.stringify(longitudeJSONStringObject));

        $('#locationhere').append("<h1>Locations was: </h1>", "latitude:", latitudeJSONStringObject, "<p>longitude:- </p>", longitudeJSONStringObject);
        $('#locationhere').append("<h1>Welcome to home page!</h1>");
    } else {
        $('#locationhere').append("<h1>Welcome to Home Page First Time!</h1>")
    }
    //     DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    //    function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
}
});


