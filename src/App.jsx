import React, { useState } from 'react';
import { Button, Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ConstructionPage from './pages/ConstructionPage';
import HomePage from './pages/HomePage';
import Lore from './pages/Lore';
import Characters from './pages/Characters';
import AboutMe from './pages/AboutMe';

import { URLS } from './consts/urls';

import sagalogo from './assets/saga-logo.png';
import style from './style.module.scss';

function App() {

    const [pageIndex, setPageIndex] = useState(0);
    const construction = 0; //set to true for production

    const headers = [
        { name: "Home Page", action: "", page: <HomePage/>, style: style.navButton},
        { name: "Characters", action: "", page: <Characters />, style: style.navButton},
        { name: "Lore", action: "", page: <Lore/>, style: style.navButton},
        { name: "About Me", action: "", page: <AboutMe />, style: style.navButton},
    ];

    const getStyle = (state) => {
        if (state == pageIndex) { return style.navButtonActive } else { return style.navButton; }
    }

    if (construction) {
        return (
            <div>
                <ConstructionPage/>
            </div>
        );
    } else {
        return (
            <div className={style.App}>
                <Container className={style.navbar}>
                    <Col>
                        <img src={sagalogo} onClick={() => setPageIndex(0)} alt="the saga logo" className={style.logo} />
                    </Col>
                    <div className={style.navButtons}>
                        {headers.map((item, index) => (<div onClick={() => setPageIndex(index)} className={getStyle(index)}><h2>{item.name}</h2></div>))}
                    </div>
                </Container>

                {headers[pageIndex].page}

            </div>
        );
    }
    
}

export default App;
