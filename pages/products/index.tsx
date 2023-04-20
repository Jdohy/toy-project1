import Link from "next/link";
import { useRouter } from "next/router";
import SearchSection from "../components/searchSection";

export default function Products() {
  const router = useRouter();

  return (
    <div className="pb-20">
      <SearchSection />
      <div className="w-full h-14 p-4 space-x-4 mt-4">
        <span className="bg-slate-100 p-2 px-4 text-gray-700 font-semibold text-sm rounded-md">
          랭킹 순
        </span>
        <span className="bg-slate-100 p-2 px-4 text-gray-700 font-semibold text-sm rounded-md">
          낮은가격순
        </span>
        <span className="bg-slate-100 p-2 px-4 text-gray-700 font-semibold text-sm rounded-md">
          높은가격순
        </span>
        <span className="bg-slate-100 p-2 px-4 text-gray-700 font-semibold text-sm rounded-md">
          판매량순
        </span>
        <span className="bg-slate-100 p-2 px-4 text-gray-700 font-semibold text-sm rounded-md">
          최신순
        </span>
      </div>
      <div className="p-8 grid-cols-4 grid gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
          <Link
            href={`/products/${item}`}
            key={i}
            className="flex flex-col space-y-4"
          >
            <div className="bg-slate-300 flex-col rounded-lg w-64 h-64 flex justify-center items-center text-lg text-red-500">
              Image
            </div>
            <div className="flex flex-col">
              <span className="text-md text-slate-900">
                {`${router.query.search}-${item}`}
              </span>
              <span className="font-bold text-xl text-red-500">5,1890원</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
