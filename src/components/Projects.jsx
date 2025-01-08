import Projectcomponents from "./Projectcomponents";


const project = [
    {
        name: "Gribbit",
        link: "https://gribbit.raashah.me",
        description: "",
    },
    {
        name: "Alzheimer's Detection",
        link: "https://www.kaggle.com/code/paneertikkamasala/alzheimerdetection",
        description: "",
    },
    {
        name: "Live Filter",
        link: "https://github.com/Cheekybaby/LiveFilter",
        description: "",
    },
    {
        name: "AgentA",
        link: "https://github.com/Cheekybaby/AgentA",
        description: "",
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
                            <Projectcomponents key={index} name={item.name} link={item.link} description={item.description} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Projects;