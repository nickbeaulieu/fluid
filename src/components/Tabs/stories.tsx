import { Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Tabs } from '.';
import { GlobalStyles } from '../GlobalStyles';

export default {
    title: 'Core/Tabs',
    component: Tabs,
} as Meta;

export const Main = () => {
    return (
        <div className="">
            <GlobalStyles>
                <Router>
                    <Tabs>
                        <Tabs.Tab label="Users">This is the users tab</Tabs.Tab>
                        <Tabs.Tab label="Accounts">This is the accounts tab</Tabs.Tab>
                        <Tabs.Tab label="Sessions" disabled>
                            These are the user sessions
                        </Tabs.Tab>
                        <Tabs.Tab label="Settings">These are the settings</Tabs.Tab>
                    </Tabs>
                </Router>
            </GlobalStyles>
        </div>
    );
};
