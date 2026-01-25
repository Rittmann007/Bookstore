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
      $and: [{title},{author}]
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

//get all books
router.get('/Books',async function(req,res) {
 try {
   const books = await Book.find({})

   return res.status(201).json(
    new ApiResponse(200,{count: books.length , books},"books fetched successfully")
   )
   
 } catch (error) {
  throw new ApiError(400,error.message)
 }
})

//get one book
router.get('/Books/:id',async function(req,res) {
  const book = await Book.findById(req.params.id)

  if (!book) {
    throw new ApiError(400,"book doesnt exists")
  }

  return res.status(201).json(
    new ApiResponse(200,book,"book fetched successfully")
  )
})

module.exports = router;
