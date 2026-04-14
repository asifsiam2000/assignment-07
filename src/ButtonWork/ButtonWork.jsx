'use client';
import { FriendsContext } from '@/context/friend.context';
import React, { useContext } from 'react';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { toast } from 'react-toastify';

const ButtonWork = ({data}) => {
    const { call, setCall, text, setText, video, setVideo, allData, setAllData } = useContext(FriendsContext);
    const callFind = call.find(findData => findData.id == data.id);
    const textFind = text.find(findData => findData.id == data.id);
    const videoFind = video.find(findData => findData.id == data.id);
    
  

    const handelCall = () => {
        if (!callFind) {
            setCall([...call, data]);
        setAllData([...allData, {...data , type:'Call'}]);
        toast.success(`${data.name} is successfully meet Called`);
        }
        else {
            toast.warning('Call meeted already');
            return;
        }
    }

    const handelText = () => {
        if (!textFind) {
            setText([...text, data]);
        setAllData([...allData, {...data , type:'Text'}]);
        toast.success(`${data.name} is successfully meet Texted`);
        }
        else {
            toast.warning('Text meeted already');
            return
        }
    }

    const handelVideo = () => {
        if (!videoFind) {
            setVideo([...video, data]);
        setAllData([...allData,{...data , type:'Vedio'}]);
        toast.success(`${data.name} is successfully meet Vedio`);
        }
        else {
            toast.warning('video meeted already');
            return;
        }
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
            <button onClick={handelCall} className='btn py-10'>
                <span className="text-xl"><LuPhoneCall /></span>
                <span className="text-sm font-medium">Call</span>
            </button>

            <button onClick={handelText} className='btn py-10'>
                <span className="text-xl"><BsChatLeftTextFill /></span>
                  <span className="text-sm font-medium">Text</span>
            </button>

            <button onClick={handelVideo} className='btn py-10'>
                
                  <span className="text-xl"><FaVideo /></span>
                  <span className="text-sm font-medium">Video</span>
                
                </button>
        </div>
    );
};

export default ButtonWork;