const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = {
  email: String,
  passward: String
}

const User = new mongoose.model('User', userSchema);

// app.get('/', (req, res) => res.render('Hello React'));

app.post('/', (req, res) => {
  const newUser = new User({
    email: req.body.username,
    passward: req.body.passward
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('http://localhost:3000/');
    }
  });
});


app.listen(port, (req, res) => {
  console.log('Server is running on port ' + port);
});