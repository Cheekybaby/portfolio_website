import Link from "next/link";

const Projectcomponents = ({name, link, description}) => {
    return (
        <div className="">
            <Link href={link}
                target="_blank"
                rel="noreferrer"
            >
            <div className="text-xl lg:text-2xl">{name}</div>
            </Link>
            <p className="">{description}</p>
        </div>
    );
};

export default Projectcomponents;