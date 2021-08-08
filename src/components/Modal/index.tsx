import React, { CSSProperties } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { Icon } from '../Icon';
import './styles.css';

export type ModalAnimation =
    | 'zoom'
    | 'fade'
    | 'flip'
    | 'door'
    | 'rotate'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight';

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

export const Modal: React.FC<ModalProps> = (props) => {
    const {
        visible,
        children,
        animation = 'slideDown',
        closeOnEsc = true,
        closeOnMaskClick = true,
        customStyles = {
            padding: '1rem',
            borderRadius: '0.375rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        customMaskStyles = { background: 'rgba(0,0,0, 0.3)' },
        onClose,
        title = '',
        hideCloseButton = false,
        ...restProps
    } = props;
    return (
        <Rodal
            visible={visible}
            showCloseButton={false}
            animation={animation}
            closeMaskOnClick={closeOnMaskClick}
            closeOnEsc={closeOnEsc}
            customStyles={customStyles}
            customMaskStyles={customMaskStyles}
            onClose={onClose}
            {...restProps}
        >
            <div className="flex justify-between text-gray-700">
                <p className="font-semibold text-gray-700 text-lg">{title}</p>
                {!hideCloseButton && (
                    <button onClick={onClose} className="text-indigo-700">
                        <Icon icon="x" />
                    </button>
                )}
            </div>
            {children}
        </Rodal>
    );
};
