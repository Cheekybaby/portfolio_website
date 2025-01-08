import Link from "next/link";
const SocialLinks = ({ href, icon }) => {
    return (
        <Link 
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mx-4"
        >
            {icon}
        </Link>
    );
};

export default SocialLinks;