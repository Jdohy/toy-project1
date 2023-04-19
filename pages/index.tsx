import Image from "next/image";
import Toys from "image/Toys.jpeg";

export default function Home() {
  return (
    <div className="h-[500vh]">
      <div className="flex justify-center border-b border-gray-200">
        <div className="space-x-8 flex justify-center items-center p-8 ">
          <div className="w-16 h-16 rounded-full bg-blue-500"></div>
          <button className="flex items-center space-x-2 bg-blue-500 w-auto rounded-md p-2.5 px-10 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
            <span>Catalog</span>
          </button>
          <form className="flex items-center relative">
            <select className="pl-2 text-sm font-semibold text-gray-700 pr-1 absolute ml-2 focus:outline-none text-center">
              <option>ALL CATOGORIES</option>
              <option>FOOD</option>
              <option>BOOKS</option>
            </select>
            <input
              placeholder="Search in the market !"
              className="pl-44 p-2.5 w-[500px] border-2 rounded-md border-blue-500"
            ></input>
          </form>
          <div className="flex space-x-4">
            <a className="cursor-pointer w-12 h-12 rounded-md border-2 border-slate-200 shadow-sm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </a>
            <a className="cursor-pointer w-12 h-12 rounded-md border-2 border-slate-200 shadow-sm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </a>
            <a className="cursor-pointer w-12 h-12 rounded-md border-2 border-slate-200 shadow-sm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </a>
            <a className="cursor-pointer w-12 h-12 rounded-md border-2 border-slate-200 shadow-sm flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative overflow-hidden rounded-3xl mt-10 mx-10 w-full h-[300px] bg-blue-500">
          <Image alt="Toys" fill className="fixed object-cover" src={Toys} />
        </div>
      </div>
      <h1 className="ml-10 my-10 text-3xl font-bold text-slate-800">Popular</h1>
      <div className="flex space-x-8 px-10">
        {["Doll", "Robot", "Game", "Lego", "ETC"].map((product, i) => (
          <div key={i} className="w-1/5 h-72 bg-slate-100 rounded-xl">
            <div className="flex justify-end mt-8 mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="w-32 h-32 flex justify-center items-center text-red-700 rounded-md bg-slate-300 mx-auto">
              Image
            </div>
            <div className="p-4 px-8 space-y-1">
              <span className="font-semibold text-gray-500">{product}</span>
              <div className="flex justify-between">
                <span className="font-bold">$6.00</span>
                <div className="relative w-6 h-6 text-blue-500 text-center flex justify-center items-center border-2 border-blue-500 rounded-full">
                  <span className="absolute -top-[5px]  text-lg">+</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
