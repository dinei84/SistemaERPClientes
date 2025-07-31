# Servidor WebSocket para Chat do ERP01

Este é um servidor WebSocket simples para o sistema de chat da aplicação ERP01. Ele permite a comunicação em tempo real entre os usuários logados.

## Funcionalidades

- Comunicação em tempo real entre usuários
- Lista de usuários online
- Notificações de entrada e saída de usuários
- Integração opcional com Firebase Authentication para verificação de tokens

## Configuração

1. Instale as dependências:
   ```
   npm install
   ```

2. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.example` para `.env`
   - Ajuste as variáveis conforme necessário

3. (Opcional) Configure o Firebase Admin SDK:
   - Copie o arquivo de credenciais do Firebase para `../firebase-service-account.json`
   - Isso permitirá a verificação de tokens de autenticação

## Executando o servidor

```
# Modo de desenvolvimento (com hot-reload)
npm run dev

# Modo de produção
npm start
```

## Protocolo de Comunicação

O servidor utiliza mensagens JSON para comunicação. Cada mensagem tem um campo `type` que define o tipo de mensagem.

### Tipos de mensagens enviadas pelo cliente:

- `user_info`: Informações do usuário que acabou de se conectar
- `chat_message`: Mensagem de chat enviada pelo usuário
- `user_logout`: Notificação de que o usuário está saindo

### Tipos de mensagens enviadas pelo servidor:

- `user_list`: Lista de usuários online
- `user_joined`: Notificação de que um usuário entrou
- `user_left`: Notificação de que um usuário saiu
- `chat_message`: Mensagem de chat (repassada para todos os clientes)
- `error`: Mensagem de erro