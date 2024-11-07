// generateKeys.js
const crypto = require('crypto');
const fs = require('fs');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// Save the keys to files
fs.writeFileSync('privateKey.pem', privateKey);
fs.writeFileSync('publicKey.pem', publicKey);

console.log('Key pair generated and saved to privateKey.pem and publicKey.pem');
