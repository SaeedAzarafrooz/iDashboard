import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@/public/assets/images/github-icon.png";
import LocationIcon from "@/public/assets/images/location-icon.png";
import GmailIcon from "@/public/assets/images/gmail-icon.png";
import LinkedinIcon from "@/public/assets/images/linkedin-icon.png";

export default function Footer() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-8 text-sm text-gray-400 bg-[#333] ">
      <div className="flex gap-16 px-12">
        <div className="w-1/3">
          <h4 className="font-bold text-base border-b-[1px] border-gray-600 my-1">About</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsa, nesciunt rem ducimus magni dicta optio velit. Voluptate ex
            repudiandae quia amet dolores, ad saepe.{" "}
          </p>
        </div>
        <div className="w-1/3">
          <h4 className="font-bold text-base border-b-[1px] border-gray-600 my-1">
            Quick Access
          </h4>
          <ul className="text-base">
            <li>
              <Link className=" hover:text-gray-500" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-500" href={"/"}>
                Goals
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-500" href={"/"}>
                Tasks
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-500" href={"/"}>
                Statistics
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-500" href={"/"}>
                Timeboxing
              </Link>
            </li>
            <li>
              <Link className=" hover:text-gray-500" href={"/"}>
                Documents
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <h4 className="font-bold text-base border-b-[1px] border-gray-600 my-1">Contact</h4>
          <div className="flex mx-4 my-2">
            <Link
              className="flex items-center"
              href={"https://github.com/SaeedAzarafrooz"}
            >
             <div className="w-[34px] mx-1 p-[2px] bg-gray-400 rounded-full"><Image
                className="bg-gray-400 rounded-full mr-2 "
                width={33}
                src={GitHubIcon}
             /></div>
            </Link>
            <Link
              className="flex items-center"
              href={"https://github.com/SaeedAzarafrooz"}
            >
              <div className="w-[34px] mx-1 p-[2px] bg-gray-400 rounded-full"><Image
                className="bg-gray-400 rounded-full mr-2"
                width={33}
                src={LinkedinIcon}
              /></div>
            </Link>
            <Link
              className="flex items-center"
              href={"https://github.com/SaeedAzarafrooz"}
            >
             <div className="w-[34px] mx-1 p-[2px] bg-gray-400 rounded-full"><Image
                className="bg-gray-400 rounded-full mr-2"
                width={33}
                src={GmailIcon}
              /></div>
            </Link>
            <Link
              className="flex items-center"
              href={"https://github.com/SaeedAzarafrooz"}
            >
              <div className="w-[34px] mx-1 p-[2px] bg-gray-400 rounded-full"><Image
                className="bg-gray-400 rounded-full mr-2"
                width={33}
                src={LocationIcon}
              /></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 mt-4 text-sm text-white">
        Copyright &copy; 2023 All right Reserved by Saeed Azarafrooz
      </div>
    </div>
  );
}
