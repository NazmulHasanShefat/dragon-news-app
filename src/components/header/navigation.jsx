import MainLogo from "../ui/logo";

export default function Navbar(){
    return(
        <nav className="flex flex-col justify-center items-center">
            <MainLogo/>
            <h3 className="text-[28px] font-normal text-gray-400">Journalism Without Fear or Favour</h3>
            <h4 className="text-[20px]">Sunday, November 27, 2025</h4>
        </nav>
    )
}