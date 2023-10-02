import MainForm from './components/MainForm';
import Tab from './components/Tab';
import { Header } from './components/Tab/Header';
function App() {
  const handleNewTab = () => {
    console.log('New Tab');
  };
  return (
    <div>
      <button
        className='w-auto ml-4 px-7 mt-2 mb-4 py-2.5 text-white font-semibold bg-blue-600 outline-none border transition-all duration-500 ease-in-out border-transparent rounded-md focus:ring-2 focus:ring-blue-300 enabled:hover:text-blue-600 enabled:hover:bg-white enabled:hover:border-blue-600 disabled:cursor-not-allowed disabled:bg-opacity-60'
        id='browse-btn'
        type='button'
        onClick={handleNewTab}>
        Add New Tab
      </button>
      <Tab>
        <Header></Header>
      </Tab>
      <MainForm />
    </div>
  );
}

export default App;
