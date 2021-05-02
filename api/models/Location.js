const { Model } = require("../db");
class Location extends Model {
    static get tableName() {
        return "Location";
    }
    static get relationMappings() {
        const state = require('./State');
        const ride = require('./Ride');
        return {
            state: {
                relation: Model.BelongsToOneRelation,
                modelClass: state,
                join: {
                    from: 'location.state',
                    to: 'state.abbreviation'
                }
            },
            ride: {
                relation: Model.HasManyRelation,
                modelClass: ride,
                join: {
                    from: 'location.id',
                    to: 'ride.fromLocationId'
                }
                
            },
            ride: {
                relation: Model.HasManyRelation,
                modelClass: ride,
                join: {
                    from: 'location.id',
                    to: 'ride.toLocationId'
                }
                
            }
        };

    }
}
module.exports = Location;