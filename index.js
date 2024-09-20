const axios = require('axios');

let apiConfig = {
  baseURL: '',
  defaultHeaders: {}
};

// Initialize the API configuration
function init(baseURL, headers) {
  apiConfig.baseURL = baseURL;
  apiConfig.defaultHeaders = headers;
  // console.log('apiConfig',apiConfig)
}

function testLogin(endpoint, body) {
  return axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res) => {
      // console.log('result', res.data);
      return res.data;
    })
    .catch((error) => {
      console.error('HTTP Error:', error);
      throw error;
    });
}

function getToken(url,body){
  return new Promise((resolve,reject)=>{
    axios.post(url, body)
    .then((res)=>{
      //  console.log('result',res) 
       resolve(res);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('Get Token',error);
    })
  })
}

function startSession(endpoint, body) {
  return axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res) => {
      // console.log('result', res.data);
      return res.data;
    })
    .catch((error) => {
      console.error('Start Session Error:', error);
      throw error;
    });
}

function transfer(endpoint, body) {
  return axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res) => {
      // console.log('result', res.data);
      return res.data;
    })
    .catch((error) => {
      console.error('Transfer Error:', error);
      throw error;
    });
}

function updateCallBack(endpoint,body){
   return new Promise((resolve,reject)=>{
    axios.put(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res)=>{
      //  console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('update error',error)
      reject('Update callback',error);
    })
  })
}

function getCallback(endpoint) {
  return new Promise((resolve, reject) => {
    axios.get(apiConfig.baseURL + endpoint, { headers: apiConfig.defaultHeaders })
      .then((res) => {
        // console.log('result', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        console.log('getCallback error', error);
        reject(error);
      });
  });
}

function sampleCallback(endpoint, body) {
  return new Promise((resolve,reject)=>{
    axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res)=>{
      //  console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('sample Callback',error);
    })
  })
}

function registerCallback(endpoint, body) {
  return new Promise((resolve,reject)=>{
    axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res)=>{
      //  console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('register Callback',error);
    })
  })
}

function jweEncrypt(endpoint, body) {
  return axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res) => {
      // console.log('result', res.data);
      return res.data;
    })
    .catch((error) => {
      console.error('JWE Encrypt Error:', error);
      throw error;
    });
}

function jweDecrypt(endpoint) {
  return axios.get(apiConfig.baseURL + endpoint, { headers: apiConfig.defaultHeaders })
    .then((res) => {
      // console.log('result', res.data);
      return res.data;
    })
    .catch((error) => {
      console.error('JWE Decrypt Error:', error);
      throw error;
    });
}

function getBalance(endpoint) {
  return new Promise((resolve, reject) => {
    axios.get(apiConfig.baseURL + endpoint, { headers: apiConfig.defaultHeaders })
      .then((res) => {
        // console.log('Balance result', res.data);
        resolve(res.data);  
      })
      .catch((error) => {
        console.log('getBalance error', error.response ? error.response.data : error.message);
        reject(error);  
      });
  });
}

function uploadDocument(endpoint, body) {
  return new Promise((resolve,reject)=>{
    axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res)=>{
      //  console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('uploadDocument error',error)
      reject('uploadDocument',error);
    })
  })
}

function createCWA(endpoint, body) {
  return new Promise((resolve,reject)=>{
    axios.post(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res)=>{
      //  console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('createCWA error',error)
      reject('createCWA',error);
    })
  })
}

function updateCWA(endpoint, body) {
  return new Promise((resolve,reject)=>{
    axios.put(apiConfig.baseURL + endpoint, body, { headers: apiConfig.defaultHeaders })
    .then((res)=>{
      //  console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('updateCWA error',error)
      reject('updateCWA callback',error);
    })
  })
}

function getDocumentType(endpoint) {
  return new Promise((resolve, reject) => {
    axios.get(apiConfig.baseURL + endpoint, { headers: apiConfig.defaultHeaders }) 
      .then((res) => {
        // console.log('result', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        console.log('getDocumentType error', error);
        reject(error); 
      });
  });
}

module.exports = {
  init,
  testLogin,
  getToken,
  startSession,
  transfer,
  updateCallBack,
  getCallback,
  sampleCallback,
  registerCallback,
  jweEncrypt,
  jweDecrypt,
  getBalance,
  uploadDocument,
  createCWA,
  updateCWA,
  getDocumentType
};
