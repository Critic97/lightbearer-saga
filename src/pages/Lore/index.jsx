import React from 'react';
import style from './style.module.scss';

import map from '../../assets/m1.jpg';

export const Lore = () => {

    return (
        <div>
            <h1 className={style.header}>Lore</h1>
            <br />
            <img className={style.image} src={map}/>
        </div>
    );

}

export default Lore;