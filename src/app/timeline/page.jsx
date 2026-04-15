



"use client";
import { FriendsContext } from "@/context/friend.context";
import React, { useContext, useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";
import Image from "next/image";

import img1 from "../../assets/call.png";
import img2 from "../../assets/text.png";
import img3 from "../../assets/video.png";

const TimeLine = () => {
  const [callOn, setCallOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false); 
  const [textOn, setTextOn] = useState(false);
  const [allOn, setAllOn] = useState(true);
  const [isOpen, setIsOpen] = useState(false); 

  const { call, text, video, allData } = useContext(FriendsContext);

  const runingFunction = (id) => {
    if (id == 1) {
      setCallOn(true);
      setVideoOn(false);
      setTextOn(false);
      setAllOn(false);
    } else if (id == 2) {
      setCallOn(false);
      setVideoOn(false);
      setTextOn(true);
      setAllOn(false);
    } else if (id == 3) {
      setCallOn(false);
      setVideoOn(true);
      setTextOn(false);
      setAllOn(false);
    }
  };

  return (
    <div className="container mx-auto my-20 space-y-4">
      <h2 className="text-2xl font-bold">Timeline</h2>

      
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-64 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-400 transition-all text-gray-600 font-medium focus:outline-none"
        >
          <span>Filter timeline</span>
          <BiArrowToBottom
            className={`text-xl transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
            
            
            <li>
              <button
                onClick={() => {
                  setAllOn(true);
                  setCallOn(false);
                  setVideoOn(false);
                  setTextOn(false);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
              >
                All
              </button>
            </li>

            {/* Text */}
            <li>
              <button
                onClick={() => {
                  runingFunction(2);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
              >
                Text
              </button>
            </li>

            
            <li>
              <button
                onClick={() => {
                  runingFunction(1);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
              >
                Call
              </button>
            </li>

            
            <li>
              <button
                onClick={() => {
                  runingFunction(3);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600"
              >
                Video
              </button>
            </li>
          </ul>
        )}
      </div>

     
      {allOn &&
        allData.map((data) => (
          <div
            key={data.id}
            className="bg-base-200 gap-2 flex items-center rounded-2xl p-5"
          >
            <div>
              {data.type === "Text" ? (
                <Image src={img2} alt="text" height={40} width={40} />
              ) : data.type === "Call" ? (
                <Image src={img1} alt="call" height={40} width={40} />
              ) : (
                <Image src={img3} alt="video" height={40} width={40} />
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {data.type}
                <span className="text-xl font-semibold text-[#64748B] ml-1">
                  with {data.name}
                </span>
              </h2>
              <p className="text-xl font-semibold text-[#64748B]">
                {data.next_due_date}
              </p>
            </div>
          </div>
        ))}

     
      {callOn &&
        call.map((data, key) => (
          <div
            key={key}
            className="bg-base-200 gap-2 flex items-center rounded-2xl p-5"
          >
            <Image src={img1} alt="call" height={40} width={40} />

            <div>
              <h2 className="text-2xl font-bold">
                Call
                <span className="text-xl font-semibold text-[#64748B] ml-1">
                  with {data.name}
                </span>
              </h2>
              <p className="text-xl font-semibold text-[#64748B]">
                {data.next_due_date}
              </p>
            </div>
          </div>
        ))}

     
      {textOn &&
        text.map((data, key) => (
          <div
            key={key}
            className="bg-base-200 gap-2 flex items-center rounded-2xl p-5"
          >
            <Image src={img2} alt="text" height={40} width={40} />

            <div>
              <h2 className="text-2xl font-bold">
                Text
                <span className="text-xl font-semibold text-[#64748B] ml-1">
                  with {data.name}
                </span>
              </h2>
              <p className="text-xl font-semibold text-[#64748B]">
                {data.next_due_date}
              </p>
            </div>
          </div>
        ))}

     
      {videoOn &&
        video.map((data, key) => (
          <div
            key={key}
            className="bg-base-200 gap-2 flex items-center rounded-2xl p-5"
          >
            <Image src={img3} alt="video" height={40} width={40} />

            <div>
              <h2 className="text-2xl font-bold">
                Video
                <span className="text-xl font-semibold text-[#64748B] ml-1">
                  with {data.name}
                </span>
              </h2>
              <p className="text-xl font-semibold text-[#64748B]">
                {data.next_due_date}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TimeLine;
