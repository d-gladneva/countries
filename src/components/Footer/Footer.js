import React from 'react';
import s from './Footer.module.css';

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.firstLine}>
                <div className={s.firstLineInfo}>
                    <span>Join our newsletter</span>
                    <span>We’ll send you a nice letter one per week. No spam.</span>
                </div>
                <div className={s.inputBox}>
                <input placeholder="Enter email" className={s.firstLineInput}></input>
                <button className={s.footerSubscribe}><span>Subscribe</span></button>
                </div>
            </div>
            <hr/>
            <div className={s.footerCategories}>
                <div className={s.footerBox1}>
                <span className={s.footerCategoriesTitle}>Categories</span>
                <ul>
                    <li>Strategy</li>
                    <li>Action</li>
                    <li>Shooter</li>
                    <li>Card Game</li>
                    <li>Simulator</li>
                    <li>RPG</li>
                    <li>Multiplayer</li>
                </ul>
                </div>
                <div>
                    <span>Company</span>
                    <ul>
                        <li>Multiplayer</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <span>Legal</span>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Licenses</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div>
                    <span>Legal</span>
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Dribbble</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            <div className={s.copyright}>Copyright © GameVendor, 2022</div>
        </div>
    )
};

export default Footer;