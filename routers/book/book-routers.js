const express =require('express');
const router=express.Router();

//controller 
const BookController= require("../../controllers/book/book-controllers")

// add book category
router.use(express.json());

router.post("/add/book",BookController.addBookController)

// book  category edit`
router.use(express.json());

router.put("/update/book",BookController.editBookController);

// delete book
router.delete("/delete/bookbyid",BookController.deleteBookController)

 //get all books
 router.get("/get/allbooks",BookController.getAllBooksController)

 module.exports=router;