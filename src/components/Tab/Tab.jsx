import { createContext } from 'react';

export const TabContext = createContext();
export const Tab = ({ currentTab, onChange, deleteTab, children }) => {
  return (
    <TabContext.Provider
      value={{
        currentTab,
        onChange,
        deleteTab,
      }}>
      {children}
    </TabContext.Provider>
  );
};
