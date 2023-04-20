import SearchSection from "../components/searchSection";

export default function productDetail() {
  return (
    <div>
      <SearchSection />
      <div className="p-14 pl-44 flex space-x-10">
        <div className=" bg-slate-400 rounded-md w-[500px] aspect-square"></div>
        <div className="flex flex-col">
          <div className="w-[600px]">
            <div className="border-b-2 border-gray-200 pb-2">
              <div className="text-3xl font-semibold">Toy</div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="text-lg">☆☆☆☆☆</div>
                <span>24개 상품평</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 border-b border-gray-200 border-opacity-60">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-gray-500">
                50,000원
              </span>
              <span className="text-gray-500 ml-2">판매가</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-red-500">
                47,200원
              </span>
              <span className="text-red-500 ml-2">회원할인가</span>
            </div>
            <span className="mt-4 flex items-center justify-center space-x-1 text-gray-500 shadow-md border-gray-200 w-[180px] rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span>최대 2400원 적립</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
