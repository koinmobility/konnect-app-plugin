const crypto = require('crypto');
const fs = require('fs');
const packageData = require('./package.json');

// Load the existing private key from the file
const privateKey = fs.readFileSync('privateKey.pem', 'utf8');

// Create the data to sign (package name and version)
const dataToSign = JSON.stringify({
  name: packageData.name,
  version: packageData.version,
});

// Sign the data
const sign = crypto.createSign('sha256');
sign.update(dataToSign);
sign.end();
const signature = sign.sign(privateKey, 'base64');

// Save the signature to a file
fs.writeFileSync('signature.txt', signature);

console.log('Signature created and saved to signature.txt');
