import { name } from "./Data";
import prof from "../assets/png/prof.png";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
const Hero = () => {
  return (
    <div className="w-full h-screen grid md:grid-cols-2 gap-4 items-center">
      <div className="mt-48 md:mt-0">
        <div className="flex items-center justify-start space-x-4">
          <a href="/">
            <img className="w-[24px] h-[24px]" src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img className="w-[24px] h-[24px]" src={instagram} alt="facebook" />
          </a>
          <a href="/">
            <img className="w-[24px] h-[24px]" src={github} alt="facebook" />
          </a>
        </div>
        <div className="text-[64px] xl:text-[92px] font-bold leading-thin md:leading-none">
          {name.firstname} <br />
          {name.lastname}
        </div>
        <p className="text-[24px] text-[#5E5E5E]">
          Life is too short to live doing things you don't like
        </p>
      </div>
      <div className="mx-auto rounded-full border border-[#5E5E5E] p-14">
        <img src={prof} alt="profile" />
      </div>
    </div>
  );
};

export default Hero;
