const Task = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });
  Task.associate = function (models) {
    // association
  };
  return Task;
};

module.exports = Task;
