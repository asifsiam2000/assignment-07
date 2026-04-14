import React from 'react';

const Banner = () => {
    return (
        <div className='text-center space-y-4 p-10 bg-base-200 rounded-xl'>
            <h2 className='font-bold text-5xl'>Friends to keep close in your life</h2>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;