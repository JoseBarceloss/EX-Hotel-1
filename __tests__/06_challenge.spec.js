const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('06 - Escreva uma query que aplica os apelidos `primeiro_nome` e `ultimo_nome` respectivamente para as colunas `first_name` e `last_name` da tabela `users`', function () {
  it('Deve retornar os dados corretos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    await runQuery('../../src/04_challenge.sql');
    const [result] = await runQuery('../../src/06_challenge.sql');
    expect(result).toStrictEqual([
      { "primeiro_nome": "Terry", "ultimo_nome": "Medhurst" },
      { "primeiro_nome": "Miles", "ultimo_nome": "Hills" },
      { "primeiro_nome": "Sheldon", "ultimo_nome": "Hills" },
      { "primeiro_nome": "Mavis", "ultimo_nome": "Abbott" },
      { "primeiro_nome": "Oleta", "ultimo_nome": "Schultz" },
      { "primeiro_nome": "Ewell", "ultimo_nome": "Mueller" },
      { "primeiro_nome": "Demetrius", "ultimo_nome": "Corkery" },
      { "primeiro_nome": "Eleanora", "ultimo_nome": "Price"  }
    ]);
  });
});
