
import { useEffect, useState } from 'react';
import {items} from '../utils/constants.js'
import Product from './Product.jsx';
import Skeleton from './skeleton.jsx';
import { Link } from 'react-router-dom';
import { HOC } from './Product.jsx';


const ProductCard = () => {

  let[topRated , setTopRated] = useState([]);
  let[newSearchedList, setNewSearchedList] = useState([]);
  let[searchText, setSearchText] = useState("");
  // let[filteredItems, setFilteredItems] = useState([]);
  useEffect(()=>{
    fetchedData();
    const timer = setInterval(() => {
      console.log('akash func component');
      
    }, 1000);
    return()=>{clearInterval(timer)} //this function is for writing the cleanup code. Here we are cleaning up the things that we wrote previously like, setting time interval, etc.
  }, [])

  let fetchedData = async ()=>{
    let data = await fetch('https://fakestoreapi.com/products');
    let resData = await data.json(); 
    console.log(resData);
    setTopRated(resData);
    setNewSearchedList(resData);
    // setFilteredItems(resData);

  }

  const HOCcomponent = HOC(Product); //this HOC is a higher order component
  
  //here we are doing conditional rendering
  
  return topRated.length === 0 ? <Skeleton/>:
   (
    <div>
      <div className='mt-10'> {/*this is how you give style inside jsx*/}
        <input placeholder='search product' className='border border-gray-700 px-2 mx-3 rounded-md' type="text" onChange={(event)=>{setSearchText(event.target.value)}} value={searchText} />
        <button className='bg-purple-700 text-white px-5 py-1' onClick={()=>{let newSearchedList = topRated.filter((product)=>{return product.title.toLowerCase().includes(searchText.toLowerCase())})
                setNewSearchedList(newSearchedList);  
      }}>search</button>

      <button onClick={()=>{ 
        let filteredItems = items.filter(val=>val.rating.rate > 4)
        setNewSearchedList(filteredItems);
      }
    
    } className="bg-purple-700 px-4 py-1  text-white ml-4">Top rated products</button>
      <div className="grid grid-cols-5 gap-2">
      {newSearchedList.map((item, index) => {
        return <Link key={item.id} to={`/product/${item.id}`}>

          {item.rating.rate >= 4 ? <HOCcomponent item={item} /> : <Product  item={item} /> }
          
          </Link> ;
        {/*we pass the key in parent component always. so here the parent component is Link*/}
      })}</div>
    </div>
    </div>
  );
};


export default ProductCard;