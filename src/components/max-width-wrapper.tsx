import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  children: ReactNode;
  className?: string;
  id?: string;
}

const MaxWidthWrapper = ({ children, className, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto size-full max-w-7xl px-4 md:px-6 lg:px-8 py-16",
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
