import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Discover</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/browse' activeClassName={s.active}>Browse</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/store' activeClassName={s.active}>Store</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/platforms' activeClassName={s.active}>Platforms</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/releases' activeClassName={s.active}>Releases</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Mobile' activeClassName={s.active}>Mobile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Articles' activeClassName={s.active}>Articles</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Blog' activeClassName={s.active}>Blog</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Contacts' activeClassName={s.active}>Contacts</NavLink>
            </div>

        </nav>
    )
};

export default Nav;