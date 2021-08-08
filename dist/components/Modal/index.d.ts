import React, { CSSProperties } from 'react';
import 'rodal/lib/rodal.css';
import './styles.css';
export declare type ModalAnimation = 'zoom' | 'fade' | 'flip' | 'door' | 'rotate' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
export interface ModalProps {
    visible?: boolean;
    width?: number;
    height?: number;
    onClose(): void;
    onAnimationEnd?(): void;
    showMask?: boolean;
    closeOnEsc?: boolean;
    closeOnMaskClick?: boolean;
    hideCloseButton?: boolean;
    animation?: ModalAnimation;
    enterAnimation?: ModalAnimation;
    leaveAnimation?: ModalAnimation;
    duration?: number;
    className?: string;
    customStyles?: CSSProperties;
    customMaskStyles?: CSSProperties;
    title?: string;
}
export declare const Modal: React.FC<ModalProps>;
