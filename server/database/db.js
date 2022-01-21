const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToMongo = () =>{
mongoose
  .connect(process.env.mongoURI)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.log('Database connection error', err);
  });
}
module.exports = connectToMongo;
