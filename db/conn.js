const Sequelize = require('sequelize')

const connection = new Sequelize('dbsorteio', 'root', 'root', {
    host : 'root',
    dialect : 'mysql'
})

module.exports = connection