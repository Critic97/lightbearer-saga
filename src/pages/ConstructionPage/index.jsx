import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import style from './style.module.scss';
import saga from '../../assets/saga-logo.png';
export const HomePage = () => {

    return (
        <Container className={style.background}>
            <img src={saga} className={style.logo}/>

            <h2>Website is Under Construction</h2>
        </Container>
    );

}

export default HomePage;