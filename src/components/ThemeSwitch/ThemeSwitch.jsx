import React, { useContext } from "react";
import { ThemeContext } from './../../context/ThemeContext';
import './ThemeSwitch.scss';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div onClick={toggleTheme} className={`toggle${theme === 'dark' ? " dark" : ""}`}>
            <div className="notch" />
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div>
        </div>
    );
}
export default ThemeSwitch;