import { createContext, useContext } from 'react';

// CREATE CONTEXT INSTANCE
export const AppContext: any = createContext(null);

// CONTEXT WRAPPER
export function AppWrapper({ children }: any) {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

// USECONTEXT ONE-LINER
export function useAppContext() {
    return useContext(AppContext);
}
