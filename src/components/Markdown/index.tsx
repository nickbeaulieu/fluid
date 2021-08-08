import React, { useCallback, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import { Card } from '../Card';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { Tabs } from '../Tabs';
import { TextArea } from '../TextArea';
import { Noop } from '../Toaster/internal/utils';
import './styles.css';

export interface MarkdownEditorProps {
    className?: string;
    value: string;
    onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    setValue?(value: React.SetStateAction<string>): () => void;
}

const components = {
    // @ts-ignore
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                style={okaidia}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    // @ts-ignore
    li({ node, inline, className, children, ...props }) {
        return (
            <Checkbox onChange={Noop} checked={children?.[0]?.props?.checked}>
                {children?.[2]}
            </Checkbox>
        );
    },
};
// GH has
/**
 * ### Header
 * B Bold
 * _I_ Italic
 * Blockquote (use the hamburge menu alt)
 * Code </>
 * Link
 * Bullet list
 * number list
 * task list
 * @ to mention people
 * Link to sessions (lightning? play button?)
 */
function insertAtCursor(field: HTMLTextAreaElement, myValue: string, offsetPosition = 0): string {
    if (!field) {
        return '';
    }

    if (field.selectionStart || field.selectionStart === 0) {
        const startPos = field.selectionStart;
        const endPos = field.selectionEnd;
        const currentSelection = field.value.substring(startPos, endPos);
        field.value =
            field.value.substring(0, startPos) + myValue + field.value.substring(endPos, field.value.length);
        field.selectionStart = startPos + myValue.length - offsetPosition;
        field.selectionEnd = startPos + myValue.length - offsetPosition;

        if (currentSelection.length) {
            // replace currently highlighted text
            insertAtCursor(field, currentSelection);
        }

        field.focus();
        return field.value;
    } else {
        field.value += myValue;
        return field.value;
    }
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = (props) => {
    const { value, onChange, setValue, className = '' } = props;
    const [isWriting, setWriting] = useState(true);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const modify = useCallback(
        (str: string, offsetPos = 0) => {
            const mod = insertAtCursor(textAreaRef.current!, str, offsetPos);
            setValue!(mod)();
        },
        [textAreaRef.current, setValue],
    );

    const onHeaderClick = useCallback(() => modify('###'), [modify]);
    const onBoldClick = useCallback(() => modify('****', 2), [modify]);
    const onItalicClick = useCallback(() => modify('__', 1), [modify]);
    const onBlockquoteClick = useCallback(() => modify('\n> \n', 1), [modify]);
    const onCodeClick = useCallback(() => modify('``', 1), [modify]);
    const onLinkClick = useCallback(() => modify('[](url)', 6), [modify]);
    const onTaskListClick = useCallback(() => modify('- [ ] \n', 1), [modify]);
    const onMentionClick = useCallback(() => modify('@'), [modify]);
    const onSessionClick = useCallback(() => modify('session:'), [modify]);

    return (
        <Card className="">
            <Tabs
                onTab={(label) => (label === 'Write' ? setWriting(true) : setWriting(false))}
                defaultTab="Write"
                panelClassName="border-none shadow-none h-min-72"
                tabbarClassName="ml-0 mb-4 h-8"
                tabAccessory={
                    <div
                        className={`flex items-center mb-4 font-bold text-2xl text-gray-400 space-x-4 ${
                            isWriting ? '' : 'hidden'
                        }`}
                    >
                        <div
                            className="w-6 text-center font-normal mb-0 cursor-pointer select-none"
                            onClick={onHeaderClick}
                        >
                            H
                        </div>
                        <div
                            className="w-6 text-center font-extrabold cursor-pointer select-none"
                            onClick={onBoldClick}
                        >
                            B
                        </div>
                        <div
                            className="w-3 text-center italic cursor-pointer select-none"
                            onClick={onItalicClick}
                        >
                            I
                        </div>
                        <div className="w-6 text-center cursor-pointer" onClick={onBlockquoteClick}>
                            <Icon icon="menu-alt-2" />
                        </div>
                        <div className="w-6 text-center cursor-pointer" onClick={onCodeClick}>
                            <Icon icon="code" />
                        </div>
                        <div className="w-6 text-center cursor-pointer" onClick={onLinkClick}>
                            <Icon icon="link" />
                        </div>
                        <div className="w-6 text-center cursor-pointer" onClick={onTaskListClick}>
                            <Icon icon="clipboard-list" />
                        </div>
                        <div className="w-6 text-center cursor-pointer" onClick={onMentionClick}>
                            <Icon icon="at-symbol" />
                        </div>
                        <div className="w-6 text-center cursor-pointer" onClick={onSessionClick}>
                            <Icon icon="lightning-bolt" />
                        </div>
                    </div>
                }
            >
                <Tabs.Tab label="Write">
                    <TextArea
                        ref={textAreaRef}
                        value={value}
                        onChange={onChange}
                        fill
                        className="shadow-none w-full h-full"
                        textAreaClassName="w-full h-min-72"
                    />
                </Tabs.Tab>
                <Tabs.Tab label="Preview">
                    <div className="h-72 markdown-body overflow-y-scroll pr-2">
                        {/* @ts-ignore */}
                        <ReactMarkdown children={value} plugins={[gfm]} components={components} />
                    </div>
                </Tabs.Tab>
            </Tabs>
        </Card>
    );
};
