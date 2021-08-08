import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon';

export interface BreadcrumbProps {
    href?: string;
    text: string;
}

export interface BreadcrumbsProps {
    crumbs: BreadcrumbProps[];
    crumbsClassName?: string;
    crumbClassName?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    crumbs = [],
    crumbsClassName = '',
    crumbClassName = '',
}) => {
    return (
        <ul className={`flex items-center text-gray-700 ${crumbsClassName}`}>
            {crumbs.map((crumb, idx) => {
                const notLast = idx !== crumbs.length - 1;
                return (
                    <li className={`flex items-center ${crumbClassName}`} key={crumb.text}>
                        {crumb.href ? (
                            <NavLink
                                to={crumb.href}
                                className="transition-colors underline text-gray-700 hover:text-indigo-600 active:text-indigo-800"
                            >
                                {crumb.text}
                            </NavLink>
                        ) : (
                            <span>{crumb.text}</span>
                        )}
                        {notLast && (
                            <span className="text-indigo-400">
                                <Icon icon="chevron-right" />
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
