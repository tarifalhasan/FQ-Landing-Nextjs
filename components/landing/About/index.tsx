import Container from "@/components/Container";

const About = () => {
  return (
    <section className=" pb-10  relative overflow-hidden">
      <Container className=" bg-none lg:bg-about bg-left bg-contain bg-no-repeat">
        <div className=" flex items-center sm:justify-center lg:justify-end">
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
        </div>
      </Container>
    </section>
  );
};

export default About;
