module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategory',
  {},
  { tableName: 'PostsCategories' });

  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};
