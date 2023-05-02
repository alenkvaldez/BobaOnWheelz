import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/test.jpeg';
import classes from './Header.module.css'

const Header = (props) => {
    return (
    <Fragment>
        <header className = {classes.header}>
            <h1>BobaOnWheelz</h1>
            <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className = {classes['main-image']}>
            <img src={mealsImage} alt="pancakes"/>
        </div>
    </Fragment>
    );
};

export default Header;