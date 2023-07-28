import React,{useState} from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct=()=>{
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const params = useParams();
    const Navigate = useNavigate();



    const Updatedata=async()=>{

        console.warn(name,category,brand,price)

        let result = await fetch(`http://localhost:4000/productlist/${params.id}`,{
            method:"Put",
            body: JSON.stringify({name,category,brand,price}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        Navigate('/')
    }
    return(
        <div className='register'>
            <h1>Update Products</h1>
            <input type='text' className='instyle' placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' className='instyle' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type='text' className='instyle' placeholder='brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
            <input type='text' className='instyle' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={Updatedata}  className="btn" >Update</button>
        </div>
    );
}
export default UpdateProduct;