import React from 'react';
import {
  FiAlignJustify,
  FiSettings,
  FiTrash,
  FiTwitch,
  FiVideo,
} from 'react-icons/fi';
import { BiConversation } from 'react-icons/bi';
import { VscSearch } from 'react-icons/vsc';

const TopHeader = () => {
  return (
    <>
      <div className="flex items-center text-white bg-[#0078D4]">
        <div className="container max-w-full flex p-2 justify-between gap-20">
          <div className="flex w-[42.5%] justify-start gap-32">
            {/*logo */}
            <div className="flex gap-8 items-center">
              <FiAlignJustify className="h-[25px] w-[25px]" />
              <span className="font-[600] text-md">Outlook</span>
            </div>
            <div className="flex w-full text-center gap-3 text-white rounded-[5px] py-1 px-2 bg-slate-600">
              <VscSearch className="flex items-center mt-[0.2rem] h-[20px] w-[20px]" />
              <input
                type="text"
                placeholder="Type here"
                className="input w-full bg-transparent outline-0 "
              />
            </div>
            {/*Search */}
          </div>
          <div className="flex justify-end items-center gap-10 w-[50%] mr-5">
            <div className="flex items-center gap-5">
              <span>
                <FiVideo />
              </span>
              <span>Teams call</span>
            </div>
            <div>
              <FiTwitch />
            </div>
            <div>
              <BiConversation />
            </div>
            <div>
              <FiSettings />
            </div>
            <div>
              <FiTrash />
            </div>
          </div>
          {/*right icons */}
        </div>
      </div>
    </>
  );
};

export default TopHeader;
