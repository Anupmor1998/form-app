import { useContext } from 'react';
import { TabContext } from './Tab';

export const HeaderItem = ({ index, children }) => {
  const { onChange, currentTab } = useContext(TabContext);

  const handleClick = () => {
    onChange(index);
  };
  return (
    <li className='mr-2'>
      <span
        onClick={handleClick}
        className={`inline-block cursor-pointer p-4 rounded-t-lg ${
          currentTab === index
            ? 'text-blue-600 bg-gray-100'
            : 'hover:text-gray-600 hover:bg-gray-50'
        }`}>
        {children}
      </span>
    </li>
  );
};
