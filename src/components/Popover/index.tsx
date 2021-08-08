import React from 'react';
import { ContentRenderer, TinyPopover, TinyPopoverProps } from './internal';

export interface PopoverProps extends Omit<TinyPopoverProps, 'content'> {
    content: any;
    anchorClassName?: string;
}

export const Popover: React.FC<PopoverProps> = (props) => {
    const {
        align,
        isOpen,
        content,
        children,
        reposition,
        positions,
        anchorClassName = '',
        ...restProps
    } = props;
    return (
        <TinyPopover
            content={content}
            isOpen={isOpen}
            positions={positions || ['bottom', 'top']}
            align={align || 'start'}
            reposition={reposition || true}
            {...restProps}
        >
            <div className={anchorClassName}>{children}</div>
        </TinyPopover>
    );
};
