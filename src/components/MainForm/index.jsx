import { Grid } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import Form from './Form';
import SocialMediaGrid from './SocialMediaGrid';
import DetailsGrid from './DetailsGrid';

const MainForm = () => {
  const {
    formValues,
    tab1Values,
    tab2Values,
    loading,
    handleChangeForm,
    handleChangeTab,
    handleKeyPress,
    handleSubmit,
    addNewRow,
    deleteRow,
  } = useForm();
  return (
    <Grid container padding={2}>
      <Form
        handleChange={handleChangeForm}
        handleKeyPress={handleKeyPress}
        formValues={formValues}
      />
      <SocialMediaGrid
        rows={tab1Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
      />
      <DetailsGrid
        rows={tab2Values}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
      />
      <Grid item display='flex' justifyContent='center' marginTop={4} xs={12}>
        <button
          className='w-auto px-7 py-2.5 text-white font-semibold bg-blue-600 outline-none border transition-all duration-500 ease-in-out border-transparent rounded-md focus:ring-2 focus:ring-blue-300 enabled:hover:text-blue-600 enabled:hover:bg-white enabled:hover:border-blue-600 disabled:cursor-not-allowed disabled:bg-opacity-60'
          id='submit-btn'
          type='button'
          disabled={loading}
          onClick={handleSubmit}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </Grid>
    </Grid>
  );
};

export default MainForm;