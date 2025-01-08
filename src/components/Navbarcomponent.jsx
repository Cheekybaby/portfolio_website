import Link from "next/link";

const Navbarcomponent = ({href, title}) => {
    return (
        <Link href={href} 
            className="navlinks navhover">
            {title}
        </Link>
    );
};

export default Navbarcomponent;