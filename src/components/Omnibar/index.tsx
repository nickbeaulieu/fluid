import React, { useEffect } from 'react';
import { useLambda } from '../../fluid';
import { Modal } from '../Modal';
import { Suggest, useSuggest } from '../Suggest';

export interface OmnibarProps {
    className?: string;
}

export const Omnibar: React.FC<OmnibarProps> = ({ className = '' }) => {
    const [visible, setVisible] = useLambda(false);
    useEffect(() => {
        window.addEventListener('keydown', (e) => onKeyDown(e));
    });

    const onKeyDown = (e: KeyboardEvent) => {
        console.log(e);
        e.preventDefault();
        if (e.key === 'O' && e.shiftKey === true) {
            setVisible(true)();
        }
    };

    const suggest = useSuggest((value) => {
        console.log(value);
    });

    return (
        <Modal
            visible={visible}
            onClose={setVisible(!visible)}
            height={40}
            hideCloseButton={true}
            customStyles={{
                padding: '0px 4px',
                borderRadius: '0.375rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
        >
            <Suggest {...suggest} className="shadow-none rounded-none p-0" />
        </Modal>
    );
};
