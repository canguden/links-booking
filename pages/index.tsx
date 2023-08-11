import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FcFlashOn } from "react-icons/fc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LiaSearchLocationSolid } from "react-icons/lia";
import logo from "@/public/linkslogo.svg";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          VakantieScout - Links - De Beste Deals, Aanbiedingen, Reviews en Blog
        </title>
        <meta
          name="description"
          content="Ontdek de beste vakantiedeals, aanbiedingen, reviews en nog veel meer. Lees onze uitgebreide vakantieblog op VakantieScout.nl."
        />
        <meta
          name="keywords"
          content="vakantiedeals, aanbiedingen, reviews, vakantieblog"
        />
        <meta
          property="og:title"
          content="VakantieScout - De Beste Deals, Aanbiedingen, Reviews en Blog"
        />
        <meta
          property="og:description"
          content="Ontdek de beste vakantiedeals, aanbiedingen, reviews en lees onze uitgebreide vakantieblog op VakantieScout."
        />
        <meta property="og:url" content="https://www.vakantiescout.com" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="VakantieScout - De Beste Deals, Aanbiedingen, Reviews en Blog"
        />
        <meta
          name="twitter:description"
          content="Ontdek de beste vakantiedeals, aanbiedingen, reviews en lees onze uitgebreide vakantieblog op VakantieScout."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.vakantiescout.com" />
      </Head>
      <div className="mb-20 mt-24  mx-auto text-center justify-center">
        <div className="justify-center">
          <Image
            src={logo}
            height={250}
            width={250}
            alt="Vakantiescout"
            className="h-40 w-40  text-center flex mx-auto rounded-full object-fill bg-blue-900"
          />
          <h1 className=" text-3xl text-white font-extrabold justify-center text-center  mt-5">
            VakantieScout NL
          </h1>
          <p className="mb-10 mt-2 text-white">
            De #1 Vakantie Website van Nederland en Belgie
          </p>
          <ul className="text-black max-w-xl mx-4 sm:mx-auto items-center gap-2">
            <Link href="https://vakantiescout.nl/" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  🌎 VakantieScout.nl
                </div>
              </li>
            </Link>
            <Link href="https://vakantiescout.nl/aanbieders" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  📊 Reviews
                </div>
              </li>
            </Link>
            <Link href="https://vakantiescout.nl/ontdekken" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  🔍 Ontdekken
                </div>
              </li>
            </Link>
            <div className=" w-full lg:w-full mt-5 mb-5">
              <Link
                href="https://ds1.nl/c/?si=729&li=44046&wi=385520&ws=VakantieScout&dl=nazomer"
                target="_blank"
              >
                <li className="flex items-center  rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                  <div className="flex justify-between items-center text-center   mx-auto gap-2 mt-1  text-xl font-semibold ">
                    <div className="flex flex-col">
                      <h1 className="flex items-center gap-1">
                        🚀 Nieuwste Kortingsactie ‼️
                      </h1>
                      <p className="text-sm">11 augustus 2023</p>
                    </div>
                  </div>
                </li>
              </Link>
              <Link
                href="https://ds1.nl/c/?si=729&li=44046&wi=385520&ws=VakantieScout&dl=nazomer"
                target="_blank"
              >
                <Image
                  src="https://images.corendonresources.com/NL/Nazomer-Kanjers_Topbanner_1168x500.webp"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-full  rounded-bl-xl rounded-br-xl object-fill bg-black opacity-90 hover:opacity-100"
                />
              </Link>
            </div>

            <Link
              href="https://www.elizawashere.nl/griekenland/karpathos/gianniou/sophid-suites?utm_source=Guden%20Ecom&utm_medium=tradetracker&network=tradetracker"
              target="_blank"
            >
              <li className="flex items-center  rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  <FcFlashOn className="text-yellow-400" /> Flits Deal!
                </div>
              </li>
            </Link>

            <div className="relative top-0  w-full  object-fill">
              <Link
                href="https://www.elizawashere.nl/griekenland/karpathos/gianniou/sophid-suites?utm_source=Guden%20Ecom&utm_medium=tradetracker&network=tradetracker"
                target="_blank"
              >
                <Image
                  src="https://sundio-media.azureedge.net/products/Images/Original/42800000/67000/42867087-Original.jpg?mode=crop&scale=both&width=960&height=540"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-60  object-cover"
                />
                <div className="absolute top-4 left-2 py-2 px-2 bg-orange-500 rounded-xl text-sm text-white">
                  <h1 className="flex items-center gap-1">
                    <LiaSearchLocationSolid />
                    Karpathos, Griekenland
                  </h1>
                </div>

                <div className=" text-start bg-gray-100 py-2 px-2 rounded-bl-xl rounded-br-xl">
                  <div className="text-white flex flex-col justify-start text-xl font-bold">
                    <div className="flex justify-between items-center text-black">
                      <h1>Sophid Wellness Suites</h1>
                      <div>
                        <BsBoxArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <ul className="flex ">
                      <li className="flex  items-center gap-2">
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>

            <Link
              href="https://ds1.nl/c/?si=7805&li=1362777&wi=385520&ws=&dl=portugal%2Flissabon%2Flissabon%2Fselina_secret_garden_lissabon"
              target="_blank"
            >
              <li className="flex items-center mt-5 rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  🏙️ Populaire Stedentrip!
                </div>
              </li>
            </Link>

            <div className="relative top-0  w-full  object-fill">
              <Link
                href="https://ds1.nl/c/?si=7805&li=1362777&wi=385520&ws=&dl=portugal%2Flissabon%2Flissabon%2Fselina_secret_garden_lissabon"
                target="_blank"
              >
                <Image
                  src="https://www.vakantiediscounter.nl/tools/content/images/accommodations/e595b7d7-1675-41dd-9678-6bb37477b351/970/0.jpg"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-60  object-cover"
                />
                <div className="absolute top-4 left-2 py-2 px-2 bg-orange-500 rounded-xl text-sm text-white">
                  <h1 className="flex items-center gap-1">
                    <LiaSearchLocationSolid />
                    Lissabon, Portugal
                  </h1>
                </div>

                <div className=" text-start bg-gray-100 py-2 px-2 rounded-bl-xl rounded-br-xl">
                  <div className="text-white flex flex-col justify-start text-xl font-bold">
                    <div className="flex justify-between items-center text-black">
                      <h1>Selina&apos;s Secret Garden</h1>
                      <div>
                        <BsBoxArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <ul className="flex ">
                      <li className="flex  items-center gap-2">
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                        <BsStarFill className="text-yellow-400" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
