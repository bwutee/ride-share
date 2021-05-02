const { Model } = require("../db");
class VehicleType extends Model {
    static get tableName() {
        return "VehicleType";
    }
    static get relationMappings() {
        const vehicle = require('./Vehicle');
        return {
            vehicle: {
                relation: Model.HasManyRelation,
                modelClass: vehicle,
                join: {
                    from: 'vehicleType.id',
                    to: 'vehicle.vehicleTypeId'
                }
            }
        };

    }
}
module.exports = VehicleType;