import React from 'react';
export interface FlexProps {
    className?: string;
    grow?: boolean;
    shrink?: boolean;
    center?: boolean;
    between?: boolean;
    end?: boolean;
}
export declare const Flex: React.FC<FlexProps>;
