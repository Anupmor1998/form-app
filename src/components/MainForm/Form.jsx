/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import { countryList } from '../../data';
import { useRef } from 'react';

const Form = ({ formValues, handleChange, handleKeyPress, index }) => {
  const imgRef = useRef(null);

  const onBrowse = () => {
    imgRef.current.click();
  };
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
            id={`companyName-${index}`}
            value={formValues?.companyName || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyPress(e, `orderNo-${index}`)}
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
            id={`orderNo-${index}`}
            value={formValues?.orderNo || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyPress(e, `country-${index}`)}
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
            id={`country-${index}`}
            value={formValues?.country || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyPress(e, `address-${index}`)}>
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
            id={`address-${index}`}
            value={formValues?.address || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyPress(e, `status-${index}`)}
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
              checked={formValues?.status}
              id={`status-${index}`}
              name='status'
              //   value={formValues?.status}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyPress(e, `browse-btn-${index}`)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className='ml-3 text-sm font-medium text-gray-900'>
              {formValues?.status ? 'Active' : 'Disabled'}
            </span>
          </label>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className='w-full flex flex-col justify-start items-start'>
          <label
            className='text-sm text-gray-500 font-semibold'
            htmlFor='address'>
            Image:
          </label>
          <input
            hidden
            type='file'
            accept={'image/*'}
            ref={imgRef}
            name='image'
            onChange={(e) => handleChange(e, index)}
          />
          {formValues?.image && (
            <span className='text-sm mr-2 mt-2 text-gray-500'>
              {formValues?.image?.name}
            </span>
          )}
          <button
            className='w-auto px-3 mt-2 py-1.5 text-white font-semibold bg-blue-600 outline-none border transition-all duration-500 ease-in-out border-transparent rounded-md focus:ring-2 focus:ring-blue-300 enabled:hover:text-blue-600 enabled:hover:bg-white enabled:hover:border-blue-600 disabled:cursor-not-allowed disabled:bg-opacity-60'
            id={`browse-btn-${index}`}
            type='button'
            onClick={onBrowse}
            onKeyDown={(e) =>
              handleKeyPress(e, `socialMediaName-${index}-${0}`)
            }>
            Browse
          </button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Form;
