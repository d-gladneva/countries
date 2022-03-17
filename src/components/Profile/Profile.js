import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://taptut.com/wp-content/uploads/2019/08/kolibri-800x450.jpg"/>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/ru/8/89/Logo_qiwi_rgb.png"/>
            </div>
            <div>
                ava+description
            </div>
            <div className={s.content}>
                my posts
                <div className={s.item}>new post</div>
                <div className={s.item}>new post</div>
                <div className={s.item}>new post</div>
            </div>
        </div>
    )
};

export default Profile;