import React from 'react';

export type ToastContainerProps = {
    children?: React.ReactNode;
    hasToasts: boolean;
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
    hasToasts,
    children,
}) => {
    return (
        <div
            className={`box-border max-h-full max-w-full overflow-hidden p-2 space-y-2 fixed z-40 bottom-0 right-0 ${
                hasToasts ? '' : 'none'
            }`}
        >
            {children}
        </div>
    );
};
