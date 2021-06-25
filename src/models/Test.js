const { Model, DataTypes } = require('sequelize');

class Test extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Q, { foreignKey: 'test_id', as: 'questions' })
    }
}

module.exports = Test;