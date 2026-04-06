import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

const CustomTooltip = ({
  trigger,
  tip,
}: {
  trigger: ReactNode;
  tip: string;
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger
          asChild
          className="transition-transform hover:scale-105"
        >
          {trigger}
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-gray-900 text-white border-0 px-3 py-2 text-sm"
          sideOffset={5}
        >
          <p>{tip}</p>
          {/* <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" /> */}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
