import Projectcomponents from "./Projectcomponents";
import { FaReact, FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiPython, SiTensorflow, SiKeras, SiOpencv,  } from "react-icons/si";

const project = [
    {
        name: "Gribbit",
        link: "https://gribbit.raashah.me",
        description: "A React-based web application which allows users to chat in real time.",
        icons: [<FaReact size={20} />,<RiTailwindCssFill size={20} />,<IoLogoJavascript size={20} />,<SiExpress size={20} />],

    },
    {
        name: "Alzheimer's Detection",
        link: "https://www.kaggle.com/code/paneertikkamasala/alzheimerdetection",
        description: "Python-based classification model to categorize MRI images of Alzheimer’s disease.",
        icons: [<SiPython size={20} />,<SiTensorflow size={20} />,<SiKeras size={20} />],
    },
    {
        name: "Live Filter",
        link: "https://github.com/Cheekybaby/LiveFilter",
        description: " A real-time application of Computer Vision to mimic the filter feature of applications like Snapchat.",
        icons: [<SiPython size={20} />,<SiOpencv size={20} />],
    },
    {
        name: "AgentA",
        link: "https://github.com/Cheekybaby/AgentA",
        description: "AgentA is a distributed data store optimized for ingesting and processing streaming data in real-time.",
        icons: [<FaGolang size={20} />],
    }
]

const Projects = () => {
    return (
        <>
            <div className="flex flex-col lg:h-screen border-white-800 border-b pb-16 lg:pb-0" id="projects">
                <div className="pt-20 flex flex-col items-center">
                    <h1 className="text-3xl lg:text-5xl border-white-800 border-b pb-4 font-semibold">Projects</h1>
                    <p className="pt-5 text-[--color] text-lg pl-4 pr-4">Here you will find some of my projects that I have worked on in my free time.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-8 ml-24 mr-24">
                        {project.map((item, index) => (
                            <Projectcomponents key={index} name={item.name} link={item.link} description={item.description} icons={item.icons} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Projects;