const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() =>{
    console.log('deu certo');
}).catch((erro) => {
    console.log('deu erro' + erro);
});