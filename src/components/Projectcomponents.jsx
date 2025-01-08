import Link from "next/link";

const Projectcomponents = ({name, link, description, icons}) => {
    return (
        <div>
            <div class="flex flex-col bg:[--background] border-gray-800 shadow-lg rounded-xl p-4 md:p-5">
                <h3 class="text-2xl lg:text-3xl font-bold text-[--color] mb-2">
                    {name}
                </h3>
                <div className="flex flex-row w-1/5 mb-4 gap-2">
                    {icons}
                </div>
                <p class="mt-2 text:[--hovercolor]">
                    {description}
                </p>
                <Link href={link} target="_blank" className="mt-4 text-[--color] w-0">
                    <button className="mt-8 lg:mt-10 border-black border-1 shadow-lg bg-[--background] text-[--color] w-32 h-10 rounded font-semibold hover:bg-[--hovercolor] hover:text-[--background] transition ease-in-out hover:-translate-y-1 hover:scale-110">
                        Link
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Projectcomponents;