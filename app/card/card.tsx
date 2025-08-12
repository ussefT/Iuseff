import { describe } from "node:test";
import card_object from "./typeCard";
import Link from "next/link";


export default function Card({title,describe,href,lastupdate}:card_object) {
    // const {title,desc,lastupdate}=props.params
    
    return(
        <>
  <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full">
    <div className="p-4">
      <h5 className="mb-2 text-slate-800 text-lg sm:text-xl font-semibold">
        <Link href={href} target="_blank">
        {title}
        </Link>
      </h5>
      <p className="text-slate-600 leading-normal font-light text-sm sm:text-base">
        Chat with AI via Hugging Face
        {describe}
      </p>
    </div>
    <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
      <span className="text-sm text-slate-600 font-medium">
        {lastupdate}
        Last updated: 3 days ago
      </span>
    </div>
  </div>
        </>
    );
}
