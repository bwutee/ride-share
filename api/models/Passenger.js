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
                    from: 'passenger.userId',
                    to: 'user.id'
                }
            },
            ride: {
                relation: Model.BelongsToOneRelation,
                modelClass: ride,
                join: {
                    from: 'passenger.rideId',
                    to: 'ride.id'
                }
                
            }
        };

    }
}
module.exports = Passenger;