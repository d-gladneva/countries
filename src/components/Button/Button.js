import React from 'react';
import classNames from 'classnames';
import './Button.css';

export const Button = ({ text, design = 'primary', as, href, onClick }) => {
    const isLink = as === 'link';
    const Component = isLink ? 'a' : 'button';

    return (
        <Component
            className={classNames('button', {
                button__primary: design === 'primary',
                button__secondary: design === 'secondary'
            })}
            href={isLink ? href : undefined}
            onClick={onClick}
        >
            {text}
        </Component>
    )
};
