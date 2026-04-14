import React from 'react';
import FriendCard from './FriendCard';

const Promice = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const friendData = await res.json();
    return friendData;
}


const AllFriend = async() => {
    const friends = await Promice();
    return (
        <div className='space-y-2 my-7 '>
            <h2 className='text-xl font-bold'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    friends.map(data => <FriendCard key={data.id} data ={data}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default AllFriend;