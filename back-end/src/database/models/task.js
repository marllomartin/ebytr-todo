const Task = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });
  return Task;
};

module.exports = Task;
