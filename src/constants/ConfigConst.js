export const API_URL = (process.env.NODE_ENV === 'production') ? `https://${process.env.PROD_DOMAINNAME}` : 'http://localhost:1234'
