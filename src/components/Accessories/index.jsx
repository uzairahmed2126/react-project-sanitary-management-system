import { Link } from "react-router-dom";
function Accessories() {
  const elementColor =
    "relative overflow-hidden bg-slate-400 w-1/4 p-10 rounded-lg cursor-pointer text-2xl text-red-800 hover:text-red-100 hover:bg-slate-500 transition duration-300 group";
  const elementEffect =
    "absolute inset-0 rounded-full bg-slate-900 scale-0 group-hover:scale-150 opacity-30 transition-transform duration-700";
  const accessorieNames = ["sanitary", "cement", "khaddi"];

  return (
    <div className="flex flex-col justify-evenly items-center text-center h-screen">
      {accessorieNames.map((name) => {
        if (name === "sanitary") {
          return (
            <Link key={name} className={elementColor} to="/product-order-form">
              {name}
              <span className={elementEffect}></span>
            </Link>
          );
        } else {
          return (
            <div className={elementColor} key={name}>
              {name}
              <span className={elementEffect}></span>
            </div>
          );
        }
      })}
    </div>
  );
}
export default Accessories;
