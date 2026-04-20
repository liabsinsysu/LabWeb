import Image from "next/image";
import ScrollingImg from "./Component/ScrollingImg";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[80vh] bg-[url('/img/header.jpg')] bg-cover bg-center flex items-center justify-center relative">

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative flex flex-col items-center text-center text-white px-6 gap-4">

          <h1 className="text-2xl md:text-4xl font-semibold tracking-wide">
            Laboratory for Intelligent Analysis for Biomedical Signal and Information
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200">
            智慧生醫信號分析實驗室
          </p>

        </div>

      </div>
      <ScrollingImg />

      <div className="h-[80vh]">
        <h1 className="relative text-center text-2xl md:text-4xl font-semibold tracking-wide px-6 mt-2.5">
          ABOUT US
        </h1>
      </div>
    </div>
  );
}
