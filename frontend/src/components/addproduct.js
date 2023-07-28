import React, { useState } from 'react';
const AddProduct = () => {

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const Userid=JSON.parse(localStorage.getItem('users'))._id;
    const ProductData = async() => {
        console.warn(name, category, brand, price,Userid)

        let result = await fetch('http://localhost:4000/addproduct',{
            method:"post",
            body:JSON.stringify({name,category,brand,price,Userid}),
            headers:{
                "Content-Type":"application/json"
            }

        });

        result= await result.json();
        console.warn(result)
    }




    return (
        <div className='register'>
            <h1>Add Products</h1>
            <input type='text' className='instyle' placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' className='instyle' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type='text' className='instyle' placeholder='brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
            <input type='text' className='instyle' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={ProductData} className="btn" >Add</button>
        </div>

    );

}
export default AddProduct;