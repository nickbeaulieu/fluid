import React from 'react';
import { Icon } from '../Icon';

export interface TagProps {
    className?: string;
    intent?: 'primary' | 'secondary';
    label: string;
    onRemove?(): void;
}

export const Tag: React.FC<TagProps> = (props) => {
    const { label, onRemove, intent = 'primary', className } = props;

    const styles = intent === 'primary' ? 'bg-indigo-700 text-white' : 'bg-white text-indigo-700';

    const removeStyles = intent === 'primary' ? 'text-indigo-300' : 'text-indigo-700';

    return (
        <div
            className={`inline-flex items-center ${styles} py-1 px-2 rounded-full text-xs shadow-md ${className}`}
        >
            <span>{label}</span>
            {!!onRemove && (
                <span className={`inline-flex items-center ml-1 ${removeStyles}`}>
                    <button onClick={onRemove}>
                        <Icon icon="x" size={12} />
                    </button>
                </span>
            )}
        </div>
    );
};
