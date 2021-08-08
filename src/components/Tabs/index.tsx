import { nanoid } from 'nanoid';
import { parse, stringify } from 'query-string';
import React, {
    Component,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Portal, PortalDestination } from '../Portal';

interface ITabsContext extends Omit<TabsProps, 'className' | 'tabbarClassName'> {
    tabAreaId: string;
    tab: string;
}

const TabsContext = React.createContext<ITabsContext>({ tabAreaId: '', tab: '' });

interface TabsCompound {
    Tab: React.FC<TabProps>;
}

export interface TabsProps extends PropsWithChildren<any> {
    disabled?: boolean;
    className?: string;
    onTab?(label: string): void;
    defaultTab?: string;
    tabbarClassName?: string;
    panelClassName?: string;
    queryStringKey?: string;
    tabAccessory?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> & TabsCompound = (props: TabsProps) => {
    const {
        className = '',
        tabbarClassName = 'ml-4 mb-2',
        panelClassName = 'p-4 h-screen',
        children,
        onTab: realOnTab,
        defaultTab,
        queryStringKey = 'tab',
        tabAccessory,
    } = props;
    const history = useHistory();
    const match = useRouteMatch();
    const selectedTab = parse(history.location.search)?.[queryStringKey] as string;

    const tabAreaId = useRef(nanoid()).current;
    const guessDefaultTab = children.find((x: Component<TabProps>) => !!x.props.label).props.label;
    const [tab, setTab] = useState(selectedTab ?? defaultTab ?? guessDefaultTab);
    const onTab = useCallback(
        (label: string) => () => {
            realOnTab?.(label);
            setTab(label);
            const currentQuery = parse(history.location.search) as object;
            history.push({ search: stringify({ ...currentQuery, [queryStringKey]: label }) });
        },
        [realOnTab, history, match],
    );
    const values = useMemo(() => ({ tabAreaId, tab, onTab, panelClassName }), [
        tabAreaId,
        tab,
        onTab,
        panelClassName,
    ]);
    return (
        <TabsContext.Provider value={values}>
            <div className="flex justify-between items-center">
                <div className={`flex items-center space-x-3 ${tabbarClassName}`}>{children}</div>
                <div>{tabAccessory}</div>
            </div>
            <div className={`bg-white rounded-md shadow-md ${panelClassName}`}>
                <PortalDestination id={tabAreaId}></PortalDestination>
            </div>
        </TabsContext.Provider>
    );
};

const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs compound components cannot be rendered outside the Tab component');
    }

    return context;
};

export interface TabProps {
    className?: string;
    disabled?: boolean;
    label: string;
}

const Tab: React.FC<TabProps> = (props) => {
    const { disabled, className = '', label, children } = props;
    const context = useTabsContext();
    const isDisabled = disabled;
    const isSelected = context.tab === label;
    return (
        <div
            onClick={context.onTab(label)}
            className={`${disabled ? 'opacity-20 pointer-events-none' : 'pointer-events-auto'} ${className}`}
        >
            <div
                className={`border-b-2 cursor-pointer ${isDisabled ? 'cursor-not-allowed' : ''} ${
                    isSelected ? 'border-indigo-600' : 'border-transparent'
                } transition-colors duration-300`}
            >
                {label}
            </div>

            {isSelected && <Portal to={context.tabAreaId}>{children}</Portal>}
        </div>
    );
};

Tabs.Tab = Tab;
