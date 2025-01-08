import Navbarcomponent from "./Navbarcomponent";
import Link from "next/link";


const navLink = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

export default function Navbar() {
    return (
        <nav className="flex flex-row h-16 z-50 mx-3 justify-between">
            <div className="flex flex-row w-2/3 items-center">
                <Link href={"/"} className="text-2xl lg:text-3xl font-semibold text-[--color] mx-2 lg:mx-6 navhover">Shashank Ranjan</Link>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-end">
                <ul className="flex flex-row justify-between">
                    {
                        navLink.map((link, index) => (
                            <Navbarcomponent 
                                key={index} 
                                href={link.path} 
                                title={link.title} />
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}