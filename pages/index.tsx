import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FcFlashOn } from "react-icons/fc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { LiaSearchLocationSolid } from "react-icons/lia";
import logo from "@/public/linkslogo.png";
import Head from "next/head";
import hacienda from "@/public/haciendanaxamena.jpg";
import tuikorting from "@/public/tuikorting.png";

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
          <p className="mb-10 mt-2 text-white">
            De #1 Vakantie Website van Nederland
          </p>
          <ul className="text-black max-w-xl mx-4 sm:mx-auto items-center gap-2">
            <Link href="https://vakantiescout.nl/" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  🌎 VakantieScout.nl
                </div>
              </li>
            </Link>
            <Link
              href="https://vakantiescout.nl/aanbieders/vakantiediscounter"
              target="_blank"
            >
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  📊 Reviews
                </div>
              </li>
            </Link>
            <Link href="https://vakantiescout.nl/deals" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  🔍 Deals{" "}
                </div>
              </li>
            </Link>

            <Link href="https://vakantiescout.nl/reischecklist" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  ✅ Reis Checklist{" "}
                </div>
              </li>
            </Link>
            <Link href="https://vakantiescout.nl/blog" target="_blank">
              <li className="flex items-center  rounded-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  mb-5">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  🗞️ Blog{" "}
                </div>
              </li>
            </Link>

            <div className=" w-full lg:w-full mt-5 mb-5">
              <Link href="https://vakantiescout.nl/kortingsacties">
                <li className="flex items-center  rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                  <div className="flex justify-between items-center text-center   mx-auto gap-2 mt-1  text-xl font-semibold ">
                    <div className="flex flex-col">
                      <h1 className="flex items-center gap-1">
                        🚀 Tui Ticketdeals
                      </h1>
                    </div>
                  </div>
                </li>
              </Link>
              <Link href="https://vakantiescout.nl/kortingsacties">
                <Image
                  src={tuikorting}
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
                        🚀 Nieuwste Kortingsactie: Stapelkorting
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
                        🚀 Kortingsactie: Winterzon
                      </h1>
                    </div>
                  </div>
                </li>
              </Link>
              <Link href="https://vakantiescout.nl/kortingsacties">
                <Image
                  src="https://images.corendonresources.com/NL/Winterzon_Topbanner_1168x500.webp"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-full  rounded-bl-xl rounded-br-xl object-fill bg-black opacity-90 hover:opacity-100"
                />
              </Link>
            </div>

            <Link
              href="https://ds1.nl/c/?si=7805&li=1362777&wi=385520&ws=&dl=portugal%2Flissabon%2Flissabon%2Fselina_secret_garden_lissabon"
              target="_blank"
            >
              <li className="flex items-center mt-5 rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  Curaçao by June
                </div>
              </li>
            </Link>

            <Link
              href="https://ds1.nl/c/?si=3115&li=1137544&wi=385520&ws=&dl=curacao"
              target="_blank"
              rel="sponsored noopener"
            >
              <div className="relative top-0  w-full  object-fill">
                <Image
                  src="https://images.corendonresources.com/L1E11216A1W1024H684.webp?v=230915103259"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-60  object-center"
                />
                <div className="absolute top-4 left-2 py-2 px-2 bg-orange-500 rounded-xl text-sm text-white">
                  <h1 className="flex items-center gap-1">
                    <LiaSearchLocationSolid />
                    Curaçao
                  </h1>
                </div>

                <div className=" text-start bg-gray-100 py-2 px-2 rounded-bl-xl rounded-br-xl mb-5">
                  <div className="text-white flex flex-col justify-start text-xl font-bold">
                    <div className="flex justify-between items-center text-black">
                      <h1>Kleinschalige vakanties</h1>
                      <div>
                        <BsBoxArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link
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
            </Link>

            <Link
              href="https://www.elizawashere.nl/griekenland/karpathos/gianniou/sophid-suites?utm_source=Guden%20Ecom&utm_medium=tradetracker&network=tradetracker"
              target="_blank"
            >
              <li className="flex items-center  rounded-tl-lg rounded-tr-lg  bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 py-4  ">
                <div className="flex items-center text-center justify-center  mx-auto gap-2 mt-1  text-xl font-semibold ">
                  <FcFlashOn className="text-yellow-400" /> Nu Populair!
                </div>
              </li>
            </Link>

            <div className="relative top-0  w-full  object-fill">
              <Link
                href="https://ds1.nl/c/?si=729&li=44046&wi=385520&ws=VakantieScout&dl=curacao%3FdepartDate%3D%255B231101%2C240331%255D"
                target="_blank"
              >
                <Image
                  src="https://images.corendonresources.com/L5E74A3W1600H1066.webp?v=220603124717"
                  width={440}
                  height={540}
                  alt="alt"
                  priority={true}
                  className="w-full h-60  object-cover"
                />
                <div className="absolute top-4 left-2 py-2 px-2 bg-orange-500 rounded-xl text-sm text-white">
                  <h1 className="flex items-center gap-1">
                    <LiaSearchLocationSolid />
                    Curaçao 🇨🇼
                  </h1>
                </div>
                <div className="absolute bottom-20 right-2 py-2 px-2 bg-orange-500 rounded-full text-sm text-white">
                  <h1 className="flex items-center gap-1 font-extrabold text-xl">
                    <span className="text-xs font-bold italic">vanaf</span> €545
                  </h1>
                </div>

                <div className=" text-start bg-gray-100 py-2 px-2 rounded-bl-xl rounded-br-xl">
                  <div className="text-white flex flex-col justify-start text-xl font-bold">
                    <div className="flex justify-between items-center text-black">
                      <h1>Heerlijk genieten in het tropische Curaçao</h1>
                      <div>
                        <BsBoxArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
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
                    Lissabon, Portugal 🇵🇹
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
