const PRODUCTION_API_BASE_URL = "";
const DEVELOPMENT_API_BASE_URL = "http://localhost:3001";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? PRODUCTION_API_BASE_URL
    : DEVELOPMENT_API_BASE_URL;

module.exports = {
  PRODUCTION_API_BASE_URL,
  DEVELOPMENT_API_BASE_URL,
  API_BASE_URL,
};



// - [ ] Create a `constants.js` file at the root of the 
// project that exports the following variables:
//   - [ ] `PRODUCTION_API_BASE_URL` - set to whatever URL 
//   the production API is deployed at
//   - [ ] `DEVELOPMENT_API_BASE_URL` - set to `"http://localhost:3001"` 
//   for development
//   - [ ] `API_BASE_URL` - If `process.env.NODE_ENV` is `production`, 
//   set this to `PRODUCTION_API_BASE_URL`, 
//   otherwise set it to `DEVELOPMENT_API_BASE_URL`