var md5 = require('md5');

export const ts = new Date().getTime();

export const hash = md5(ts+''+process.env.REACT_APP_PRIVATE_API_KEY+''+process.env.REACT_APP_API_KEY);
