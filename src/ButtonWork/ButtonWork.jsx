import React from 'react';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';

const ButtonWork = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
            <button className='btn py-10'>
                <span className="text-xl"><LuPhoneCall /></span>
                <span className="text-sm font-medium">Call</span>
            </button>

            <button className='btn py-10'>
                <span className="text-xl"><BsChatLeftTextFill /></span>
                  <span className="text-sm font-medium">Text</span>
            </button>

            <button className='btn py-10'>
                
                  <span className="text-xl"><FaVideo /></span>
                  <span className="text-sm font-medium">Video</span>
                
                </button>
        </div>
    );
};

export default ButtonWork;