"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { authClient, signOut } from "@/lib/auth-client";
import { AlertBox } from "./AlertBox";
import UserIcon from "./UserIcon";
import { MdMenuOpen } from "react-icons/md";

export default function MainNavigation() {
  const currentPathLocation = usePathname();
  const { data, isPending } = authClient.useSession();
  const userData = data?.user;
  const handleSignOut = async () => {
    try {
       await signOut({
            fetchOptions: {
                onSuccess: ()=>{
                    window.location.assign("/");
                }
            }
        });
        
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <nav className="grid grid-cols-12 px-3 justify-center items-center w-full mt-5 py-3 max-w-322 sticky top-0 z-20 bg-white mx-auto bg-white">
      <MdMenuOpen size={40} className="col-span-8 sm:hidden"/>
      <ul className="col-span-8 items-center text-[18px] hidden sm:flex">
        <Link
          href={"/"}
          className={`hover:bg-blue-500 px-4 py-2 hover:text-white ${currentPathLocation === "/" ? "bg-blue-500 text-white" : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={`hover:bg-blue-500 px-4 py-2 hover:text-white ${currentPathLocation === "/about" ? "bg-blue-500 text-white" : ""}`}
        >
          About
        </Link>
        <Link
          href={"/career"}
          className={`hover:bg-blue-500 px-4 py-2 hover:text-white ${currentPathLocation === "/career" ? "bg-blue-500 text-white" : ""}`}
        >
          Career
        </Link>
      </ul>
      <ul className="col-span-4 flex justify-end items-center gap-4 text-lg">
        {data ? (
          <>
           <UserIcon/>
            {/* <FaUserCircle size={30} className="cursor-pointer" /> */}
            <button
              type="button"
              className="py-2 px-4 cursor-pointer hidden lg:block bg-black text-white rounded-lg"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <SignInModal />
            <SignUpModal />
          </>
        )}
      </ul>
  
    </nav>
  );
}
