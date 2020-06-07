import { createContext } from 'react';

export const AppContext = createContext({
    events: [],
    upcoming: [],
    categories: [],
    categoryEvents: [],
    addEvent: () => {},
});