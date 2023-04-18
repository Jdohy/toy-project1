export default function Enter() {
  return (
    <div className="bg-slate-100 flex items-center justify-center h-screen p-2">
      <div className="flex shadow-lg rounded-md overflow-hidden bg-blue-500 flex-row max flex-1 lg:max-w-screen-md">
        <div className="p-6 py-14 flex flex-col w-2/5 space-y-14">
          <span className="text-white font-bold text-center text-4xl">
            Toy Market
          </span>
          <p className="text-gray-300 text-center ">
            With the power of Toy Market, you can now focus only on
            functionaries for your digital products, while leaving the UI design
            on us!
          </p>
          <div className="text-white flex flex-col text-center">
            <span>Dont have an account?</span>
            <a href="#" className="underline">
              Get Started!
            </a>
          </div>
          <span className="text-sm text-center text-gray-300">
            Read our terms and conditions
          </span>
        </div>
        <div className="p-4 px-6 w-3/5 bg-white w-100">
          <h3 className="font-semibold text-gray-700 text-2xl mt-5">
            Account Login
          </h3>
          <form className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-600"
              >
                Email address
              </label>
              <input
                id="email"
                className=" mt-1 w-full p-2  border border-gray-300 rounded-[4px]"
                type="text"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm  font-semibold text-gray-600"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="hover:underline underline-offset-2 text-sm font-normal text-blue-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                className="mt-1 w-full p-2 border border-gray-300 rounded-[4px]"
                type="password"
              />
            </div>
            <div className=" flex items-center space-x-2 ">
              <input id="rememberCheck" className="w-4 h-4" type="checkbox" />
              <label
                htmlFor="rememberCheck"
                className="cursor-pointer text-sm font-semibold text-gray-600"
              >
                Remember me
              </label>
            </div>
            <button className="focus:ring-2 focus:outline-none duration-100 ring-blue-500 ring-offset-2 bg-blue-500 w-full rounded-md hover:bg-blue-600 text-white py-2 font-semibold text-lg">
              Log in
            </button>
          </form>
          <div className="flex flex-col">
            <span className="my-4 flex items-center justify-center space-x-2">
              <span className="h-[1px] bg-gray-400 w-24"></span>
              <span className="font-normal text-md text-gray-500">
                or login with
              </span>
              <span className="h-[1px] bg-gray-400 w-24"></span>
            </span>
            <form className="flex flex-col space-y-4">
              <button className="group duration-300 hover:bg-gray-800 hover:text-white flex items-center justify-center space-x-2 border border-gray-600 text-gray-600 w-full p-2 rounded-md ">
                <svg
                  className="w-5 h-5 text-gray-600 fill-current group-hover:text-white"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                <span className="font-semibold text-sm">Github</span>
              </button>
              <button className="group hover:bg-blue-500 duration-300 hover:text-white flex items-center justify-center space-x-2 border border-blue-500 text-blue-500 w-full p-2 rounded-md ">
                <svg
                  className="text-blue-500 group-hover:text-white"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span className="font-semibold text-sm">Twitter</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
