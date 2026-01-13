import '../styles/product-item.css'

const ProductItem = ({product}) => {
  return (
    <div className='product-item'>
        <div style={{color : product.inStock? 'black' : 'red'}}>{product.name}</div>
        <span>{product.price}₺</span>
        <span>{product.inStock ? '-In Stock' : '-Out of Stock'}</span>
    </div>
  )
}

export default ProductItem
