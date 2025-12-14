export default function SearchBar() {
  return (
    <form className="flex items-center w-full">
      <div className="relative flex-1">
        <input
          type="search"
          aria-label="search"
          className="border-2 border-green-500 px-4 py-2.5 pr-10 rounded-lg w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Search for products, brands..."
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 focus:outline-none"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
