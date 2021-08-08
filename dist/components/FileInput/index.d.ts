import React from 'react';
import './styles.css';
export interface FileInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    onFilesPicked(files: FileList): void;
}
export declare const FileInput: React.FC<FileInputProps>;
