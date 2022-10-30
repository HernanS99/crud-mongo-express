const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGO_DB1)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error))