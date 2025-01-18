import ProductOrderForm from "../ProductOrderForm";
import "../ViewProduct/index";
function SelectOptions() {
  return (
    <div className="flex align-middle text-center justify-end mt-5 mr-5">
      <h5 className="text-white ">Sort by: </h5>
      <select name="sort-by" id="sort-by">
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="code-asc">Code (Low-High)</option>
        <option value="code-desc">Code (High-Low)</option>
        <option value="category-asc">Category (A-Z)</option>
        <option value="category-desc">Category (Z-A)</option>
      </select>
    </div>
  );
}

function PrevAndNextBtns() {
  const classForPrevAndNext =
    "mt-2 w-1/2 bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-40";
  return (
    <div className="flex text-center justify-center gap-32 p-5">
      <button type="submit" className={classForPrevAndNext}>
        Previous
      </button>
      <button type="submit" className={classForPrevAndNext}>
        Next
      </button>
    </div>
  );
}
function BtnComponent() {
  return (
    <div className="flex justify-evenly gap-5">
      <button
        type="submit"
        className="mt-2 w-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Update
      </button>
      <button
        type="submit"
        className="mt-2 w-1/2 bg-red-700 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Cancel
      </button>
    </div>
  );
}

function ViewProduct() {
  return (
    <>
      <SelectOptions />
      <ProductOrderForm
        formHeading="Update Fields"
        formButton={<BtnComponent />}
      />
      <PrevAndNextBtns />
    </>
  );
}

export default ViewProduct;
