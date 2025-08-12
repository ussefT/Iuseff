import Image from "next/image";
import card_object from "./card/typeCard";
import Card from "./card/card";
import Link from "next/link";
import SocialButtons from "./card/socialButton";
import image from "./../public/iam.jpg"
export default function Home() {

  const item:card_object[]=[
    {title:'Bot Telegram',
      describe:'Chat with AI via Huggin Face',
      lastupdate:'Last updated: 3 days ago'
      ,href:'https://github.com/ussefT/bot_telegram'},
  ]

  return (

<>
    <div className="p-15 m-15">

    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-4 py-8 max-w-6xl mx-auto">
  {/* Profile Image and Texts - Responsive */}
  <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
    {/* Image */}
    <div className="rounded-3xl overflow-hidden">
      <Image
        width={150}
        height={150}
        alt="Usef Tootian"
        src={image}
        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl"
      />
    </div>

    {/* Name and Title */}
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Usef Tootian</h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Software Engineering</p>
    </div>
  </div>

  {/* Progress Bars - Responsive Grid */}
  <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-0">
    {/* JavaScript */}
    <div className="text-center">
      <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">JavaScript</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-yellow-400 h-2.5 rounded-full w-[70%]"></div>
      </div>
    </div>

    {/* Python */}
    <div className="text-center">
      <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Python</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[80%]"></div>
      </div>
    </div>

    {/* Red (possibly typo?) */}
    <div className="text-center">
      <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">Linux</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500 w-[50%]"></div>
      </div>
    </div>

     <div className="text-center">
      <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Typescript</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-400 h-2.5 rounded-full w-[70%]"></div>
      </div>
    </div>
  </div>

    
 


 

</div>
<div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700"/>
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">

      
      {item.map((item,key)=>{
        return(
          <Card key={key}
          href={item.href}
           title={item.title}
            describe={item.describe} 
            lastupdate={item.lastupdate}/>
        )
      })}

 </div>

 {/*  */}
<div className=" w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">


<SocialButtons/>

{/* <Link
  href={'https://telegram.me/usseeff'}
  target="_blank"
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#0088cc] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 496 512">
      <path
        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
    </svg>
  </span>
</Link>

<Link
href={"https://github.com/ussefT"}
target="_blank"
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 496 512">
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  </span>
</Link>

<button
  data-tooltip-target="tooltip-default"
  type="button"
  data-twe-ripple-init
  data-twe-ripple-color="light"
  className="
  mb-2 inline-block rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <span className="[&>svg]:h-4 [&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 488 512">
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  </span>
</button> */}


</div>
</div>
                    

          {/*  */}
    

    
</>






  );
}
