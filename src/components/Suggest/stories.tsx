import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Suggest, useSuggest } from '.';

export default {
    title: 'Core/Suggest',
    component: Suggest,
} as Meta;

interface User {
    id: string;
    name: string;
}

export const Main = () => {
    const [loading, setLoading] = useState(false);
    const userSuggest = useSuggest<User>(
        (value) => {
            console.log(value);
            // make request, whatever
        },
        (value) => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 200);
        },
    );
    return (
        <div className="space-y-4">
            <Suggest<User> {...userSuggest} showLoader={loading}>
                <Suggest.Option<User> value={{ id: '1', name: 'Nick Beaulieu' }} label="Nick Beaulieu" />
                <Suggest.Separator />
                <Suggest.Option<User> value={{ id: '2', name: 'Peter Smith' }} label="Peter Smith" />
                <Suggest.Option<User>
                    value={{ id: '3', name: 'Matthew Meadows' }}
                    label="Matthew Meadows"
                    disabled
                />
                <Suggest.Option<User> value={{ id: '4', name: 'Evan Porter' }} label="Evan Porter" />
            </Suggest>
        </div>
    );
};
