import React from 'react';
import s from './Pagination.module.css';
import {NavLink} from "react-router-dom";

const Pagination = () => {

    return (
        <div className={s.paginationWrap}>
            <div className={s.pagination}>
                <div>
                    <span><img src={require('../../imgs/leftArr.svg')}/></span>
                    <span className={s.item}>
                        <NavLink to='/1' activeClassName={s.active}>1</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to='/2' activeClassName={s.active}>2</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to='/3' activeClassName={s.active}>3</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to='/4' activeClassName={s.active}>4</NavLink>
                    </span>
                    <span className={s.item}>
                        <NavLink to='/5' activeClassName={s.active}>5</NavLink>
                    </span>
                    <span className={s.item}>
                    <NavLink to='/...' activeClassName={s.active}>...</NavLink>
                    </span>
                    <span className={s.item}>
                    <NavLink to='/99' activeClassName={s.active}>99</NavLink>
                    </span>
                    <span><img src={require('../../imgs/rightArr.svg')}/></span>
                </div>
            </div>
        </div>
    )
};

export default Pagination;