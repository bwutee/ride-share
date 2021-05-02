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
                    from: 'user.id',
                    to: 'driver.userId'
                }
            },
            ride: {
                relation: Model.ManyToManyRelation,
                modelClass: ride,
                join: {
                    from: 'user.id',
                    through: {
                        from: 'passenger.userId',
                        to: 'passenger.rideId'
                    },
                    to: 'ride.id'
                }
                
            }
        };

    }
}
module.exports = User;