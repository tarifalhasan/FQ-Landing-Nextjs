import { FC } from "react";

interface IBlogCard {
  features_image: string;
  category: string;
  title: string;
}

const BlogCard: FC<IBlogCard> = ({ features_image, category, title }) => {
  return (
    <div
      className="h-[307px] bg-[#060B10] rounded-[15px] overflow-hidden 
   relative m-0 p-0"
    >
      <div
        style={{
          backgroundImage: `url(${features_image})`,
        }}
        className=" relative m-0 bg-top pb-[50%] p-0 bg-no-repeat bg-cover"
      ></div>

      <div className=" pt-4 px-4">
        <span className=" bg-white bg-opacity-[7%] text-xs py-1 rounded px-[6px] text-skin-light-subtitle:">
          {category}
        </span>
        <p className=" text-sm pt-5 lg:text-base font-medium">{title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
