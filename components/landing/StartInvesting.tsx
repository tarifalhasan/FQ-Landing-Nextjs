import Container from "../Container";
import { LineBottomCard, LineTopCard } from "../common/Asets";
import InvestionCard from "./InvestionCard";

const StartInvesting = () => {
  return (
    <section className="  pt-[286%] sm:pt-[135%] lg:pt-[86%] xl:pt-[70%] 2xl:pt-[55%] relative overflow-hidden ] bg-start-investing bg-no-repeat  bg-top  bg-cover  ">
      <div className=" absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Container className=" ">
          <div className=" pt-[10rem] lg:pt-[15rem]">
            <h2 className="heading">CÓMO EMPEZAR A INVERTIR</h2>
          </div>
          <div className="relative  pt-14 sm:py-20 overflow-hidden">
            <LineTopCard className=" hidden lg:block absolute top-[9%] left-1/2" />
            <div className=" grid   sm:grid-cols-2  lg:grid-cols-3 gap-10">
              <InvestionCard
                title="Completá el formulario de contacto."
                subTitle="Llená algunos datos para que podamos contactarte."
                label={1}
              />
              <InvestionCard
                title="Respondé algunas preguntas."
                subTitle="Necesitamos saber tus objetivos , y tu perfíl como inversor."
                label={2}
              />
              <InvestionCard
                title="Empezá a invertir."
                subTitle="Crearemos un plan de inversión automático basado en tu perfil."
                label={3}
              />
            </div>
            <div className="right-1/2  hidden lg:block absolute bottom-[9%]">
              <LineBottomCard />
            </div>
          </div>
          <div className="  py-10 flex items-center justify-center">
            <button
              className=" max-w-[642px] w-full justify-center
           btn_primary"
            >
              Empezá a invertir
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default StartInvesting;
