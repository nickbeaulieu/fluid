import React from 'react';

export interface LabelProps
    extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    className?: string;
}

export const Label: React.FC<LabelProps> = (props) => {
    const { children, className = 'ml-1' } = props;
    return <label className={`text-sm text-gray-600 ${className}`}>{children}</label>;
};
