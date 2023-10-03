import {
  Tab,
  Content,
  ContentItem,
  Header,
  HeaderItem,
} from './components/Tab';
import { useForm } from './hooks/useForm';
import MainForm from './components/MainForm';
import { isEmpty } from 'lodash';
function App() {
  const {
    tabs,
    loading,
    activeIndex,
    handleActiveIndex,
    addNewTab,
    deleteTab,
    handleChangeForm,
    handleKeyPress,
    handleChangeTab,
    addNewRow,
    deleteRow,
    handleSubmit,
  } = useForm();

  return (
    <div className='px-4'>
      <button
        className='w-auto px-7 mt-2 mb-6 py-2.5 text-white font-semibold bg-blue-600 outline-none border transition-all duration-500 ease-in-out border-transparent rounded-md focus:ring-2 focus:ring-blue-300 enabled:hover:text-blue-600 enabled:hover:bg-white enabled:hover:border-blue-600 disabled:cursor-not-allowed disabled:bg-opacity-60'
        id='browse-btn'
        type='button'
        disabled={tabs?.length >= 3}
        onClick={addNewTab}>
        Add New Tab
      </button>
      {!isEmpty(tabs) && (
        <Tab
          onChange={handleActiveIndex}
          deleteTab={deleteTab}
          currentTab={activeIndex}>
          <Header>
            {tabs?.map((tab, index) => (
              <HeaderItem key={tab?.id} tabId={tab?.id} index={index + 1}>
                Tab {index + 1}
              </HeaderItem>
            ))}
          </Header>
          <Content>
            {tabs?.map((tab, index) => (
              <ContentItem key={tab?.id} index={index + 1}>
                <MainForm
                  index={index}
                  tab={tab}
                  loading={loading}
                  handleChangeForm={handleChangeForm}
                  handleChangeTab={handleChangeTab}
                  addNewRow={addNewRow}
                  deleteRow={deleteRow}
                  handleKeyPress={handleKeyPress}
                  handleSubmit={handleSubmit}
                />
              </ContentItem>
            ))}
          </Content>
        </Tab>
      )}
    </div>
  );
}

export default App;
