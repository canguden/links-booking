import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsBookmarkStarFill, BsStar, BsStarFill } from "react-icons/bs";
import { FcFlashOn } from "react-icons/fc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoGiftSharp } from "react-icons/io5";
import { ImAirplane } from "react-icons/im";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaNewspaper,
  FaCalendarAlt,
  FaFilePdf,
  FaPaperPlane,
} from "react-icons/fa";
import logo from "@/public/linkslogo.png";
import Head from "next/head";
import hacienda from "@/public/haciendanaxamena.jpg";
import { FaRankingStar } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          VakantieScout - Links - De Beste Deals, Aanbiedingen, Reviews en
          Nieuws
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
          <p className="mt-2 text-white">
            De #1 Vakantie Website van Nederland
          </p>
          <ul className="mb-10 mt-10 mx-auto text-white flex items-center gap-8 text-3xl justify-center">
            <Link href="https://instagram.com/vakantiescout">
              <li className="bg-blue-900 py-2 px-2 rounded-full">
                <FaInstagram />
              </li>
            </Link>
            <Link href="https://facebook.com/vakantiescout">
              <li className="bg-blue-900 py-2 px-2 rounded-full">
                <FaFacebook />
              </li>
            </Link>
            <Link href="https://twitter.com/vakantiescout">
              <li className="bg-blue-900 py-2 px-2 rounded-full">
                <FaTwitter />
              </li>
            </Link>
            <Link href="https://youtube.com/@vakantiescout">
              <li className="bg-blue-900 py-2 px-2 rounded-full">
                <FaYoutube />
              </li>
            </Link>
          </ul>
          <ul className="text-black max-w-xl mx-4 sm:mx-auto items-center gap-2">
            <Link href="https://vakantiescout.nl/" target="_blank">
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <Image
                    src={logo}
                    height={40}
                    width={40}
                    alt="VakantieScout.nl"
                    className="rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  VakantieScout.nl
                </div>
              </li>
            </Link>

            <Link href="https://vakantiescout.nl/ontdekken" target="_blank">
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <BsBookmarkStarFill className="h-8 w-8" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Deals
                </div>
              </li>
            </Link>

            <Link href="https://vakantiescout.nl/aanbieders" target="_blank">
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <ImAirplane className="h-8 w-8 rotate-90" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Reisaanbieders
                </div>
              </li>
            </Link>

            <Link
              href="https://vakantiescout.nl/kortingsacties"
              target="_blank"
            >
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <IoGiftSharp className="h-8 w-8" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Kortingsacties
                </div>
              </li>
            </Link>

            <Link href="https://vakantiescout.nl/vakantiedagen" target="_blank">
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <FaCalendarAlt className="h-8 w-8" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Vakantie en Feestdagen
                </div>
              </li>
            </Link>

            <Link
              href="https://vakantiescout.nl/aanbieders/vakantiediscounter"
              target="_blank"
            >
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <FaRankingStar className="h-8 w-8" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Reviews
                </div>
              </li>
            </Link>

            <Link href="https://vakantiescout.nl/nieuws" target="_blank">
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <FaNewspaper className="h-8 w-8" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Vakantie Nieuws
                </div>
              </li>
            </Link>

            <Link href="https://vakantiescout.nl/reischecklist" target="_blank">
              <li className="flex  justify-between rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-start justify-start ml-2  gap-2 mt-1  text-xl font-semibold ">
                  <FaFilePdf className="h-8 w-8" />
                </div>
                <div className="flex justify-center items-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Inpaklijst
                </div>
              </li>
            </Link>

            <div className=" w-full lg:w-full mt-5 mb-5">
              <Link href="https://vakantiescout.nl/kortingsacties">
                <li className="flex items-center  rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                  <div className="flex justify-between items-center text-center   mx-auto gap-2 mt-1  text-xl font-semibold ">
                    <div className="flex flex-col">
                      <h1 className="flex items-center gap-1">
                        🚀 Prijsvrij Stapelkorting
                      </h1>
                    </div>
                  </div>
                </li>
              </Link>
              <Link href="https://vakantiescout.nl/kortingsacties">
                <Image
                  src="https://cdn.prijsvrij.nl/Upload/Images/Acties/Stapelkorting/Resultatenbanners_Stapelkorting_2023_D.jpg"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-full  rounded-bl-xl rounded-br-xl object-fill bg-black opacity-90 hover:opacity-100"
                />
              </Link>
            </div>

            <div className=" w-full lg:w-full mt-5 mb-5">
              <Link href="https://vakantiescout.nl/kortingsacties">
                <li className="flex items-center  rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                  <div className="flex justify-between items-center text-center   mx-auto gap-2 mt-1  text-xl font-semibold ">
                    <div className="flex flex-col">
                      <h1 className="flex items-center gap-1">
                        🚀 Corendon Vroegboekweken
                      </h1>
                    </div>
                  </div>
                </li>
              </Link>
              <Link href="https://vakantiescout.nl/kortingsacties">
                <Image
                  src="https://images.corendonresources.com/NL/VDVBW2023-Header_728x200.jpg"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-full  rounded-bl-xl rounded-br-xl object-fill bg-black opacity-90 hover:opacity-100"
                />
              </Link>
            </div>

            <Link
              href="https://vakantiescout.nl/curacao/hotels/mangrove-beach-resort"
              target="_blank"
            >
              <li className="flex items-center mt-5 rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  <Image
                    src="https://www.prijsvrij.nl/MVVMC/Themes/Images/Base/ico/flags/CW.svg"
                    height={30}
                    width={30}
                    alt="CW"
                    className="rounded-sm"
                  />
                  Laatste Review
                </div>
              </li>
            </Link>

            <Link
              href="https://vakantiescout.nl/curacao/hotels/mangrove-beach-resort"
              target="_blank"
              rel="sponsored noopener"
            >
              <div className="relative top-0  w-full  object-fill">
                <Image
                  src="https://images.corendonresources.com/L1E9404A1W1600H1066.webp?v=221116145344"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-60  object-center"
                />

                <div className=" text-start bg-gray-100 py-2 px-2 rounded-bl-xl rounded-br-xl mb-5">
                  <div className="text-white flex flex-col justify-start text-xl font-bold">
                    <div className="flex justify-between items-center text-black">
                      <h1>Corendon Mangrove Beach Resort</h1>
                      <div>
                        <BsBoxArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* <Link
              href="https://ds1.nl/c/?si=7805&li=1362777&wi=385520&ws=&dl=portugal%2Flissabon%2Flissabon%2Fselina_secret_garden_lissabon"
              target="_blank"
            >
              <li className="flex items-center mt-5 rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  💎 Uniek
                </div>
              </li>
            </Link>

            <Link
              href="https://tc.tradetracker.net/?c=14392&m=12&a=446931&r=VakantieScout&u=%2Fnl%2Fsrl%3FthemeId%3D600%26search%3D100-38040%26sem_keyword%3Dhacienda%2520na%2520xamena%26sem_creativeid%3D612165073871%26sem_matchtype%3Dp%26sem_network%3Dg%26sem_device%3Dc%26sem_placement%3D%26sem_target%3D%26sem_adposition%3D%26sem_param1%3D%26sem_param2%3D%26sem_campaignid%3D20408268687%26sem_adgroupid%3D157553662688%26sem_targetid%3Dkwd-539392071%26sem_location%3D9065301%26cipc%3Dsem%26cip%3D3119000360%26gad%3D1%26gclid%3DCjwKCAjwpJWoBhA8EiwAHZFzfozXnzXbcpvgj6xXFObKykZEofo9z4QzwCIx0UN7PmLjGg1RYccTmxoCd-EQAvD_BwE"
              target="_blank"
            >
              <div className="relative top-0  w-full  object-fill">
                <Image
                  src={hacienda}
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-60  object-cover"
                />
                <div className="absolute top-4 left-2 py-2 px-2 bg-orange-500 rounded-xl text-sm text-white">
                  <h1 className="flex items-center gap-1">
                    <LiaSearchLocationSolid />
                    Ibiza, Spanje 🇪🇸
                  </h1>
                </div>

                <div className=" text-start bg-gray-100 py-2 px-2 rounded-bl-xl rounded-br-xl mb-5">
                  <div className="text-white flex flex-col justify-start text-xl font-bold">
                    <div className="flex justify-between items-center text-black">
                      <h1>Hacienda Na Xamena</h1>
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
                        <BsStarFill className="text-yellow-400" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link> */}
          </ul>
        </div>
      </div>
    </>
  );
}
