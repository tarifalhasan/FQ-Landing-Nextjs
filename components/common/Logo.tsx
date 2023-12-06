import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
interface ILogoProps {
  isShowwText?: string;
}
const Logo: FC<ILogoProps> = ({ isShowwText }) => {
  return (
    <Link href={"/"} className=" inline-flex items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="53"
        viewBox="0 0 45 53"
        fill="none"
      >
        <path
          d="M24.2396 17.0469L10.7536 52.4919L0.5 2.18055L36.0278 0.5L14.9227 18.2669L24.2396 17.0469Z"
          fill="#4FE0B6"
        />
        <path
          d="M32.4399 23.571L10.7535 52.4998V4.55171L44.5 3.62256L22.1613 23.2155L32.4399 23.571Z"
          fill="#1D70B7"
        />
        <path
          d="M31.8796 3.97021L10.7535 4.55194V41.1766L24.0723 19.3456L13.7936 18.9901L31.8796 3.97021Z"
          fill="#44B9BE"
        />
      </svg>
      <span className={cn("text-2xl text-white font-bold", isShowwText)}>
        Frequency Invest
      </span>
    </Link>
  );
};

export default Logo;
