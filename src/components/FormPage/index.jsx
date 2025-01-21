import { Link } from "react-router-dom";
function Form() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 shadow-lg rounded-lg bg-white text-center">
        <img
          src="./src/assets/react.svg"
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold mb-6">WELCOME</h1>

        <form>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-between text-sm mb-4">
            <Link to="#" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
            <Link to="#" className="text-red-600 hover:underline">
              Forget Password?
            </Link>
          </div>
          <Link to="/accessories">
            <input
              type="submit"
              value="LOGIN"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Form;
