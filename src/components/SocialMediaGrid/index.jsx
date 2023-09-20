import { Fragment } from 'react';
import { SOCIAL_MEDIAS } from '../../utils/columns';

const SocialMediaTable = ({
  rows,
  handleChange,
  handleKeyPress,
  addNewRow,
  deleteRow,
}) => {
  return (
    <div className='w-full mt-6 h-auto px-4 shadow-md'>
      <div className='grid h-auto grid-cols-2 bg-gray-300'>
        <div className='w-full py-2'>
          <h1 className='text-base font-bold text-black capitalize text-left px-4'>
            Social Media
          </h1>
        </div>
        <div className='w-full py-2'>
          <h1 className='text-base font-bold text-black capitalize text-left px-4'>
            Description
          </h1>
        </div>
      </div>
      <div className='grid h-auto grid-cols-2 gap-4 py-4'>
        {rows?.map((row, index) => (
          <Fragment key={row?.id}>
            <div className='w-full'>
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
            </div>
            <div className='w-full'>
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
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTable;
