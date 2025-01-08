import SocialLinks from "./SocialLinks";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/shashankranjan07/",
            icon: <FaLinkedin size={28} />,
        },
        {
            href: "mailto:shashankranjan07@gmail.com",
            icon: <BiLogoGmail size={28} />,
        },
        {
            href: "https://github.com/Cheekybaby",
            icon: <FaGithub size={28} />,
        },
        {
            href: "https://twitter.com/shashankranjan07",
            icon: <FaSquareXTwitter size={28} />,
        },
    ]
    return (
        <div className="footer" id="footer">
            <div className="text-xl lg:text-3xl text-[--color] font-semibold">Contact Me!</div>
            <div id="socials" className="pt-5 lg:m-8">
                <ul className="flex pt-4 pb-4 md:p-0 flex-row">
                    {
                        socialLinks.map((link, index) => {
                            return (
                                <SocialLinks
                                    key={index}
                                    href={link.href}
                                    icon={link.icon}
                                />
                            );
                        })
                    }
                </ul>
            </div>
            <div className="text-center">
                <p className="text-sm text-[#000000]">
                    © {new Date().getFullYear()} Made by Shashank Ranjan
                </p>
            </div>
        </div>
    );
};

export default Footer;