import Container from "../Container";
import ResonsCard from "./ResonsCard";

const Reasons = () => {
  return (
    <section className=" py-8 lg:py-20 ">
      <Container>
        <h2 className="heading">3 RAZONES PARA INVERTIR CON FREQUENCY </h2>
        <div className=" pt-10 xl:pt-16 grid sm:grid-cols-2 gap-10  lg:grid-cols-3">
          <ResonsCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={75}
                height={59}
                viewBox="0 0 75 59"
                fill="none"
              >
                <path
                  d="M18.0111 26.1053H26.9943C27.1737 26.1053 27.342 26.2013 27.4355 26.357L31.726 33.5038C31.9203 33.8274 32.3824 33.8418 32.5785 33.5303L41.9647 18.6216C42.1515 18.3249 42.5852 18.3206 42.7945 18.6134L47.9941 25.8883C48.0912 26.0241 48.2477 26.1053 48.4125 26.1053H55.1042"
                  stroke="#4FE0B6"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <g filter="url(#filter0_d_1_314)">
                  <path
                    d="M4.55932 10.6687C4.56805 4.72593 9.30491 0 15.2527 0H59.168C65.3712 0 70.4924 5.12444 70.4833 11.3225L70.4407 40.3313C70.432 46.2741 65.6951 51 59.7473 51H15.8321C9.62882 51 4.5076 45.8756 4.5167 39.6775L4.55932 10.6687Z"
                    fill="url(#paint0_linear_1_314)"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M6.56012 10.7282C6.56726 5.86587 10.4429 1.9992 15.3093 1.9992H59.2245C64.2999 1.9992 68.49 6.19192 68.4825 11.263L68.4399 40.2718C68.4328 45.1341 64.5572 49.0008 59.6908 49.0008H15.7755C10.7001 49.0008 6.51005 44.8081 6.5175 39.737L6.56012 10.7282Z"
                    stroke="#4FE0B6"
                    strokeWidth={4}
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_314"
                    x="0.516693"
                    y={0}
                    width="73.9667"
                    height={59}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_314"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_314"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_314"
                    x1="36.7788"
                    y1={0}
                    x2="36.7788"
                    y2={51}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FE0B6" stopOpacity="0.31" />
                    <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            }
            title="Tecnologia de punta:"
            description="Usamos IA de vanguardia desarrollada por expertos para brindarte una plataforma de inversion que se destaca por su capacidad para ofrecer resultados aun en momentos complejos
            del mercado."
          />
          <ResonsCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={65}
                height={51}
                viewBox="0 0 65 51"
                fill="none"
              >
                <path
                  d="M18.7511 48.6313H44.4983"
                  stroke="#4FE0B6"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <path
                  d="M5.61334 3L58.873 3L58.9411 38.088H5.65635L5.61334 3Z"
                  fill="url(#paint0_linear_1_319)"
                />
                <path
                  d="M3.95636 12.0631C3.88389 7.00871 7.99668 2.78209 13.0581 2.70951L51.8689 2.15297C56.7517 2.08295 60.7012 5.91554 60.7711 10.7916L61.0437 29.7957C61.1161 34.85 57.0035 39.0766 51.9423 39.1494L13.1314 39.7072C8.24849 39.7774 4.29876 35.9448 4.22885 31.0685L3.95636 12.0631Z"
                  stroke="#4FE0B6"
                  strokeWidth={4}
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_319"
                    x1="33.3058"
                    y1="2.04577"
                    x2="33.3058"
                    y2="38.4725"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FE0B6" stopOpacity="0.31" />
                    <stop offset={1} stopColor="#134133" stopOpacity="0.22" />
                  </linearGradient>
                </defs>
              </svg>
            }
            title="Transparencia total: "
            description="Creemos en la transparencia en todo lo que hacemos.Te brindamos acceso a información  clara y detallada sobre nuestras estrategias de inversión automatizadas y el rendimiento de tu cartera."
          />
          <ResonsCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={51}
                height={52}
                viewBox="0 0 51 52"
                fill="none"
              >
                <ellipse
                  cx="22.8061"
                  cy="23.303"
                  rx="22.8061"
                  ry="23.303"
                  transform="matrix(0.999936 -0.0113026 0.0159571 0.999873 2.08807 2.53784)"
                  fill="url(#paint0_linear_1_325)"
                  fillOpacity="0.8"
                />
                <path
                  d="M49.0048 25.5309C49.217 38.8223 38.8361 49.6643 25.8832 49.8107C12.9303 49.9571 2.20728 39.3536 1.99516 26.0622C1.78304 12.7708 12.1638 1.92877 25.1168 1.78236C38.0697 1.63595 48.7927 12.2395 49.0048 25.5309Z"
                  stroke="#4FE0B6"
                  strokeWidth={3}
                />
                <path
                  d="M14.7205 27.4941L18.8147 31.3567C20.018 32.492 21.908 32.4464 23.0443 31.2546L35.87 17.8037"
                  stroke="#4FE0B6"
                  strokeWidth={4}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_325"
                    x1="23.1123"
                    y1="-17.7119"
                    x2="23.1123"
                    y2="38.5725"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4FE0B6" stopOpacity="0.7" />
                    <stop offset={1} stopColor="#1E5344" stopOpacity="0.67" />
                  </linearGradient>
                </defs>
              </svg>
            }
            title="Solidez y confianza: "
            description="Nuestras herramientas automatizadas están respaldadas por la supervisión de expertos en inversiones e IA, brindandote la tranquilidad  de que tu dinero está en buenas manos."
          />
        </div>
      </Container>
    </section>
  );
};

export default Reasons;
