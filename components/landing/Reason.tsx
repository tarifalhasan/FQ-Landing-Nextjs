import Container from "../Container";
import ResonsCard from "./ResonsCard";

const Reasons = () => {
  return (
    <section className=" py-8 lg:py-20 ">
      <Container>
        <h2 className="heading">3 RAZONES PARA INVERTIR CON FREQUENCY </h2>
        <div className=" pt-10 xl:pt-16 grid sm:grid-cols-2 gap-10  lg:grid-cols-3">
          <ResonsCard
            icon="/charts.png"
            title="Tecnologia de punta:"
            description="Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos
            del mercado."
          />
          <ResonsCard
            icon="/laptop.png"
            title="Transparencia total: "
            description="Creemos en la transparencia en todo lo que hacemos.Te brindamos acceso a información  clara y detallada sobre nuestras estrategias de inversión automatizadas y el rendimiento de tu cartera."
          />{" "}
          <ResonsCard
            icon="/check.png"
            title="Solidez y confianza: "
            description="Nuestras herramientas automatizadas están respaldadas por la supervisión de expertos en inversiones e IA, brindandote la tranquilidad  de que tu dinero está en buenas manos."
          />
        </div>
      </Container>
    </section>
  );
};

export default Reasons;
