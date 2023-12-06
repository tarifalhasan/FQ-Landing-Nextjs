import Container from "../Container";
import ResonsCard from "./ResonsCard";

const Reasons = () => {
  return (
    <section className=" py-8 lg:py-20 ">
      <Container>
        <h2 className="heading">3 RAZONES PARA INVERTIR CON FREQUENCY </h2>
        <div className=" pt-10 xl:pt-16 grid sm:grid-cols-2 gap-10  lg:grid-cols-3">
          <ResonsCard />
          <ResonsCard />
          <ResonsCard />
        </div>
      </Container>
    </section>
  );
};

export default Reasons;
