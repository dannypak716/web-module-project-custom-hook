import React, {useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
    const [darkValue, setDarkValue] = useLocalStorage(key);
    return [darkValue, setDarkValue];
}

export default useDarkMode;
