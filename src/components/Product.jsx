const Product = ({item}) => {
  // console.log(item);
  const { image, price, rating = {}, title, category } = item;
  return (
    <div className=" flex flex-col justify-center items-center  border border-grey-600 rounded-xl mt-8 p-4 h-90 hover:bg-gray-300 ">
      <img className="w-30" src={image} />
      <h3>{title}</h3>
      <p>rating - {rating.rate}</p>
      <p>Price - ${price}</p>
      <p>Category - {category}</p>
    </div>
  );
};

export const HOC = (Product) => {
  return (props)=>{
    return(
      <div className="relative">
        <span className=" absolute bg-black text-white px-1 py-1 rounded-md ">Best Seller</span>          <Product {...props}/>
      </div>
    )
  }
} 


export default Product;