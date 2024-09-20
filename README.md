
![Logo](https://avatars.githubusercontent.com/u/76796043?s=200&v=4)




# konnect-app-plugin

App Konnect API documentation for third party apps.
## Installation
```
npm i konnect-app-plugin

or

yarn add konnect-app-plugin
```


## API Reference

#### getToken()

```
post
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. API url|
| `body` | `object` | **Required**. Body object containing user credentials for token generation |

#### init()

```
After getting the token 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**.API url|
| `header`      | `string` | **Required**.header|


#### registerCallback()

```
post 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|
| `body`      | `object` | **Required**.Register callback url|

#### updateCallback()

```
put 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|
| `body`      | `object` | **Required**.Update callback url.|

#### getCallback()

```
get 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|

#### getBalance()

```
get 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|

#### uploadDocument()

```
post 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|
| `body`      | `object` | **Required**.Upload kyc documents of a player|

#### createCWA()

```
post 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|
| `body`      | `object` | **Required**.Create CWA account.|

#### updateCWA()

```
put 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|
| `body`      | `object` | **Required**.Update CWA account.|

#### getDocumentType()

```
get 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `endpoint`      | `string` | **Required**.endpoint|
| `body`      | `object` | **Required**.get document types.|



## Usage/Examples

```javascript
declare var require: any;
const {
  getToken,
  registerCallback,
  init
} = require('konnect-app-plugin');

token:any


async getToken() {
  const url ='sample url'
  const body = 'sample body'
  try{
    const result = await getToken()
    this.token = reuslt.data.access_token
  }catch(err){
    console.log('error',err)
  }  
 
}

async init(){
    const headers = {
        Authorization: `Bearer ${this.token}`,
    };
    const url = 'sample url'
    try{
      const result = await init(url,headers);
      console.log('Success')
    }catch (error){
      console.error('Login failed:', error);
      this.errorToast(JSON.stringify(error));
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
      this.presentToast(JSON.stringify(result));
    } catch (error) {
      console.error('registerCallback failed:', error);
      this.errorToast(JSON.stringify(error));
    }
  }
```


## License

[ISC](https://choosealicense.com/licenses/isc/)

