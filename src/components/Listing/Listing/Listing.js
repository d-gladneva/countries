import React from 'react';
import s from './Listing.module.css'
import Card from "./Card/Card";

const Listing = (props) => {

    let postsElements = props.posts.map(p => <Card id={p.id} ip={p.ip} r={p.r} status={p.status} name={p.name} count={p.count}
                                                   desc={p.desc}/>);

    const addPost = () => {
        props.addMessage();
    };

    return (
        <div className={s.item}>
            <div className={s.content}>
            </div>
            <div className={s.item}>
                <div className={s.buttonWrap}>
                    <div className={s.buttonText}>You can add a product card by clicking on the button</div>
                    <button className={s.button} onClick={addPost}>Add card</button>
                </div>
                {postsElements}
            </div>
        </div>
    )
};

export default Listing;