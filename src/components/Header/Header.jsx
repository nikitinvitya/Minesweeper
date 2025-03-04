import React from 'react';
import classes from './Header.module.css'

const Header = ({setSettingModalActive, setInfoModalActive}) => {
    return (
        <header>
            <button>
                <img src="/images/setting.svg" alt="game settings" onClick={() => setSettingModalActive(true)}/>
            </button>
            <h1>Minesweeper</h1>
            <button>
                <img src="/images/info.svg" alt="info" onClick={() => setInfoModalActive(true)}/>
            </button>
        </header>
    );
};

export default Header;