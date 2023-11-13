import { Tooltip } from "@nextui-org/react";
import { TooltipContentProps } from "../../types";

export const TooltipContent = ({source, children}: TooltipContentProps) => {
    let tooltipContent = 'Source';
    if (source && typeof children === 'string') {
        const key = parseInt(children.replace(/\*/g, ''), 10);
        tooltipContent = source[key-1] || 'Source';
    }
    return (
        <Tooltip className="border" content={tooltipContent}>
            <sup className='text-[10px] px-[4px] py-[2px] rounded-full bg-neutral-300 hover:invert dark:bg-neutral-700 cursor-pointer'>
                {children}
            </sup>
        </Tooltip>
    )
}