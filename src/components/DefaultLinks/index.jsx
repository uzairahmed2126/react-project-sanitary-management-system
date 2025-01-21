import { Link, NavLink } from "react-router-dom";
import "../DefaultLinks/index.css";
function DefaultLinks() {
  // const navLinkStyle = (isActive) => {
  //   return {
  //     fontWeight: isActive ? "bg-red-400" : "",
  //     textDecoration: isActive ? "none" : "underline",
  //   };
  // };
  const path = [
    ["/", "Log Out", "log-out"],
    ["/accessories", "Accessories"],
    ["/product-order-form", "Product Order Form"],
    ["/view-product", "View Product"],
  ];
  return (
    <div className="grid grid-cols-4 justify-center text-center w-screen font-bold">
      {path.map(([path, name, id]) => {
        return (
          <NavLink
            id={id}
            key={path}
            to={path}
            className="bg-red-200 p-3 border-2 hover:bg-red-300"
          >
            {name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default DefaultLinks;
