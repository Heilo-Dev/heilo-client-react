import React from "react";
import { Link } from "react-router-dom";

// custom imports
import {
  GraduationCap,
  ClipBoardListCheck,
  Laptop,
  ProfileIcon,
  EditProfileIcon,
  EmailIcon,
  LogoutIcon,
  WalletIcon,
} from "shared/components/icons";
import { Image } from "shared/components/image";
import { DashboardMenuItem } from "../subComponents";
import Logo from "assets/img/logo-white.png";

const Sidebar = () => {
  const sideMenuData = [
    {
      label: "On Demand",
      icon: <GraduationCap width="30" />,
      path: "/student/on-demand",
    },
    {
      label: "Quiz",
      icon: <ClipBoardListCheck width="22" />,
      path: "/student/quiz",
    },
    {
      label: "Dashboard",
      icon: <Laptop width="28" />,
      path: "/student/dashboard",
    },
    {
      label: "Wallet",
      icon: <WalletIcon width="26" />,
      path: "/student/wallet",
    },
    {
      label: "Profile",
      icon: <ProfileIcon width="22" />,
      path: "/student/profile",
    },
    {
      label: "Edit Profile",
      icon: <EditProfileIcon width="30" />,
      path: "/student/edite/profile",
    },
    {
      label: "Inbox",
      icon: <EmailIcon width="26" />,
      path: "/student/inbox",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-[253px] h-full">
        <div className=" w-full flex justify-center items-center mt-12 mb-[30%]">
          <Link to="/">
            <div className="w-[96px] h-[46.75px]">
              <Image src={Logo} />
            </div>
          </Link>
        </div>
        <nav className="   pl-[21px] h-full w-full gap-1 flex flex-col justify-center ">
          <ul className=" flex flex-col">
            {sideMenuData &&
              sideMenuData?.map((element, i) => (
                <DashboardMenuItem key={i} {...element} />
              ))}
          </ul>
        </nav>
        <div className=" w-full h-full flex justify-center items-end">
          <button className="flex items-center mr-5">
            <div className="bg-white py-5 px-3 h-20 rounded-tl-full rounded-tr-full flex items-center">
              <LogoutIcon width={26} className="text-primaryDark" />
            </div>
            <h1 className="ml-2.5 text-white">Log Out</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
