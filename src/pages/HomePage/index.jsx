import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import cover1 from '../../assets/cover-1.png'
import dawn from '../../assets/book1-logo.png';

import style from './style.module.scss';

export const HomePage = () => {

    return (
        <Container className={style.wrapper}>
            <div className={style.element}>
                <img className={style.logo} src={dawn} />
            </div>

        </Container>
    );

}

export default HomePage;