import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
            <div className={s.content}>
                my posts
                <div>
                <textarea></textarea>
                <button>Add post</button>
                </div>
                <div className={s.item}>
                    <img src='https://cdn.icon-icons.com/icons2/365/PNG/256/crab-icon_36987.png'/>
                    new post
                </div>
                <div className={s.item}>new post</div>
                <div className={s.item}>new post</div>
                <div className={s.item}>new post</div>
                <div className={s.item}>new post</div>
            </div>
    )
};

export default MyPosts;