module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define('Companies', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  })
  return Company
}