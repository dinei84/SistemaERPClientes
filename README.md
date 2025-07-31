# ERP01 - Sistema de Gestão Empresarial

Sistema de Gerenciamento Empresarial - Aplicação completa com backend, frontend e websocket para chat.

## Estrutura do Projeto

- `backend/`: API principal em Node.js/Express
- `backend/websocket/`: Servidor WebSocket para o chat
- `assets/`: Imagens e recursos estáticos
- `css/`: Estilos da aplicação
- `js/`: Scripts do frontend
- `pages/`: Páginas adicionais da aplicação

## Requisitos

- Node.js 14 ou superior
- Conta no Firebase (para autenticação)

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```
   npm run install:all
   ```
3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as variáveis com seus valores

4. Configure o Firebase:
   - Crie um projeto no Firebase
   - Gere uma chave de serviço (arquivo JSON)
   - Renomeie para `firebase-service-account.json` e coloque na pasta `backend/`

## Execução Local

```bash
# Iniciar o backend
npm run dev

# Iniciar o servidor WebSocket
npm run dev:websocket
```

## Deploy no Render

Esta aplicação está configurada para deploy no Render usando o arquivo `render.yaml`.

### Serviços configurados:

1. **API Principal (erp01-api)**
   - Tipo: Web Service
   - Ambiente: Node.js

2. **Servidor WebSocket (erp01-websocket)**
   - Tipo: Web Service
   - Ambiente: Node.js

3. **Frontend (erp01-frontend)**
   - Tipo: Static Site

### Passos para o Deploy

1. Crie uma conta no [Render](https://render.com/)
2. Conecte seu repositório Git
3. Use a opção "Blueprint" e selecione o arquivo `render.yaml`
4. Configure as variáveis de ambiente secretas no dashboard do Render:
   - `FIREBASE_DATABASE_URL`
   - Adicione o conteúdo do arquivo `firebase-service-account.json` como uma variável de ambiente

## Licença

ISC
