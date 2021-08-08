import React from 'react';
import { ModalProps } from '../Modal';
export interface AlertProps extends ModalProps {
    acceptText?: string;
}
export declare const Alert: React.FC<AlertProps>;
