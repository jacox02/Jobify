module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    Category_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    Category_Name: {
      type: Sequelize.STRING(255),
    },
  });
  return Category;
};
