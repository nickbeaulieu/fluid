import React from 'react';
export interface BreadcrumbProps {
    href?: string;
    text: string;
}
export interface BreadcrumbsProps {
    crumbs: BreadcrumbProps[];
    crumbsClassName?: string;
    crumbClassName?: string;
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
