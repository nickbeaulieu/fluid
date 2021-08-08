import React, { useMemo } from 'react';
import { useArrowContainer, UseArrowContainerProps } from './useArrowContainer';

export interface ArrowContainerProps extends UseArrowContainerProps {
    children: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    arrowStyle?: React.CSSProperties;
    arrowClassName?: string;
}

export const ArrowContainer: React.FC<ArrowContainerProps> = ({
    childRect,
    popoverRect,
    position,
    arrowColor,
    arrowSize,
    arrowStyle: externalArrowStyle,
    className,
    children,
    style: externalArrowContainerStyle,
}) => {
    const { arrowContainerStyle, arrowStyle } = useArrowContainer({
        childRect,
        popoverRect,
        position,
        arrowColor,
        arrowSize,
    });

    const mergedContainerStyle = useMemo(
        () => ({
            ...arrowContainerStyle,
            ...externalArrowContainerStyle,
        }),
        [arrowContainerStyle, externalArrowContainerStyle],
    );

    const mergedArrowStyle = useMemo(
        () => ({
            ...arrowStyle,
            ...externalArrowStyle,
        }),
        [arrowStyle, externalArrowStyle],
    );

    return (
        <div className={className} style={mergedContainerStyle}>
            <div style={mergedArrowStyle} />
            {children}
        </div>
    );
};
