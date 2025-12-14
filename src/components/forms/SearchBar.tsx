import SearchIcon from "../icons/SearchIcon";

export default function SearchBar() {
  return (
    <form className="flex items-center w-full">
      <div className="relative flex-1">
        <input
          type="search"
          aria-label="search"
          className="border-2 border-green-500 px-4 py-2.5 pl-8 rounded-full w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          placeholder="Search for products, brands..."
        />
        <button
          type="submit"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 focus:outline-none"
          aria-label="Search"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
