import { content } from "../Content";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-6 min-h-[70vh] flex flex-col">
   
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {Projects.project_content.map((content, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-5 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <a href={content.link} target="_blank" rel="noopener noreferrer">
               <img
                src={content.image}
                alt={content.title}
                className="rounded-lg w-full h-40 object-cover"
               />
              </a>

              <div className="flex flex-col gap-3 mt-4">
                <h5 className="font-bold text-lg">{content.title}</h5>

                {(content.frontendLink || content.backendLink) && (
                  <div className="flex gap-4">
                    {content.frontendLink && (
                      <a
                        href={content.frontendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                      >
                        <FaGithub className="inline-block text-2xl" /> Frontend
                      </a>
                    )}

                    {content.backendLink && (
                      <a
                        href={content.backendLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                      >
                        <FaGithub className="inline-block text-2xl" /> Backend
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


