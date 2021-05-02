const { Model } = require("../db");
class Drivers extends Model {
    static get tableName() {
        return "Drivers";
    }
    static get relationMappings() {
        const driver = require('./Driver');
        const ride = require('./Ride');
        return {
            driver: {
                relation: Model.BelongsToOneRelation,
                modelClass: driver,
                join: {
                    from: 'drivers.driverId',
                    to: 'driver.id'
                }
            },
            ride: {
                relation: Model.BelongsToOneRelation,
                modelClass: ride,
                join: {
                    from: 'drivers.rideId',
                    to: 'ride.id'
                }
                
            }
        };

    }
}
module.exports = Drivers;