import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Avatar } from '../../components/Avatar';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Button } from '../../components/Button';
import { FileInput } from '../../components/FileInput';
import { GlobalStyles } from '../../components/GlobalStyles';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { KeyValue } from '../../components/KeyValue';
import { Loader } from '../../components/Loader';
import { Tag } from '../../components/Tag';
import { Text } from '../../components/Text';
import { TextArea } from '../../components/TextArea';
import { ToastProvider } from '../../components/Toaster/internal/ToastProvider';
import { Noop } from '../../components/Toaster/internal/utils';
import { Toaster } from '../../components/Toaster/stories';
import { Toggle } from '../../components/Toggle';
import { Tooltip } from '../../components/Tooltip';
import { useToggle } from '../../hooks/useToggle';

export default {
    title: 'Overview',
} as Meta;

export const Overview: Story = (args) => {
    const [toggle, setToggle] = useToggle(false);
    return (
        <GlobalStyles>
            <div className="text-indigo-700 space-y-4 text-base">
                <Router>
                    <div className="-space-x-2 flex">
                        <Avatar src="https://randomuser.me/api/portraits/women/6.jpg" initials="NS" />
                        <Avatar src="" initials="NB" />
                        <Avatar
                            src="https://randomuser.me/api/portraits/women/8.jpg"
                            initials="NS"
                            ring={true}
                        />
                    </div>

                    <Breadcrumbs
                        crumbs={[
                            { text: 'Contacts' },
                            { text: 'Nick Beaulieu', href: '/something' },
                            { text: 'Information' },
                        ]}
                    />
                    <div className="flex space-x-4">
                        <Button intent="secondary" label="Cancel" />
                        <Button label="Save" />
                    </div>

                    <div className="flex space-x-4 self-center">
                        <Input icon={<Icon icon="academic-cap" />} placeholder="Find anything..." />
                        <Button label="Search" />
                        <Tooltip>Search for sessions here</Tooltip>
                    </div>

                    <div className="space-x-2">
                        <Tag label="React" onRemove={Noop} />
                        <Tag label="C#" onRemove={Noop} />
                        <Tag label="Component" onRemove={Noop} />
                        <Tag label="Admin" onRemove={Noop} />
                    </div>

                    <div className="space-x-2">
                        <KeyValue label="OS" value="Windows" />
                        <KeyValue label="Browser" value="Chrome" />
                        <KeyValue label="Version" value="89.0.234" />
                    </div>

                    <Input icon={<Icon icon="bell" />} placeholder="Search notifications..." />

                    <Loader size="small" />

                    <FileInput onFilesPicked={Noop} />

                    <div className="flex space-x-4">
                        <Button intent="secondary" small label="Cancel" />
                        <Button intent="destructive" small label="Delete issue" />
                    </div>

                    <Text>Textarea</Text>
                    <TextArea />

                    <Toggle
                        checked={toggle}
                        onChange={(event) => {
                            setToggle();
                        }}
                        label="Account setting"
                    />

                    <Text>Toast Controls</Text>
                    <ToastProvider autoDismiss={true} transitionDuration={220}>
                        <Toaster />
                    </ToastProvider>
                </Router>
            </div>
        </GlobalStyles>
    );
};
