import { useContext } from 'react';
import { TabContext } from './Tab';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const HeaderItem = ({ index, tabId, children }) => {
  const { onChange, currentTab, deleteTab } = useContext(TabContext);

  const handleClick = () => {
    onChange(index);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTab(tabId);
  };
  return (
    <li className='mr-2'>
      <span
        onClick={handleClick}
        className={`inline-flex relative cursor-pointer p-4 rounded-t-lg ${
          currentTab === index
            ? 'text-blue-600 bg-gray-100'
            : 'hover:text-gray-600 hover:bg-gray-50'
        }`}>
        {children}

        <AiOutlineCloseCircle
          onClick={handleDelete}
          className='ml-2 w-5 h-5 transition-all duration-300 ease-in-out text-red-400 cursor-pointer hover:text-red-600'
        />
      </span>
    </li>
  );
};
