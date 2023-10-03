import { Grid } from '@mui/material';
import Form from './Form';
import SocialMediaGrid from './SocialMediaGrid';
import DetailsGrid from './DetailsGrid';

const MainForm = ({
  tab,
  index,
  loading,
  handleChangeForm,
  handleChangeTab,
  handleKeyPress,
  handleSubmit,
  addNewRow,
  deleteRow,
}) => {
  return (
    <Grid container padding={2}>
      <Form
        handleChange={handleChangeForm}
        handleKeyPress={handleKeyPress}
        formValues={tab?.formValues}
        index={index}
      />
      <SocialMediaGrid
        tabIndex={index}
        rows={tab?.tab1Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
      />
      <DetailsGrid
        tabIndex={index}
        rows={tab?.tab2Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
      />
      <Grid item display='flex' justifyContent='center' marginTop={4} xs={12}>
        <button
          className='w-auto px-7 py-2.5 text-white font-semibold bg-blue-600 outline-none border transition-all duration-500 ease-in-out border-transparent rounded-md focus:ring-2 focus:ring-blue-300 enabled:hover:text-blue-600 enabled:hover:bg-white enabled:hover:border-blue-600 disabled:cursor-not-allowed disabled:bg-opacity-60'
          id={`submit-btn-${index}`}
          type='button'
          disabled={loading}
          onClick={() => handleSubmit(index)}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </Grid>
    </Grid>
  );
};

export default MainForm;
