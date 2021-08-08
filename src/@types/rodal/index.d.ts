declare module 'rodal' {
    import { CSSProperties, ReactNode } from 'react';

    type RodalProps = {
        children?: ReactNode;
        width?: number;
        height?: number;
        measure?: string;
        visible?: boolean;
        showMask?: boolean;
        closeOnEsc?: boolean;
        closeMaskOnClick?: boolean;
        showCloseButton?: boolean;
        animation?: string;
        enterAnimation?: string;
        leaveAnimation?: string;
        duration?: number;
        className?: string;
        customStyles?: CSSProperties;
        customMaskStyles?: CSSProperties;
        onClose?(): void;
        onAnimationEnd?(): void;
    };

    const Rodal = (_: RodalProps): JSX.Element => {};
    export = Rodal;
}
