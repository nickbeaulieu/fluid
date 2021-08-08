import { Meta } from '@storybook/react';
import React, { FC } from 'react';
import { Modal } from '.';
import { useLambda } from '../../hooks/useLambda';
import { Button } from '../Button';

export default {
    title: 'Utilities/Modal',
    component: Modal,
} as Meta;

export const Main: FC = () => {
    const [visible, setVisible] = useLambda(false);
    return (
        <div>
            <Button label="Toggle modal" onClick={setVisible(!visible)} />
            <Modal
                visible={visible}
                onClose={setVisible(!visible)}
                title="Get started with Sessions"
                height={180}
            >
                <div>this is some modal content</div>
            </Modal>
        </div>
    );
};
