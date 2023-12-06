import { FC } from "react";

interface IInvestionCard {
  title: string;
  subTitle: string;
  label: number | string;
}
const InvestionCard: FC<IInvestionCard> = ({ title, subTitle, label }) => {
  return (
    <div className=" investion_card ">
      <h3 className=" text-center pt-5 text-stoke-3 text-6xl ">{label}</h3>
      <div className=" pt-5">
        <h2 className=" text-sm text-center md:text-xl font-extrabold">
          {title}
        </h2>
        <p
          className=" text-center text-xs md:text-base font-light
        "
        >
          {subTitle}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="33"
        viewBox="0 0 43 33"
        fill="none"
        className=" absolute top-0 left-0"
      >
        <path
          d="M0 3C0 1.34315 1.34315 0 3 0H43L38 2.5L22 13.5L11 21L5.16738 25.3745C5.0561 25.4579 4.95382 25.5528 4.86223 25.6575L1.63488 29.3458C1.5452 29.4483 1.46621 29.5597 1.39916 29.6783L0 32.1523V3Z"
          fill="#4FE0B6"
        />
      </svg>
    </div>
  );
};

export default InvestionCard;
