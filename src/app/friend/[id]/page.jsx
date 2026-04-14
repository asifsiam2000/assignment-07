
import ButtonWork from "@/ButtonWork/ButtonWork";
import Image from "next/image";
import React from "react";
import { FaArchive } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineNotificationsPaused } from "react-icons/md";

const Promice = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const friendData = await res.json();
    return friendData;
}

const FriendDetailsPage = async({params}) => {
    const friends = await Promice();
    const { id } = await params;
    const data = friends.find(friend => friend.id == id);
    console.log(data)
return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <Image
                src={data.picture}
                className="w-20 h-20 rounded-full"
                alt=""
                height={100}
                width={100}
              />

              <h2 className="mt-3 font-semibold text-lg">{data.name}</h2>

              {
                data.status === 'on-track' ? (<div className="badge badge-success my-1">{data.status}</div>) :
                  data.status === 'almost due' ? (<div className="badge badge-warning my-1">{data.status}</div>) :
                  (<div className="badge badge-error my-1">{data.status}</div>)
              }

              <span className="my-2 flex flex-wrap justify-center gap-1">
                {
                  data.tags.map((buj, ind) => <div key={ind} className='badge badge-soft badge-success'>{buj}</div>)
                }
              </span>

              <p className="text-sm text-gray-500 mt-3 italic">
                &quot;Former colleague, great mentor&quot;
              </p>

              <p className="text-xs text-gray-400 mt-1">Preferred: {data.email}</p>
            </div>

           
            <div className="mt-6 space-y-3">
              <div className="bg-gray-50 p-3 btn rounded-lg flex justify-center items-center gap-2 shadow-sm text-center font-bold cursor-pointer hover:bg-gray-100">
                <MdOutlineNotificationsPaused />
                <h2>Snooze 2 Weeks</h2>
              </div>
              <div className="bg-gray-50 btn p-3 flex justify-center items-center gap-2 font-bold rounded-lg shadow-sm text-center cursor-pointer hover:bg-gray-100">
                <FaArchive />
                <h2>Archive</h2>
              </div>
              <div className="bg-red-50 p-3 btn rounded-lg shadow-sm font-bold flex justify-center items-center gap-2 text-center text-red-500 cursor-pointer hover:bg-red-100">
                <MdDeleteOutline />
                <h2>Delete</h2>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-2xl font-bold">{data.days_since_contact}</h2>
                <p className="text-gray-500 text-sm">Days Since Contact</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-2xl font-bold">{data.goal}</h2>
                <p className="text-gray-500 text-sm">Goal (Days)</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-lg font-semibold">{data.next_due_date}</h2>
                <p className="text-gray-500 text-sm">Next Due</p>
              </div>
            </div>

           
            <div className="bg-white p-5 rounded-2xl shadow-md flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Relationship Goal</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Connect every <span className="font-bold">30 days</span>
                </p>
              </div>
              <div className="bg-gray-100 px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-200">
                Edit
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white p-5 rounded-2xl shadow-md flex-1">
              <h3 className="font-semibold mb-4">Quick Check-In</h3>

              <div >
                
                            <ButtonWork data={data}></ButtonWork>

                </div>
                        


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;





