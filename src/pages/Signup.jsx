import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center bg-[#202020]">
      <div className="w-full sm:w-[80%] lg:w-[60%] h-full sm:h-[80%] flex flex-col items-center justify-center bg-white py-[10%] space-y-6 sm:space-y-12 rounded-2xl">
        <div className="flex justify-center text-4xl font-bold text-blue-600">
          Expenser
        </div>
        <div className="w-full flex flex-col items-center sm:flex-row">
          <div className="w-full flex flex-col items-center pb-4">
            <div className="w-[80%] flex flex-col space-y-4">
              <div className="space-y-1">
                <input
                  type="text"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                  placeholder="Username"
                />
                <input
                  type="email"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div className="w-full bg-blue-600 flex justify-center py-2 rounded-lg text-white text-xl">
                Login
              </div>
              <div className="text-lg flex justify-center space-x-1">
                <span>Already have an account?</span>
                <Link to={"/login"} className="font-bold text-green-600">
                  Login{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[90%] h-1 sm:w-1 sm:h-full bg-gray-500 rounded-full"></div>

          <div className="w-full flex flex-col items-center space-y-4 mt-4 sm:mt-0">
            <div className="text-xl">Or continue with</div>
            <div className="flex justify-center w-[80%] bg-red-500 py-2 text-[whitesmoke] text-xl rounded-lg">
              Google
            </div>
            <div className="flex justify-center w-[80%] bg-blue-500 py-2 text-[whitesmoke] text-xl rounded-lg">
              Facebook
            </div>
            <div className="flex justify-center w-[80%] bg-black py-2 text-[whitesmoke] text-xl rounded-lg">
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
