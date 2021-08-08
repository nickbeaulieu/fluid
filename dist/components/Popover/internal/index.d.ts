import React from 'react';
import { usePopover } from './usePopover';
export declare type ContentLocationGetter = (popoverState: PopoverState) => ContentLocation;
export interface ContentLocation {
    top: number;
    left: number;
}
export interface PopoverState {
    childRect: ClientRect;
    popoverRect: ClientRect;
    parentRect: ClientRect;
    position: PopoverPosition;
    align: PopoverAlign;
    padding: number;
    nudgedLeft: number;
    nudgedTop: number;
    boundaryInset: number;
}
export declare type ContentRenderer = (popoverState: PopoverState) => JSX.Element;
export declare type PopoverPosition = 'left' | 'right' | 'top' | 'bottom' | 'custom';
export declare type PopoverAlign = 'start' | 'center' | 'end' | 'custom';
export interface TinyPopoverProps {
    isOpen: boolean;
    children: JSX.Element;
    content: ContentRenderer | JSX.Element;
    positions?: Exclude<PopoverPosition, 'custom'>[];
    align?: Exclude<PopoverAlign, 'custom'>;
    padding?: number;
    reposition?: boolean;
    ref?: React.Ref<HTMLElement>;
    containerClassName?: string;
    containerParent?: HTMLElement;
    containerStyle?: Partial<CSSStyleDeclaration>;
    contentLocation?: ContentLocationGetter | ContentLocation;
    boundaryInset?: number;
    boundaryTolerance?: number;
    onClickOutside?: (e: MouseEvent) => void;
}
export declare const TinyPopover: React.ForwardRefExoticComponent<Pick<TinyPopoverProps, "isOpen" | "children" | "content" | "positions" | "align" | "padding" | "reposition" | "containerParent" | "containerClassName" | "containerStyle" | "contentLocation" | "boundaryInset" | "onClickOutside" | "boundaryTolerance"> & React.RefAttributes<HTMLElement>>;
export { useArrowContainer } from './useArrowContainer';
export { ArrowContainer } from './ArrowContainer';
export { usePopover };
