const connection = require('./utils/connection');
const { runQuery } = require('./utils/executeQuery');

describe('03 - Escreva uma query que cria a tabela `users`', function () {
  it('A tabela `users` deve ser criada com sucesso', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "users"');
    expect(result.length).toBe(1);
  });
  
  it('A tabela `users` deve ter a coluna `id` e esta deve ser uma chave primária do tipo inteiro, não pode aceitar valores nulos e deve ser auto incrementável', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');
    expect(tableColumns).toContainEqual({
      Field: 'id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: 'auto_increment'
    });
  });
  
  it('A tabela `users` deve ter a coluna `first_name` e esta deve ser um string de 100 caracteres e não pode aceitar valores nulos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');
    
    expect(tableColumns).toContainEqual({
      Field: 'first_name',
      Type: 'varchar(100)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
         
  it('A tabela `users` deve ter a coluna `last_name` e esta deve ser um string de 100 caracteres e não pode aceitar valores nulos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');
    
    expect(tableColumns).toContainEqual({
      Field: 'last_name',
      Type: 'varchar(100)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
        
  it('A tabela `users` deve ter a coluna `email` e esta deve ser um string de 60 caracteres e pode aceitar valores nulos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');
    
    expect(tableColumns).toContainEqual({
      Field: 'email',
      Type: 'varchar(60)',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
        
  it('A tabela `users` deve ter a coluna `age` e esta deve ser um numero inteiro e pode aceitar valores nulos', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');
    
    expect(tableColumns).toContainEqual({
      Field: 'age',
      Type: 'int',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });
          
  it('A tabela `users` deve ter a coluna `created_at` e esta deve ser do tipo `DATE`, não pode aceitar valores nulos e deve ter como valor padrão a data atual', async function () {
    await connection.query('DROP DATABASE IF EXISTS trybe_hotel;');
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    await runQuery('../../src/03_challenge.sql');
    const [tableColumns] = await connection.query('SHOW COLUMNS FROM users');

    expect(tableColumns).toContainEqual({
      Field: 'created_at',
      Type: 'date',
      Null: 'NO',
      Key: '',
      Default: 'now()',
      Extra: 'DEFAULT_GENERATED'
    });
  });
});
          
