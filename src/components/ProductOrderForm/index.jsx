import "../ViewProduct/index.css";
function DefaultBtnFroProp() {
  return (
    <div>
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Order
      </button>
    </div>
  );
}

function ProductOrderForm({
  formHeading = "product order form",
  formButton = <DefaultBtnFroProp />,
}) {
  const inputStyle =
    "w-full p-2 border border-green-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none text-start";
  const lables = [
    {
      labelName: [
        "category name",
        "class type",
        "product name",
        "product code",
        "product size",
        "product rate",
        "product quantity",
        "product company",
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center text-start relative mt-2">
        
        <div className="bg-white p-5 rounded-3xl  w-96  mb-2">
          <h1 className="text-center font-bold text-2xl ">{formHeading}</h1>

          <form action="#" className="">
            {lables[0].labelName.map((lable) => {
              return (
                <div key={lable}>
                  <label
                    htmlFor={lable}
                    className="block text-gray-700 align-baseline"
                  >
                    {`${lable} :`}
                  </label>
                  <input
                    type={
                      lable !== "product size" &&
                      lable !== "product rate" &&
                      lable !== "product quantity"
                        ? "text"
                        : "number"
                    }
                    min={1}
                    max={100}
                    name={lable}
                    className={inputStyle}
                  />
                </div>
              );
            })}
            {formButton}
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductOrderForm;
