import {items} from '../utils/constants.js'
import Product from './Product.jsx';
const ProductCard = () => {
  return (
    <div className="product-card">
      {items.map((item, index) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
};


export default ProductCard;