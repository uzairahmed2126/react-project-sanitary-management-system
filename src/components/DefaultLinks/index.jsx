import { replace, useNavigate } from "react-router-dom";
function DefaultLinks({}) {
  const handleClickRouting = (e) => {
    const btnName = e.target.textContent;
    console.log(btnName);
    // console.log(e.target.textContent);
    // const buttonName = e.target.textContent;
    const navigate = useNavigate();
    if (btnName === "Home") {
      navigate("/");
    } else if (btnName === "Accessories") {
      navigate("/accessories", { replace: true });
    } else {
      alert("sdf");
    }
  };
  return (
    <div onClick={handleClickRouting} className="pointer-events-none">
      <button className="bg-red-200 p-3 border-2 pointer-events-auto">
        Home
      </button>
      <button className="bg-red-200 p-3 border-2 pointer-events-auto">
        Accessories
      </button>
      <button className="bg-red-200 p-3 border-2 pointer-events-auto">
        Product Order Form
      </button>
      <button className="bg-red-200 p-3 border-2 pointer-events-auto">
        View Product
      </button>
    </div>
  );
}

export default DefaultLinks;
