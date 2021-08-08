import React, { useEffect } from 'react';
import DatePicker, { DatePickerProps } from 'react-date-picker/dist/entry.nostyle';
import { Icon } from '../Icon';
import './styles.css';

export interface DatesPickerProps extends DatePickerProps {}

export const DatesPicker: React.FC<DatesPickerProps> = (props) => {
    useEffect(() => {}, []);

    return (
        <div className="text-gray-700 rounded-md shadow-md bg-white px-1 py-1 h-8 w-44 flex items-center">
            <DatePicker
                calendarIcon={<Icon icon="calendar" />}
                clearIcon={<Icon icon="x" />}
                locale="en-US"
                onCalendarOpen={changeArrows}
                {...props}
            />
        </div>
    );
};

const changeArrows = () => {
    // Year Left
    var leftArrowOuter = document.getElementsByClassName(
        'react-calendar__navigation__arrow react-calendar__navigation__prev2-button',
    );

    if (leftArrowOuter?.[0]) {
        leftArrowOuter[0].innerHTML =
            '<span class="flex items-center justify-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg></span>';
    }

    // Month Left
    var leftArrowInner = document.getElementsByClassName(
        'react-calendar__navigation__arrow react-calendar__navigation__prev-button',
    );
    if (leftArrowInner?.[0]) {
        leftArrowInner[0].innerHTML =
            '<span class="flex items-center justify-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></span>';
    }

    var rightArrowInner = document.getElementsByClassName(
        'react-calendar__navigation__arrow react-calendar__navigation__next-button',
    );

    // Month Right
    if (rightArrowInner?.[0]) {
        rightArrowInner[0].innerHTML =
            '<span class="flex items-center justify-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span>';
    }

    var rightArrowOuter = document.getElementsByClassName(
        'react-calendar__navigation__arrow react-calendar__navigation__next2-button',
    );
    if (rightArrowOuter?.[0]) {
        rightArrowOuter[0].innerHTML =
            '<span class="flex items-center justify-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></span>';
    }
};
