const axios = require('axios');


function test_login(headers,body) {
  const url = 'https://kmcore-dev.koinmobility.com/KOIN/Login'
  return new Promise((resolve, reject) => {
    axios.post(url, body, { headers })
      .then((res) => {
        console.log('result', res.data); 
        resolve(res.data);
      })
      .catch((error) => {
        console.error('HTTP Error:', error);
        reject(error);
      });
  });
}

function getToken(headers,body){
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/token'
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res) 
       resolve(res);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('Get Token',error);
    })
  })
}

function startSession(headers,body){
  const url = ''
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res) 
       resolve(res);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('startSession',error);
    })
  })
}

function transfer(headers,body){
  const url = ''
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('transfer',error);
    })
  })
}

function updateCallBack(headers,body){
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/callback'
  return new Promise((resolve,reject)=>{
    axios.put(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('update error',error)
      reject('Update callback',error);
    })
  })
}

function getCallback(headers) {
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/callback';
  return new Promise((resolve, reject) => {
    axios.get(url, { headers })
      .then((res) => {
        console.log('result', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        console.log('getCallback error', error);
        reject(error);
      });
  });
}

function sampleCallback(headers,body){
  const url = ''
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('sample Callback',error);
    })
  })
}

function registerCallback(headers,body){
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/callback'
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('register Callback',error);
    })
  })
}

function jweEncrypt(headers,body){
  const url = ''
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('jweEncrypt',error);
    })
  })
}

function jweDecrypt(headers,body){
  const url = ''
  return new Promise((resolve,reject)=>{
    axios.get(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('Token error',error)
      reject('jweDecrypt',error);
    })
  })
}

function getBalance(playerId, providerCode, headers) {
  const url = `https://appkonnect-ardent-dev.koinpayments.com/app/v1/balance/${playerId}/${providerCode}`;  // Constructing the URL
  
  return new Promise((resolve, reject) => {
    axios.get(url, { headers })
      .then((res) => {
        console.log('Balance result', res.data);
        resolve(res.data);  // Resolve the promise with the result data
      })
      .catch((error) => {
        console.log('getBalance error', error.response ? error.response.data : error.message);
        reject(error);  // Reject the promise with the error
      });
  });
}

function uploadDocument(headers,body){
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/PlayerKycDoc'
  return new Promise((resolve,reject)=>{
    console.log("URL",url)
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('uploadDocument error',error)
      reject('uploadDocument',error);
    })
  })
}

function createCWA(headers,body){
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/createPlayer'
  return new Promise((resolve,reject)=>{
    axios.post(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('createCWA error',error)
      reject('createCWA',error);
    })
  })
}

function updateCWA(headers,body){
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/updatePlayer'
  return new Promise((resolve,reject)=>{
    axios.put(url,body,{headers})
    .then((res)=>{
       console.log('result',res.data) 
       resolve(res.data);
    })
    .catch((error)=>{
      console.log('updateCWA error',error)
      reject('updateCWA callback',error);
    })
  })
}

function getDocumentType(headers) {
  const url = 'https://appkonnect-ardent-dev.koinpayments.com/app/v1/getDocumentTypes';
  return new Promise((resolve, reject) => {
    axios.get(url, { headers })  // Only headers go here, no body in GET request
      .then((res) => {
        console.log('result', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        console.log('getDocumentType error', error);
        reject(error);  // Pass just the error
      });
  });
}


module.exports = {
  test_login,
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