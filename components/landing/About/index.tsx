import Container from "@/components/Container";
import aboutImage from "@/public/about.png";
import Image from "next/image";
const About = () => {
  return (
    <section className=" pb-10  relative ">
      <Container className="gap-4 my-10 flex flex-col items-center lg:flex-row">
        <div className=" flex-1">
          <Image
            src={aboutImage}
            alt="about"
            className=" w-full h-full object-cover"
          />
        </div>
        {/* <div className="  relative object-contain overflow-hidden flex items-center sm:justify-center lg:justify-end">
          <div className="about_content space-y-6">
            <h3 className=" text-xl lg:text-2xl text-center font-normal">
              Somos un equipo apasionado por la tecnología, con la misión de
              hacer las inversiones accesibles para todos los que quieran
              invertir.
            </h3>
            <h3 className=" text-xl lg:text-2xl text-center font-normal">
              Estamos comprometidos a crear soluciones de inversión, que
              permitan a todos invertir de manera más simple.
            </h3>
          </div>
          <Image
            src={aboutReg}
            alt="about"
            className=" absolute w-full object-covert h-full inset-0"
          />
        </div> */}
        <div className="relativeinline-flex about_content space-y-6 items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  bg-gradient-to-br from-[#4FE0B6] to-[#1D70B7] g">
          <div className="relative overflow-hidden px-6 py-3  bg-[#02060C] transition-all ease-in duration-75  rounded-md ">
            <div className=" py-5 space-y-3">
              <h3 className=" text-white text-xl lg:text-2xl text-center font-normal">
                Somos un equipo apasionado por la tecnología, con la misión de
                hacer las inversiones accesibles para todos los que quieran
                invertir.
              </h3>
              <h3 className=" text-xl text-white lg:text-2xl text-center font-normal">
                Estamos comprometidos a crear soluciones de inversión, que
                permitan a todos invertir de manera más simple.
              </h3>
              {/* #4FE0B6, #1D70B7, #44B9BE, #4FE0B6 */}
            </div>
            <div className="  bg-[#4FE0B6] absolute blur-[150px] rounded-[50px] opacity-10 inset-0 w-full h-full"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
