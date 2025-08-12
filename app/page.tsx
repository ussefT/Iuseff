import Image from "next/image";
import card_object from "./card/typeCard";
import Card from "./card/card";
import Link from "next/link";
import SocialButtons from "./card/socialButton";
import image from "./../public/iam.jpg";
export default function Home() {
  const item: card_object[] = [
    {
      title: "Bot Telegram",
      describe: "Chat with AI via Huggin Face",
      lastupdate: "Last updated: 3 days ago",
      href: "https://github.com/ussefT/bot_telegram",
    },
    {
      title:"Hesab",
      describe:"Lite accounting program for calculating daily income and expenses written with django",
      lastupdate:"5 days ago",
      href:"https://github.com/ussefT/hesab"
    },
    {
      title:"Python get SSTP",
      describe:"Get sstp from vpngate",
      lastupdate:"2 years ago",
      href:"https://github.com/usseff-T/python-get-sstp"
    },
    {
      title:"Menu food ",
      describe:"Written with Kotlin for android",
      lastupdate:"2 years ago",
      href:"https://github.com/usseff-T/Food",
    },
    
  ];

  const description_main =
    " Hi I am software engineer focused on building clean, scalable web applications." +
    " Experienced in Python app and TypeScript development.";
  return (
    <>
      {/* Wrapper */}
      <div className="w-full min-h-screen bg-white dark:bg-gray-900 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-4 py-8 max-w-6xl mx-auto">
            {/* Left Side: Image, Name, Title, Description */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              {/* Profile Image */}
              <div className="rounded-3xl overflow-hidden">
                <Image
                  width={150}
                  height={150}
                  alt="Usef Tootian"
                  src={image}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl"
                />
              </div>

              {/* Name & Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  Usef Tootian
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  Software Engineering
                </p>
              </div>

              {/* Description */}
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                <p>{description_main}</p>
              </div>
            </div>

            {/* Right Side: Centered & Responsive Progress Bars */}
            <div className="md:col-span-3 flex items-center justify-center">
              {/* Main Progress Bar Grid - Centered Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-3xl">
                {/* JavaScript */}
                <div className="text-center px-4">
                  <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
                    JavaScript
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-yellow-400 h-2.5 rounded-full w-[70%]"></div>
                  </div>
                </div>

                {/* Python */}
                <div className="text-center px-4">
                  <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
                    Python
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[80%]"></div>
                  </div>
                </div>

                {/* Linux */}
                <div className="text-center px-4">
                  <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
                    Linux
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500 w-[50%]"></div>
                  </div>
                </div>

                {/* TypeScript */}
                <div className="text-center px-4">
                  <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-300">
                    TypeScript
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-400 h-2.5 rounded-full w-[70%]"></div>
                  </div>
                </div>

                {/* NextJs */}
                <div className="text-center px-4">
                  <div className="mb-1 text-base font-medium text-cyan-700 dark:text-gray-200">
                    NextJs
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <svg
              className="w-4 h-4 text-gray-700 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 py-8 max-w-6xl mx-auto">
          {item.map((item, key) => {
            return (
              <Card
                key={key}
                href={item.href}
                title={item.title}
                describe={item.describe}
                lastupdate={item.lastupdate}
              />
            );
          })}
        </div>

        {/* SocialButtons */}
        <div className=" w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
          <SocialButtons />
        </div>
      </div>
    </>
  );
}
