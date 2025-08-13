"use client";
import { useEffect, useState } from "react";
import { TypingTextProps } from "./typingTextProps";

export default function TypeText({ text, speed = 100 }: TypingTextProps) {
  const [displayText, setdisplayText] = useState("");
  const [showcursor, setshowcursor] = useState(true);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setdisplayText((prev) => prev + text.charAt(index));
      index+=1;

      if (index >= text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    const curosrInterval = setInterval(() => {
      setshowcursor((prev) => !prev);
      if(index>=text.length){
        clearInterval(curosrInterval);
        setshowcursor(false);
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
      clearInterval(curosrInterval);
    };
  }, [text, speed]);

  return (
    <>
      {/* <div className="flex justify-center items-center min-h-[30vh] px-4"> */}
      <span className="font-mono justify-center items-center min-h-[30vh]">     
         {displayText}

          {showcursor && (
            <span className="m-1 border-l-4 bg-white animate-pulse" />
          )}
        </span>
      {/* </div> */}
    </>
  );
}
