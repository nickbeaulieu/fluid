import { Meta } from '@storybook/react';
import React, { FC, useState } from 'react';
import { DatesPicker } from '.';

export default {
    title: 'Dates/DatesPicker',
    component: DatesPicker,
} as Meta;

export const Main: FC = () => {
    const [date, setDate] = useState(new Date());
    console.log(date);

    return (
        <div className="">
            <DatesPicker value={date} onChange={setDate} />
        </div>
    );
};
