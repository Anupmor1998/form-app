import { useContext } from 'react';
import { TabContext } from './Tab';

export const ContentItem = ({ index, children }) => {
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? <div>{children}</div> : null;
};
