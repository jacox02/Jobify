module.exports = (sequalize, Sequalize) => {
  const Work = sequalize.define("work", {
    Work_ID: {
      type: Sequalize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    Work_Title: {
      type: Sequalize.STRING(255),
      allowNull: false,
    },
    Publish_Date: {
      type: Sequalize.DATE,
    },
    Owner_Email: {
      type: Sequalize.STRING(100),
    },
    Work_Keywords: {
      type: Sequalize.STRING(255),
    },
    Job_URL: {
      type: Sequalize.STRING(255),
    },
    WorkType: {
      type: Sequalize.STRING(255),
    },

    Location: {
      type: Sequalize.STRING(255),
    },
    Position: {
      type: Sequalize.STRING(255),
    },
    Email: {
      type: Sequalize.STRING(255),
    },
    Apply_Method: {
      type: Sequalize.STRING(255),
    },
    Description: {
      type: Sequalize.STRING(2300),
    },
  });
  return Work;
};
