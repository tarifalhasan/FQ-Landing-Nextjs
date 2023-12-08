import { FC } from "react";

interface IProps {
  title: string;
  icon: string;
  description: string;
}

const ResonsCard: FC<IProps> = ({ title, icon, description }) => {
  return (
    <div className="reason_card">
      <div className="flex overflow-hidden justify-center">
        <div
          style={{
            backgroundImage: `url(${icon})`,
          }}
          className=" w-16 h-16  bg-contain relative p m-0 p-0 bg-no-repeat"
        ></div>
      </div>
      <div className=" pt-2 space-y-3">
        <h4 className=" text-base lg:text-xl font-[950] text-center">
          {title}
        </h4>
        <p className=" text-base  font-normal text-center">{description}</p>
      </div>
    </div>
  );
};

export default ResonsCard;
