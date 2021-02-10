import dotenv from 'dotenv';
let result = dotenv.config();
if (process.env.NODE_ENV.toLowerCase() === 'production') {
  result = dotenv.config({ path: 'dist/.env' });
}

if (result.error) {
  throw result.error;
}

console.log(result.parsed)
