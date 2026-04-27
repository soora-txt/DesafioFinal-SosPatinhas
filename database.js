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

}

criarBanco()