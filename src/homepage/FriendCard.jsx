import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ data }) => {
    
    return (
        <Link href={`/friend/${data.id}`}>
            <div className='bg-base-200 text-center p-6 rounded-2xl'>
            <div className='flex justify-center'>
                <Image src={data.picture} alt='friend' height={100} width={100} className='rounded-full'></Image>
            </div>
            <h2 className='text-xl font-bold'>{data.name}</h2>
            <p className='text-[#64748B]'>{data.days_since_contact}d ago</p>
            <div className='space-y-2'>
                    <div>
                        {/* <div className="badge badge-soft badge-success">{data.tags}</div> */}
                        {
                            data.tags.map((buj , ind) => <div key={ind} className='badge badge-soft badge-success mr-2'>{buj}</div>)
                        }
                    </div>
                <div>
                    {
                data.status === 'on-track' ? (<div className="badge badge-success text-white">{data.status}</div>) :
                    data.status === 'almost due' ? (<div className="badge badge-warning text-white">{data.status}</div>):
                    (<div className="badge badge-secondary text-white">{data.status}</div>)
            }
                </div>
             </div>
        </div>
        </Link>
    );
};

export default FriendCard;