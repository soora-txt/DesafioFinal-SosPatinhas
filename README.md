# 🐾 SOS Patinhas

## API para Gerenciamento de Abrigos de Animais em Situações de Enchente

---

## 1. Apresentação da Ideia

Este projeto foi desenvolvido a partir do desafio sobre enchentes no Brasil. Ao analisar o cenário, identifiquei que um dos problemas mais invisíveis nessas situações é o sofrimento dos animais de estimação: muitas vítimas se recusam a deixar suas casas justamente por não saberem para onde levar seus pets. Isso motivou a criação do **SOS Patinhas**, uma solução que centraliza informações sobre abrigos que aceitam animais durante emergências.

---

## 2. Problema Escolhido

**Falta de informação sobre abrigos que aceitam animais.**

Durante enchentes, abrigos emergenciais frequentemente não aceitam animais, o que faz com que seus tutores se recusem a sair de áreas de risco. Além disso, quando existem abrigos específicos para animais, essa informação não chega a quem precisa de forma rápida e confiável.

- **Dificuldade:** Tutores não sabem quais abrigos aceitam animais, quantas vagas existem e quais espécies são aceitas
- **Impactados:** Famílias em situação de evacuação que possuem pets, e voluntários que tentam coordenar o resgate de animais
- **Relevância:** Animais abandonados em áreas alagadas correm risco de vida, e tutores em situação de risco se negam a sair sem seus animais — o que coloca vidas humanas em perigo também

---

## 3. Solução Proposta

O **SOS Patinhas** é uma API que centraliza o cadastro de abrigos para animais e permite o registro dos animais que estão sendo acolhidos.

- **Como funciona:** Abrigos, ONGs, ou voluntários cadastram os espaços disponíveis com localização, vagas, tipos de animais aceitos e contato. Pessoas afetadas podem consultar os abrigos com vagas em tempo real.
- **Como resolve o problema:** Elimina a desinformação: com uma consulta simples é possível ver quais abrigos têm vaga e aceitam o tipo de animal do tutor, evitando deslocamentos desnecessários.
- **Diferencial:** Além dos abrigos, é possível registrar os animais acolhidos com nome do tutor e contato, facilitando a reunificação das famílias após a situação de emergência.

---

## 4. Estrutura do Sistema

### Back-end
API REST construída com **Node.js** e **Express**. Possui rotas completas (CRUD) para abrigos e animais, retornando dados em formato JSON.

### Banco de Dados
**SQLite** com duas tabelas:
- `abrigos` — armazena os espaços disponíveis (nome, localização, contato, vagas, tipos de animais aceitos, status)
- `animais` — armazena os animais acolhidos, com referência ao abrigo onde estão (chave estrangeira), facilitando o controle e a reunificação

### Front-end
A ser desenvolvido em etapa futura, consumindo esta API.

---

## 5. Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sos-patinhas.git

# Acesse a pasta
cd sos-patinhas

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

O servidor vai rodar em: `http://localhost:3000`

---

