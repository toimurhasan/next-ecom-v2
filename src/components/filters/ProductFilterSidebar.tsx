import SearchBar from "../forms/SearchBar";

export default function ProductFilterSidebar() {
  return (
    <div className="bg-white border p-4 rounded-md">
      <div className="mb-4">
        <SearchBar />
      </div>

      <section className="mb-6">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min={0}
            max={25000}
            defaultValue={25000}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>0</span>
          <span>25000</span>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-3">Product Categories</h3>
        <ul className="text-sm space-y-2">
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Electronics & Appliances
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Grocery
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Beauty
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Fashion
            </label>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-3">Filter by Brand</h3>
        <div className="text-sm space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Samsung
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Tecno
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Gillette
          </label>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-3">Filter by Color</h3>
        <div className="flex flex-wrap gap-2">
          <button className="w-6 h-6 rounded-full bg-white border" />
          <button className="w-6 h-6 rounded-full bg-black" />
          <button className="w-6 h-6 rounded-full bg-blue-500" />
          <button className="w-6 h-6 rounded-full bg-green-500" />
        </div>
      </section>

      <section>
        <h3 className="font-semibold mb-3">Filter by Gender</h3>
        <div className="text-sm space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Men
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Women
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Kids
          </label>
        </div>
      </section>
    </div>
  );
}
