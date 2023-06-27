const axios = require('axios');
const { API_BASE_URL } = require('./constants.js')

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }

    setToken(token) {
        this.token = token
    }

    async request() {

    }
}

export default new ApiClient();





// - [X] In the `apiClient.js` file, import the `axios` package and 
// the `API_BASE_URL` constant from the `constants.js` file.
// - [X] Define a new class in that file called `ApiClient`.
//   - [X] Give it a constructor function that accepts a single 
//   parameter - `remoteHostUrl`. The constructor should attach the 
//   `remoteHostUrl` parameter to a new instance with `this.remoteHostUrl = remoteHostUrl`. 
//   It should also set `this.token = null`.
//   - [X] Export default a new instance of the `ApiClient` class.
//   - [X] Add an additional method called `setToken` that accepts a 
//   single parameter - `token` and attaches it to the instance.
//   - [ ] Create a utility method called `request` that uses `axios` to issue HTTP requests
//   - [ ] Add a `login` method that uses the `request` method to send 
//   an HTTP request to the `auth/login` endpoint
//   - [ ] Add a `signup` method that uses the `request` method to send
//    an HTTP request to the `auth/register` endpoint
//   - [ ] Add a `fetchUserFromToken` method that uses the `request` 
//   method to send an HTTP request to the `auth/me` endpoint
//   - [ ] **Add as many other methods as needed when making API requests.**