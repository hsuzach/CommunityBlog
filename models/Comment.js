const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {}

//creates Comment model with sequelize
//associated with User by userId and Post by postId

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.NUMBER,
      references: {
        model: "User",
        key: "id"
      }
    },
    postId: {type: DataTypes.NUMBER,
      references: {
        model: "Post",
        key: "id"
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment'
  }
);

module.exports = Comment;