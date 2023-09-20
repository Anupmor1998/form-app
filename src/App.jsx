import Form from './components/Form';
import SocialMediaTable from './components/SocialMediaGrid';
import { useForm } from './hooks/useForm';

function App() {
  const {
    formValues,
    tab1Values,
    // tab2Values,
    loading,
    handleChangeForm,
    handleChangeTab,
    handleKeyPress,
    handleSubmit,
    addNewRow,
    deleteRow,
  } = useForm();
  return (
    <div>
      <Form
        handleChange={handleChangeForm}
        handleKeyPress={handleKeyPress}
        formValues={formValues}
      />
      <SocialMediaTable
        rows={tab1Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
      />
      {/* <Table
        columns={TABLE_1_COLUMNS}
        rows={tab1Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
        title={'Tab 1'}
      /> */}
      {/* <Table
        columns={TABLE_2_COLUMNS}
        rows={tab2Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
        title={'Tab 2'}
      /> */}
      <div className='w-full flex justify-center items-center my-4'>
        <button
          className='w-auto px-7 py-2.5 text-white font-semibold bg-blue-600 outline-none border transition-all duration-500 ease-in-out border-transparent rounded-md focus:ring-2 focus:ring-blue-300 enabled:hover:text-blue-600 enabled:hover:bg-white enabled:hover:border-blue-600 disabled:cursor-not-allowed disabled:bg-opacity-60'
          id='submit-btn'
          type='button'
          disabled={loading}
          onClick={handleSubmit}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default App;
