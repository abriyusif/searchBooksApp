import './Style.css';
const Search = (props) => {
    return (
        <div className="search">
            <form onSubmit={props.searchBook}>
                <input onChange ={props.handleSearch} type="text" placeholder="Search books" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default Search;