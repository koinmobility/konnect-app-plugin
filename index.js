const axios = require('axios');

let apiConfig = {
  baseURL: '',
  defaultHeaders: {}
};

// Initialize the API configuration
function init(baseURL) {
  apiConfig.baseURL = baseURL;
  // apiConfig.defaultHeaders = headers;
  // console.log('apiConfig',apiConfig)
}

function getToken(endpoint,body){
  return new Promise((resolve,reject)=>{
    axios.post(apiConfig.baseURL + endpoint, body)
    .then((res)=>{
       apiConfig.defaultHeaders['Authorization'] = `Bearer ${res.data.data.access_token}`;
       resolve(res);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('Get Token',error);
    })
  })
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
  getToken,
  updateCallBack,
  getCallback,
  registerCallback,
  getBalance,
  uploadDocument,
  createCWA,
  updateCWA,
  getDocumentType
};
