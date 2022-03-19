import React from 'react';
import s from './Discover.module.css'
import Listing from "./Listing/Listing";


const Discover = (props) => {
    return (
        <div className={s.content}>
            <Listing posts={props.state.posts} addMessage={props.addMessage}/>
        </div>
    )
};

export default Discover;