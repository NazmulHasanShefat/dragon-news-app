"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { authClient, signOut } from "@/lib/auth-client";
import { AlertBox } from "./AlertBox";

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
    <nav className="grid grid-cols-12 justify-center items-center w-full max-w-322 sticky top-0 z-20 bg-white mx-auto bg-white">
      <ul className="col-span-8 flex items-center text-[18px]">
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
            <FaUserCircle size={30} className="cursor-pointer" />
            <button
              type="button"
              className="py-2 px-4 cursor-pointer bg-black text-white rounded-lg"
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
