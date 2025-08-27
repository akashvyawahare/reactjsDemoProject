import { useEffect, useState } from "react";
import Skeleton from "./skeleton.jsx";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct.jsx";

const ProductDetails = () => {
    // const [singleProduct, setSingleProduct] = useState(null);

    const {productId} = useParams(); 

    //todo) here, instead of writing below code, we created a custom hook called 'useGetSingleProduct' in 'src/hooks/useGetSingleProduct', which gives us the single product.

        // useEffect(()=>{fetchData()}, []);
        // const fetchData = async () => {
        //     const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        //     const resData = await data.json();
        //     console.log(resData)
        //     setSingleProduct(resData);
        // }

        const singleProduct = useGetSingleProduct(productId); 

    return singleProduct === null ? <Skeleton/> : (
        <div className=" flex flex-col justify-center items-center w-60 ml-8  border border-grey-600 rounded-xl mt-8 p-4 h-90 hover:bg-gray-300 ">
            <img className="w-40" src={singleProduct.image} />
            <h3 className="font-bold ">{singleProduct.title}</h3>
            <p className=" text-gray-700">rating - {singleProduct.rating.rate}</p>
            <p>Price - ${singleProduct.price}</p>
            <p>Category - {singleProduct.category}</p>
        </div>
    )
}
export default ProductDetails;