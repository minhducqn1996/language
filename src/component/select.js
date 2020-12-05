import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLang } from '../actions/LanguageChange/changeLang';

function Select(props) {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const languageValue = e.target.value;
        dispatch(changeLang(languageValue));
    }

    return (
        <div className='button-select'>
            <select onChange={handleChange} style={{ width: '200px', height: '28px' }}>
                <option value='vi'>VietNam</option>
                <option value='eng'>English</option>
            </select>
        </div>
    );
}

export default Select;