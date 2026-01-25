var express = require('express');
const ApiError = require('../utils/Apierror');
const Book = require('../models/book.model');
const ApiResponse = require('../utils/Apiresponse');
var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {

  try {
    const {title,author,publishyear} = req.body
  
    if (!title || !author || !publishyear) {
      throw new ApiError(400,"all fields are required")
    }
    const existedbook = await Book.findOne({
      $or: [{title},{author}]
    })
  
    if (existedbook) {
      throw new ApiError(400,"book already exists")
    }
  
    const createdbook = await Book.create(
      {
        title,
        author,
        publishyear
      }
    )
  
    if (!createdbook) {
      throw new ApiError(400,"something went wrong while registering")
    }
  
    return res.status(201).json(
      new ApiResponse(200,createdbook,"book registered successfully")
    )
  } catch (error) {
    console.log(error)
  }


});

module.exports = router;
