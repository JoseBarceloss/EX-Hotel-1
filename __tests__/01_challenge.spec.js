const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('01 - Escreva uma query que cria a base de dados `trybe_hotel`', function () {
  it('A base de dados `trybe_hotel` deve existir', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    const [results] = await connection.query('SHOW DATABASES LIKE "trybe_hotel";');
    expect(results.length).toBe(1);
  });
});
