import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function MainNavigation(){
    return(
        <nav className="grid grid-cols-12 justify-center items-center w-full max-w-322 mx-auto">
            <ul className="col-span-8 flex items-center text-[18px]">
                <Link href={"/"} className="hover:bg-blue-500 px-4 py-2 hover:text-white">Home</Link>
                <Link href={"/about"} className="hover:bg-blue-500 px-4 py-2 hover:text-white">About</Link>
                <Link href={"/Career"} className="hover:bg-blue-500 px-4 py-2 hover:text-white">Career</Link>
            </ul>
            <ul className="col-span-4 flex justify-end items-center gap-4 text-lg">
                <FaUserCircle size={30} className="cursor-pointer"/>
                <Link href={"/auth/sign-in"} className="bg-black text-white px-6 py-1">login</Link>
            </ul>
        </nav>
    )
}