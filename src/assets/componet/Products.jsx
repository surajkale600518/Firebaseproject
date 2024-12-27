import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Product.css"
export const Products = () => {
    const [Products,setproduct]= useState([]);
    useEffect(()=>{
        axios.get("https://krushi-serv-2024-1.onrender.com/khat")
        .then((res)=>setproduct(res.data))
    },[])
  return (
    
    
    <div>

     {
        Products.map((items,index)=>(
            <div className='box'>
                <h1>{items.title}</h1>
                <img src={items.image} alt="" />
                <h3>&#8377;{items.price}</h3>
                <p>{items.decsription}</p>
                <div>
                  <button  className='addcard' >Add Card</button>
                  <button className='byenow'>Bye Now</button>
                </div>
            </div>
        ))
     }
    </div>
   
  )
}
