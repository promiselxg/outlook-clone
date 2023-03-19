import React from 'react';
import {
  FiChevronRight,
  FiMail,
  FiEdit3,
  FiTrash2,
  FiFile,
  FiArchive,
} from 'react-icons/fi';
import { BiSend } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const FavoriteBar = () => {
  return (
    <>
      <div className="flex flex-col w-[12%] mr-[10px] h-screen">
        <Link
          to="/"
          className="flex items-center gap-2 p-2 mt-1 hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiChevronRight />
            Favorites
          </div>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiChevronRight />
            Folders
          </div>
        </Link>

        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiChevronRight />
            <FiMail />
            Inbox
            <span>4868</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiEdit3 />
            Drafts
            <span>3</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <BiSend />
            Sent Items
            <span>1</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiTrash2 />
            Deleted...
            <span>42</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiMail />
            Junk Em...
            <span>78</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiArchive />
            Archive
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiFile />
            Notes
            <span>4</span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2  hover:bg-black hover:text-white hover:rounded-[5px]"
        >
          <div className="flex items-center gap-2 text-[14px] my-[0.2rem] font-[500]">
            <FiFile />
            Conversati...
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 p-2 text-[14px] font-[500] hover:bg-black hover:text-white hover:rounded-[5px] "
        >
          Create New
        </Link>
      </div>
    </>
  );
};

export default FavoriteBar;
