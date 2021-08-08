import React from 'react';
import { UseArrowContainerProps } from './useArrowContainer';
export interface ArrowContainerProps extends UseArrowContainerProps {
    children: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    arrowStyle?: React.CSSProperties;
    arrowClassName?: string;
}
export declare const ArrowContainer: React.FC<ArrowContainerProps>;
