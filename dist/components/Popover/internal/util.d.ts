import { PopoverAlign, PopoverPosition, PopoverState } from './index';
export declare const Constants: {
    readonly POPOVER_CONTAINER_CLASS_NAME: "react-tiny-popover-container";
    readonly DEFAULT_ALIGN: PopoverAlign;
    readonly OBSERVER_THRESHOLDS: number[];
    readonly DEFAULT_POSITIONS: PopoverPosition[];
    readonly EMPTY_CLIENT_RECT: ClientRect;
};
export declare const arrayUnique: <T>(array: T[]) => T[];
export declare const rectsAreEqual: (rectA: ClientRect, rectB: ClientRect) => boolean;
export declare const popoverStatesAreEqual: (stateA: PopoverState, stateB: PopoverState) => boolean;
export declare const targetPositionHasChanged: (oldRect: ClientRect, newRect: ClientRect) => boolean;
export declare const createContainer: (containerStyle?: Partial<CSSStyleDeclaration> | undefined, containerClassName?: string | undefined) => HTMLDivElement;
export declare const popoverRectForPosition: (position: PopoverPosition, childRect: ClientRect, popoverRect: ClientRect, padding: number, align: PopoverAlign) => ClientRect;
interface GetNewPopoverRectProps {
    position: PopoverPosition;
    reposition: boolean;
    align: PopoverAlign;
    childRect: ClientRect;
    popoverRect: ClientRect;
    parentRect: ClientRect;
    padding: number;
}
export declare const getNewPopoverRect: ({ position, align, childRect, popoverRect, parentRect, padding, reposition, }: GetNewPopoverRectProps, boundaryInset: number) => {
    rect: ClientRect;
    boundaryViolation: boolean;
};
export declare const getNudgedPopoverRect: (popoverRect: ClientRect, parentRect: ClientRect, boundaryInset: number) => ClientRect;
export {};
