const { Model, DataTypes } = require('sequelize');

class Test extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Test;