import { useCallback } from 'react';
import { ContentLocation, ContentLocationGetter } from '.';
import { Constants, getNewPopoverRect, getNudgedPopoverRect } from './util';
import { useElementRef } from './useElementRef';
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

export type PositionPopover = (
    positionIndex?: number,
    childRect?: ClientRect,
    popoverRect?: ClientRect,
    parentRect?: ClientRect,
) => void;

export type UsePopoverResult = readonly [
    PositionPopover,
    React.MutableRefObject<HTMLDivElement>,
];

export const usePopover = ({
    childRef,
    positions = Constants.DEFAULT_POSITIONS,
    containerClassName,
    containerParent,
    contentLocation,
    align = Constants.DEFAULT_ALIGN,
    padding,
    reposition,
    boundaryInset,
    onPositionPopover,
}: UsePopoverProps): UsePopoverResult => {
    const popoverRef = useElementRef(containerClassName, {
        position: 'fixed',
        overflow: 'visible',
        top: '0px',
        left: '0px',
    });

    const positionPopover = useCallback<PositionPopover>(
        (
            positionIndex: number = 0,
            childRect: ClientRect = childRef.current.getBoundingClientRect(),
            popoverRect: ClientRect = popoverRef.current.getBoundingClientRect(),
            // @ts-ignore TODO
            parentRect: ClientRect = containerParent.getBoundingClientRect(),
        ) => {
            if (contentLocation) {
                const { top: inputTop, left: inputLeft } =
                    typeof contentLocation === 'function'
                        ? contentLocation({
                              childRect,
                              popoverRect,
                              parentRect,
                              position: 'custom',
                              align: 'custom',
                              padding,
                              nudgedTop: 0,
                              nudgedLeft: 0,
                              boundaryInset,
                          })
                        : contentLocation;

                const left = parentRect.left + inputLeft;
                const top = parentRect.top + inputTop;

                popoverRef.current.style.transform = `translate(${left}px, ${top}px)`;

                onPositionPopover({
                    childRect,
                    popoverRect,
                    parentRect,
                    position: 'custom',
                    align: 'custom',
                    padding,
                    nudgedTop: 0,
                    nudgedLeft: 0,
                    boundaryInset,
                });

                return;
            }

            const isExhausted = positionIndex === positions.length;
            const position = isExhausted
                ? positions[0]
                : positions[positionIndex];
            const { rect, boundaryViolation } = getNewPopoverRect(
                {
                    childRect,
                    popoverRect,
                    parentRect,
                    position,
                    align,
                    padding,
                    reposition,
                },
                boundaryInset,
            );

            if (boundaryViolation && reposition && !isExhausted) {
                positionPopover(
                    positionIndex + 1,
                    childRect,
                    popoverRect,
                    parentRect,
                );
                return;
            }

            const { top, left, width, height } = rect;
            let finalTop = top;
            let finalLeft = left;

            if (reposition && !isExhausted) {
                ({ top: finalTop, left: finalLeft } = getNudgedPopoverRect(
                    rect,
                    parentRect,
                    boundaryInset,
                ));
            }

            popoverRef.current.style.transform = `translate(${finalLeft}px, ${finalTop}px)`;

            onPositionPopover({
                childRect,
                popoverRect: {
                    top: finalTop,
                    left: finalLeft,
                    width,
                    height,
                    right: finalLeft + width,
                    bottom: finalTop + height,
                },
                parentRect,
                position,
                align,
                padding,
                nudgedTop: finalTop - top,
                nudgedLeft: finalLeft - left,
                boundaryInset,
            });
        },
        [
            childRef,
            popoverRef,
            positions,
            align,
            padding,
            reposition,
            boundaryInset,
            containerParent,
            contentLocation,
            onPositionPopover,
        ],
    );

    return [positionPopover, popoverRef];
};
