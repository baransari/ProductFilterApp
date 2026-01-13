import '../styles/search-bar.css'

const SearchBar = ({ searchText, onSearchChange, onlyInStock, onStockChange }) => {
  return (
    <div className="SearchBar">
        <input className='search' type="text" placeholder='Add to Product...'  value={searchText} onChange={(e) => onSearchChange(e.target.value)}/>
        <label>
          <input type="checkbox" className='checked' checked={onlyInStock} onChange={(e) =>  onStockChange(e.target.checked)}  />
          <span>Only In Stock</span>
        </label>
    </div>
  )
}

export default SearchBar
