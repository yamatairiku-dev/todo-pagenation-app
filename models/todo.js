'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      // define association here
    }

    //ToDoの削除
    static async remove(id){
      const changes = await this.destroy(
        { 
          where: { id:id },
        }
      )
      return changes[0] === 1 ?  id : null
    }
  }

  Todo.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    deadline: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
    freezeTableName: true
  });

  Todo.beforeCreate(async (instance, _option) => {
    const now = new Date();
    instance.createdAt = now;
    instance.updatedAt = now;
  })

  Todo.beforeUpdate(async (instance, _options) => {
    const now = new Date();
    instance.updatedAt = now;
  })

  return Todo;
};