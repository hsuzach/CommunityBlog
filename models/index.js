const User = require('./tempuser');
const Post = require('./temppost');
const Comment = require('./tempcomment');

//declares model associations and exports

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};