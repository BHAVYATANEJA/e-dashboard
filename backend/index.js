const express = require('express');
const user= require('./db/schema');
const product = require('./db/product');
const cors=require('cors');
const config = require('./db/config')
const app = express();
app.use(express.json())
app.use(cors());


app.post('/register',async (req,resp)=>{
const User = new user(req.body);
const result = await User.save();
resp.send(result);
    console.log(result);
});



app.post('/login',async (req,resp)=>{
    let res = await user.findOne(req.body).select('-password');
    if(req.body.email && req.body.password){
        if(res){
            resp.send(res)
        }
        else{
            resp.send({result: 'user not found'})
        }
    }
    else{
        resp.send({result: 'user not found'})
    }
    
});


app.post('/addproduct' ,async (req,resp)=>{

    const Product = new product(req.body)
    const data = await Product.save();

    resp.send(data);
    console.log(data);
})

app.get('/productlist', async (req,resp)=>{
    let Product = await product.find();
    resp.send(Product);
    console.log(Product);
})

app.delete('/productlist/:id', async(req,resp)=>{
    let del = await product.deleteOne({_id:req.params.id})
   resp.send(del);
 
});
/*app.get('/productlist/:id',async(req,resp)=>{
    let result = await product.findOne({_id:req.params.id})
    resp.send(result)
});*/

app.put('/productlist/:id',async(req,resp)=>{
    let result = await product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
        )
    resp.send(result)
});
app.get('/search/:key',async(req,resp)=>{
    let result = await product.find({
        "$or":[

            {name : {$regex : req.params.key}},
            {category : {$regex : req.params.key}},
            {brand : {$regex : req.params.key}},
            {price : {$regex : req.params.key}}


        ]    
    });
    resp.send(result)
})

app.get('/profile/:id',async (req,resp)=>{
    let result = await user.findOne({_id:req.params.id})
    if(result){
        resp.send(result);
        console.log(result)

    }
    else{
        resp.send({result:"no record found"})
    }

    
});

app.listen(4000);


