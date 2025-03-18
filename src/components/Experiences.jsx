import { content } from "../Content";

const Experiences = () => {
  const { experience } = content;

  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {experience.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experience.subtitle}
        </h4>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.experience_content.map((item, i) => (
            <div
              key={i}
              className="bg-bg_light_primary border-2 border-slate-200 p-8 rounded-2xl flex flex-col items-center gap-4 text-center shadow-md"
              data-aos="fade-up"
            >
              <img src={item.img} alt={item.name} className="h-24 w-24 object-cover rounded-full" />
              <div className="text-center">
                <h3 className="text-base font-semibold">{item.company}</h3>
                <h3 className="text-base font-semibold">{item.position}</h3>
                <p class="text-base font-semibold text-purple-500">{item.year}</p>
                <h6 className="text-xs text-gray-600 mt-2">{item.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
