import { FC, ReactNode } from "react";

interface IProps {
  title: string;
  icon: string | ReactNode;
  description: string;
}

const ResonsCard: FC<IProps> = ({ title, icon, description }) => {
  return (
    <div className="reason_card">
      <div className="flex overflow-hidden justify-center">
        <div className="">{icon}</div>
      </div>
      <div className=" pt-6 space-y-3">
        <h4 className=" text-base lg:text-xl font-[950] text-center">
          {title}
        </h4>
        <p className=" text-base  font-normal text-center">{description}</p>
      </div>
    </div>
  );
};

export default ResonsCard;
