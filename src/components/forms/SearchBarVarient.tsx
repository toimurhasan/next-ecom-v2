import SearchIcon from "../icons/SearchIcon";

export default function SearchBarVarient() {
  return (
    <form className="flex items-center w-full">
      <div className="relative flex-1">
        <input
          type="search"
          aria-label="search"
          className="border  px-4 py-2 pl-8  w-full bg-white text-gray-500 focus:outline-none "
          placeholder="Search for products, brands..."
        />
        <button
          type="submit"
          className="absolute left-2 top-1/2 -translate-y-1/2"
          aria-label="Search"
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
