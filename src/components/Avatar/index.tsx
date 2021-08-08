import React, { useRef, useState } from 'react';

export interface AvatarProps {
    src?: string;
    initials: string;
    size?: 'small' | 'normal';
    ring?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    size,
    initials,
    ring,
}) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [error, setError] = useState(false);

    return (
        <div
            className={`${
                size === 'small' ? 'w-8 h-8 text-sm' : 'h-10 w-10 text-base'
            } rounded-full ${
                ring ? 'border' : ''
            } border-white flex justify-center items-center bg-white text-indigo-700 shadow-md`}
        >
            {src && !error ? (
                <img
                    ref={imgRef}
                    src={src}
                    onError={() => setError(true)}
                    alt={initials}
                    className="w-full rounded-full flex justify-center items-center"
                />
            ) : (
                <span>{initials}</span>
            )}
        </div>
    );
};
