import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="mt-24 h-[950px] sm:h-[750px] mx-auto text-center justify-center">
        <div className="justify-center">
          <h1 className="text-2xl font-bold justify-center text-center mb-10">
            Links
          </h1>
          <ul className="text-black max-w-xl mx-4 sm:mx-auto">
            <Link href="/" target="_blank">
              <li className="border-2 rounded-full  bg-zinc-900 hover:bg-black duration-300 text-white py-4  mb-5">
                <button>Vakantiescout.nl</button>
              </li>
            </Link>
            <Link href="/deals" target="_blank">
              <li className="border-2 rounded-full  py-4 font-bold hover:scale-105 duration-300 mb-5">
                <button>Deals 🏷️✈️</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
