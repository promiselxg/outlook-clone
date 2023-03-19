import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMenu,
  FiMail,
  FiChevronDown,
  FiTrash2,
  FiTrash,
  FiClock,
  FiFlag,
} from 'react-icons/fi';
import { CiShoppingTag } from 'react-icons/ci';
import { GoZap } from 'react-icons/go';
import { GrRevert, GrRedo } from 'react-icons/gr';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { TfiPin2 } from 'react-icons/tfi';
import FavoriteBar from '../../Sidebar/FavoriteBar';
import UserMail from '../../Mails/UsersMail';
import MailBody from '../../Mails/MailBody';

const MiddleHeader = () => {
  return (
    <>
      <div className=" flex flex-col items-center w-full h-[60px] mx-[10px]">
        <div className="flex items-center w-full gap-3 py-2">
          <Link to="/" className="border-b-[2px] border-[#69afe5]">
            Home
          </Link>
          <Link to="/">View</Link>
          <Link to="/">Help</Link>
        </div>
        <div className="flex items-center gap-3 w-full shadow-md  rounded-[5px] bg-[#333333] p-[6px] my-1">
          <span>
            <FiMenu className="text-[20px]" />
          </span>
          <span className="flex items-center text-[#212121]">
            <button class="btn flex items-center gap-3 bg-[#69afe5]  p-1 rounded-tl rounded-bl">
              <FiMail />
              New mail
            </button>
            <button class="btn flex gap-2 bg-[#69afe5]  p-2 rounded-tr rounded-br border-l-[0.1px] border-l-[#212121]">
              <FiChevronDown />
            </button>
          </span>
          <div className="flex items-center gap-6">
            <span>
              <button class="btn flex items-center gap-1">
                <FiTrash />
                <FiChevronDown />
              </button>
            </span>
            <span>
              <FiTrash2 />
            </span>
            <span>
              <HiOutlineShieldCheck />
            </span>
            <span>
              <GrRevert />
            </span>
            <span>
              <GrRedo />
            </span>
            <span>
              <button class="btn flex items-center gap-2 text-white">
                <GoZap />
                Quick steps
                <FiChevronDown />
              </button>
            </span>
            <span>
              <button class="btn flex items-center gap-2 text-white">
                <FiMail />
                Mark all as read
              </button>
            </span>
            <span>
              <CiShoppingTag />
            </span>
            <span>
              <FiFlag />
            </span>
            <span>
              <FiClock />
            </span>

            <span>
              <TfiPin2 />
            </span>
          </div>
        </div>
        <div className="flex w-full ">
          <FavoriteBar />
          <UserMail />
          <MailBody />
        </div>
      </div>
    </>
  );
};

export default MiddleHeader;
