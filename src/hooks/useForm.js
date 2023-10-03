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

  const [tabs, setTabs] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const addNewTab = () => {
    setTabs((prev) => {
      if (prev?.length < 3) {
        return [
          ...prev,
          {
            id: uuid(),
            // lastFocusedField: `#companyName-${prev.length}`,
            formValues: {
              companyName: '',
              address: '',
              country: '',
              orderNo: '',
              status: true,
              image: null,
            },
            tab1Values: [
              {
                id: uuid(),
                socialMediaName: '',
                description: '',
              },
            ],
            tab2Values: [
              {
                id: uuid(),
                documentName: '',
                startDate: '',
                gender: 'male',
                process: [],
              },
            ],
          },
        ];
      }
      return prev;
    });

    setActiveIndex((prev) => {
      if (prev) {
        return prev + 1;
      }
      return 1;
    });
  };

  const deleteTab = (id) => {
    setTabs((prev) => prev.filter((ele) => ele.id !== id));

    setActiveIndex((prev) => {
      if (prev > 1) return prev - 1;

      if (tabs.length > 0 && prev < tabs.length) return prev;

      return 0;
    });
  };

  const handleChangeForm = (e, index) => {
    let { name, value, files } = e.target;

    if (name === 'image') {
      value = files[0];
    }
    if (name === 'orderNo' && isNaN(value)) return;

    setTabs((prev) => {
      const data = [...prev];
      if (name === 'status') {
        data[index]['formValues'][name] = !data[index]['formValues'][name];
      } else {
        data[index]['formValues'][name] = value;
      }
      return data;
    });
  };

  const handleKeyPress = (e, fieldName) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextInput = document.querySelector(`#${fieldName}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleChangeTab = (e, tabIndex, index, type) => {
    setRowStatus({
      delete: false,
      add: false,
      type: '',
    });
    if (type.includes('multi-select')) {
      // setTab2Values((prevState) => {
      //   const data = [...prevState];
      //   if (data[index] && data[index]['process'] !== undefined)
      //     data[index]['process'] = e;

      //   return data;
      // });

      setTabs((prev) => {
        const data = [...prev];
        if (
          data[tabIndex]['tab2Values'][index] &&
          data[tabIndex]['tab2Values'][index]['process'] !== undefined
        )
          data[tabIndex]['tab2Values'][index]['process'] = e;

        return data;
      });
    } else {
      const { name, value } = e.target;

      setTabs((prev) => {
        const data = [...prev];
        const field = type === 'tab-1' ? 'tab1Values' : 'tab2Values';
        if (name.includes('gender')) {
          data[tabIndex][field][index].gender = value;
        } else {
          data[tabIndex][field][index][name] = value;
        }

        return data;
      });
    }
  };

  const addNewRow = (e, index, type) => {
    if (e.key === 'Insert') {
      setTabs((prev) => {
        const data = [...prev];
        const field = type === 'tab-1' ? 'tab1Values' : 'tab2Values';

        data[index][field] = [
          ...data[index][field],
          type === 'tab1'
            ? {
                id: uuid(),
                socialMediaName: '',
                description: '',
              }
            : {
                id: uuid(),
                documentName: '',
                startDate: '',
                gender: 'male',
                process: [],
              },
        ];
        return data;
      });

      setRowStatus({
        delete: false,
        add: true,
        type,
      });
    }
  };

  const deleteRow = (e, index, id, type) => {
    if (e.key === 'Delete') {
      setTabs((prev) => {
        const data = [...prev];
        const field = type === 'tab-1' ? 'tab1Values' : 'tab2Values';

        data[index][field] = data[index][field]?.filter((ele) => ele.id !== id);

        return data;
      });

      setRowStatus({
        delete: true,
        add: false,
        type,
      });
    }
  };

  const handleSubmit = async (index) => {
    try {
      setLoading(true);
      const data = {
        data: tabs[index],
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
    if (document) {
      document.querySelector(`#companyName-${[activeIndex - 1]}`)?.focus();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (document && activeIndex > 0) {
      if (rowStatus.add) {
        rowStatus.type === 'tab-1' &&
          document
            .querySelector(
              `#socialMediaName-${activeIndex - 1}-${
                tabs[activeIndex - 1]?.tab1Values?.length - 1
              }`
            )
            .focus();
        rowStatus.type === 'tab-2' &&
          document
            .querySelector(
              `#documentName-${activeIndex - 1}-${
                tabs[activeIndex - 1]?.tab2Values?.length - 1
              }`
            )
            .focus();
      }

      if (rowStatus.delete) {
        rowStatus.type === 'tab-1' &&
          document
            .querySelector(
              `#description-${activeIndex - 1}-${
                tabs[activeIndex - 1]?.tab1Values?.length - 1
              }`
            )
            .focus();
        rowStatus.type === 'tab-2' &&
          document
            .querySelector(
              `#process-${activeIndex - 1}-${
                tabs[activeIndex - 1]?.tab2Values?.length - 1
              }`
            )
            .focus();
      }
    }
  }, [rowStatus, tabs, activeIndex]);

  return {
    loading,
    tabs,
    activeIndex,
    handleActiveIndex,
    addNewTab,
    deleteTab,
    handleChangeForm,
    handleChangeTab,
    addNewRow,
    deleteRow,
    handleSubmit,
    handleKeyPress,
  };
};
