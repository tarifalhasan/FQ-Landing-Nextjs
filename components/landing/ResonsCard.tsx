const ResonsCard = () => {
  return (
    <div className="reason_card">
      <div className="flex overflow-hidden justify-center">
        <div
          style={{
            backgroundImage: `url('/charts.png')`,
          }}
          className=" w-16 h-16  bg-contain relative p m-0 p-0 bg-no-repeat"
        ></div>
      </div>
      <div className=" pt-2 space-y-3">
        <h4 className=" text-base lg:text-xl font-[950] text-center">
          Transparencia total:
        </h4>
        <p className=" text-base  font-normal text-center">
          Transparencia total: Creemos en la transparencia en todo lo que
          hacemos.Te brindamos acceso a información clara y detallada sobre
          nuestras estrategias de inversión automatizadas y el rendimiento de tu
          cartera.
        </p>
      </div>
    </div>
  );
};

export default ResonsCard;
