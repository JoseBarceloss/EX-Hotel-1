const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('02 - Escreva uma query que seleciona o banco `trybe_hotel` como o banco de dados atual', function () {
  it('A base de dados `trybe_hotel` deve ser selecionada', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [results] = await connection.query('SELECT DATABASE();');
    expect(results[0]['DATABASE()']).toBe('trybe_hotel');
  });
});
