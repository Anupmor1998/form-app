import { Fragment } from 'react';
import { SOCIAL_MEDIAS } from '../../data';
import { Grid } from '@mui/material';

const SocialMediaGrid = ({
  rows,
  handleChange,
  handleKeyPress,
  addNewRow,
  deleteRow,
}) => {
  return (
    <>
      <Grid container marginTop={6}>
        <Grid item xs={6}>
          <div className='w-full py-2 bg-gray-300'>
            <h1 className='text-base font-bold text-black capitalize text-left'>
              Social Media
            </h1>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='w-full py-2 bg-gray-300'>
            <h1 className='text-base font-bold text-black capitalize text-left'>
              Description
            </h1>
          </div>
        </Grid>
      </Grid>
      <Grid container marginTop={0.2} spacing={2}>
        {rows?.map((row, index) => (
          <Fragment key={row?.id}>
            <Grid item xs={6}>
              <select
                name='socialMediaName'
                id={`socialMediaName${index}`}
                className='text-sm text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
                value={row?.socialMediaName || ''}
                onChange={(e) => handleChange(e, index, 'tab-1')}
                onKeyDown={(e) => handleKeyPress(e, 'description', index)}>
                <option value='' disabled>
                  Select Social Media
                </option>
                {SOCIAL_MEDIAS.map((option) => (
                  <option key={option.id}>{option.name}</option>
                ))}
              </select>
            </Grid>
            <Grid item xs={6}>
              <input
                type='text'
                name='description'
                id={`description${index}`}
                className='text-sm text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
                value={row.description || ''}
                onChange={(e) => handleChange(e, index, 'tab-1')}
                onKeyDown={(e) => {
                  if (rows[index + 1])
                    handleKeyPress(e, 'socialMediaName', index + 1);
                  else {
                    handleKeyPress(e, 'documentName', 0);
                  }

                  if (rows.length > 1) deleteRow(e, row.id, 'tab-1');

                  addNewRow(e, 'tab-1');
                }}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default SocialMediaGrid;
