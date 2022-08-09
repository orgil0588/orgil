import { about, timeline } from "./Data";
const About = () => {
  return (
    <div className="w-10/12 md:w-6/12 mx-auto mt-40 md:mt-10 pb-20">
      <h1 className="text-[28px] font-bold text-center mt-16">About me</h1>
      <div className="text-center text-[#5E5E5E] font-medium">
        {about.map((info) => (
          <div className="my-3">{info}</div>
        ))}
      </div>
      <h1 className="text-[28px] font-bold text-center mt-16">Timeline</h1>

      <div className="">
        {timeline.map((e) => (
          <div className="flex mt-10">
            <div className="mr-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-0.5 h-full ml-1 mt-4 bg-white"></div>
            </div>
            <div className="-translate-y-2">
              <h1 className="font-medium">{e.date}</h1>
              <p className="translate-y-4 text-[#5E5E5E]">{e.content}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-[28px] font-bold text-center mt-16">Find me online</h1>
      <p className="text-[#5E5E5E] text-center">
        You can find me on{" "}
        <a className="font-bold text-[#efefef]" href="/">
          YouTube
        </a>
        ,
        <a className="font-bold text-[#efefef]" href="/">
          Twitter
        </a>
        ,{" "}
        <a className="font-bold text-[#efefef]" href="/">
          Instagram
        </a>
        ,or{" "}
        <a className="font-bold text-[#efefef]" href="/">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default About;
