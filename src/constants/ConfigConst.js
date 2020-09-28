export const API_URL = (process.env.NODE_ENV === 'production') ? `https://${process.env.REACT_APP_DOMAINNAME}` : 'http://localhost:1234'
