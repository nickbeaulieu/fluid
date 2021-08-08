import React, { PropsWithChildren } from 'react';
interface TabsCompound {
    Tab: React.FC<TabProps>;
}
export interface TabsProps extends PropsWithChildren<any> {
    disabled?: boolean;
    className?: string;
    onTab?(label: string): void;
    defaultTab?: string;
    tabbarClassName?: string;
    panelClassName?: string;
    queryStringKey?: string;
    tabAccessory?: React.ReactNode;
}
export declare const Tabs: React.FC<TabsProps> & TabsCompound;
export interface TabProps {
    className?: string;
    disabled?: boolean;
    label: string;
}
export {};
