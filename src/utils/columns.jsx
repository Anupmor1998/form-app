/* eslint-disable react-refresh/only-export-components */
import Select from 'react-select';
export const TABLE_1_COLUMNS = [
  {
    id: 'socialMediaName',
    label: 'Social Media',
    ele: (index, row, rows, handleChange, handleKeyPress) => (
      <select
        name='socialMediaName'
        id={`socialMediaName${index}`}
        className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
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
    ),
  },
  {
    id: 'description',
    label: 'Description',
    ele: (
      index,
      row,
      rows,
      handleChange,
      handleKeyPress,
      addNewRow,
      deleteRow
    ) => (
      <input
        type='text'
        name='description'
        id={`description${index}`}
        className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
        value={row.description || ''}
        onChange={(e) => handleChange(e, index, 'tab-1')}
        onKeyDown={(e) => {
          if (rows[index + 1]) handleKeyPress(e, 'socialMediaName', index + 1);
          else {
            handleKeyPress(e, 'documentName', 0);
          }

          if (rows.length > 1) deleteRow(e, row.id, 'tab-1');

          addNewRow(e, 'tab-1');
        }}
      />
    ),
  },
];

export const TABLE_2_COLUMNS = [
  {
    id: 'documentName',
    label: 'Document Name',
    ele: (index, row, _rows, handleChange, handleKeyPress) => (
      <select
        name='documentName'
        id={`documentName${index}`}
        className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
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
    ),
  },
  {
    id: 'startDate',
    label: 'Start Date',
    ele: (
      index,
      row,
      rows,
      handleChange,
      handleKeyPress,
      addNewRow,
      deleteRow
    ) => (
      <input
        type='text'
        name='startDate'
        id={`startDate${index}`}
        className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-full px-3 py-2.5 outline-none border-none focus:ring-2 focus:ring-blue-300'
        value={row.startDate || ''}
        onChange={(e) => handleChange(e, index, 'tab-2')}
        // onKeyDown={(e) => handleKeyPress(e, 'gender', index)}
        onKeyDown={(e) => {
          handleKeyPress(e, 'gender', index);
          if (rows.length > 1) deleteRow(e, row.id, 'tab-2');

          addNewRow(e, 'tab-2');
        }}
      />
    ),
  },
  {
    id: 'gender',
    label: 'Gender',
    ele: (
      index,
      row,
      rows,
      handleChange,
      handleKeyPress,
      addNewRow,
      deleteRow
    ) => (
      <div className='flex w-full justify-start items-center gap-x-4'>
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
          <label className='ml-2 text-sm font-medium text-gray-900'>Male</label>
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
      </div>
    ),
  },
  {
    id: 'process',
    label: 'Process',
    ele: (
      index,
      row,
      rows,
      handleChange,
      handleKeyPress,
      addNewRow,
      deleteRow
    ) => (
      <Select
        isMulti
        openMenuOnFocus
        closeMenuOnSelect={false}
        menuPosition='fixed'
        tabIndex={0}
        inputId={`process${index}`}
        name='process'
        options={PROCESSES}
        className='text-sm mt-2 text-gray-500 rounded-md bg-gray-200 font-semibold w-[20rem] outline-none border-none focus:ring-2 focus:ring-blue-300'
        value={row.process}
        onChange={(e) => handleChange(e, index, 'tab-2 multi-select')}
        onKeyDown={(e) => {
          if (rows[index + 1]) handleKeyPress(e, 'documentName', index + 1);
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
    ),
  },
];

export const SOCIAL_MEDIAS = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
  },
  {
    id: 'instagram',
    name: 'Intagram',
  },
  {
    id: 'linkedIn',
    name: 'LinkedIn',
  },
  {
    id: 'facebook',
    name: 'Facebook',
  },
];
export const DOCUMENTS = [
  {
    id: 'resume',
    name: 'Resume',
  },
  {
    id: 'bankStatement',
    name: 'Bank Statement',
  },
  {
    id: 'address Proof',
    name: 'Address Proof',
  },
  {
    id: 'offerLetter',
    name: 'Offer Letter',
  },
];

export const PROCESSES = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];
