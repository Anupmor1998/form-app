/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import { countryList } from '../../data';

const Form = ({ formValues, handleChange, handleKeyPress }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className='w-full flex flex-col justify-start items-start'>
          <label
            className='text-sm text-gray-500 font-semibold'
            htmlFor='companyName'>
            Company Name:
          </label>
          <input
            className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
            type='text'
            name='companyName'
            id='companyName'
            value={formValues.companyName || ''}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, 'orderNo')}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='w-full flex flex-col justify-start items-start'>
          <label
            className='text-sm text-gray-500 font-semibold'
            htmlFor='orderNo'>
            Order No.:
          </label>
          <input
            className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
            type='text'
            name='orderNo'
            id='orderNo'
            value={formValues.orderNo || ''}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, 'country')}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='w-full flex flex-col justify-start items-start'>
          <label
            className='text-sm text-gray-500 font-semibold'
            htmlFor='country'>
            Country:
          </label>
          <select
            className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
            name='country'
            id='country'
            value={formValues.country || ''}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, 'address')}>
            <option value='' disabled>
              Select Country
            </option>
            {countryList.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='w-full flex flex-col justify-start items-start'>
          <label
            className='text-sm text-gray-500 font-semibold'
            htmlFor='address'>
            Address.:
          </label>
          <textarea
            className='text-sm mt-2 resize-none min-h-[6rem] text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
            name='address'
            id='address'
            value={formValues.address || ''}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e, 'status')}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='w-full flex flex-col justify-start items-start'>
          <p className='text-sm text-gray-500 font-semibold' htmlFor='address'>
            Status:
          </p>
          <label className='relative mt-2 inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={formValues.status}
              id='status'
              name='status'
              //   value={formValues.status}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'socialMediaName', 0)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className='ml-3 text-sm font-medium text-gray-900'>
              {formValues.status ? 'Active' : 'Disabled'}
            </span>
          </label>
        </div>
      </Grid>
    </Grid>
  );
};

export default Form;
