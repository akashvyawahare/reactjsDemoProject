import { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(()=>{fetchSingleProduct()}, []);

    const fetchSingleProduct = async ()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const jsonData = await data.json();
        setSingleProduct(jsonData);
    }
    return singleProduct;
}
export default useGetSingleProduct;

/**
 * 
 * custom hook is again just a normal javascript function
 * 
 * By convention, it is recommended to prefix the hook name with use(eg. useGetSingleProduct)
 * 
 * we can use the predefined hooks inside of our custom hooks
 * 
 * code reusability is the goal to create custom hooks.
 * 
 * so far, we created state variables inside the components. we can also create state variable for custom hooks
 */
