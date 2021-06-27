const { Model, DataTypes } = require('sequelize');

class Alternative extends Model {
    static init(sequelize) {
        super.init({
            content: DataTypes.STRING,
            isCorrect: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Question, { foreignKey: 'question_id', as: 'Questions' })
    }
}

module.exports = Alternative;