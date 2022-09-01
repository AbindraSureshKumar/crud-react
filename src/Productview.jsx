import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

function Productview() {
    const params = useParams();
    const [productData, setProductData] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        loadProduct();
    },[])

    let loadProduct = async () => {
        try {
            setLoading(true)
            let prod = await axios.get(`https://6290209e665ea71fe12da309.mockapi.io/product/${params.id}`)
            setProductData(prod.data)
            setLoading(false)
        } catch (error) {
            
        }
    }
  return (
    <>
        <h2>Product Name : {isLoading? "Loading..." : productData.name}</h2>
        <h3>Company Name : {isLoading? "Loading..." : productData.company}</h3>
        <h3>Price : {isLoading? "Loading..." : productData.price}</h3>
        <h3>Color : {isLoading? "Loading..." : productData.color}</h3>
        <h3>ID : {isLoading? "Loading..." : productData.id}</h3>
    </>
  )
}

export default Productview