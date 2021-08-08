import React from 'react';

export interface FlexProps {
    className?: string;
    grow?: boolean;
    shrink?: boolean;
    center?: boolean;
    between?: boolean;
    end?: boolean;
}

export const Flex: React.FC<FlexProps> = (props) => {
    const { children, grow, shrink, center, between, end, className } = props;
    let styles = 'flex ';
    if (grow) styles = styles.concat('flex-grow ');
    if (shrink) styles = styles.concat('flex-shrink ');
    if (center) styles = styles.concat('items-center justify-center ');
    if (between) styles = styles.concat('justify-between ');
    if (end) styles = styles.concat('items-end ');
    return <div className={`${styles}${className || ''}`}>{children}</div>;
};
