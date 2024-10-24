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
      const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
      reject(errorMessage);
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
      const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
      reject(errorMessage);
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
        const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
        reject(errorMessage);
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
      console.log('RegisterCallback error',error)
      const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
      reject(errorMessage);
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
        console.log('getBalance error', error);
        const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
        reject(errorMessage);
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
      const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
      reject(errorMessage);
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
      const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
      reject(errorMessage);
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
      const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
      reject(errorMessage);
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
        const errorMessage = error.response && error.response.data && error.response.data.data  ? error.response.data.data : error.message;
        reject(errorMessage);
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
