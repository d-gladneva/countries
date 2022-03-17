import React from 'react';
import s from './SubNav.module.css';

const SubNav = () => {

    return (
        <div className={s.subnav}>
            <input type="search" placeholder="Search..."/>
            <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>
            <select>
                <option>Popular</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
    )
};

export default SubNav;