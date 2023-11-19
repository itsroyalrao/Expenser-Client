import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-[100dvh] flex items-center justify-center bg-[#202020]">
      <div className="w-full h-full flex flex-col items-center justify-center bg-white py-[10%] space-y-6">
        <div className="flex justify-center text-4xl font-bold text-blue-600">
          Expenser
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[80%] flex flex-col space-y-4">
            <div>
              <input
                type="email"
                className="w-full px-3 py-2 border-2 rounded-lg"
                placeholder="Email address"
              />
              <div className="flex justify-end px-1 text-blue-500 text-lg">
                Forgot password?
              </div>
              <input
                type="password"
                className="w-full px-3 py-2 border-2 rounded-lg"
                placeholder="Password"
              />
            </div>
            <div className="w-full bg-blue-600 flex justify-center py-2 rounded-lg text-white text-xl">
              Login
            </div>
            <div className="text-lg flex justify-center space-x-1">
              <span>Don&apos;t you have an account?</span>
              <Link to={"/signup"} className="font-bold text-green-600">
                Signup
              </Link>
            </div>
          </div>
        </div>

        <hr className="w-[90%] border-t-2 border-gray-300" />

        <div className="w-full flex flex-col items-center space-y-4">
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
  );
}

export default Login;
