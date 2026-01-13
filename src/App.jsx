import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import products from './data/products';

function App() {
  const [onlyInStock , setOnlyInStock] = useState(false);
  const [searchText , setSearchText] = useState('');


  return (

    <>
      <h1>Product Filter App</h1>
      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        onlyInStock={onlyInStock}
        onStockChange={setOnlyInStock}
      />
      <ProductList
        products={products}
        searchText={searchText}
        onlyInStock={onlyInStock}
      />
    </>
  )
}

export default App
