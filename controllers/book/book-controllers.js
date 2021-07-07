// add book controller
const {roommodel} = require('../../models/book/book-model');

exports.addBookController=(req,res)=>{
    const data= req.body;
    if(Object.keys(data).length==5){
        const room= new roommodel({
            bookname:data.bookname,
            price:data.price,
            author:data.author,
            language:data.language,
            aboutAbout:data.aboutAbout
        });
    
        room.save().then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send('unable to save users');
        });

    }
    else{
        res.send(" please fill body all field ")
    }

}

exports.editBookController=(req,res)=>{
    const _id= req.query._id;
    const data=req.body;
    if(data.bookname&&data.price&&data.author&&data.language&&data.aboutAbout){


        roommodel.findByIdAndUpdate(
                        
            {_id:_id},
       
            { $set :{ 
                
                bookname:data.bookname,
                price:data.price,
                author:data.author,
                language:data.language,
                aboutAbout:data.aboutAbout}  } ,
          
            {new:true}

            )
            .then((data)=>{
                console.log("then")
                res.status(200).send(data);
            })
            .catch((err)=>{
                console.log("catch")

                 res.status(500).send("somthing went weong please try again letar");
            })
    }
    else{
        res.send(" fill all body field")
    }


}

exports.deleteBookController=(req,res)=>{
    const myid=req.query._id;
    if(myid){
       roommodel.findByIdAndDelete({_id:myid})
       .then((data)=>{
           if(!data){
               res.send("data not find")
           }
           else{
               res.send("deleted succesfully ")
           }
       })
       .catch((err)=>{
           res.send("somthing went wrong please try again later")
       })
    }

    else{
       res.send("invalied id")
    }
   
}

exports.getAllBooksController=(req,res)=>{
    roommodel.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send("somthing went wrong please try again later")
    })
}