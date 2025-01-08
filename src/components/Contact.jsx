import SocialLinks from "./SocialLinks";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/shashankranjan07/",
            icon: <FaLinkedin size={44} />,
        },
        {
            href: "mailto:shashankranjan07@gmail.com",
            icon: <BiLogoGmail size={44} />,
        },
        {
            href: "https://github.com/Cheekybaby",
            icon: <FaGithub size={44} />,
        },
        {
            href: "https://twitter.com/shashankranjan07",
            icon: <FaSquareXTwitter size={44} />,
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center h-1/2 lg:h-screen">
            <div id="socials" className="pt-5 lg:mt-8 justify-content-center">
                <ul className="flex pt-4 pb-4 md:p-0 flex-row">
                    {
                        socialLinks.map((link, index) => {
                            return (
                                <SocialLinks
                                    key={index}
                                    href={link.href}
                                    icon={link.icon}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Contact;