import React, { useRef, useState } from 'react';
import { Icon } from '../Icon';
import './styles.css';

export interface FileInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    onFilesPicked(files: FileList): void;
}

const browserSupportsDragAndDrop = (): boolean => {
    const div = document.createElement('div');
    const draggable = 'draggable' in div || ('ondragstart' in div && 'ondrop' in div);
    return draggable && !!window.FormData && !!window.FileReader;
};

export const FileInput: React.FC<FileInputProps> = (props) => {
    const { children, className = '', onFilesPicked, ...restProps } = props;
    const supportsDragAndDrop = useRef(browserSupportsDragAndDrop()).current;
    const [files, setFiles] = useState<File[] | null>(null);
    const dragCounter = useRef(0);
    const [isDragging, setDragging] = useState(false);

    const onDrop = (e: React.DragEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files?.length) {
            console.log(e.dataTransfer.files?.length, e.dataTransfer.files);
            onFilesPicked(e.dataTransfer.files);
            setFiles(Array.from(e.dataTransfer.files));
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.files);
        if (e.currentTarget.files?.length) {
            onFilesPicked(e.currentTarget.files);
            setFiles(Array.from(e.currentTarget.files));
        }
    };

    return (
        <div className="bg-white p-4 max-w-lg rounded-md shadow-md">
            <form
                onDrop={onDrop}
                onDrag={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragEnter={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dragCounter.current++;
                    if (e.dataTransfer.items?.length) {
                        setDragging(true);
                    }
                }}
                onDragLeave={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dragCounter.current--;
                    if (dragCounter.current > 0) {
                        return;
                    }
                    setDragging(false);
                }}
                className={`h-64 relative ${
                    supportsDragAndDrop ? 'bg-white file-input-border rounded-md' : ''
                } ${className}`}
            >
                <div className="flex items-center justify-center h-full">
                    <div className="block text-center">
                        <div className="flex justify-center text-indigo-700">
                            <Icon icon="upload" size={32} />
                        </div>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={onInputChange}
                            multiple
                            onClick={(e) => {
                                e.currentTarget.value = '';
                                setFiles(null);
                            }}
                            {...restProps}
                        />
                        <label htmlFor="file-upload">
                            <strong className="underline text-indigo-700 cursor-pointer">
                                Choose a file
                            </strong>
                            <span className="text-gray-700"> or drag it here</span>
                        </label>
                        {files?.length && (
                            <div className="block font-bold max-w-md">
                                {files?.map((x) => x.name).join(', ')}
                            </div>
                        )}
                    </div>
                    {isDragging && (
                        <>
                            <div className="absolute h-full w-full bg-white opacity-95 top-0 left-0 rounded-md" />
                            <div className="text-indigo-700 absolute flex self-center justify-center">
                                <div className="w-full">
                                    <div className="flex justify-center">
                                        <Icon icon="upload" size={32} />
                                    </div>
                                    <div className="text-center font-bold">Drop Files</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};
