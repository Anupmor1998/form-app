import { Fragment } from 'react';
import Select from 'react-select';
import { DOCUMENTS, PROCESSES } from '../../data';
import { Grid } from '@mui/material';

const DetailsGrid = ({
  rows,
  handleChange,
  handleKeyPress,
  addNewRow,
  deleteRow,
}) => {
  return (
    <Grid container marginTop={6}>
      <Grid container item>
        <Grid item xs={3}>
          <div className='w-full py-2 bg-gray-300'>
            <h1 className='text-base font-bold text-black capitalize text-left'>
              Document
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='w-full py-2 bg-gray-300'>
            <h1 className='text-base font-bold text-black capitalize text-left'>
              Start Date
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='w-full py-2 bg-gray-300'>
            <h1 className='text-base font-bold text-black capitalize text-left'>
              Gender
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='w-full py-2 bg-gray-300'>
            <h1 className='text-base font-bold text-black capitalize text-left'>
              Process
            </h1>
          </div>
        </Grid>
      </Grid>
      <Grid container item marginTop={0.2} spacing={2}>
        {rows?.map((row, index) => (
          <Fragment key={row?.id}>
            <Grid item xs={3}>
              <select
                name='documentName'
                id={`documentName${index}`}
                className='text-sm text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
                value={row?.documentName || ''}
                onChange={(e) => handleChange(e, index, 'tab-2')}
                onKeyDown={(e) => handleKeyPress(e, 'startDate', index)}>
                <option value='' disabled>
                  Select Document
                </option>
                {DOCUMENTS.map((option) => (
                  <option key={option.id}>{option.name}</option>
                ))}
              </select>
            </Grid>
            <Grid item xs={3}>
              <input
                type='text'
                name='startDate'
                id={`startDate${index}`}
                className='text-sm text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
                value={row.startDate || ''}
                onChange={(e) => handleChange(e, index, 'tab-2')}
                // onKeyDown={(e) => handleKeyPress(e, 'gender', index)}
                onKeyDown={(e) => {
                  handleKeyPress(e, 'gender', index);
                  if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

                  addNewRow(e, 'tab-2');
                }}
              />
            </Grid>
            <Grid container item xs={3}>
              <Grid item xs={6}>
                <div className='flex items-center'>
                  <input
                    id={`gender${index}`}
                    name={`gender${index}`}
                    type='radio'
                    checked={row.gender === 'male'}
                    value='male'
                    onChange={(e) => handleChange(e, index, 'tab-2')}
                    // onKeyDown={(e) => handleKeyPress(e, 'process', index)}
                    onKeyDown={(e) => {
                      handleKeyPress(e, 'process', index);
                      if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

                      addNewRow(e, 'tab-2');
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
                  />
                  <label className='ml-2 text-sm font-medium text-gray-900'>
                    Male
                  </label>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='flex items-center'>
                  <input
                    id={`gender${index}`}
                    name={`gender${index}`}
                    type='radio'
                    checked={row.gender === 'female'}
                    value='female'
                    onChange={(e) => handleChange(e, index, 'tab-2')}
                    // onKeyDown={(e) => handleKeyPress(e, 'process', index)}
                    onKeyDown={(e) => {
                      handleKeyPress(e, 'process', index);
                      if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

                      addNewRow(e, 'tab-2');
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
                  />
                  <label className='ml-2 text-sm font-medium text-gray-900'>
                    Female
                  </label>
                </div>
              </Grid>
              {/* <div className='flex w-full justify-start items-center gap-x-4'>
                <div className='flex items-center'>
                  <input
                    id={`gender${index}`}
                    name={`gender${index}`}
                    type='radio'
                    checked={row.gender === 'male'}
                    value='male'
                    onChange={(e) => handleChange(e, index, 'tab-2')}
                    // onKeyDown={(e) => handleKeyPress(e, 'process', index)}
                    onKeyDown={(e) => {
                      handleKeyPress(e, 'process', index);
                      if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

                      addNewRow(e, 'tab-2');
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
                  />
                  <label className='ml-2 text-sm font-medium text-gray-900'>
                    Male
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    id={`gender${index}`}
                    name={`gender${index}`}
                    type='radio'
                    checked={row.gender === 'female'}
                    value='female'
                    onChange={(e) => handleChange(e, index, 'tab-2')}
                    // onKeyDown={(e) => handleKeyPress(e, 'process', index)}
                    onKeyDown={(e) => {
                      handleKeyPress(e, 'process', index);
                      if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

                      addNewRow(e, 'tab-2');
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2'
                  />
                  <label className='ml-2 text-sm font-medium text-gray-900'>
                    Female
                  </label>
                </div>
              </div> */}
            </Grid>
            <Grid item xs={3}>
              <Select
                isMulti
                openMenuOnFocus
                closeMenuOnSelect={false}
                menuPosition='fixed'
                tabIndex={0}
                inputId={`process${index}`}
                name='process'
                options={PROCESSES}
                className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold outline-none border-none focus:ring-2 focus:ring-blue-300'
                value={row.process}
                onChange={(e) => handleChange(e, index, 'tab-2 multi-select')}
                onKeyDown={(e) => {
                  if (rows[index + 1])
                    handleKeyPress(e, 'documentName', index + 1);
                  else {
                    handleKeyPress(e, 'submit-btn');
                  }

                  if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

                  addNewRow(e, 'tab-2');
                }}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    minHeight: 0,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                  }),
                }}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default DetailsGrid;
