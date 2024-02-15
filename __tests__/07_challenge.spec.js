const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('07 - Escreva uma query que retorna apenas as pessoas usuárias cuja idade seja igual a 31 anos', function () {
  it('Deve retornar os dados corretos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    await runQuery('../../src/04_challenge.sql');
    const [result] = await runQuery('../../src/07_challenge.sql');
    expect(result).toStrictEqual([
      { id: 1, first_name: 'Terry', last_name: 'Medhurst', age: 31, email: 'atuny0@email.com', created_at: new Date('2022-12-31') },
      { id: 7, first_name: 'Demetrius', last_name: 'Corkery', age: 31, email: 'nloiterton8@email.com', created_at: new Date('2023-08-03') }
    ]);
  });
});
