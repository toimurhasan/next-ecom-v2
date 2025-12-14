export default function SearchBar() {
  return (
    <form className="flex items-center w-full">
      <input
        aria-label="search"
        className="border px-3 py-2 rounded-l w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        placeholder="Search products..."
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded-r">
        Search
      </button>
    </form>
  );
}
