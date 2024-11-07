const crypto = require('crypto');
const fs = require('fs');
const packageData = require('./package.json');

try {
  // Read the public key from the PEM file
  const publicKey = fs.readFileSync('publicKey.pem', 'utf8');

  // Read the signature from the text file
  const signature = fs.readFileSync('signature.txt', 'utf8');

  // Re-create the data that was signed (same as in sign.js)
  const dataToVerify = JSON.stringify({
    name: packageData.name,
    version: packageData.version,
  });

  // Verify the signature
  const verify = crypto.createVerify('sha256');
  verify.update(dataToVerify);
  verify.end();

  const isVerified = verify.verify(publicKey, signature, 'base64');

  if (isVerified) {
    console.log('Signature is valid. The package has not been tampered with.');
  } else {
    console.log('Signature is invalid. The package may have been tampered with.');
  }
} catch (error) {
  console.error('Error during verification:', error.message);
}
