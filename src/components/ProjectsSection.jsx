import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Joint Task Partitioning and User Association for Latency Minimization in Mobile Edge Computing Networks",
    description:
      "Developing an optimization framework for task partitioning and user association in Multi-Access Edge Computing (MEC) networks to minimize latency and enhance resource utilization.",
    image: "/projects/project1.png", // Update this if you have relevant images
    tags: ["Optimization", "Mobile Edge Computing", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Plant Disease Detection Using Image Processing and Machine Learning",
    description:
      "Leveraged preprocessing algorithms like Gaussian filtering and Otsu thresholding for disease identification. Trained a Random Forest classifier on the PlantVillage dataset, achieving 93% accuracy in detecting 20 diseases across 5 plant species.",
    image: "/projects/project2.png",
    tags: ["Image Processing", "Machine Learning", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Smart Street Light System Based on the Internet of Things",
    description:
      "Implemented wireless communication protocols, enabling remote monitoring to enhance response to lighting outages by 60%, reducing maintenance response times by approx. 2 hours per incident. Integrated sensors and microcontrollers for automatic brightness adjustment achieving up to 40% energy savings by reducing unnecessary power consumption.",
    image: "/projects/project3.png",
    tags: ["IoT", "Wireless Communication", "Energy Saving"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. These projects showcase my dedication to building efficient, scalable, and innovative solutions using modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yuvraj0412s"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
