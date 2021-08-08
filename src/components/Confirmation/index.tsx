import React, { useCallback } from 'react';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Modal, ModalProps } from '../Modal';

export interface ConfirmationProps extends Omit<ModalProps, 'onClose'> {
    acceptText?: string;
    cancelText?: string;
    onSelection(action: boolean): void;
    destructive?: boolean;
}

export const Confirmation: React.FC<ConfirmationProps> = (props) => {
    const {
        children,
        acceptText = 'OK',
        cancelText = 'Cancel',
        destructive,
        onSelection,
        ...restProps
    } = props;
    const onCloseCallback = useCallback(
        (action: boolean) => () => {
            onSelection(action);
        },
        [onSelection],
    );
    return (
        <Modal {...restProps} onClose={onCloseCallback(false)}>
            <Flex center className="my-4">
                {children}
            </Flex>
            <div className="flex justify-end space-x-3 mt-5">
                <Button label={cancelText} intent="secondary" onClick={onCloseCallback(false)} />
                <Button
                    label={acceptText}
                    className="m-auto"
                    intent={destructive ? 'destructive' : 'primary'}
                    onClick={onCloseCallback(true)}
                />
            </div>
        </Modal>
    );
};
