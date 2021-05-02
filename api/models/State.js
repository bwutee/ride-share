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
                    from: 'state.abbreviation',
                    to: 'driver.licenseState'
                }
            },
            location: {
                relation: Model.ManyToManyRelation,
                modelClass: location,
                join: {
                    from: 'state.abbreviation',
                    to: 'location.state'
                }
                
            }
        };

    }
}
module.exports = State;