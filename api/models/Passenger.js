const { Model } = require("../db");
class Passenger extends Model {
    static get tableName() {
        return "Passenger";
    }
    static get relationMappings() {
        const user = require('./User');
        const ride = require('./Ride');
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: user,
                join: {
                    from: 'Passenger.userId',
                    to: 'User.id'
                }
            },
            ride: {
                relation: Model.BelongsToOneRelation,
                modelClass: ride,
                join: {
                    from: 'Passenger.rideId',
                    to: 'Ride.id'
                }
                
            }
        };

    }
}
module.exports = Passenger;