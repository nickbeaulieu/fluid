/// <reference types="react" />
import { ContentLocation, ContentLocationGetter } from '.';
import { PopoverAlign, PopoverPosition, PopoverState } from './index';
export interface UsePopoverProps {
    childRef: React.MutableRefObject<HTMLElement>;
    positions?: PopoverPosition[];
    align?: PopoverAlign;
    padding: number;
    reposition: boolean;
    boundaryInset: number;
    containerParent?: HTMLElement;
    containerClassName?: string;
    contentLocation?: ContentLocationGetter | ContentLocation;
    onPositionPopover(popoverState: PopoverState): void;
}
export declare type PositionPopover = (positionIndex?: number, childRect?: ClientRect, popoverRect?: ClientRect, parentRect?: ClientRect) => void;
export declare type UsePopoverResult = readonly [
    PositionPopover,
    React.MutableRefObject<HTMLDivElement>
];
export declare const usePopover: ({ childRef, positions, containerClassName, containerParent, contentLocation, align, padding, reposition, boundaryInset, onPositionPopover, }: UsePopoverProps) => UsePopoverResult;
