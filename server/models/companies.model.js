module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    Company_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    Company_Logo: {
      type: Sequelize.STRING(300),
      allowNull: true,
    },
    Company_Name: {
      type: Sequelize.STRING(255),
    },
  });
  return Company;
};
