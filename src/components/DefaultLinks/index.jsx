import { Link } from "react-router-dom";
function DefaultLinks() {
  const path = [
    ["/", "Home"],
    ["/accessories", "Accessories"],
    ["/product-order-form", "Product Order Form"],
    ["/view-product", "View Product"],
  ];
  return (
    <div className="grid grid-cols-4 justify-center text-center w-screen font-bold">
      {path.map(([path, name]) => {
        return (
          <Link key={path} to={path} className="bg-red-200 p-3 border-2">
            {name}
          </Link>
        );
      })}

      {/* <Link
        to="/accessories"
        className="bg-red-200 p-3 border-2 pointer-events-auto"
      >
        Accessories
      </Link>
      <Link
        to="/product-order-form"
        className="bg-red-200 p-3 border-2 pointer-events-auto"
      >
        Product Order Form
      </Link>
      <Link
        to="/view-product"
        className="bg-red-200 p-3 border-2 pointer-events-auto"
      >
        View Product
      </Link> */}
    </div>
  );
}

export default DefaultLinks;
