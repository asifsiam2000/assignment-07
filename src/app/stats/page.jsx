'use client'
import { FriendsContext } from '@/context/friend.context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const States = () => {

 const { call, setCall, text, setText, video, setVideo, allData, setAllData } =
        useContext(FriendsContext);

    const data = [
  { name: 'Text', value: text.length, fill: '#0088FE' },
  { name: 'Call', value: call.length, fill: '#00C49F' },
  { name: 'Video', value: video.length, fill: '#00C400' },
  
];
    return (
        <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl  ">
        Friendship Analytics
            </h2>
            <p className='text-[#64748b]'>By Interaction Type</p>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
    );
};

export default States;