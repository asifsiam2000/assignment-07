"use client";
import { FriendsContext } from "@/context/friend.context";
import React, { useContext, useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { FaEnvelopeOpenText, FaVideo } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const TimeLine = () => {
  const [callOn, setCallOn] = useState(false);
  const [videoOn, setVieoOn] = useState(false);
  const [textOn, setTextOn] = useState(false);
  const [allOn, setAllOn] = useState(true);

  const { call, setCall, text, setText, video, setVideo, allData, setAllData } =
        useContext(FriendsContext);
    
    
    
    
    const runingFunction = (id) => {
        if (id == 1) {
            setCallOn(true);
            setVieoOn(false);
            setTextOn(false);
            setAllOn(false);
        }
        else if (id == 2) {
            setCallOn(false);
            setVieoOn(false);
            setTextOn(true);
            setAllOn(false);
        }
        else if (id == 3) {
            setCallOn(false);
            setVieoOn(true);
            setTextOn(false);
            setAllOn(false);
        }
    }
    
    
  return (
    <div className="container mx-auto my-20 space-y-4">
      <h2 className="text-2xl font-bold">Timeline</h2>

      <div className="dropdown dropdown-bottom dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1 font-light">
          Filter timeline <BiArrowToBottom />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <button onClick={() => runingFunction(2)}  className="btn">Text</button>
          </li>
          <li>
            <button onClick={() => runingFunction(1)} className="btn">Call</button>
          </li>
          <li>
            <button onClick={() => runingFunction(3)} className="btn">Video</button>
          </li>
        </ul>
      </div>

      {allOn &&
        allData.map((data) => (
          <div
            key={data.id}
            className="bg-base-200 gap-2  flex items-center rounded-2xl space-y-4 p-5"
          >
            <div>
              {data.type === "Text" ? (
                <FaEnvelopeOpenText />
              ) : data.type == "Call" ? (
                <FiPhoneCall />
              ) : (
                <FaVideo />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {data.type}{" "}
                <span className="text-xl font-semibold text-[#64748B]">
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
          <div key={key} className="bg-base-200 gap-2  flex items-center rounded-2xl space-y-4 p-5">
            <div>
              
                <FiPhoneCall />
              
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {data.type}{" "}
                <span className="text-xl font-semibold text-[#64748B]">
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
          <div key={key} className="bg-base-200 gap-2  flex items-center rounded-2xl space-y-4 p-5">
            <div>
              
                <FaEnvelopeOpenText />
              
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {data.type}{" "}
                <span className="text-xl font-semibold text-[#64748B]">
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
          <div key={key} className="bg-base-200 gap-2  flex items-center rounded-2xl space-y-4 p-5">
            <div>
              
                <FaVideo />
              
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {data.type}{" "}
                <span className="text-xl font-semibold text-[#64748B]">
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
