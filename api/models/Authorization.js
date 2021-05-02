const { Model } = require("../db");
class Authorization extends Model {
    static get tableName() {
        return "Authorization";
    }
    static get relationMappings() {
        const driver = require('./Driver');
        const vehicle = require('./Vehicle');
        return {
            driver: {
                relation: Model.BelongsToOneRelation,
                modelClass: driver,
                join: {
                    from: 'authorization.driverId',
                    to: 'driver.id'
                }
            },
            ride: {
                relation: Model.BelongsToOneRelation,
                modelClass: vehicle,
                join: {
                    from: 'authorization.vehicleId',
                    to: 'vehicle.id'
                }
                
            }
        };

    }
}
module.exports = Authorization;