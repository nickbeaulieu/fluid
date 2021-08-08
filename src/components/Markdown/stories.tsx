import { Meta } from '@storybook/react';
import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MarkdownEditor } from '.';
import { useTextArea } from '../../hooks/useTextArea';

export default {
    title: 'Core/Markdown',
    component: MarkdownEditor,
} as Meta;

const baseMarkdown = `### A glorious title

And a sentence that follow has some bad grammer.

\`\`\`js
let code = "This is enough code";
code = code.substring(3);
\`\`\`

- [ ] Something to do
`;

export const Main: FC = () => {
    const [value, onChange, setValue] = useTextArea(baseMarkdown);
    return (
        <Router>
            <div className="w-3/4 m-auto">
                <MarkdownEditor value={value} onChange={onChange} setValue={setValue}></MarkdownEditor>
            </div>
        </Router>
    );
};
