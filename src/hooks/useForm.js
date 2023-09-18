import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const useForm = () => {
  const [loading, setLoading] = useState(false);
  const [rowStatus, setRowStatus] = useState({
    add: false,
    delete: false,
    type: '',
  });
  const [tab1Values, setTab1Values] = useState([
    {
      id: uuid(),
      socialMediaName: '',
      description: '',
    },
  ]);
  const [tab2Values, setTab2Values] = useState([
    {
      id: uuid(),
      documentName: '',
      startDate: '',
      gender: 'male',
      process: [],
    },
  ]);

  const [formValues, setFormValues] = useState({
    companyName: '',
    address: '',
    country: '',
    orderNo: '',
    status: true,
  });

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
      const nextInput =
        index !== null
          ? document.querySelector(`#${fieldName}${index}`)
          : document.querySelector(`#${fieldName}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleChangeTab = (e, index, type) => {
    setRowStatus({
      delete: false,
      add: false,
      type: '',
    });
    if (type.includes('multi-select')) {
      setTab2Values((prevState) => {
        const data = [...prevState];
        if (data[index] && data[index]['process'] !== undefined)
          data[index]['process'] = e;

        return data;
      });
    } else {
      const { name, value } = e.target;

      type === 'tab-1' &&
        setTab1Values((prevState) => {
          const data = [...prevState];
          data[index][name] = value;

          return data;
        });

      type === 'tab-2' &&
        setTab2Values((prevState) => {
          const data = [...prevState];
          if (name.includes('gender')) {
            data[index].gender = value;
          } else {
            data[index][name] = value;
          }
          return data;
        });
    }
  };

  const addNewRow = (e, type) => {
    if (e.key === 'Insert') {
      type === 'tab-1' &&
        setTab1Values((prevState) => [
          ...prevState,
          {
            id: uuid(),
            socialMediaName: '',
            description: '',
          },
        ]);

      type === 'tab-2' &&
        setTab2Values((prevState) => [
          ...prevState,
          {
            id: uuid(),
            documentName: '',
            startDate: '',
            gender: 'male',
            process: [],
          },
        ]);

      setRowStatus({
        delete: false,
        add: true,
        type,
      });
    }
  };

  const deleteRow = (e, id, type) => {
    if (e.key === 'Delete') {
      type === 'tab-1' &&
        setTab1Values((prevState) => prevState.filter((ele) => ele.id !== id));

      type === 'tab-2' &&
        setTab2Values((prevState) => prevState.filter((ele) => ele.id !== id));

      setRowStatus({
        delete: true,
        add: false,
        type,
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = {
        form: formValues,
        table1: tab1Values,
        table2: tab2Values,
      };

      const res = await axios.post('https://demo-url', data);
      console.log('res=', res);
    } catch (error) {
      console.log('ERROR 💥', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (document) document.querySelector(`#companyName`).focus();
  }, []);

  useEffect(() => {
    if (document) {
      if (rowStatus.add) {
        rowStatus.type === 'tab-1' &&
          document
            .querySelector(`#socialMediaName${tab1Values.length - 1}`)
            .focus();
        rowStatus.type === 'tab-2' &&
          document
            .querySelector(`#documentName${tab2Values.length - 1}`)
            .focus();
      }

      if (rowStatus.delete) {
        rowStatus.type === 'tab-1' &&
          document
            .querySelector(`#description${tab1Values.length - 1}`)
            .focus();
        rowStatus.type === 'tab-2' &&
          document.querySelector(`#process${tab2Values.length - 1}`).focus();
      }
    }
  }, [rowStatus, tab1Values, tab2Values]);

  return {
    formValues,
    tab1Values,
    tab2Values,
    loading,
    handleChangeForm,
    handleChangeTab,
    addNewRow,
    deleteRow,
    handleSubmit,
    handleKeyPress,
  };
};
