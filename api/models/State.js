const { Model } = require("../db");
class State extends Model {
    static get tableName() {
        return "State";
    }
    static get relationMappings() {
        const driver = require('./Driver');
        const location = require('./Location');
        return {
            driver: {
                relation: Model.HasManyRelation,
                modelClass: driver,
                join: {
                    from: 'State.abbreviation',
                    to: 'Driver.licenseState'
                }
            },
            location: {
                relation: Model.ManyToManyRelation,
                modelClass: location,
                join: {
                    from: 'State.abbreviation',
                    to: 'Location.state'
                }
                
            }
        };

    }
}
module.exports = State;