import { useEffect, useRef, useState } from 'react';
import Form from './components/Form';
import { v4 as uuid } from 'uuid';
import Table from './components/Table';
import { TABLE_1_COLUMNS } from './utils/columns';

function App() {
  const [rowStatus, setRowStatus] = useState({
    add: false,
    delete: false,
  });
  const [tabValues, setTabValues] = useState([
    {
      id: uuid(),
      socialMediaName: '',
      description: '',
    },
  ]);

  const [formValues, setFormValues] = useState({
    companyName: '',
    address: '',
    country: '',
    orderNo: '',
    status: true,
  });

  const mainRef = useRef(null);

  const handleChangeForm = (e) => {
    let { name, value } = e.target;

    if (name === 'orderNo' && isNaN(value)) return;

    if (name === 'status') {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: !prevState.status,
      }));
      return;
    }

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyPress = (e, fieldName, index = null) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const parentElement = mainRef.current;
      const nextInput =
        index !== null
          ? parentElement.querySelector(`#${fieldName}${index}`)
          : parentElement.querySelector(`#${fieldName}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleChangeTab = (e, index) => {
    const { name, value } = e.target;

    setTabValues((prevState) => {
      const data = [...prevState];
      data[index][name] = value;

      return data;
    });
  };

  const addNewRow = (e) => {
    if (e.key === 'Insert') {
      setTabValues((prevState) => [
        ...prevState,
        {
          id: uuid(),
          socialMediaName: '',
          description: '',
        },
      ]);

      setRowStatus({
        delete: false,
        add: true,
      });
    }
  };

  const deleteRow = (e, id) => {
    if (e.key === 'Delete') {
      setTabValues((prevState) => prevState.filter((ele) => ele.id !== id));
      setRowStatus({
        delete: true,
        add: false,
      });
    }
  };

  useEffect(() => {
    if (mainRef.current) mainRef.current.querySelector(`#companyName`).focus();
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      if (rowStatus.add)
        mainRef.current
          .querySelector(`#socialMediaName${tabValues.length - 1}`)
          .focus();

      if (rowStatus.delete)
        mainRef.current
          .querySelector(`#description${tabValues.length - 1}`)
          .focus();
    }
  }, [rowStatus, tabValues]);

  return (
    <div ref={mainRef}>
      <Form
        handleChange={handleChangeForm}
        handleKeyPress={handleKeyPress}
        formValues={formValues}
      />
      <Table
        columns={TABLE_1_COLUMNS}
        rows={tabValues}
        handleChange={handleChangeTab}
        handleKeyPress={handleKeyPress}
        addNewRow={addNewRow}
        deleteRow={deleteRow}
        title={'Tab 1'}
      />
    </div>
  );
}

export default App;
