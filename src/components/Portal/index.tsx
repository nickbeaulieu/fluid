import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
    to: string;
}

export interface PortalDestinationProps {
    id: string;
    className?: string;
}

export const Portal: React.FC<PortalProps> = (props) => {
    const { to } = props;
    const [portal, setPortal] = useState<HTMLElement>();

    // @ts-ignore
    useEffect(() => {
        if (!to || !document) {
            return null;
        }

        const dest = document.getElementById(to)!;

        setPortal(dest);
    }, [to]);

    if (!portal) {
        return null;
    }

    return createPortal(props.children, portal);
};

export const PortalDestination: React.FC<PortalDestinationProps> = ({ id, className, ...restProps }) => {
    return <div {...restProps} id={id} className={`portal-destination ${className || ''}`} />;
};
