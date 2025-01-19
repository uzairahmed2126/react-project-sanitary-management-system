function DefaultLinks() {
  return (
    <div
      // onClick={(e) => {
      //   const btnName = e.target.textContent;
      //   console.log(btnName);
      //   if (btnName === "Home") {
      //     // navigate("/");
      //   } else if (btnName === "Accessories") {
      //     // navigate("/accessories");
      //   } else {
      //     alert("sdf");
      //   }
      // }}
      className="grid grid-cols-4 pointer-events-none justify-center text-center w-screen font-bold"
    >
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
