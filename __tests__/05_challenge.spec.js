const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('05 - Escreva uma query que retorna todos os dados da tabela `users`', function () {
  it('Deve retornar os dados corretos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    await runQuery('../../src/04_challenge.sql');
    const [result] = await runQuery('../../src/05_challenge.sql');
    expect(result).toEqual([
      { id: 1, first_name: 'Terry', last_name: 'Medhurst', age: 31, email: 'atuny0@email.com', created_at: new Date('2022-12-31') },
      { id: 2, first_name: 'Miles', last_name: 'Hills', age: 17, email: 'rshawe2@dotmail.com', created_at: new Date('2023-05-10') },
      { id: 3, first_name: 'Sheldon', last_name: 'Hills', age: 18, email: 'num41@email.com', created_at: new Date('2022-12-25') },
      { id: 4, first_name: 'Mavis', last_name: 'Abbott', age: 60, email: 'kmeus4@email.com', created_at: new Date('2022-06-01') },
      { id: 5, first_name: 'Oleta', last_name: 'Schultz', age: 29, email: 'dpettegre6@email.com', created_at: new Date('2023-09-25') },
      { id: 6, first_name: 'Ewell', last_name: 'Mueller', age: 15, email: 'ggude7@dotmail.com', created_at: new Date('2019-09-02') },
      { id: 7, first_name: 'Demetrius', last_name: 'Corkery', age: 31, email: 'nloiterton8@email.com', created_at: new Date('2023-08-03') },
      { id: 8, first_name: 'Eleanora', last_name: 'Price', age: 39, email: 'umcgourty9@dotmail.com', created_at: new Date('2018-01-16') },
    ]);
  });
});
