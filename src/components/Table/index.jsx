import { SOCIAL_MEDIAS } from '../../utils/columns';

/* eslint-disable react/prop-types */
const Table = ({
  columns,
  rows,
  title,
  handleChange,
  handleKeyPress,
  addNewRow,
  deleteRow,
}) => {
  return (
    <div className='w-full relative h-auto bg-white shadow-md sm:rounded-lg'>
      <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
        <div className='w-full md:w-1/3'>
          <h1 className='text-lg font-semibold text-primary-600'>{title}</h1>
        </div>
      </div>
      <div className='w-full overflow-auto h-auto scrollbar-thin scrollbar-thumb-primary-600 scrollbar-track-slate-400'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 '>
            <tr className='bg-primary-50'>
              {columns?.map((column) => (
                <th key={column?.id} scope='col' className='px-4 py-3'>
                  {column?.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, index) => (
              <tr key={row?.id} className='border-b cursor-pointer'>
                <td className='px-4 py-3'>
                  <select
                    name='socialMediaName'
                    id={`socialMediaName${index}`}
                    className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
                    value={row?.socialMediaName || ''}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyPress(e, 'description', index)}>
                    <option value='' disabled>
                      Select Social Media
                    </option>
                    {SOCIAL_MEDIAS.map((option) => (
                      <option key={option.id}>{option.name}</option>
                    ))}
                  </select>
                </td>
                <td className='px-4 py-3'>
                  <input
                    type='text'
                    name='description'
                    id={`description${index}`}
                    className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
                    value={row.description || ''}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => {
                      if (rows[index + 1])
                        handleKeyPress(e, 'socialMediaName', index + 1);

                      if (rows.length > 1) deleteRow(e, row.id);

                      addNewRow(e);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
