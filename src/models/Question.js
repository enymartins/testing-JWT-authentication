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
        this.belongsTo(models.Exam, { foreignKey: 'exam_id', as: 'exam' })
        this.hasMany(models.Alternative, { foreignKey: 'question_id', as: 'alternatives' })
    }
}

module.exports = Question;