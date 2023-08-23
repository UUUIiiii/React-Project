import React from "react";
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? 'active' : '';
const style = ({ isActive }) => ({ color: isActive ? 'var(--active)' : 'white' })

const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item} id={s.name}>
            <NavLink to="/profile" style={style}>Profile</NavLink>
        </div>
        <div className={s.item} id={s.messages}>
            <NavLink to="/dialogs" style={style}>Messages</NavLink>
        </div>
        <div className={s.item} id={s.users}>
            <NavLink to="/users" style={style}>Users</NavLink>
        </div>
        <div className={s.item} id={s.news}>
            <NavLink to="/news" style={style}>News</NavLink>
        </div>
        <div className={s.item} id={s.music}>
            <NavLink to="/music" style={style}>Music</NavLink>
        </div>
        <div className={s.item} id={s.settings}>
            <NavLink to="/settings" style={style}>Settings</NavLink>
        </div>
    </nav>;
}

export default NavBar;