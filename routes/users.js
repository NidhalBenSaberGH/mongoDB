const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');

/* GET users listing. */

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  console.log('Finding user Id: ', userId);
  UserModel.findOne({_id: userId}, (err, user) => {
    if (err)
      return console.error('Error findng user', userId);
    
    res.send(user);
  })
})

router.get('/', function(req, res, next) {
  UserModel.find((err, users) => {
    res.send(users);
  });
});

router.post('/', (req, res, next) =>  {
  console.log('Data', req.body);
  let data = req.body;
  let user = new UserModel({
    name: data.name,
    password: data.password,
    email: data.email
  });

  user.save((err, newUser) => {
    if (err)
      return console.error('Error Creating new user: ', err);
    
      console.log('New user created: ', newUser);
      res.send({
        success: true,
        user: newUser
      });
  })
});

router.put('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  console.log('User Id', userId);
  UserModel.update({_id: userId}, {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  }, err => {
    if (err)
      return console.error('Error Updating user: ', err);

    console.log('User ', userId, 'updated successfully');
    res.send({
      success: true,
      message: 'User updated sucessfully'
    });
  });
});

router.delete('/:userId', (req, res, next) => {
  const userId = req.params.userId;

  UserModel.deleteOne({_id: userId}, err => {
    if (err)
      return console.error('Error deleting user ' + userId);
    
    res.send({
      success: true,
      message: 'User deleted successfully'
    })
  })
})

module.exports = router;
