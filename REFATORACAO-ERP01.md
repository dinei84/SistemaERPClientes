# Refatoração para ERP01 - Sistema de Gestão Empresarial

## Resumo das Alterações

Este documento descreve todas as alterações realizadas para transformar o projeto original em um novo produto chamado **ERP01**.

## Configurações do Firebase Atualizadas

### 1. Configuração Principal (js/firebase-config.js)
- **Projeto Antigo**: `planilha-8938f`
- **Projeto Novo**: `erp01-bd131`
- **API Key**: `AIzaSyA38tuG--pUJEnSgVGHl7BC5DJwSsC_UVM`
- **Auth Domain**: `erp01-bd131.firebaseapp.com`
- **Project ID**: `erp01-bd131`
- **Storage Bucket**: `erp01-bd131.firebasestorage.app`
- **Messaging Sender ID**: `108591567029`
- **App ID**: `1:108591567029:web:cc89881c5b690eb1806efc`
- **Measurement ID**: `G-HMFXS45537`

### 2. Backend Firebase Admin (backend/config/firebase-admin.js)
- **Database URL**: `https://erp01-bd131-default-rtdb.firebaseio.com`

### 3. WebSocket Firebase (backend/websocket/)
- **server.js**: URL do banco atualizada
- **setup-websocket.js**: URL do banco atualizada

## Arquivos de Configuração Atualizados

### Package.json
- **Nome**: `sistemag10-araquari` → `erp01`
- **Descrição**: `Sistema G10 Araquari - Aplicação completa` → `ERP01 - Sistema de Gestão Empresarial`

### Backend Package.json
- **Nome**: `backend` → `erp01-backend`
- **Descrição**: Atualizada para refletir o ERP01

### WebSocket Package.json
- **Nome**: `chat-websocket-server` → `erp01-websocket-server`
- **Descrição**: Atualizada para refletir o ERP01

## URLs de Produção Atualizadas

### Configuração Frontend (js/config.js)
- **API URL**: `https://sistemag10araquaribackend.onrender.com/api` → `https://erp01-backend.onrender.com/api`
- **WebSocket URL**: `wss://sistemag10araquaribackend.onrender.com` → `wss://erp01-backend.onrender.com`

### API Frontend (js/api.js)
- **BASE_URL**: `https://sistemag10araquaribackend.onrender.com/api` → `https://erp01-backend.onrender.com/api`

## Arquivos de Deploy Atualizados

### Render.yaml
- **API Principal**: `sistemag10-api` → `erp01-api`
- **WebSocket**: `sistemag10-websocket` → `erp01-websocket`
- **Frontend**: `sistemag10-frontend` → `erp01-frontend`

## Documentação Atualizada

### README.md
- **Título**: `Sistema G10 Araquari` → `ERP01 - Sistema de Gestão Empresarial`
- **Descrição**: Atualizada para refletir o novo sistema
- **Serviços**: Nomes atualizados para ERP01

### Backend README.md
- **Título**: `Backend com WebSocket Integrado` → `Backend do ERP01 com WebSocket Integrado`
- **URLs**: Atualizadas para `erp01-backend.onrender.com`

### WebSocket README.md
- **Título**: `Servidor WebSocket para Chat` → `Servidor WebSocket para Chat do ERP01`
- **Descrição**: Atualizada para refletir o ERP01

## Interface Atualizada

### Páginas HTML
- **index.html**: Título e descrição atualizados para ERP01
- **login.html**: Título atualizado para "ERP01 - Login"
- **dashboard.html**: Título atualizado para "ERP01 - Dashboard"

## Arquivo de Exemplo Firebase
- **firebase-service-account.example.json**: Project ID atualizado para `erp01-bd131`
- **Client Email**: Atualizado para `firebase-adminsdk-xxxxx@erp01-bd131.iam.gserviceaccount.com`

## Próximos Passos

1. **Configurar Firebase Admin SDK**: 
   - Baixar o arquivo de credenciais do novo projeto Firebase
   - Renomear para `firebase-service-account.json`
   - Colocar na pasta `backend/`

2. **Configurar Variáveis de Ambiente**:
   - `FIREBASE_DATABASE_URL`: `https://erp01-bd131-default-rtdb.firebaseio.com`

3. **Deploy**:
   - Fazer deploy no Render usando o arquivo `render.yaml` atualizado
   - Configurar as variáveis de ambiente no dashboard do Render

4. **Testes**:
   - Verificar se a autenticação está funcionando
   - Testar todas as funcionalidades do sistema
   - Verificar se o WebSocket está funcionando corretamente

## Observações Importantes

- Todas as referências ao projeto antigo foram removidas
- O sistema mantém a mesma funcionalidade, apenas com nova identidade
- As URLs de produção foram atualizadas para refletir o novo nome
- A documentação foi completamente atualizada
- O sistema está pronto para ser apresentado como um novo produto

## Status da Refatoração

✅ **CONCLUÍDA** - Todas as alterações necessárias foram realizadas com sucesso. 