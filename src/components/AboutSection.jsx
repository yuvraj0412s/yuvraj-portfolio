import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Dynamic Fresher Software Developer
            </h3>

            <p className="text-muted-foreground">
              I am a passionate software developer with a solid foundation in programming, problem-solving, and AI-augmented tools.
              Currently pursuing a B.Tech in Computer Science (Hons.) with a focus on IoT and Machine Learning at Manipal University Jaipur.
            </p>

            <p className="text-muted-foreground">
              Experienced in developing innovative projects including Mobile Edge Computing optimization, plant disease detection using machine learning, and IoT-based smart systems.
              Eager to contribute to forward-thinking teams building efficient and scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/YuvrajSingh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Programming & Web Technologies</h4>
                  <p className="text-muted-foreground">
                    Skilled in Python, C++, SQL, HTML, CSS, JavaScript, and React. Experienced with tools like Git, VS Code, and Jupyter Notebook.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Leveraging AI and ML techniques in projects such as plant disease detection using Random Forest and data preprocessing algorithms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Ongoing work on latency optimization in Mobile Edge Computing, and completed projects like Smart Street Light Systems with IoT integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
