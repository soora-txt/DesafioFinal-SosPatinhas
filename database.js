const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

// Criando uma função assíncrona
const criarBanco = async () => {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });


  // ============================
  // Criando a tabela de abrigos
  // ============================

  await db.exec(`
    CREATE TABLE IF NOT EXISTS abrigos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_abrigo TEXT,                     -- Nome do abrigo ou responsável
        localizacao TEXT,                     -- Endereço completo
        contato TEXT,                         -- Telefone ou WhatsApp para contato
        capacidade_total INTEGER,             -- Quantos animais o abrigo suporta no total
        vagas_disponiveis INTEGER,            -- Quantas vagas ainda estão livres
        tipos_aceitos TEXT,                   -- Quais animais aceita (Ex: Cães, Gatos, Ambos)
        observacoes TEXT,                     -- Informações extras (Ex: aceita animais grandes)
        data_cadastro TEXT,                   -- Data do cadastro
        hora_cadastro TEXT,                   -- Hora do cadastro
        status TEXT DEFAULT 'Ativo'           -- Banco define como 'Ativo' automaticamente
    )
  `);

  console.log("Banco de dados configurado: Tabela de abrigos está pronta!");


  // ============================
  // Insert - C do CRUD - CREATE
  // ============================

  const checagem = await db.get(`SELECT COUNT(*) AS total FROM abrigos`);

  if (checagem.total === 0) {
    await db.exec(`
      INSERT INTO abrigos(nome_abrigo, localizacao, contato, capacidade_total, vagas_disponiveis, tipos_aceitos, observacoes, data_cadastro, hora_cadastro) VALUES
      ("Abrigo Lar Seguro", "Rua das Palmeiras, 200, Bairro Alto", "(44) 99999-1111", 20, 8, "Cães e Gatos", "Aceita animais de todos os portes", "27/04/2026", "08:00"),
      ("ONG Patinhas Felizes", "Avenida Central, 45, Centro", "(44) 98888-2222", 15, 0, "Gatos", "Lotado no momento", "27/04/2026", "09:30"),
      ("Canil Municipal", "Rua do Parque, 800, Jardim das Flores", "(44) 3333-4444", 50, 22, "Cães", "Aceita apenas cães. Vagas para porte médio e grande", "27/04/2026", "10:00"),
      ("Casa da Dona Lúcia", "Rua Sete, 12, Vila Nova", "(44) 97777-5555", 8, 3, "Cães e Gatos", "Abrigo temporário em residência particular", "27/04/2026", "11:15")
    `);

    console.log("Abrigos municipais inseridos com sucesso!");
  } else {

    console.log(
      `Banco com ${checagem.total} abrigo(s) cadastrado(s)`,
    );
  }

  // ============================
  // Select - R do CRUD - READ
  // ============================
 
  const todosOsAbrigos = await db.all("SELECT * FROM abrigos");
  console.table(todosOsAbrigos);
 
  // Exemplo de SELECT específico — buscar só os que têm vaga
  const abrigosComVaga = await db.all(
    `SELECT * FROM abrigos WHERE vagas_disponiveis > 0`
  );

  console.log(`\nAbrigos com vagas disponíveis:`);
  console.table(abrigosComVaga);

};

criarBanco()