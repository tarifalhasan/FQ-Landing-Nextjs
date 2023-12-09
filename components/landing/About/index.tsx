import Container from "@/components/Container";
import aboutReg from "@/public/about-rectangle.png";
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
        <div className="  relative object-contain overflow-hidden flex items-center sm:justify-center lg:justify-end">
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
        </div>
      </Container>
    </section>
  );
};

export default About;
