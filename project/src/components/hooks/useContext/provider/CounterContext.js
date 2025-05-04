import { createContext } from 'react';

// createContext hook is used to create a context object
// The context object is used to share data between components without having to pass props down manually at every level
// The createContext function takes an optional default value as an argument
export const CounterContext = createContext([]);
