const { Model, DataTypes } = require('sequelize');

class Exam extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Question, { foreignKey: 'exam_id', as: 'Questions' })
    }
}

module.exports = Exam;