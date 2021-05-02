const { Model } = require("../db");
class Ride extends Model {
    static get tableName() {
        return "Ride";
    }
    static get relationMappings() {
        const user = require("./User");
        const driver = require("./Driver");
        const vehicle = require("./Vehicle");
        const location = require("./Location");
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: user,
                join: {
                    from: "ride.id",
                    through: {
                        from: "passenger.rideId",
                        to: "passenger.userId"
                    },
                    to: "user.id"
                }
            },
            drivers: {
                relation: Model.ManyToManyRelation,
                modelClass: driver,
                join: {
                    from: "ride.id",
                    through: {
                        from: "drivers.rideId",
                        to: "drivers.driverId"
                    },
                    to: "driver.id"
                }
                
            },
            vehicles: {
                relation: Model.BelongsToOneRelation,
                modelClass: vehicle,
                join: {
                    from: "ride.vehicleId",
                    to: "vehicle.id"
                }
                
            },
            locations: {
                relation: Model.BelongsToOneRelation,
                modelClass: location,
                join: {
                    from: "ride.fromLocationId",
                    to: "location.id"
                }
                
            },
            locations: {
                relation: Model.BelongsToOneRelation,
                modelClass: location,
                join: {
                    from: "ride.toLocationId",
                    to: "location.id"
                }
                
            }
        };

    }
}

module.exports = Ride;    