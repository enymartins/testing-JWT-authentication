const { Model, DataTypes } = require('sequelize');

class Question extends Model {
    static init(sequelize) {
        super.init({
            caput: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Test, { foreignKey: 'test_id', as: 'test' })
    }
}

module.exports = Question;