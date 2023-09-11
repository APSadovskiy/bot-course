const {Sequelize} = require('sequelize');

module.exports =new Sequelize(
	'telega_bot',
	'root',
	'root',
	{
		host: 'master.f5b59a6f-598d-4352-9ac2-0b0cc7ac8d5a.c.dbaas.selcloud.ru',
		port: 5432,
		dialect: 'postgres'
	}
)