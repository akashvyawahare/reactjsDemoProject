const Product = ({ item }) => {
  console.log(item);
  const { image, price, rating = {}, title, category } = item;
  return (
    <div className="product">
      <img height={100} src={image} />
      <h3>{title}</h3>
      <p>rating - {rating.rate}</p>
      <p>Price - ${price}</p>
      <p>Category - {category}</p>
    </div>
  );
};

export default Product;