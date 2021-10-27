const Travellers = require("./Travellers");
const Locations = require("./Locations");
const Trips = require("./Trips");

Travellers.hasMany(Locations,{
    onDelete:"CASCADE"
});
Locations.belongsTo(Travellers);

Travellers.belongsToMany(Trips,{
    through:"TravellersTrips"
})

Trips.belongsToMany(Travellers,{
    through:"TravellersTrips"
})

module.exports={
    Travellers,
    Locations,
    Trips
};