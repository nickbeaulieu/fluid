/// <reference types="react" />
import { PopoverPosition } from './index';
export interface UseArrowContainerProps {
    childRect: ClientRect;
    popoverRect: ClientRect;
    position: PopoverPosition;
    arrowSize: number;
    arrowColor: string;
}
export interface UseArrowContainerResult {
    arrowStyle: React.CSSProperties;
    arrowContainerStyle: React.CSSProperties;
}
export declare const useArrowContainer: ({ childRect, popoverRect, position, arrowSize, arrowColor, }: UseArrowContainerProps) => {
    arrowContainerStyle: import("react").CSSProperties;
    arrowStyle: import("react").CSSProperties;
};
