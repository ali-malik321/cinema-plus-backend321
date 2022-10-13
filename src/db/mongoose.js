const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://snexus:snexus123@cluster0.sldwufz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
