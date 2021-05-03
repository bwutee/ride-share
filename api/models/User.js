const { Model } = require("../db");
class User extends Model {
    static get tableName() {
        return "User";
    }
    static get relationMappings() {
        const driver = require('./Driver');
        const ride = require('./Ride');
        return {
            driver: {
                relation: Model.HasManyRelation,
                modelClass: driver,
                join: {
                    from: 'User.id',
                    to: 'Driver.userId'
                }
            },
            ride: {
                relation: Model.ManyToManyRelation,
                modelClass: ride,
                join: {
                    from: 'User.id',
                    through: {
                        from: 'Passenger.userId',
                        to: 'Passenger.rideId'
                    },
                    to: 'Ride.id'
                }
                
            }
        };

    }
}
module.exports = User;