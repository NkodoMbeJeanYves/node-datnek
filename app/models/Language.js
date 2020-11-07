module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define('Languages', {
    languageId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    languageName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    languageCode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    readingLevel: {
      type: Sequelize.STRING
    },
    writingLevel: {
      type: Sequelize.STRING
    },
    understandingLevel: {
      type: Sequelize.STRING
    }
  })
  return Language
}
