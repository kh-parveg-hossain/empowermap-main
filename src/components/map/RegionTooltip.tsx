
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RegionTooltipProps {
  children: React.ReactNode;
  regionName: string;
  issueCount: number;
}

const RegionTooltip = ({ children, regionName, issueCount }: RegionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p className="font-medium">{regionName}</p>
            <p className="text-xs text-muted-foreground">{issueCount} active social causes</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RegionTooltip;
