const SearchBar = ({ query, setQuery }) => (
  <div className="text-center mt-4">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search movies..."
      className="w-3/4 md:w-1/2 p-2 border rounded"
    />
  </div>
);

export default SearchBar;