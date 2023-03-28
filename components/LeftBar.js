import React from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { TbBrandSafari } from "react-icons/tb";
import { BsMessenger } from "react-icons/bs";
import { FaPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function LeftBar() {
  const buttonList = [
    {
      title: "Home",
      logo: <AiFillHome size={30} />,
    },
    {
      title: "Search",
      logo: <AiOutlineSearch size={35} />,
    },
    {
      title: "Explore",
      logo: <TbBrandSafari size={35} />,
    },
    {
      title: "Messages",
      logo: <BsMessenger size={25} />,
    },
    {
      title: "Notifications",
      logo: <AiFillHeart size={30} />,
    },
    {
      title: "Create",
      logo: <FaPlusSquare size={30} />,
    },
    {
      title: "Profile",
      logo: <CgProfile size={30} />,
    },
  ];
  return (
    <div className="w-[20%] h-full bg-black text-white">
      <div className="w-full h-full flex flex-col justify-between p-14">
        <div className="w-full h-full flex flex-col gap-28">
          <h1 className="font-semibold text-3xl">Instagram</h1>
          <div className="flex flex-col gap-14">
            {buttonList.map((button) => (
              <div className="flex gap-5 items-center rounded-full bg-black hover:bg-gray-700 h-14 p-2">
                <div className="">{button.logo} </div>
                <h1 className="font-semibold text-xl">{button.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 items-center rounded-full bg-black hover:bg-gray-700 h-16 p-2">
          <AiOutlineMenu size={30} />
          <h1 className="font-semibold text-xl">More</h1>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
