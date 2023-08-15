import Image from "next/image";
import Link from "next/link";

import DashLogo from "@/public/assets/images/speedometer-icon.png";
import HomeIcon from "@/public/assets/images/home-icon.png";
import GoalsIcon from "@/public/assets/images/goals-icon.png";
import TasksIcon from "@/public/assets/images/tasks-icon.png";
import AppsIcon from "@/public/assets/images/apps-icon.png";
import SettingsIcon from "@/public/assets/images/settings-icon.png";
import DocumentsIcon from "@/public/assets/images/documents-icon.png";
import StatisticsIcon from "@/public/assets/images/statistics-icon.png";
import TimeboxingIcon from "@/public/assets/images/timeboxing-icon.png";
import TrophyIcon from "@/public/assets/images/trophy-icon.png";
import LogoutIcon from "@/public/assets/images/logout-icon.png";

// images array
const images = [
  HomeIcon,
  GoalsIcon,
  TasksIcon,
  AppsIcon,
  SettingsIcon,
  DocumentsIcon,
  StatisticsIcon,
  TimeboxingIcon,
  TrophyIcon,
];
// main Menu items and sub Menu items get from DB
const menu = [
  { id: 1, title: "Home", img: "HomeIcon", hasSub: false, subs: [] },
  {
    id: 2,
    title: "Goals",
    img: "GoalsIcon",
    hasSub: true,
    subs: [],
  },
  { id: 3, title: "Tasks", img: "TasksIcon", hasSub: false,subs:[] },
  { id: 4, title: "Apps", img: "AppsIcon", hasSub: true,subs:[{
    id: 21,
    title: "subMenu #1",
    img: "AppsIcon",
    hasSub: false,
    subs: [],
  },
  {
    id: 22,
    title: "subMenu #2",
    img: "AppsIcon",
    hasSub: false,
    subs: [],
  },
  {
    id: 23,
    title: "subMenu #3",
    img: "AppsIcon",
    hasSub: false,
    subs: [],
  },
  {
    id: 24,
    title: "subMenu #4",
    img: "AppsIcon",
    hasSub: false,
    subs: [],
  },] },
  { id: 5, title: "Statistics", img: "StatisticsIcon", hasSub: false },
  { id: 6, title: "Timeboxing", img: "TimeboxingIcon", hasSub: false },
  { id: 7, title: "Documents", img: "DocumentsIcon", hasSub: false },
  { id: 8, title: "Settings", img: "SettingsIcon", hasSub: false },
];

// get name of image from DB and check in the images array and place src in Image
const imageHandler = (image) => {
  for (let index = 0; index < images.length; index++) {
    if (
      images[index].src
        .toLowerCase()
        .replace("-", "")
        .includes(image.toLowerCase())
    ) {
      return images[index];
    }
  }
};

export default function SidePanel() {
  return (
    // upper section --> logo & name
    <div className="w-56 flex flex-col justify-start items-center p-2 bg-gray-800">
      <div className="w-full flex items-center">
        <Image width={40} src={DashLogo} />
        <div className="px-2 font-iransansb text-2xl text-white">
          iDashboard
        </div>
      </div>
      {/* Middle section --> menu */}
      <div className="w-full h-[650px] flex flex-col justify-between px-2 py-4 rounded-md">
        <ul className="text-gray-500">
          {menu.map((item) => {
            return (
              <li className="text-gray-500 my-4 p-1 rounded-md group hover:bg-gray-700 hover:rounded-md hover:p-1 transition-all duration-300" key={item.id}>
                <Link className="flex items-center gap-2 group hover:text-gray-400" href={"/"}>
                  {/* i think we can have hover effect on icons by colored them with state that is on mouse entering and leaving and change src of Image */}
                <Image width={20} height={20} src={imageHandler(item.img)} />
                  <div>{item.title}</div>
                </Link>
                <div>
                  {item.hasSub && (
                    <ul className="pl-6">
                      {item.subs.map((subitem) => (
                        <li className="w-full h-fit px-1 rounded-md group hover:bg-gray-600 hover:rounded-md hover:px-1 transition-all duration-300">
                          <Link
                            className="flex items-center gap-2 my-2 text-sm hover:text-gray-400 "
                            href={"/"}
                          >
                            <Image
                              width={15}
                              height={15}
                              src={imageHandler(subitem.img)}
                            />
                            <div>{subitem.title}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        {/* bottom section --> Logout */}
        <div>
          <Link className="flex items-center p-1 gap-2 rounded-md text-gray-500 group  hover:rounded-md hover:bg-yellow-400 hover:text-red-500  hover:p-1 transition-all duration-300" href={"/"}>
            <Image width={30} src={LogoutIcon} />
            <div>Log out</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
