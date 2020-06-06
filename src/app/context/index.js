import { createContext } from 'react';

export const AppContext = createContext({
    events: [],
    categories: [],
    addEvent: () => {},
});