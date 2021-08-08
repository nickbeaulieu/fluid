import React from 'react';
export interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    className?: string;
}
export declare const Label: React.FC<LabelProps>;
