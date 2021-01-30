const express = require('express');
const book = require('./Model/book');
const Book = require('./Model/book');
const router = express.Router();

router.get("/books",async (req,res)=>{

    const book = await Book.find();
    res.send(book);
});

router.post("/books",async (req,res)=>{

    try {
        const book = new Book({
            name:req.body.name,
            qty:req.body.qty,
            authors:req.body.authors,
            years:req.body.years
        });
        await book.save();
        res.send(book);
    } catch (error) {
       res.send(book); 
    }
    
});
router.patch("/books/:id",async(req,res)=>{
    try{
        const book = await Book.findOne({_id:req.params.id});
        book.name = req.body.name;

        // Book.findOneAndUpdate({filter},{update})
        await book.save();
        res.send(book);

    } catch(error){
        res.send(error);
    }
});



router.delete("/books/:id",async(req,res)=>{
    try{
    await Book.deleteOne({_id:req.params.id});
    res.send("deleted"); 
    }
    catch{
        res.send(error);
    }
});
module.exports = router;