

const SearchBar = ({ searchText, onSearchChange, onlyInStock, onStockChange }) => {
  return (
    <div>
        <input type="text"  value={searchText} onChange={(e) => onSearchChange(e.target.value)}/>
        <input type="checkbox" checked={onlyInStock} onChange={(e) =>  onStockChange(e.target.checked)}  />
    </div>
  )
}

export default SearchBar
