import heror from "@/public/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="  min-h-[75vh] overflow-hidden  sm:min-h-[85vh] n bg-fixed lg:min-h-screen w-full relative">
      <div className="absolute z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={heror}
          className="block"
          alt="Hello"
          // layout="responsive"
          width={528}
          height={400}
        />
      </div>
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <h2 className=" text-[2.6rem] sm:text-[3.9rem] lg:text-t-96 text-center font-black leading-normal">
            INVERSIONES,
          </h2>
          <h2 className="text-[2.6rem] sm:text-[3.9rem] lg:text-t-96 text-center font-black leading-normal">
            PERO FÁCIL
          </h2>
          <p className=" font-black  text-sm xl:text-3xl  text-center max-w-[956px] mx-auto">
            La combinacion perfecta entre inteligencia artificial y humana al
            servicio de tus inversiones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
