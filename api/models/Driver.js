const { Model } = require("../db");
class Driver extends Model {
    static get tableName() {
        return "Driver";
    }
    static get relationMappings() {
        const user = require("./User");
        const vehicle = require("./Vehicle");
        const ride = require("./Ride");
        const state = require("./State")
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: user,
                join: {
                    from: "driver.id",
                    to: "user.id"
                }
            },
            vehicles: {
                relation: Model.ManyToManyRelation,
                modelClass: vehicle,
                join: {
                    from: "driver.id",
                    through: {
                        from: "authorization.driverId",
                        to: "authorization.vehicleId"
                    },
                    to: "vehicle.id"
                }
                
            },
            rides: {
                relation: Model.ManyToManyRelation,
                modelClass: ride,
                join: {
                    from: "driver.id",
                    through: {
                        from: "drivers.driverId",
                        to: "drivers.rideID"
                    },
                    to: "ride.id"
                }
                
            },
            states: {
                relation: Model.BelongsToOneRelation,
                modelClass: state,
                join: {
                    from: "driver.licenseState",
                    to: "state.abbreviation"
                }
                
            }
        };

    }
}

module.exports = Driver;