<div align="center">
  <img src="https://avatars.githubusercontent.com/u/76796043?s=200&v=4" alt="konnect-app-plugin" width="200">
</div>

# konnect-app-plugin


App Konnect API documentation for third party apps.

## Installation

```
npm i konnect-app-plugin

or

yarn add konnect-app-plugin
```



## Usage

### Importing the Module

```javascript
const { init } = require('konnect-app-plugin');

```

### Initialize the API Configuration

Call the `init` function to set the base URL for the API:

```javascript
async init(){
    const url = 'sample url'
    try{
      const result = await init(url);
      console.log('Success')
    }catch (error){
      console.error('Login failed:', error);
      this.errorToast(JSON.stringify(error));
    }
  } 
```

### Available Functions

#### `getToken(endpoint, body)`
Fetches an access token and updates the `Authorization` header.

- **Parameters:**
  - `endpoint` (string): The endpoint for the token request.
  - `body` (object): The request payload.
- **Returns:** A Promise resolving to the API response.

#### `updateCallBack(endpoint, body)`
Sends a PUT request to update data.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
  - `body` (object): The request payload.
- **Returns:** A Promise resolving to the API response.

#### `getCallback(endpoint)`
Sends a GET request to fetch data.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
- **Returns:** A Promise resolving to the API response.

#### `registerCallback(endpoint, body)`
Sends a POST request to register data.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
  - `body` (object): The request payload.
- **Returns:** A Promise resolving to the API response.

#### `getBalance(endpoint)`
Fetches the balance using a GET request.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
- **Returns:** A Promise resolving to the API response.

#### `uploadDocument(endpoint, body)`
Uploads a document using a POST request.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
  - `body` (object): The request payload.
- **Returns:** A Promise resolving to the API response.

#### `createCWA(endpoint, body)`
Creates a CWA (Custom Web Application) using a POST request.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
  - `body` (object): The request payload.
- **Returns:** A Promise resolving to the API response.

#### `updateCWA(endpoint, body)`
Updates a CWA using a PUT request.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
  - `body` (object): The request payload.
- **Returns:** A Promise resolving to the API response.

#### `getDocumentType(endpoint)`
Fetches document types using a GET request.

- **Parameters:**
  - `endpoint` (string): The API endpoint.
- **Returns:** A Promise resolving to the API response.

### Example Usage

```javascript
declare var require: any;
const {
  getToken,
  registerCallback,
  init
} = require('konnect-app-plugin');


 async init(){
    const url = 'sample url'
    try{
      const result = await init(url);
      console.log('Success')
    }catch (error){
      console.error('Login failed:', error);
      this.errorToast(JSON.stringify(error));
    }
  } 

 async getToken() {
    const endpoint = 'sample endpoint'
    const body = {
      USERNAME: 'sample username',
      PASSWORD: 'sample password',
    };
    try {
      const result = await getToken(endpoint,body);     
      console.log('result',result);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }



async registerCallback() {
    const endpoint='sample endpoint'
    const body = {
      body: 'sample body',
    };
    try {
      const result = await registerCallback(endpoint,body);
      console.log('registerCallback', result);

    } catch (error) {
      console.error('registerCallback failed:', error);
    }
  }
```

## Error Handling

All functions handle errors by logging them to the console and rejecting the Promise with an error message. The error message includes the response data if available, or the error message otherwise.

## License

This project is licensed under the MIT License. See the [ISC](https://choosealicense.com/licenses/isc/) file for details.
