import Image from "next/image";
import Toys from "image/Toys.jpeg";
import SearchSection from "./components/searchSection";

export default function Home() {
  return (
    <div className="mb-20">
      <SearchSection />
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
                strokeWidth="1.5"
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
