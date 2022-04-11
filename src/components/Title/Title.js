import React from 'react';
import './Title.css';
import classNames from 'classnames';

export const Title = ({level = 'h1', children}) => {
    return <h1 className={classNames('title', {title_h1: level === 'h1', title_h2: level === 'h2'})}>{children}</h1>;
}