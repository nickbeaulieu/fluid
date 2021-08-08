import React from 'react';

/**
 * Wrap around the top level of visuals of your app for
 * improved visuals on hi-res screens
 */
export const GlobalStyles: React.FC = React.memo((props) => {
    return <div className="antialiased text-gray-700 box-border">{props.children}</div>;
});
