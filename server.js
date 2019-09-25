const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;
const allowedOrigins = [
  'http://localhost:3000',
  'https://master.dnsy5i4as8f52.amplifyapp.com'
];
app.use(
  cors({
    // origin: function(origin, callback) {
    //   // allow requests with no origin
    //   // (like mobile apps or curl requests)
    //   if (!origin) return callback(null, true);
    //   if (allowedOrigins.indexOf(origin) === -1) {
    //     var msg =
    //       "The CORS policy for this site does not " +
    //       "allow access from the specified Origin.";
    //     return callback(new Error(msg), false);
    //   }
    //   return callback(null, true);
    // }
    origin: '*'
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

//Backend API
// app.use('/api', require('./routes/api'));
// app.use('/db', require('./routes/db'));

// Connect to the Mongo DB

// const { MONGODB_URI } = require('./config');
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
