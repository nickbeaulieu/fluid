## Components

### Priority

-   Suggest/Autocomplete
-   Omnibar

### Optional (as needed)

-   Markdown composer renderer (almost done, needs colors)
-   Add docs https://storybook.js.org/docs/react/writing-docs/mdx
-   Skeleton (blueprint does this with just a class) https://github.com/palantir/blueprint/tree/develop/packages/core/src/components/skeleton
-   Datetime Picker (react-datetime-picker)
-   Collapsible section (use react spring)
-   Radio Buttons
-   Color Picker
-   ThemeManager (light/dark manager) https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
-   Resize Observer
-   MultiSelect
-   Progress Bar

## Hooks

-   useHotkeys

usage like

```ts
const hotkeys = useMemo(
    () => [
        {
            combo: 'R',
            global: true,
            label: 'Refresh data',
            onKeyDown: () => console.info('Refreshing data...'),
        },
        {
            combo: 'F',
            group: 'Input',
            label: 'Focus text input',
            onKeyDown: inputRef.current?.focus(),
        },
    ],
    [],
);
const { handleKeyDown, handleKeyUp } = useHotkeys(hotkeys);
```
