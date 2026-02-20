import ProfileAvatar from "./avatar-standard-4";
import GetInTouch from "./GetInTouch";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mt-20">
        <ProfileAvatar />
      </div>

      <Intro />

      <GetInTouch />

      <SocialLinks />

      <hr className="mt-15" />

      <TechStack />
    </section>
  );
};

export default Hero;
