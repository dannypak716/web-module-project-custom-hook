import React, {useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues) => {
    const [values, setValues] = useLocalStorage("mode", initialValues)
    return();
}