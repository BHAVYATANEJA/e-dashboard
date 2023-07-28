import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom';
const ProductList = () => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        getproduct();
    },[]);

    const getproduct = async () => {
        let result = await fetch('http://localhost:4000/productlist')
        result = await result.json();
        setProducts(result);
    }
   // console.warn(product)

    const DeleteData = async (id) => {
        let res = await fetch(`http://localhost:4000/productlist/${id}`, {
            method: 'Delete'
        });
        res = await res.json();
        if(res){
            getproduct();
        }
    }

    const searchProduct=async (event)=>{
        const key =event.target.value;


        if(key){
            let result = await fetch(`http://localhost:4000/search/${key}`);
            result= await result.json();
            if(result){
                setProducts(result);
    
            }
            
        }
        else{
            getproduct(); 
        }
        
    }
    return (
        <div className="stylelist">
            <h1>Product list</h1>
            <input type="text" placeholder="Search Product" className="searchstyle" onChange={searchProduct}></input><br/><br/>
            <ul >
                <li>S.No</li>
                <li>Product</li>
                <li>Category</li>
                <li>Brand</li>
                <li>Price</li>
                <li>Delete</li>
                <li>Update</li>

            </ul>
            {
                product.length>0?
                product.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.category}</li>
                        <li>{item.brand}</li>
                        <li>{item.price}</li>
                        <li><Link className="delupd" onClick={() => DeleteData(item._id)}>Delete</Link></li>
                        <li><Link className="delupd" to={'/update/'+item._id}> Update</Link></li>

                    </ul>
                )
                :
                    <h1>No Result Found</h1>
                
            }
        </div>
    );
}
export default ProductList;