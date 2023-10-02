import { createContext } from 'react';

export const TabContext = createContext();
export const Tab = ({ currentTab, onChange, children }) => {
  return (
    <TabContext.Provider
      value={{
        currentTab,
        onChange,
      }}>
      {children}
    </TabContext.Provider>
  );
};
