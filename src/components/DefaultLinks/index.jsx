import { Link, NavLink } from "react-router-dom";
import "../DefaultLinks/index.css";
function DefaultLinks() {
  const path = [
    ["/", "Log Out", "log-out"],
    ["/accessories", "Accessories"],
    ["/product-order-form", "Product Order Form"],
    ["/view-product", "View Product"],
  ];
  return (
    <div className="grid grid-cols-4 justify-center text-center font-bold">
      {path.map(([path, name, id], index) => {
        return (
          <NavLink
            id={id}
            key={path}
            to={path}
            className={`bg-red-200 p-3 border-2 outline- hover:bg-red-300 order-${index+4}`}
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default DefaultLinks;
