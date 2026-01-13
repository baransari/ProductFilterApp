import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div>
        <span style={{color : product.inStock? 'black' : 'red'}}>{product.name}</span>
        <span>{product.price}</span>
        <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
    </div>
  )
}

export default ProductItem
