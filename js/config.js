
const CONFIG = {  
  PRODUCTION: {
    API_URL: 'https://erp01-backend.onrender.com/api',
    WEBSOCKET_URL: 'wss://erp01-backend.onrender.com'
  },
  
  DEVELOPMENT: {
    API_URL: 'http://localhost:5000/api',
    WEBSOCKET_URL: 'ws://localhost:8080'
  },
  
  
  ENVIRONMENT: 'PRODUCTION' 
};

export default {
  API_URL: CONFIG[CONFIG.ENVIRONMENT].API_URL,
  WEBSOCKET_URL: CONFIG[CONFIG.ENVIRONMENT].WEBSOCKET_URL
};