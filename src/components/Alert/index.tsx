import React from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Modal, ModalProps } from '../Modal';

export interface AlertProps extends ModalProps {
    acceptText?: string;
}

export const Alert: React.FC<AlertProps> = (props) => {
    const { children, acceptText = 'OK', onClose, ...restProps } = props;
    return (
        <Modal onClose={onClose} {...restProps}>
            <Flex center className="my-4">
                {children}
            </Flex>
            <div className="mt-5">
                <Button label={acceptText} className="m-auto" onClick={onClose} />
            </div>
        </Modal>
    );
};
