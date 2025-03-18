import { content } from "../Content";
import cv from "../cv/Dipendra CV.pdf"

const Profile = () => {
  const { profile } = content;

    const downloadCV = () => {
      const link = document.createElement('a');
      link.href = cv;
      link.download = 'Dipendra CV.pdf';
      link.click();
    };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {profile.firstName}{" "}
            <span className="text-dark_primary">{profile.LastName}</span>
          </h1>
        </div>

        <div
          data-aos="fade-right"
          className="md:w-4/12 w-full text-left space-y-6 relative -top-32"
        >
          <h2>{profile.title}</h2>
          <p className="text-lg text-gray-700">{profile.aboutMe}</p>

          <br />
          <div className="flex justify-end" onClick={downloadCV}>
            <button className="btn">{profile.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {profile.profile_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:h-[37rem] h-96">
          <img
            src={profile.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
