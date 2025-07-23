function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search Git commands..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
    />
  );
}

export default SearchBar;
