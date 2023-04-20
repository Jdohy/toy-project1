export default function Join() {
  return (
    <div className="bg-slate-100 flex items-center justify-center h-screen p-2">
      <div className="p-4 px-6 shadow-lg rounded-lg pb-10 w-[500px] bg-white w-100">
        <h3 className="font-semibold text-gray-700 text-2xl mt-5">Join</h3>
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
            </div>
            <input
              id="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-[4px]"
              type="password"
            />
            <div className="flex  mt-4 items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm  font-semibold text-gray-600"
              >
                Password Confirm
              </label>
            </div>
            <input
              id="password"
              className="mt-1 mb-4 w-full p-2 border border-gray-300 rounded-[4px]"
              type="password"
            />
          </div>

          <button className="focus:ring-2 focus:outline-none duration-100 ring-blue-500 ring-offset-2 bg-blue-500 w-full rounded-md hover:bg-blue-600 text-white py-2 font-semibold text-lg">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
