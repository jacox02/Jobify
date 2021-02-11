const DBConfig = require("../config/database.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  DBConfig.database,
  DBConfig.user,
  DBConfig.password,
  {
    host: DBConfig.host,
    dialect: DBConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: DBConfig.pool.max,
      min: DBConfig.pool.min,
      acquire: DBConfig.pool.acquire,
      idle: DBConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.works = require("./works.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.companie = require("./companies.model")(sequelize, Sequelize);
db.categories = require("./category.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);

db.role.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.users.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.works.belongsToMany(db.users, {
  through: "works_users",
  foreignKey: "userId",
  otherKey: "jobId",
});

module.exports = db;
