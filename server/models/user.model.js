module.exports = (sequalize, Sequalize) => {
  const User = sequalize.define("user", {
    User_ID: {
      type: Sequalize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    User_Name: {
      type: Sequalize.STRING(255),
    },
    User_Email: {
      type: Sequalize.STRING(255),
    },
    User_Password: {
      type: Sequalize.STRING(255),
    },
  });
  return User;
};
