const { Model } = require("../db");
class Vehicle extends Model {
    static get tableName() {
        return "Vehicle";
    }
    static get relationMappings() {
        const driver = require("./Driver");
        const vehicleType = require("./VehicleType");
        const ride = require("./Ride");
        const state = require("./State")
        return {
            drivers: {
                relation: Model.ManyToManyRelation,
                modelClass: driver,
                join: {
                    from: "vehicle.id",
                    through: {
                        from: "authorization.vehicleId",
                        to: "authorization.driverId"
                    },
                    to: "driver.id"
                }
            },
            vehicleTypes: {
                relation: Model.BelongsToOneRelation,
                modelClass: vehicleType,
                join: {
                    from: "vehicle.vehicleTypeId",
                    to: "vehicleType.id"
                }
                
            },
            rides: {
                relation: Model.HasManyRelation,
                modelClass: ride,
                join: {
                    from: "vehicle.id",
                    to: "ride.vehicleId"
                }
                
            },
            states: {
                relation: Model.BelongsToOneRelation,
                modelClass: state,
                join: {
                    from: "vehicle.licenseState",
                    to: "state.abbreviation"
                }
                
            }
        };

    }
}

module.exports = Vehicle;