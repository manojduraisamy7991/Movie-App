import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axiosInstance from '../../helpers/axios/axiosInstance';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/actions';

export default function SearchInput({ setOptions, options, setActorName }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = async (event, value) => {
    setInputValue(value);
    await filterOptions(value);
  };

  const filterOptions = async (value) => {
    const url = `https://api.themoviedb.org/3/search/person?query=${value}&include_adult=false&language=en-US`;
    try {
      const response = await axiosInstance.get(url);
      const list = response.data.results.map((data) => ({
        label: data.name,
        year: data.id,
      }));
      const filteredOptions = list.filter(
        (film) => film.label.toLowerCase() === value.toLowerCase()
      );
      setOptions(filteredOptions);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={(event, value) => {
        if (!value?.year) {
          setOptions([]);
        }
        setActorName(value?.year);
        dispatch(action.searchActorList(value?.year));
      }}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search Actor Name" />
      )}
    />
  );
}
