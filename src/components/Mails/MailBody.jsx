import React from 'react';
import { TfiZoomIn, TfiFaceSmile } from 'react-icons/tfi';
import { VscChevronDown, VscExpandAll } from 'react-icons/vsc';
import { FiAlertCircle, FiSun } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { TiArrowBackOutline, TiArrowForwardOutline } from 'react-icons/ti';
import { MdReplyAll } from 'react-icons/md';
import { SlActionRedo } from 'react-icons/sl';

import { Link } from 'react-router-dom';

const MailBody = () => {
  return (
    <>
      <div className="w-[60%] ml-1">
        <div className="hidden flex-col items-center justify-center h-screen md:-mt-[50px] gap-y-[1px]">
          <img
            src="https://res.cdn.office.net/owamail/20230303006.11/resources/images/illustration_mail-hash-57b4bdda.svg"
            alt="image"
          />
          <h2 className="text-white font-[600] text-[14px]">
            Select an item to read
          </h2>
          <p className="text-white text-[14px]">Nothing is selected</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between bg-[#333333] shadow border border-[#000] p-3 rounded-md">
            <div className="w-full">
              <h2 className="text-[18px] font-[600] text-white">
                How Eye Neck rigged the 2023 General election - It was beautiful
                while it lasted...
              </h2>
            </div>
            <div className="flex items-center gap-3 ">
              <button className="btn gap-1 flex items-center p-2 hover:bg-black hover rounded-[5px] ">
                <TfiZoomIn />
                <VscChevronDown />
              </button>
              <button className="btn p-2 hover:bg-black hover rounded-[5px]">
                <VscExpandAll />
              </button>
            </div>
          </div>
          <div className="flex flex-col h-screen my-2 overflow-scroll mailbox pb-60">
            <div className="border rounded-[5px] ">
              <div className="w-full flex items-center h-[60px] p-3 gap-3 border-b-[1px] border-black cursor-pointer">
                <span>
                  <FiAlertCircle />
                </span>
                <span>
                  Retention: GDPR (5 years) Expires: Thu 16/03/2028 17:57
                </span>
              </div>
              <div className="flex flex-col p-3">
                <div className="avatar flex gap-3 ">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      className="w-[35px] h-[35px] rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <span className="font-[600]">Anuforo Okechukwu</span>
                      <span className="flex items-center gap-5 text-[#55acf0]">
                        <Link to="/">
                          <FiSun />
                        </Link>
                        <Link to="/">
                          <TfiFaceSmile />
                        </Link>
                        <Link to="/">
                          <TiArrowForwardOutline />
                        </Link>
                        <Link to="/">
                          <MdReplyAll />
                        </Link>
                        <Link to="/">
                          <TiArrowBackOutline />
                        </Link>
                        <Link to="/">
                          <HiOutlineDotsHorizontal />
                        </Link>
                      </span>
                    </div>
                    <div className="w-full">
                      <span className="flex justify-between items-center ">
                        <p className="text-sm font-[600]">
                          To: Anuforo Okechukwu; Anuforo Okechukwu;
                        </p>
                        <p className="pt-1">Sat 18/03/2023 17:57</p>
                      </span>
                      <span>
                        <p className="text-sm font-[400] text-white">
                          Cc: Anuforo Okechukwu Promise
                        </p>
                      </span>
                    </div>
                    <div className="w-full py-4">
                      <p className="text-[16px] text-white leading-tight">
                        Without a doubt, we will miss you dearly, Emmanuel...
                        You are just an ideal staff for the tasks you handled,
                        and we have entrusted you with a great deal of delicate
                        responsibilities; every time, you go above and beyond. I
                        wish the very and only the best in your new endeavor.
                      </p>
                    </div>
                    <div className="flex  gap-4 w-full py-5">
                      <button className="btn flex items-center gap-3 border py-1 px-3 rounded font-[600] hover:bg-[#005A9E] hover:text-[#55acf0]">
                        <TiArrowBackOutline />
                        Reply
                      </button>
                      <button className="btn flex items-center gap-3 border py-1 px-3 rounded font-[600] hover:bg-[#005A9E] hover:text-[#55acf0]">
                        <TiArrowBackOutline />
                        Reply all
                      </button>
                      <button className="btn flex items-center gap-3 border py-1 px-3 rounded font-[600] hover:bg-[#005A9E] hover:text-[#55acf0]">
                        <SlActionRedo />
                        Forward
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailBody;
