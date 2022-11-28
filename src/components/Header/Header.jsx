import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <header className={classes.header}>
            <h2 className={classes.header__title}>concert club</h2>
            <button className={classes.header__btn}>Версия для слабовидящих</button>
        </header>
    );
};

export default Header;
