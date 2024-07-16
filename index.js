

const { CapacitorHttp } = require('@capacitor/core'); 




function test_login_2(LoginType,Password,MobileNumber) {
  const headers = {
    ProgramKey: 'ARDENTQA2023',
    ApiKey: 'ARDENTQA2023PROP',
    'Content-Type': 'application/json',
    Authorization: 'Basic YWRtaW46QGRtMW4xMjM0',
  };

  const body = {
    MobileNumber: MobileNumber,
    Password: Password,
    LoginType: LoginType,
  };

  const options = {
    method: 'POST',
    url: 'https://kmcore-dev.koinmobility.com/KOIN/Login',
    headers: headers,
    data: body,
  };

  return new Promise((resolve, reject) => {
    CapacitorHttp.post(options).then(
      (res) => {
        console.log('result', res);
        resolve(res);
      },
      (error) => {
        console.error('HTTP Error:', error);
        reject(error);
      }
    );
  });
 
}






function test_login(username, password) {
  const options = {
    method: 'GET',
    url: this.url,
    params: { P01: username, P02: password, method: 'login' },
  };

  return new Promise((resolve, reject) => {
    CapacitorHttp.get(options).then(
      (res) => {
        console.log('result', res);
        resolve(res);
      },
      (error) => {
        console.error('HTTP Error:', error);
        reject(error);
      }
    );
  });
}

function testCall(data) {
  return `Hello, ${data}!`;
}

function login(username, password) {
  
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === 'password') {
      resolve( 'Login successful!');
    } else {
      reject( 'Invalid credentials');
    }
  });

}

function logout() {
  
  return 'Logged out successfully';
}

function register(username, password) {
 
  return `User ${username} registered successfully!`;
}

module.exports = {
  testCall,
  test_login,
  test_login_2,
  login,
  logout,
  register,
};