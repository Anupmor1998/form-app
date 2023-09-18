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
    <div className='w-full mt-4 relative h-auto bg-white shadow-md sm:rounded-lg'>
      <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
        <div className='w-full md:w-1/3'>
          <h1 className='text-lg font-semibold text-primary-600'>{title}</h1>
        </div>
      </div>
      <div className='w-full overflow-auto h-auto scrollbar-thin scrollbar-thumb-primary-600 scrollbar-track-slate-400'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='sticky top-0 text-xs text-gray-700 uppercase bg-gray-200'>
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
                {columns?.map((column) => (
                  <td key={column?.id} className='px-4 py-3'>
                    {column.ele(
                      index,
                      row,
                      rows,
                      handleChange,
                      handleKeyPress,
                      addNewRow,
                      deleteRow
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
