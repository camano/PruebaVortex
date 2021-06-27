const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prueba_vortex',
    password: 'Aldebaran28@',
    port: '5432',

});

module.exports = pool;