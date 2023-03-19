import React from 'react';
import { BiCheckCircle, BiFilter } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const UserMail = () => {
  return (
    <>
      <div className="flex w-[28%] flex-col border-[1px] border-black rounded-tr-[5px] rounded-tl-[5px]">
        <div className="flex items-center text-white font-[600] justify-between w-full  h-[50px] px-3 shadow-md rounded-tr-[5px] rounded-tl-[5px] bg-[#333333]">
          <div className="flex items-center gap-5">
            <span>
              <BiCheckCircle />
            </span>
            <span>
              <Link to="/">Focused</Link>
            </span>
            <span>
              <Link to="/">Other</Link>
            </span>
          </div>
          <div className="flex items-center">
            <button className="flex items-center btn gap-2">
              <BiFilter />
              Filter
            </button>
          </div>
        </div>
        <div className="h-screen overflow-scroll md:pb-5">
          <div className="flex flex-col w-full min-h-screen">
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000] border-l-[3px] border-l-[#69afe5] px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700] text-[#69afe5]">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000]  px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700]">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000]  px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700] ">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000] border-l-[3px] border-l-[#69afe5] px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700] text-[#69afe5]">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000] border-l-[3px] border-l-[#69afe5] px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700] text-[#69afe5]">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000]  px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700] text-[#69afe5]">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px] border-b-[1px] border-b-[#000] border-l-[3px] border-l-[#69afe5] px-2 gap-3 hover:bg-[#000] hover:cursor-pointer">
              <div className="avatar flex">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </div>
              </div>
              <div className="items-center w-full">
                <span className="text-sm font-[600] text-whitesmoke">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
                <div className="flex justify-between items-center text-sm font-[700] text-[#69afe5]">
                  <span>
                    <p>Eye neck need to rig this election...</p>
                  </span>
                  <span>22:13</span>
                </div>
                <span className="text-sm text-white">
                  Yakubu Mahmood, Bola Ahmed...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMail;
