const sqlite3 = require("sqlite3");
const { open } = require("sqlite");


//Criando uma função assíncrona
const criarBanco = async () => {


  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });


  //Criando a tabela de incidentes

  await db.exec(`
    CREATE TABLE IF NOT EXISTS incidentes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo_animal TEXT,           -- Cachorro, gato, cavalo...
        localizacao TEXT,           -- Onde foi achado (Rua, Bairro)
        descricao TEXT,             -- Detalhes da animal
        prioridade TEXT,            -- Baixa, Média, Alta
        identificacao TEXT,         -- Coleira, microchip, 
        data_registro TEXT,         -- Data em formato (ex: 16/03 16.03)
        hora_registro TEXT,         -- Hora que foi registrado
        status_resolucao TEXT DEFAULT 'Pendente'
    )
    `);

  console.log(
    "Banco de dados configurado: A tabela de registros urbanos está pronta!",
  );
};

 module.exports = { criarBanco } //Cria uma ponte que permite compartilhar funções entre os arquivos
