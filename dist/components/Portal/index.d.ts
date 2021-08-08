import React from 'react';
export interface PortalProps {
    to: string;
}
export interface PortalDestinationProps {
    id: string;
    className?: string;
}
export declare const Portal: React.FC<PortalProps>;
export declare const PortalDestination: React.FC<PortalDestinationProps>;
