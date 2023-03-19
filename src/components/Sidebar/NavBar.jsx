import React from 'react';
import {
  FiMail,
  FiUsers,
  FiPaperclip,
  FiCheck,
  FiCloud,
  FiGrid,
} from 'react-icons/fi';
import { DiHaskell } from 'react-icons/di';
const NavBar = () => {
  return (
    <>
      <div className="flex bg-[#000] w-[4.2%] justify-center gap-5 h-screen">
        <ul className="flex flex-col p-1">
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer ">
            <FiMail className="text-[20px]" />
          </li>
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer">
            <FiUsers className="text-[20px]" />
          </li>
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer">
            <FiPaperclip className="text-[20px]" />
          </li>
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer">
            <FiCheck className="text-[20px]" />
          </li>
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer">
            <FiCloud className="text-[20px]" />
          </li>
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer">
            <DiHaskell className="text-[20px]" />
          </li>
          <li className="p-4 hover:bg-[#333] hover:text-[#69afe5] rounded-md cursor-pointer">
            <FiGrid className="text-[20px]" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
