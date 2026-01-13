import ProductItem from './ProductItem'
import '../styles/product-list.css'

const ProductList = ({products , searchText , onlyInStock}) => {
    const filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchText.toLowerCase());
        const inStockMatch = onlyInStock ? product.inStock : true;
        return nameMatch && inStockMatch;
      });
      if (filteredProducts.length === 0) {
        return <p>No products found.</p>;
    }
  return (
    <div className='prodct-list'>
        {filteredProducts.map(product => (
            <ProductItem
                key={product.id}
                product={product}
            />
      ))}
    </div>
  )
}

export default ProductList;
