import '../tailwind.css';
import '../base.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'light-gray',
        values: [
            {
                name: 'light',
                value: '#F9FAFB',
            },
            {
                name: 'light-gray',
                value: '#F3F4F6',
            },
            {
                name: 'dark',
                value: '#374151',
            },
        ],
    },
};
