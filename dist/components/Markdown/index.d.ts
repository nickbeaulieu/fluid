import React from 'react';
import './styles.css';
export interface MarkdownEditorProps {
    className?: string;
    value: string;
    onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    setValue?(value: React.SetStateAction<string>): () => void;
}
export declare const MarkdownEditor: React.FC<MarkdownEditorProps>;
