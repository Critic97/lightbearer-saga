import React, { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import style from './style.module.scss';
import saga from '../../assets/saga-logo.png';

import fire from '../../assets/symbols/fire.png';
import water from '../../assets/symbols/water.png';
import thunder from '../../assets/symbols/thunder.png';
import dark from '../../assets/symbols/dark.png';
import light from '../../assets/symbols/light.png';

export const Characters = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const characters = [
        {
            name: "Ella Luminaire", bio: "Ella was taken away from her home at the age of just nine years old. She bears the role of Lightbearer and heir to the throne of Duvaria.",
            img: light
        },
        {
            name: "Edgar Luminaire", bio: "Edgar is captain of Oxenford's military, and Ella's older brother. ",
            img: fire
        },
        {
            name: "Maria Fulmena", bio: "Maria is lieutenant to Edgar. She left the throne behind to join the military and become a knight.",
            img: thunder
        },
        {
            name: "Luther Hazewind", bio: "Luther is a secretive man with a dark past that he tries desperately to keep hidden. He holds a deep reverence and respect for Ella.",
            img: dark
        },
        {
            name: "Victoria Meadowbrook", bio: "Victoria was left behind by her parents and adopted into Ella's family. They've been best friends their whole lives.",
            img: water
        },
        {
            name: "Griffith Maserton", bio: "Griffith is a self-proclaimed ladies' man and former knight from Graycott.",
            img: fire
        },
    ];

    return (
        <div>
            <Container className={style.wrapper}>
                {characters.map((item, index) => (
                    <Col onMouseOver={() => setSelectedIndex(index)}className={style.element}>
                        <Row>{item.name}</Row>
                    </Col>
                ))}
            </Container>

            <div className={style.wrapper}><img className={style.image} src={characters[selectedIndex].img} /></div>
            <h1 className={style.name}>{characters[selectedIndex].name}</h1>
            <br />
            <p className={style.bio}>{characters[selectedIndex].bio}</p>

        </div>
    );

}

export default Characters;