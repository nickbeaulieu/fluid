import React from 'react';
import { ModalProps } from '../Modal';
export interface ConfirmationProps extends Omit<ModalProps, 'onClose'> {
    acceptText?: string;
    cancelText?: string;
    onSelection(action: boolean): void;
    destructive?: boolean;
}
export declare const Confirmation: React.FC<ConfirmationProps>;
