import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://storge.pic2.me/c/1360x800/385/5e5e77f35275f.jpg"/>
            </div>
            <div>
                <img src="https://files.gamebanana.com/img/ico/sprays/slipknotlogo.gif"/>
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