import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainer> = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1140px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
