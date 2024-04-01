var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["car"] = 0] = "car";
    Vehicles[Vehicles["motorbike"] = 1] = "motorbike";
    Vehicles[Vehicles["truck"] = 2] = "truck";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.truck);
