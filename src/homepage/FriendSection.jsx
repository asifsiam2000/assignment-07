import React from 'react';

const FriendSection = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4  my-8'>

            <div className='text-center bg-base-200 px-10 py-10 rounded-2xl mr-4'>
                <h3 className='text-xl font-bold  '>10</h3>
                <p className='text-[#64748B]'>Total Friend</p>
            </div>
            <div className='text-center bg-base-200 px-10 py-10 rounded-2xl mr-4'>
                <h3 className='text-xl font-bold  '>3</h3>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='text-center bg-base-200 px-10 py-10 rounded-2xl mr-4'>
                <h3 className='text-xl font-bold  '>6</h3>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='text-center bg-base-200 px-10 py-10 rounded-2xl'>
                <h3 className='text-xl font-bold  '>12</h3>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
            
            
        </div>
    );
};

export default FriendSection;